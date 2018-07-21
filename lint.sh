#!/bin/bash

protoc -I . --lint_out=. translation/*/*.proto training/*/*.proto media/*/*.proto health/*/*.proto
