# Full Node Setup
Before starting a full node, the unique identifier of the `chain-id` wll be needed, which will be released as soon as the genesis file is ready. 

Once the `chain-id` has been distributed, it is possible to join the network with the `CHAIN_ID`:
```bash
  export CHAIN_ID="namada-mainnet" ## (replace with the actual chain-id)
  namada client utils join-network --chain-id $CHAIN_ID
  ```
3. Start your node and sync
```bash
  TM_LOG_LEVEL=p2p:none,pex:error namada node ledger run
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