#!/bin/bash

# note: valid only in linux
date
lsof -i :4000 | grep 'LISTEN' | awk '{printf $2}' | xargs kill -9
git pull
~/.nvm/versions/node/v11.1.0/bin/yarn start
