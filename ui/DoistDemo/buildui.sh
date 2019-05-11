#!/bin/bash

npm run-script build

sudo rm -f /usr/share/nginx/html/main/app* /usr/share/nginx/html/main/index.html /usr/share/nginx/html/main/runtime* /usr/share/nginx/html/main/vend*
sudo cp -r dist/* /usr/share/nginx/html/main
