// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2017 Google Inc.
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
'use strict';
var grpc = require('grpc');
var google_cloud_speech_v1_cloud_speech_pb = require('../../../../google/cloud/speech/v1/cloud_speech_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_rpc_status_pb = require('../../../../google/rpc/status_pb.js');

function serialize_google_cloud_speech_v1_LongRunningRecognizeRequest(arg) {
  if (!(arg instanceof google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest)) {
    throw new Error('Expected argument of type google.cloud.speech.v1.LongRunningRecognizeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_speech_v1_LongRunningRecognizeRequest(buffer_arg) {
  return google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_speech_v1_RecognizeRequest(arg) {
  if (!(arg instanceof google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest)) {
    throw new Error('Expected argument of type google.cloud.speech.v1.RecognizeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_speech_v1_RecognizeRequest(buffer_arg) {
  return google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_speech_v1_RecognizeResponse(arg) {
  if (!(arg instanceof google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse)) {
    throw new Error('Expected argument of type google.cloud.speech.v1.RecognizeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_speech_v1_RecognizeResponse(buffer_arg) {
  return google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_speech_v1_StreamingRecognizeRequest(arg) {
  if (!(arg instanceof google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest)) {
    throw new Error('Expected argument of type google.cloud.speech.v1.StreamingRecognizeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_speech_v1_StreamingRecognizeRequest(buffer_arg) {
  return google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_speech_v1_StreamingRecognizeResponse(arg) {
  if (!(arg instanceof google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse)) {
    throw new Error('Expected argument of type google.cloud.speech.v1.StreamingRecognizeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_speech_v1_StreamingRecognizeResponse(buffer_arg) {
  return google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that implements Google Cloud Speech API.
var SpeechService = exports.SpeechService = {
  // Performs synchronous speech recognition: receive results after all audio
  // has been sent and processed.
  recognize: {
    path: '/google.cloud.speech.v1.Speech/Recognize',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest,
    responseType: google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse,
    requestSerialize: serialize_google_cloud_speech_v1_RecognizeRequest,
    requestDeserialize: deserialize_google_cloud_speech_v1_RecognizeRequest,
    responseSerialize: serialize_google_cloud_speech_v1_RecognizeResponse,
    responseDeserialize: deserialize_google_cloud_speech_v1_RecognizeResponse,
  },
  // Performs asynchronous speech recognition: receive results via the
  // google.longrunning.Operations interface. Returns either an
  // `Operation.error` or an `Operation.response` which contains
  // a `LongRunningRecognizeResponse` message.
  longRunningRecognize: {
    path: '/google.cloud.speech.v1.Speech/LongRunningRecognize',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_speech_v1_LongRunningRecognizeRequest,
    requestDeserialize: deserialize_google_cloud_speech_v1_LongRunningRecognizeRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Performs bidirectional streaming speech recognition: receive results while
  // sending audio. This method is only available via the gRPC API (not REST).
  streamingRecognize: {
    path: '/google.cloud.speech.v1.Speech/StreamingRecognize',
    requestStream: true,
    responseStream: true,
    requestType: google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest,
    responseType: google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse,
    requestSerialize: serialize_google_cloud_speech_v1_StreamingRecognizeRequest,
    requestDeserialize: deserialize_google_cloud_speech_v1_StreamingRecognizeRequest,
    responseSerialize: serialize_google_cloud_speech_v1_StreamingRecognizeResponse,
    responseDeserialize: deserialize_google_cloud_speech_v1_StreamingRecognizeResponse,
  },
};

exports.SpeechClient = grpc.makeGenericClientConstructor(SpeechService);
