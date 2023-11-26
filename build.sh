#!/bin/bash

build_path="./build/"

if [ ! -d "$build_path" ]; then
  # Create a folder if it does not exist
  mkdir -p "$build_path"
  echo "The ${build_path} folder is created."
fi

pkg index.js -t node18-linux-x64,node18-win-x64,node18-macos-x64 -o ./build/html-to-md