# This script allows you to create a flowchart for the testnet instructions, assuming you have
# graphviz installed.  It will create a file called testnet_flowchart.png in the current directory.

dot -Tpng -Gsize=10 -Granksep=1.5 -o ../testnet_flowchart.png testnet_flowchart.dot