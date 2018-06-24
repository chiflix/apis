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
protoc -I ../googleapis/ -I . --lint_out=. */*/*.proto
```

- generating documents:
```
protoc -I ../googleapis/ -I . --doc_out=docs/ --doc_opt=markdown,translation.md translation/*/translation.proto
protoc -I ../googleapis/ -I . --doc_out=docs/ --doc_opt=markdown,training.md training/*/training.proto
protoc -I ../googleapis/ -I . --doc_out=docs/ --doc_opt=markdown,media.md media/*/*.proto
```

- generating source code:

```
go get -u github.com/golang/protobuf/{proto,protoc-gen-go}
go get -u google.golang.org/grpc

protoc -I ../googleapis/ -I . --go_out=plugins=grpc:src/go/ media/*/*.proto
protoc -I ../googleapis/ -I . --go_out=plugins=grpc:src/go/ translation/*/translation.proto
protoc -I ../googleapis/ -I . --go_out=plugins=grpc:src/go/ training/*/training.proto
```
