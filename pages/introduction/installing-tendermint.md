# Installing Tendermint

## From binaries

We have binaries you could download from our [releases page](https://github.com/heliaxdev/tendermint/releases)

![](/images/Download_Tendermint_Binaries.png)

### Adding to path

By default, the binaries are downloaded to the `~/Downloads` folder. You can move them to a folder of your choice and add them to your path.

For example, on an ARM based MacOS, you can run the following commands to add the binaries to your path

```bash
sudo mv ~/Downloads/tendermint_0.1.4-abciplus_darwin_arm64/tendermint /usr/local/bin
```

## From source

Start by exporting the variable

```bash
export TM_HASH=v0.1.4-abciplus
```

Install the heliaxdev/tendermint fork

```bash
git clone https://github.com/heliaxdev/tendermint && cd tendermint && git checkout $TM_HASH
make build
```

The above requires that golang is correctly installed with the correct $PATH setup

- In linux, this can be resolved by
- `sudo snap install go --channel=1.18/stable --classic`
- Copy both the namada and tendermint binaries to somewhere on $PATH (or uselol the relative paths)
- This step may or may not be necessary
- namada binaries can be found in `/target/release`
- tendermint is in `build/tendermint`

````admonish note
In a linux based terminal, one can use the following command in order to copy the `tendermint` binaries to `$PATH`

```bash
sudo cp ./build/tendermint $HOME/go/bin/
```
````
