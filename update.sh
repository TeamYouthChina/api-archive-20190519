#!/bin/bash

# note: valid only in linux
date
lsof -i :4000 | grep 'LISTEN' | awk '{printf $2}' | xargs kill -9
git pull
yarn start
