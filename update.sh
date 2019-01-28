#!/bin/bash

# note: valid only in linux
lsof -i :4000 | grep 'LISTEN' | awk '{printf $2}' | xargs kill -9
git pull
date >update.txt 2>&1
yarn start
