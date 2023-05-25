# The Namada Ledger

To start a local Namada ledger node, run:

```shell
namada ledger
```

> Note: You need to have [joined a network](./introduction/quick-start/intro.md) before you start the ledger. It throws an error if no network has been configured.

The node will attempt to connect to the persistent validator nodes and other peers in the network, and synchronize to the latest block.

By default, the ledger will store its configuration and state in either `$HOME/.local/share/namada` or `$HOME/Library/Application\ Support/Namada`. You can use the `--base-dir` CLI global argument or `BASE_DIR` environment variable to change it.

- Linux:
```bash
export BASE_DIR=$HOME/.local/share/namada
```
- MacOS:
```bash
export BASE_DIR=$HOME/Library/Application\ Support/Namada
```

The ledger also needs access to the built WASM files that are used in the genesis block. These files are included in release and shouldn't be modified, otherwise your node will fail with a consensus error on the genesis block. By default, these are expected to be in the `wasm` directory inside the chain directory that's in the base directory. This can also be set with the `--wasm-dir` CLI global argument, `NAMADA_WASM_DIR` environment variable or the configuration file.

The ledger configuration is stored in `$BASE_DIR/{chain_id}/config.toml` (with
default `--base-dir`). It is created when you join the network. You can modify
that file to change the configuration of your node. All values can also be set
via environment variables. Names of the recognized environment variables are
derived from the configuration keys by: uppercase every letter of the key,
insert `.` or `__` for each nested value and prepend `NAMADA_`. For example,
option `p2p_pex` in `[ledger.cometbft]` can be set by
`NAMADA_LEDGER__COMETBFT_P2P_PEX=true|false` or
`NAMADA_LEDGER.COMETBFT.P2P_PEX=true|false` in the environment (Note: only the
double underscore form can be used in Bash, because Bash doesn't allow dots in
environment variable names).
