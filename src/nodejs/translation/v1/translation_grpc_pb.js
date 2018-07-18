// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Sagittarius LLC.
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
var grpc = require('@grpc/grpc-js');
var translation_v1_translation_pb = require('../../translation/v1/translation_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_rpc_status_pb = require('../../google/rpc/status_pb.js');
var google_cloud_speech_v1_cloud_speech_pb = require('../../google/cloud/speech/v1/cloud_speech_pb.js');

function serialize_sagittarius_translation_v1_DetectionRequest(arg) {
  if (!(arg instanceof translation_v1_translation_pb.DetectionRequest)) {
    throw new Error('Expected argument of type sagittarius.translation.v1.DetectionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_translation_v1_DetectionRequest(buffer_arg) {
  return translation_v1_translation_pb.DetectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_translation_v1_DetectionResponse(arg) {
  if (!(arg instanceof translation_v1_translation_pb.DetectionResponse)) {
    throw new Error('Expected argument of type sagittarius.translation.v1.DetectionResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_translation_v1_DetectionResponse(buffer_arg) {
  return translation_v1_translation_pb.DetectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_translation_v1_StreamingTranslationRequest(arg) {
  if (!(arg instanceof translation_v1_translation_pb.StreamingTranslationRequest)) {
    throw new Error('Expected argument of type sagittarius.translation.v1.StreamingTranslationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_translation_v1_StreamingTranslationRequest(buffer_arg) {
  return translation_v1_translation_pb.StreamingTranslationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_translation_v1_StreamingTranslationResponse(arg) {
  if (!(arg instanceof translation_v1_translation_pb.StreamingTranslationResponse)) {
    throw new Error('Expected argument of type sagittarius.translation.v1.StreamingTranslationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_translation_v1_StreamingTranslationResponse(buffer_arg) {
  return translation_v1_translation_pb.StreamingTranslationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_translation_v1_TranslationRequest(arg) {
  if (!(arg instanceof translation_v1_translation_pb.TranslationRequest)) {
    throw new Error('Expected argument of type sagittarius.translation.v1.TranslationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_translation_v1_TranslationRequest(buffer_arg) {
  return translation_v1_translation_pb.TranslationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_translation_v1_TranslationResponse(arg) {
  if (!(arg instanceof translation_v1_translation_pb.TranslationResponse)) {
    throw new Error('Expected argument of type sagittarius.translation.v1.TranslationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_translation_v1_TranslationResponse(buffer_arg) {
  return translation_v1_translation_pb.TranslationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that implements Sagittarius Translation API
var TranslationService = exports.TranslationService = {
  // Translate media(audio or video) by media identity
  translateMedia: {
    path: '/sagittarius.translation.v1.Translation/TranslateMedia',
    requestStream: false,
    responseStream: false,
    requestType: translation_v1_translation_pb.TranslationRequest,
    responseType: translation_v1_translation_pb.TranslationResponse,
    requestSerialize: serialize_sagittarius_translation_v1_TranslationRequest,
    requestDeserialize: deserialize_sagittarius_translation_v1_TranslationRequest,
    responseSerialize: serialize_sagittarius_translation_v1_TranslationResponse,
    responseDeserialize: deserialize_sagittarius_translation_v1_TranslationResponse,
  },
  // detect the language of text
  detectLanguage: {
    path: '/sagittarius.translation.v1.Translation/DetectLanguage',
    requestStream: false,
    responseStream: false,
    requestType: translation_v1_translation_pb.DetectionRequest,
    responseType: translation_v1_translation_pb.DetectionResponse,
    requestSerialize: serialize_sagittarius_translation_v1_DetectionRequest,
    requestDeserialize: deserialize_sagittarius_translation_v1_DetectionRequest,
    responseSerialize: serialize_sagittarius_translation_v1_DetectionResponse,
    responseDeserialize: deserialize_sagittarius_translation_v1_DetectionResponse,
  },
  // Performs bidirectional streaming audio translation: receive results while
  // sending audio. This method is only available via the gRPC API (not REST).
  streamingTranslation: {
    path: '/sagittarius.translation.v1.Translation/StreamingTranslation',
    requestStream: true,
    responseStream: true,
    requestType: translation_v1_translation_pb.StreamingTranslationRequest,
    responseType: translation_v1_translation_pb.StreamingTranslationResponse,
    requestSerialize: serialize_sagittarius_translation_v1_StreamingTranslationRequest,
    requestDeserialize: deserialize_sagittarius_translation_v1_StreamingTranslationRequest,
    responseSerialize: serialize_sagittarius_translation_v1_StreamingTranslationResponse,
    responseDeserialize: deserialize_sagittarius_translation_v1_StreamingTranslationResponse,
  },
};

exports.TranslationClient = grpc.makeGenericClientConstructor(TranslationService);
