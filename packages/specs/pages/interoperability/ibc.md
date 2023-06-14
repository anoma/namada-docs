# IBC integration

* [IBC (Inter-blockchain communication protocol) spec](https://github.com/cosmos/ibc)

## IBC transaction
An IBC transaction [`tx_ibc.wasm`](https://github.com/anoma/namada/blob/a5bad396992e5f66351088bde3bec73d83e769ba/wasm/wasm_source/src/tx_ibc.rs) is provided. We have to set an IBC message to the transaction data corresponding to execute an IBC operation.

The transaction decodes the data to an IBC message and handles IBC-related data, e.g. it makes a new connection ID and writes a new connection end for `MsgConnectionOpenTry`. The operations are implemented in [`IbcActions`](https://github.com/anoma/namada/blob/a5bad396992e5f66351088bde3bec73d83e769ba/core/src/ledger/ibc/mod.rs#L63). The transaction doesn't check the validity for the state changes. IBC validity predicate is in charge of the validity for IBC-related data.

## IBC validity predicate
[IBC validity predicate](https://github.com/anoma/namada/blob/a5bad396992e5f66351088bde3bec73d83e769ba/shared/src/ledger/ibc/vp/mod.rs) checks if an IBC transaction satisfies IBC protocol. When an IBC transaction is executed, i.e. a transaction changes the state of the key that contains [`InternalAddress::Ibc`](https://github.com/anoma/namada/blob/a5bad396992e5f66351088bde3bec73d83e769ba/core/src/types/address.rs#L481), IBC validity predicate (one of the native validity predicates) is executed. For example, if an IBC connection end is created in the transaction, IBC validity predicate validates the creation. If the creation with `MsgConnectionOpenTry` is invalid, e.g. the counterpart connection end doesn't exist, the validity predicate makes the transaction fail.

Specifically, the validity predicate mainly consists of two parts.
* Checking the state changes with the psuedo-execution
* Validating the IBC-related data

The first part is the state change check. It executes the corresponding IBC operation and gets the post-states of the IBC-related data. Then, it checks whether the actual states of IBC-related data by the transaction are equal to the result of the pseudo execution. The second part is the validation of the IBC-related data. It validates that the corresponding data conforms to the IBC protocol. The psuedo-execution and the validation functions are imported from `ibc-rs`.

## Fungible Token Transfer
The transfer of fungible tokens over an IBC channel on separate chains is defined in [ICS20](https://github.com/cosmos/ibc/blob/master/spec/app/ics-020-fungible-token-transfer/README.md).

In Namada, the sending tokens is triggered by a transaction having [MsgTransfer](https://github.com/cosmos/ibc-rs/blob/014fec6958fedcfe9ed6ebfb2d0c28c2cb6487af/crates/ibc/src/applications/transfer/msgs/transfer.rs) as transaction data. A packet including [`PacketData`](https://github.com/cosmos/ibc-rs/blob/014fec6958fedcfe9ed6ebfb2d0c28c2cb6487af/crates/ibc/src/applications/transfer/packet.rs) for the transfer is made from the message in the transaction execution.

A Namada instance receives the tokens by a transaction having [MsgRecvPacket](https://github.com/cosmos/ibc-rs/blob/014fec6958fedcfe9ed6ebfb2d0c28c2cb6487af/crates/ibc/src/core/ics04_channel/msgs/recv_packet.rs) which has the packet including `PacketData` for the transfer.

The sending and receiving tokens in a transaction are validated by not only IBC validity predicate but also [IBC token validity predicate](https://github.com/anoma/namada/blob/e3c2bd0b463b35d66fcc6d2643fd0e6509e03d99/shared/src/ledger/ibc/vp/token.rs). IBC validity predicate validates if sending and receiving the packet is proper. If the transfer is not valid, e.g. an unexpected amount is minted, the validity predicate makes the transaction fail.

A transaction escrowing/unescrowing a token changes the escrow account's balance of the token. The key is `#Multitoken/{token_addr}/balance/#Ibc`. A transaction burning a token decreases the minted balance of the token. The key is `#Multitoken/{token_addr}/balance/#Mint`. A transaction minting a token increases the minted balance of the token. The key is `#Multitoken/{token_addr}/balance/#Mint`. `#Multitoken`, `#Mint` and `#Ibc` are addresses of [`InternalAddress`](https://github.com/anoma/namada/blob/a5bad396992e5f66351088bde3bec73d83e769ba/core/src/types/address.rs#L473) and actually they are encoded in the storage key. Also, the multitoken validity predicate will be triggered and check the balance changes.

The receiver's account is `#Multitoken/{ibc_token}/balance/{receiver_addr}`. `{ibc_token}` is [`IbcToken(hash)`](https://github.com/anoma/namada/blob/a5bad396992e5f66351088bde3bec73d83e769ba/core/src/types/address.rs#L483) which has a hash calculated with the denomination prefixed with the port ID and channel ID. It is NOT the same as the normal account `#Multitoken/{src_token_addr}/balance/{receiver_addr}` of the token address on the source chain. That's because it should be origin-specific for transferring back to the source chain by binding the token address with the port and channel ID. We can transfer back the received token by setting `{ibc_token}` as `denom` in `MsgTransfer`.

For example, we transfer a token `#my_token` from a user `#user_a` on Chain A to a user `#user_b` on Chain B, then transfer back the token from `#user_b` to `#user_a`. The port ID and channel ID on Chain A for Chain B are `transfer` and `channel_42`, those on Chain B for Chain A are `transfer` and `channel_24`. The denomination in the `PacketData` at the first transfer should be `#my_token`.
1. User A makes `MsgTransfer` as a transaction data and submits a transaction from Chain A
```rust
    let token = Some(Coin {
        denom, // #my_token
        amount: "100000".to_string(),
    });
    let msg = MsgTransfer {
        port_id_on_a, // transfer
        chan_id_on_a, // channel_42
        token,
        sender,       // #user_a
        receiver,     // #user_b
        timeout_height_on_b,
        timeout_timestamp_on_b,
    };
```
2. On Chain A, the specified amount of the token is transferred from the sender's account `#Multitoken/#my_token/balance/#user_a` to the escrow account `#Multitoken/#my_token/balance/#Ibc`
3. On Chain B, `#Multitoken/#my_token/balance/#Mint` is increased by the amount of the token, and `#Multitoken/{ibc_token}/balance/#user_b`
    - The `{ibc_token}` is made with a hash calculated from a string `transfer/channel_24/#my_token` with SHA256
4. To transfer back, User B makes `MsgTransfer` and submits a transaction from Chain B
```rust
    let token = Some(Coin {
        denom, // {ibc_token}
        amount: "100000".to_string(),
    });
    let msg = MsgTransfer {
        port_id_on_a, // transfer
        chan_id_on_a, // channel_24
        token,
        sender,       // #user_b
        receiver,     // #user_a
        timeout_height_on_b,
        timeout_timestamp_on_b,
    };
```
5. On Chain B, `#Multitoken/{ibc_token}/balance/#user_b` and `#Multitoken/{ibc_token}/balance/#Mint` are decreased by the amount of the token
6. On Chain A, the amount of the token is transferred from `#Multitoken/#my_token/balance/#Ibc` to `#Multitoken/#my_token/balance/#user_a`

## IBC message
Basically, you don't need to make each IBC message. Namada CLI has `ibc-transfer` to transfer tokens over IBC. For other IBC operations, [Hermes](https://github.com/heliaxdev/hermes/tree/1.3.0-namada) can submit Namada transactions with [Hermes commands](https://hermes.informal.systems/documentation/commands/index.html).
IBC messages are defined in `ibc-rs`. The message should be encoded with Protobuf (NOT with Borsh) as the following code to set it as a transaction data.

```rust
use ibc::tx_msg::Msg;

pub fn make_ibc_data(message: impl Msg) -> Vec<u8> {
    let msg = message.to_any();
    let mut tx_data = vec![];
    prost::Message::encode(&msg, &mut tx_data).expect("encoding IBC message shouldn't fail");
    tx_data
}
```
