# Principles

- All transmission must be encrypt.
- All data storage must be encrypted.
- All privacy info must not be collected.

# Goals



# API References

`translation` - translate and detect languages
  - https://cloud.google.com/translate/docs/reference/rest

`media` - thumbnails, etc.

`speech` - audio and speech to text
  - https://cloud.google.com/speech-to-text/docs/reference/rpc/
  - https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto

`language` - natural language analysis, classification, recognition
  - https://cloud.google.com/natural-language/docs/reference/service_apis_overview
  - https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1/language_service.proto

# Guide

- preparation:

```
git clone https://github.com/googleapis/googleapis ../

go get github.com/ckaznocha/protoc-gen-lint

go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc
```

- lint:

```
protoc -I . --lint_out=. translation/*/*.proto training/*/*.proto media/*/*.proto health/*/*.proto
```

- generating documents:

```
protoc -I . --doc_out=docs/ --doc_opt=markdown,translation.md translation/*/translation.proto
protoc -I . --doc_out=docs/ --doc_opt=markdown,training.md training/*/training.proto
protoc -I . --doc_out=docs/ --doc_opt=markdown,media.md media/*/*.proto
protoc -I . --doc_out=docs/ --doc_opt=markdown,health.md health/*/*.proto
```

- generating source code:


```
# golang

go get -u github.com/golang/protobuf/{proto,protoc-gen-go}
go get -u google.golang.org/grpc

protoc -I . --go_out=plugins=grpc:src/go/ media/*/*.proto
protoc -I . --go_out=plugins=grpc:src/go/ health/*/*.proto
protoc -I . --go_out=plugins=grpc:src/go/ translation/*/translation.proto
protoc -I . --go_out=plugins=grpc:src/go/ training/*/training.proto
```

```
# nodejs, static codegen

npm install -g grpc-tools
grpc_tools_node_protoc -I . --js_out=import_style=commonjs,binary:src/nodejs/ --grpc_out=src/nodejs --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` translation/*/*.proto training/*/*.proto media/*/*.proto health/*/*.proto
grpc_tools_node_protoc -I . --js_out=import_style=commonjs,binary:src/nodejs/ --grpc_out=src/nodejs --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` google/*/*.proto
grpc_tools_node_protoc -I . --js_out=import_style=commonjs,binary:src/nodejs/ --grpc_out=src/nodejs --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` google/cloud/speech/*/*.proto
```
replace `require('grpc')` to `require('@grpc/grpc-js')` in all `*.js` then `npm publish`


# Examples

Check test code in `src/go` and `src/nodejs/test`
