#!/bin/bash
set -e

#  ./ios_build.sh Release (or Debug)

BUILD_ROOT=="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

BUILD=$1

if [ ! -d ./ios ]; then
    mkdir -p ios
fi

cd ios

Targets=(   "iphoneos:OS64"
            "iphonesimulator:SIMULATOR64" )


for target in "${Targets[@]}" ; do
    SDK="${target%%:*}"
    ARCH="${target##*:}"
    
    if [ -d ./$SDK ]; then 
        continue
    fi 

    if [ ! -d ./ios ]; then
        mkdir $SDK
    fi

    cd $SDK
    
    # cmake ../../ -GXcode -DCMAKE_SYSTEM_NAME=iOS -DCMAKE_OSX_SYSROOT=$SDK -DCMAKE_OSX_ARCHITECTURES=$ARCH -Dprotobuf_BUILD_PROTOC_BINARIES=OFF -DgRPC_BUILD_CODEGEN=OFF -DCARES_INSTALL=OFF -DCARES_BUILD_TOOLS=OFF -DENABLE_BITCODE=TRUE -DENABLE_ARC=TRUE -Dprotobuf_BUILD_TESTS=OFF

    cmake ../../ -GXcode -DCMAKE_TOOLCHAIN_FILE=../../ios.toolchain.cmake -DCMAKE_SYSTEM_NAME=iOS -DCMAKE_OSX_SYSROOT=$SDK -DPLATFORM=$ARCH -DENABLE_BITCODE=1 -Dprotobuf_BUILD_PROTOC_BINARIES=OFF -DgRPC_BUILD_CODEGEN=OFF -DCARES_INSTALL=OFF -DCARES_BUILD_TOOLS=OFF  -DENABLE_ARC=TRUE -Dprotobuf_BUILD_TESTS=OFF -DRPC_BUILD_CSHARP_EXT=OFF

    xcodebuild -project SagiAPI.xcodeproj -configuration $BUILD -target SagiAPI GCC_WARN_64_TO_32_BIT_CONVERSION=no

    cd -
done

if [ ! -d ./bin ]; then
    mkdir -p bin/include
    mkdir -p bin/lib/iphoneos
    mkdir -p bin/lib/iphonesimulator
    mkdir -p bin/lib/combined
fi

LIPOFiles=""
for target in "${Targets[@]}" ; do
    SDK="${target%%:*}"
    afile="$BUILD_ROOT/ios/$SDK/${BUILD}-${SDK}/libSagiAPI.a"
    
    if [ ! -f $afile ]; then
        echo "$afile not exist" && exit -1
    fi

    LIPOFiles="${LIPOFiles} $afile"
    cp -f $afile ./bin/lib/$SDK
    xcrun lipo -info $afile
done

xcrun lipo -create $LIPOFiles -output "$BUILD_ROOT/ios/bin/lib/combined/libSagiAPI.a"
xcrun lipo -info "$BUILD_ROOT/ios/bin/lib/combined/libSagiAPI.a"

DirList="translation training media health"
for dir in $DirList ; do
    cp -rf "$BUILD_ROOT/src/$dir/v1/*.h" "$BUILD_ROOT/ios/bin/include"
done