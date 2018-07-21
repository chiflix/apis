#!/bin/bash

protoc -I . --doc_out=docs/ --doc_opt=markdown,translation.md translation/*/translation.proto
protoc -I . --doc_out=docs/ --doc_opt=markdown,training.md training/*/training.proto
protoc -I . --doc_out=docs/ --doc_opt=markdown,media.md media/*/*.proto
protoc -I . --doc_out=docs/ --doc_opt=markdown,health.md health/*/*.proto
