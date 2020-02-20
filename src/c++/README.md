Sagi apis for gRPC-C++

## Prepearation
```shell
    brew install cmake grpc
```

## Build For PC
```shell
    cmake -b build .
    cd build
    make
    make install  # The files will be installed at ./build/bin
```

## Build For iOS
```shell
    sh ios_build.sh Debug # (or Release) 
```
> The files will be installed at ./ios/Debug-bin  or ./ios/Release-bin