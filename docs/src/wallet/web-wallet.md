# Web Wallet

## Install
When Namada is in mainnet, the web wallet will be available in most browser extension web stores. For now, you can install it from source by following the instructions below.

### Installing from source (dev and experiment purposes)

#### Connect to a testnet or run a local node
1. Follow the instructions in the [testnets](../introduction/testnets/intro.md) to connect to a testnet or you can set up a local node using [docker](../introduction/install/from-docker.md).
2. Figure out where the base directory is stored and save it as a variable such as `export BASE_DIR=<path/to/base/dir>`. You can follow [these docs](../introduction/testnets/migrating-testnets.md#after-v0153) to save this variable. Go ahead and save the chain id as a variable as well. You can find the chain id by running `cat $BASE_DIR/global-config.toml`. Save this chain-id to the variable `export CHAIN_ID=<CHAIN_ID>`.
3. You will need to edit the CometBFT config in order to allow the web wallet to connect to your node. The CometBFT config will be located in `$BASE_DIR/$CHAIN_ID/tendermint/config/config.toml`. You will need to change the `cors_allowed_origins` field to `["*"]`. You can do this by running `sed -i 's/cors_allowed_origins = \[\]/cors_allowed_origins = ["*"]/' $BASE_DIR/$CHAIN_ID/tendermint/config/config.toml`.

#### Setting up the extension
1. Clone the [namada-interface repository](https://github.com/anoma/namada-interface)
2. Follow the installation instructions in the intro.md (which should be visible on the repository page).
3. `cd` into the `namada-interface/apps/extension` directory and run `yarn start:chrome`. This will build the extension and place it in the `namada-interface/apps/extension/build` directory. It also starts the dev server which will watch for changes.
4. `cd` into the `namada-interface/apps/namada-interface` directory and run `yarn dev:local` in order to launch a local instance of the web wallet.
4. Add the extension to the browser. For example, in Chrome, you can go to `chrome://extensions/` and click `Load unpacked` and select the `namada-interface/apps/extension/build/chrome/` folder.

## Receving tokens
You can show the address of any account by pressing the `Receive` button in the initial view under the "Total Balances" tab. You can copy the address by clicking the copy icon next to the address. This will also display QR code that can be scanned by a mobile wallet.

## Sending Transactions

In order to send transactions, you can press the `Send` button in the initial view under the "Total Balances" tab. This will open a modal that will allow you to send tokens to any account, from any account in your wallet that has a positive balance.