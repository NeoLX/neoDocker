#!/bin/bash
echo $MYSQL_PORT
sed -i 's/\$\#{MYSQL_PORT}/'"$MYSQL_PORT"'/g' /myproject/configs/server.json

cat /myproject/configs/server.json

node test.js
