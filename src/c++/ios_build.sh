#!/bin/bash

mkdir -p ios
cd ios

Targets=(   "iphonesimulator:x86_64"
            "iphoneos:arm64" )

for target in "${Targets[@]}" ; do
    SDK="${target%%:*}"
    ARCH="${target##*:}"
    
    mkdir $SDK && cd $SDK
    
    cmake ../../ -GXcode -DCMAKE_SYSTEM_NAME=iOS -DCMAKE_OSX_SYSROOT=$SDK -DCMAKE_OSX_ARCHITECTURES=$ARCH -Dprotobuf_BUILD_PROTOC_BINARIES=OFF -DgRPC_BUILD_CODEGEN=OFF -DCARES_INSTALL=OFF -DCARES_BUILD_TOOLS=OFF -DENABLE_BITCODE=TRUE -DENABLE_ARC=TRUE -Dprotobuf_BUILD_TESTS=OFF

    xcodebuild -configuration "Release" -target SagiAPI GCC_WARN_64_TO_32_BIT_CONVERSION=no

    cd -
done