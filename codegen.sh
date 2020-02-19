#!/bin/bash

# golang

protoc -I . --go_out=plugins=grpc:src/go/ media/*/*.proto
protoc -I . --go_out=plugins=grpc:src/go/ health/*/*.proto
protoc -I . --go_out=plugins=grpc:src/go/ translation/*/translation.proto
protoc -I . --go_out=plugins=grpc:src/go/ training/*/training.proto

# nodejs, static codegen

grpc_tools_node_protoc -I . --js_out=import_style=commonjs,binary:src/nodejs/ --ts_out=src/nodejs/ --grpc_out=src/nodejs --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` translation/*/*.proto training/*/*.proto media/*/*.proto health/*/*.proto
protoc --plugin=protoc-gen-ts=`which protoc-gen-ts` --ts_out=./src/nodejs translation/*/*.proto training/*/*.proto media/*/*.proto health/*/*.proto
grpc_tools_node_protoc -I . --js_out=import_style=commonjs,binary:src/nodejs/ --grpc_out=src/nodejs --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` google/*/*.proto
grpc_tools_node_protoc -I . --js_out=import_style=commonjs,binary:src/nodejs/ --grpc_out=src/nodejs --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` google/cloud/speech/*/*.proto

# swift

SwiftDir=./src/swift
SwiftProtocOut=$SwiftDir/Sources/apis

ProtoDirList="translation training media health"
for protoDir in $ProtoDirList
do
    protoc -I. --swift_out=$SwiftProtocOut \
     --plugin=`which protoc-gen-swift` \
     --swift_opt=Visibility=Public \
      $protoDir/*/*.proto
done

for protoDir in $ProtoDirList
do
    protoc -I. --grpc-swift_out=$SwiftProtocOut \
     --plugin=`which protoc-gen-grpc-swift` \
     --grpc-swift_opt=Visibility=Public \
     $protoDir/*/*.proto
done

GoogleProtoList="type/*.proto cloud/speech/v1/*.proto api/*/*.proto api/*.proto longrunning/*.proto rpc/*.proto"
for protofile in $GoogleProtoList
do
    protoc -I. --swift_out=$SwiftProtocOut \
     --swift_opt=Visibility=Public \
     --plugin=`which protoc-gen-swift` \
      google/$protofile
done

for protofile in $GoogleProtoList
do
    protoc -I. --grpc-swift_out=$SwiftProtocOut \
     --grpc-swift_opt=Visibility=Public \
     --plugin=`which protoc-gen-grpc-swift` \
     google/$protofile
done

# C++
CPlusPlusProtocOut=./src/c++/src/

if [ ! -d $CPlusPlusProtocOut ]; then 
    mkdir -p $CPlusPlusProtocOut
fi

ProtoDirList="translation training media health"
for protoDir in $ProtoDirList
do
    protoc -I. --grpc_out=$CPlusPlusProtocOut \
     --plugin=protoc-gen-grpc=`which ./src/c++/tools/osx_grpc_cpp_plugin_1_25` \
      $protoDir/*/*.proto

    protoc -I. --cpp_out=$CPlusPlusProtocOut $protoDir/*/*.proto
done

GoogleProtoList="type/*.proto cloud/speech/v1/*.proto api/*/*.proto api/*.proto longrunning/*.proto rpc/*.proto"
for protofile in $GoogleProtoList
do
    protoc -I. --grpc_out=$CPlusPlusProtocOut \
     --plugin=protoc-gen-grpc=`which ./src/c++/tools/osx_grpc_cpp_plugin_1_25` \
      google/$protofile

    protoc -I. --cpp_out=$CPlusPlusProtocOut google/$protofile
done