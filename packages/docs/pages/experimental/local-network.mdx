# Spinning up a local network

## Prerequisites

Namada must be installed [from source](../introduction/install/from-source.md) in order to run a local network.

There is a script that has been written specifically for this purpose, which can be found under `scripts` in the namada repository.

### Installing script dependencies

The script has some dependencies that must be installed in order to run it successfully:

1. `trash` must be installed.
2. python3 must be installed.
3. toml Python pip library https://pypi.org/project/toml/ must be installed.

`trash` can be installed via:

```shell
# Linux
sudo apt install trash-cli
```

```shell
# MacOS
brew install trash
```

The script will require a genesis configuration file, which is a TOML file that specifies the parameters of the network. Examples of such files can be found in the [anoma-network-config repo](https://github.com/heliaxdev/anoma-network-config) in the `templates` directory.

### Modifying the genesis configuration file

In order to run the script sucessfully, all sections of `validators` must be removed from the `toml` file. This is because the script will generate a new set of validators for the network.

The below image shows an example of a genesis configuration file that has been modified to remove the `validators` section.

![editing genesis config steps](/images/local_network_config_steps.png)

### Building wasm

The script will also require all `wasm` files for txs to be built. This can be done by running the following command (whilst in the namada directory):

```shell
make build-wasm-scripts
```

## Running the script

The script is called `build_network.sh` and can be run with the following command:

```shell
./scripts/build_network.sh <config_toml> <base_dir> <namada_dir>
```

More specifically, the script takes three arguments:

1. `config_toml`: the path to the (validator-free) genesis configuration file.
2. `base_dir`: the path to the BASE_DIR directory, where all chain-data is stored. For linux, this is usually `$HOME/.local/share/namada`, and for MacOS, this is usually `"$HOME/Library/Application Support/Namada"`.
3. `namada_dir`: the path to the namada BINARIES directory. If the binaries were build using `make build-release` this would imply the `namada/target/release` directory.

For example, a MacOS user would run something along the lines of:

```shell
./scripts/build_network.sh ~/anoma-network-config/templates/edited_genesis_config.toml "$HOME/Library/Application Support/Namada" ./target/release
```

## Running the ledger

After the script has been run, a python process will have started in the background.
The ledger can be run through the familiar command:

```shell
target/release/namada ledger
```

## Cleaning up

After the local network has fulfilled its purpose, it can be cleaned up by running the following commands found in the cleanup function of the script:

```shell
    pkill -f ".hack/chains"
    rm -r .hack/chains
    rm local.*.tar.gz
```
