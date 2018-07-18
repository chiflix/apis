// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2015 The gRPC Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// The canonical version of this proto can be found at
// https://github.com/grpc/grpc-proto/blob/master/grpc/health/v1/health.proto
//
'use strict';
var grpc = require('@grpc/grpc-js');
var health_v1_health_pb = require('../../health/v1/health_pb.js');

function serialize_sagittarius_health_v1_HealthCheckRequest(arg) {
  if (!(arg instanceof health_v1_health_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type sagittarius.health.v1.HealthCheckRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_health_v1_HealthCheckRequest(buffer_arg) {
  return health_v1_health_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_health_v1_HealthCheckResponse(arg) {
  if (!(arg instanceof health_v1_health_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type sagittarius.health.v1.HealthCheckResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_health_v1_HealthCheckResponse(buffer_arg) {
  return health_v1_health_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HealthService = exports.HealthService = {
  check: {
    path: '/sagittarius.health.v1.Health/Check',
    requestStream: false,
    responseStream: false,
    requestType: health_v1_health_pb.HealthCheckRequest,
    responseType: health_v1_health_pb.HealthCheckResponse,
    requestSerialize: serialize_sagittarius_health_v1_HealthCheckRequest,
    requestDeserialize: deserialize_sagittarius_health_v1_HealthCheckRequest,
    responseSerialize: serialize_sagittarius_health_v1_HealthCheckResponse,
    responseDeserialize: deserialize_sagittarius_health_v1_HealthCheckResponse,
  },
};

exports.HealthClient = grpc.makeGenericClientConstructor(HealthService);
