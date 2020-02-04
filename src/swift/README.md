# swift

The SagiAPI with Swift.

### Preparation:

```shell
git clone https://github.com/grpc/grpc-swift.git -b nio
cd grpc-swift
make plugins
```
To build both of the necessary plugins: protoc-gen-swift, which generates Protocol Buffer support code and protoc-gen-grpc-swift, which generates gRPC interface code. 

Add to your PATH environment variable for plugins.

Go to the src/swift directory then to run:

```shell
swift build
swift test
```
