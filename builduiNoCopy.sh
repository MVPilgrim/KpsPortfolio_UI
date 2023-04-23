#!/bin/bash

clear

npm run-script build

sudo rm -f /usr/share/nginx/html/app* /usr/share/nginx/html/index.html /usr/share/nginx/html/runtime* /usr/share/nginx/html/vend*
sudo cp -r dist/* /usr/share/nginx/html
