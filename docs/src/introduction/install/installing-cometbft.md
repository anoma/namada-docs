# Installing CometBFT (formerly Tendermint)

## Downloading the latest release
Namada is compatible with CometBFT tag `v0.37.1`

You can download the latest release from [this repository](https://github.com/cometbft/cometbft/releases/)
- The latest release is `v0.37.1` which can be installed [here](https://github.com/cometbft/cometbft/releases/tag/v0.37.1)

## Adding the binaries to $PATH
If you have `go` installed and downloaded, you may want to add it to your `$GOPATH/bin` directory. This can be done by running the following command in the root directory of the repository

```bash
cp <path-to-cometbft-binary> $GOPATH/bin/
```

Otherwise, we recommend you simply copy it to your `/usr/local/bin` which may require `sudo permissions`.

`sudo cp <path-to-cometbft-binary> /usr/local/bin/`

And enter your password when prompted.

In order to check that the installation was successful, you can run the following command

```bash
cometbft version
```

Which should output something like:

```bash
0.37.1
```