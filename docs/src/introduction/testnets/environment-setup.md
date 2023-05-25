# Environment setup
```admonish note
If you don't want to build Namada from source you can [install Namada from binaries](../user-guide/install/from-binary.md)
```

Export the following variables:

```bash
export NAMADA_TAG=v0.15.3
```


## Installing Namada
0. Install all pre-requisites
    - [Rust](https://www.rust-lang.org/tools/install)
    - [CometBFT](../install/installing-cometbft.md)
    - [Protobuf](../install/from-source.md#pre-requisites)

1. Clone namada repository and checkout the correct versions

```shell
git clone https://github.com/anoma/namada && cd namada && git checkout $NAMADA_TAG
```
2. Build binaries
```bash
make build-release
```
- There may be some additional requirements you may have to install (linux):
```bash
sudo apt-get update -y
sudo apt-get install build-essential make pkg-config libssl-dev libclang-dev -y
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## Installing CometBFT
1. See the installing CometBFT section [here](../install/installing-cometbft.md) for instructions on how to install CometBFT
2. Copy both the namada and CometBFT binaries to somewhere on $PATH (or use the relative paths). This step may or may not be necessary.
    
- namada binaries can be found in `/target/release`
- CometBFT is likely in `$HOME/Downloads/cometbft`

## Check ports
1. Open ports on your machine:
    - 26656
    - 26657
2. To check if ports are open you can setup a simple server and curl the port from another host
        
- Inside the namada folder, run 
``` bash
{ printf 'HTTP/1.0 200 OK\r\nContent-Length: %d\r\n\r\n' "$(wc -c < namada)"; cat namada; } | nc -l $PORT`
```
- From another host run one of the two commands:
    - `nmap $IP -p$PORT`
    - `curl $IP:$PORT >/dev/null`

## Verifying your installation
- Make sure you are using the correct cometbft version
    - `cometbft version` should output `0.37.1`
- Make sure you are using the correct Namada version
    - `namada --version` should output `Namada v0.15.3`
