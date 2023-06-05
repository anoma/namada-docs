# Become a validator post genesis

After genesis, you can still join the network as a user and become a validator through self-bonding. 

After [joining the network as a full node](../../running-a-full-node.md), you must [create a validator account](../../validators/post-genesis-validator-setup.md).

After this has been completed, you will need to increase your validator's `bonded-stake`, which can be done by self-bonding tokens sourced from the faucet.

## Faucet

In order to gain more NAM, the following command can be run: 
```bash!
namadac transfer \
    --token NAM \
    --amount 1000 \
    --source faucet \
    --target $VALIDATOR_ALIAS \
    --signer $VALIDATOR_ALIAS
```
Note: A maximum amount of 1000 NAM can be sourced from the faucet per transaction, so to get more, run this multiple times

```bash!
namada client bond \
  --validator $VALIDATOR_ALIAS \
  --amount <enter-amount>
```

## Bonding
Follow [this guide](../../validators/staking.md) on how to self-bond a validators' tokens.

## Check bonded-stake
In order to vote on blocks, a validator must have enough `bonded-stake` to be included in the validators "consensus-set". A validator is in the consensus set if and only if it has enough `bonded-stake` to be in the top 128 validators by `bonded-stake`.

To query the bonded-stake for all the validators in the current epoch, run the following command:
```bash!
namada client bonded-stake
```