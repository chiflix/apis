#!/bin/bash

# golang

protoc -I . --go_out=plugins=grpc:src/go/ media/*/*.proto
protoc -I . --go_out=plugins=grpc:src/go/ health/*/*.proto
protoc -I . --go_out=plugins=grpc:src/go/ translation/*/translation.proto
protoc -I . --go_out=plugins=grpc:src/go/ training/*/training.proto

# nodejs, static codegen

grpc_tools_node_protoc -I . --js_out=import_style=commonjs,binary:src/nodejs/ --ts_out=src/nodejs/ --grpc_out=src/nodejs --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` translation/*/*.proto training/*/*.proto media/*/*.proto health/*/*.proto
grpc_tools_node_protoc -I . --js_out=import_style=commonjs,binary:src/nodejs/ --grpc_out=src/nodejs --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` google/*/*.proto
grpc_tools_node_protoc -I . --js_out=import_style=commonjs,binary:src/nodejs/ --grpc_out=src/nodejs --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` google/cloud/speech/*/*.proto
