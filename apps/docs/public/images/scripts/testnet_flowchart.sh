# This script allows you to create a flowchart for the testnet instructions, assuming you have
# graphviz installed.  It will create a file called testnet_flowchart.png in the current directory.

dot -Tpng -Gdpi=300 -Gsize="12,8" -o ../testnet_flowchart.png ./testnet_flowchart.dot