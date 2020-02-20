#!/bin/bash
set -e

#  ./ios_build.sh Release (or Debug)

BUILD_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

BUILD=$1

if [ -z "$BUILD" ]; then
    echo "Use: ./ios_build.sh Release (or Debug)" && exit
fi


copy_static_grpcfiles() {
    D=$BUILDDIR
    SRCDIR=$BUILD_ROOT/ios/$BUILDDIR
    DSTDIR=$BUILD_ROOT/ios/bin/lib/$SDK
    cp -f $SRCDIR/_deps/grpc-build/$D/* $DSTDIR
    cp -f $SRCDIR/_deps/grpc-build/third_party/abseil-cpp/absl/strings/$D/libabsl_strings.a $DSTDIR
    cp -f $SRCDIR/_deps/grpc-build/third_party/abseil-cpp/absl/base/$D/libabsl_throw_delegate.a $DSTDIR
    cp -f $SRCDIR/_deps/grpc-build/third_party/boringssl/ssl/$D/libssl.a $DSTDIR
    cp -f $SRCDIR/_deps/grpc-build/third_party/boringssl/crypto/$D/libcrypto.a $DSTDIR
    cp -f $SRCDIR/_deps/grpc-build/third_party/protobuf/$D/*.a $DSTDIR

    if [ "$SDK" == "iphoneos" ]; then 
        cp -rf $SRCDIR/_deps/grpc-src/include/* $BUILD_ROOT/ios/bin/include/gRPC
    fi
}

if [ ! -d ./ios ]; then
    mkdir -p ios
fi

cd ios

if [ ! -d ./bin ]; then
    mkdir -p bin/include
    mkdir -p bin/include/gRPC
    mkdir -p bin/lib/iphoneos
    mkdir -p bin/lib/iphonesimulator
    mkdir -p bin/lib/combined
fi

Targets=("iphonesimulator:SIMULATOR64"  "iphoneos:OS64" )
for target in "${Targets[@]}" ; do
    SDK="${target%%:*}"
    ARCH="${target##*:}"

    BUILDDIR="$BUILD-$SDK"

    if [ ! -d $BUILDDIR ]; then
        mkdir $BUILDDIR
    fi

    cd $BUILDDIR
    
    if [ ! -f CMakeCache.txt ]; then 
        cmake ../../ -GXcode -DCMAKE_TOOLCHAIN_FILE=../../ios.toolchain.cmake -DCMAKE_SYSTEM_NAME=iOS -DCMAKE_OSX_SYSROOT=$SDK -DPLATFORM=$ARCH -DENABLE_BITCODE=1 -Dprotobuf_BUILD_PROTOC_BINARIES=OFF -DCARES_INSTALL=OFF -DENABLE_ARC=TRUE -Dprotobuf_BUILD_TESTS=OFF
    fi
    
    for buildtarget in "SagiAPI" ; do
        xcodebuild -project SagiAPI.xcodeproj -configuration $BUILD -target $buildtarget GCC_WARN_64_TO_32_BIT_CONVERSION=no
    done

    copy_static_grpcfiles

    cd -
done

LIPOFiles=""
for target in "${Targets[@]}" ; do
    SDK="${target%%:*}"
    BUILDDIR="$BUILD-$SDK"
    afile="$BUILD_ROOT/ios/$BUILDDIR/$BUILDDIR/libSagiAPI.a"

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
    cp -rf "$BUILD_ROOT"/src/* "$BUILD_ROOT"/ios/bin/include
done

if [ -d "$BUILD_ROOT"/ios/$BUILD-bin ]; then
    rm -rf "$BUILD_ROOT"/ios/$BUILD-bin
fi
mv "$BUILD_ROOT"/ios/bin "$BUILD_ROOT"/ios/$BUILD-bin