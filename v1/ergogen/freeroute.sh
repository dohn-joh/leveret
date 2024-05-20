#!/bin/sh
# java -jar freerouting-1.9.0.jar -de /home/n/src/ergogen/output/pcbs/nib.dsn -do /home/n/src/ergogen/output/pcbs/nib.ses -mp 20 -dct 0 -da
java -jar freerouting-1.9.0.jar -de /home/n/src/ergogen/output/pcbs/nib.dsn -do /home/n/src/ergogen/output/pcbs/nib.ses -dr freerouting.rules -mp 30 -dct 0 -da
