#!/bin/bash

nginxPath=/usr/share/nginx/html
#nginxPath=/usr/share/nginx/html/html2
sudo mkdir -p $nginxPath

kpWebsite=/home/ec2-user/KpsPortfolio/KpsPortfolio_Website/src

clear

npm run-script build

#sudo rm -f $nginxPath/app* $nginxPath/index.html $nginxPath/runtime* $nginxPath/html/vend*
sudo rm -f $nginxPath/*
sudo cp -r dist/* $nginxPath
