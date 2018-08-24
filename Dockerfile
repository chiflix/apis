# build go program first
FROM golang

WORKDIR /go/src/github.com/chiflix/apis/
ADD ./ .

ENV GOPATH=/go

RUN go get -u github.com/golang/protobuf/proto
RUN go get -u github.com/golang/protobuf/protoc-gen-go
RUN go get -u google.golang.org/grpc
RUN go get -u github.com/ckaznocha/protoc-gen-lint
RUN go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc

RUN bash lint.sh
RUN bash docgen.sh
RUN bash codegen.sh
