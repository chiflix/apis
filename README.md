API definitions of `apis.sagittarius.ai`

# Principles

- All transmission must be encrypt.
- All data storage must be encrypted.
- All privacy info must not be collected.

# Documents

- [`media_hash`](./docs/media_hash.md)
- [`health api`](./docs/health.md)
- [`media api`](./docs/media.md)
- [`training api`](./docs/training.md)
- [`translation api`](./docs/translation.md)

# Development Guide

### Preparation:

```
git clone https://github.com/googleapis/googleapis ../
rsync -av --delete ../googleapis/google/ ./google

go get -u github.com/golang/protobuf/{proto,protoc-gen-go}
go get -u google.golang.org/grpc
go get -u github.com/ckaznocha/protoc-gen-lint
go get -u github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc

npm install -g grpc-tools
npm install -g ts-protoc-gen
```

### Generators and Scripts

- `lint.sh` to check .proto file syntax, etc.
- `docgen.sh` to generating documents
- `codegen.sh` generating source code
- `publish.sh` publish sagi-api-client npm package

### Examples

Check test code in `src/go` and `src/nodejs/test`

# Other References

`translation` - translate and detect languages
  - https://cloud.google.com/translate/docs/reference/rest

`media` - thumbnails, etc.

`speech` - audio and speech to text
  - https://cloud.google.com/speech-to-text/docs/reference/rpc/
  - https://github.com/googleapis/googleapis/blob/master/google/cloud/speech/v1/cloud_speech.proto

`language` - natural language analysis, classification, recognition
  - https://cloud.google.com/natural-language/docs/reference/service_apis_overview
  - https://github.com/googleapis/googleapis/blob/master/google/cloud/language/v1/language_service.proto
