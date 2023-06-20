# An Introduction to Namada Addresses

All accounts in Namada have a unique address, exactly one Validity Predicate and optionally any additional data in its dynamic storage sub-space.

There are currently 3 types of account addresses:
- **Implicit *(not fully supported yet)*:** An implicit account is derived from your keypair and can be used to authorize certain transactions from the account. They can be used as recipients of transactions even if the account has not been used on-chain before.
- **Established:** Used for accounts that allow the deployment of custom validation logic. These must be created on-chain via a transaction (e.g., [account initialization](./send-and-receive-nam-tokens.md#initialize-an-established-account)). The address is generated on-chain and is not known until the transaction is applied (the user provides randomness).
- **Internal:** Special internal accounts, such as protocol parameters account, PoS and IBC.

## Manage keypairs

Namada uses [ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519) keypairs for signing cryptographic operations on the blockchain.

To manage your keys, various sub-commands are available under:

```shell
namada wallet key
```

### Generate a keypair

It is possible to generate keys using the CLI. By doing so, an implicit account address is also derived in the process and added to storage.

```shell
namada wallet key gen --alias keysha
```

```admonish note
The derived implicit address shares the same `keysha` alias. The previous command has the same effect as `namada wallet address gen --alias keysha`.
```

### List all known keys

```shell
namada wallet key list
```

## Manage addresses


To manage addresses, similar to keys, various sub-commands are available:

```shell
namada wallet address
```

### Generate an implicit address

Let's call the implicit address `accountant`:
```shell
namada wallet address gen --alias accountant
```

```admonish note
Note that this will also generate and save a key from which the address was derived and save it under the same `accountant` alias. Thus, this command has the same effect as `namada wallet key gen --alias accountant`.
```

### List all known addresses

```shell
namada wallet address list
```