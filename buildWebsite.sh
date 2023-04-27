#!/bin/bash

set -v

nginxPath=/usr/share/nginx/html
#nginxPath=/usr/share/nginx/html/html2
sudo mkdir -p $nginxPath

kpsWebsite=/home/ec2-user/KpsPortfolio/KpsPortfolio_Website

clear

cd $kpsWebsite
pwd
npm run-script build

#sudo rm -f $nginxPath/app* $nginxPath/index.html $nginxPath/runtime* $nginxPath/html/vend*
sudo rm -f $nginxPath/*
sudo cp -r dist/* $nginxPath
