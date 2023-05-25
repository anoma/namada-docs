# Full Node Setup
1. Wait for the genesis file to be ready, you will receive a `$CHAIN_ID`.
2. Join the network with the `CHAIN_ID`
```bash
  export CHAIN_ID="public-testnet-8.0.b92ef72b820"
  namada client utils join-network --chain-id $CHAIN_ID
  ```
3. Start your node and sync
```bash
  NAMADA_CMT_STDOUT=true namada node ledger run
  ```
Optional: If you want more logs, you can instead run
```bash
NAMADA_LOG=info TM_LOG_LEVEL=p2p:none,pex:error NAMADA_CMT_STDOUT=true namada node ledger run
```
And if you want to save your logs to a file, you can instead run:
```bash
TIMESTAMP=$(date +%s)
NAMADA_LOG=info TM_LOG_LEVEL=p2p:none,pex:error NAMADA_CMT_STDOUT=true namada node ledger run &> logs-${TIMESTAMP}.txt
tail -f -n 20 logs-${TIMESTAMP}.txt ## (in another shell)
```