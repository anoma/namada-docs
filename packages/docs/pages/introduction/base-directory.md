# Base Directory

The base directory on Namada is the directory where all chain-specific data is stored. It is a directory that is created immediately once the chain is joined (with `namadac utils join-network`, for example).

As of the latest version of Namada, the base directory is located in the following locations:

> Technically, the correct directory will be the one assigned to `$XDG_DATA_HOME`, but if you haven't set that variable, it will default to one of the below.

## The quick way

You can find the base directory by running the following command:

```bash
namadac utils default-base-dir
```

Which should correspond to one of the following directories:

#### Linux

```bash
$HOME/.local/share/namada
```

#### MacOS

```bash
$HOME/Library/Application\ Support/Namada
```

## What to expect
Within these folders, you should see the following files and folders:

```bash
global-config.toml
<some-chain-id>/
<some-chain-id>.toml
pre-genesis # If you are a pre-genesis validator
```
