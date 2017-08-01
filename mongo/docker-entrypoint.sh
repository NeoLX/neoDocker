#!/bin/bash

mongod --auth

mongo

use admin

db.createUser({user:'admin',pwd:"123456",roles:[{role:'root',db:'admin'}]});
