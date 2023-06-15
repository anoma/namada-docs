# Install from source

## Pre-requisites

Make sure you have the correct pre-requisites downloaded and installed. You can find the pre-requisites [here](./source/pre-requisites.md)

## Installing Namada
Now that you have all the required dependencies installed, you can clone the source code from the [Namada repository](https://github.com/anoma/namada) and build it with:

```shell
git clone https://github.com/anoma/namada.git
cd namada 
make install
```

> WARNING: During internal and private testnets, checkout the latest testnet branch using `git checkout $NAMADA_TESTNET_BRANCH`.
