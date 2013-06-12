#!/bin/bash

# Since the grunt jstd plugin doesn't support v3, here's a little
# shell script to do the same. Usage is:
#
#   build.sh            # run all tests
#   build.sh foo.bar    # build but only run test foo.bar

echo "building at $(date)"

# Edit these variables to suit your install:
JSTD_JAR=~/dev/jstestdriver/JsTestDriver-1.3.5.jar
SERVER=http://localhost:4224
BASEPATH=~/dissertation/

cd $BASEPATH


if [ "$1" ] ; then
  TESTS=$1
else
  echo "no tests specified, will run all"
  TESTS=all
fi

function runjstd {
   echo "Will run $1 tests(" ${TESTS} ") against $2"
   java -jar ${JSTD_JAR} --captureConsole --config ${1}/test/jsTestDriver-${2}.conf --server ${SERVER} --tests ${TESTS} --basePath ${BASEPATH} --reset   
}

runjstd naga dev