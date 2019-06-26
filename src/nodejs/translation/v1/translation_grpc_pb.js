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
var grpc = require('grpc');
var translation_v1_translation_pb = require('../../translation/v1/translation_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
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

function serialize_sagittarius_translation_v1_MediaTranslationRequest(arg) {
  if (!(arg instanceof translation_v1_translation_pb.MediaTranslationRequest)) {
    throw new Error('Expected argument of type sagittarius.translation.v1.MediaTranslationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_translation_v1_MediaTranslationRequest(buffer_arg) {
  return translation_v1_translation_pb.MediaTranslationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_translation_v1_MediaTranslationResponse(arg) {
  if (!(arg instanceof translation_v1_translation_pb.MediaTranslationResponse)) {
    throw new Error('Expected argument of type sagittarius.translation.v1.MediaTranslationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_translation_v1_MediaTranslationResponse(buffer_arg) {
  return translation_v1_translation_pb.MediaTranslationResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_sagittarius_translation_v1_StreamingTranslationTaskInfoRequest(arg) {
  if (!(arg instanceof translation_v1_translation_pb.StreamingTranslationTaskInfoRequest)) {
    throw new Error('Expected argument of type sagittarius.translation.v1.StreamingTranslationTaskInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_translation_v1_StreamingTranslationTaskInfoRequest(buffer_arg) {
  return translation_v1_translation_pb.StreamingTranslationTaskInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_translation_v1_StreamingTranslationTaskInfoResponse(arg) {
  if (!(arg instanceof translation_v1_translation_pb.StreamingTranslationTaskInfoResponse)) {
    throw new Error('Expected argument of type sagittarius.translation.v1.StreamingTranslationTaskInfoResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_translation_v1_StreamingTranslationTaskInfoResponse(buffer_arg) {
  return translation_v1_translation_pb.StreamingTranslationTaskInfoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_translation_v1_TextTranslationRequest(arg) {
  if (!(arg instanceof translation_v1_translation_pb.TextTranslationRequest)) {
    throw new Error('Expected argument of type sagittarius.translation.v1.TextTranslationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_translation_v1_TextTranslationRequest(buffer_arg) {
  return translation_v1_translation_pb.TextTranslationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_translation_v1_TextTranslationResponse(arg) {
  if (!(arg instanceof translation_v1_translation_pb.TextTranslationResponse)) {
    throw new Error('Expected argument of type sagittarius.translation.v1.TextTranslationResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_translation_v1_TextTranslationResponse(buffer_arg) {
  return translation_v1_translation_pb.TextTranslationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_translation_v1_TranscriptRequest(arg) {
  if (!(arg instanceof translation_v1_translation_pb.TranscriptRequest)) {
    throw new Error('Expected argument of type sagittarius.translation.v1.TranscriptRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_translation_v1_TranscriptRequest(buffer_arg) {
  return translation_v1_translation_pb.TranscriptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_translation_v1_TranscriptResponse(arg) {
  if (!(arg instanceof translation_v1_translation_pb.TranscriptResponse)) {
    throw new Error('Expected argument of type sagittarius.translation.v1.TranscriptResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_translation_v1_TranscriptResponse(buffer_arg) {
  return translation_v1_translation_pb.TranscriptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that implements Sagittarius Translation API
var TranslationService = exports.TranslationService = {
  // Translate media(audio or video) by media identity
  translateMedia: {
    path: '/sagittarius.translation.v1.Translation/TranslateMedia',
    requestStream: false,
    responseStream: false,
    requestType: translation_v1_translation_pb.MediaTranslationRequest,
    responseType: translation_v1_translation_pb.MediaTranslationResponse,
    requestSerialize: serialize_sagittarius_translation_v1_MediaTranslationRequest,
    requestDeserialize: deserialize_sagittarius_translation_v1_MediaTranslationRequest,
    responseSerialize: serialize_sagittarius_translation_v1_MediaTranslationResponse,
    responseDeserialize: deserialize_sagittarius_translation_v1_MediaTranslationResponse,
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
  transcript: {
    path: '/sagittarius.translation.v1.Translation/Transcript',
    requestStream: false,
    responseStream: false,
    requestType: translation_v1_translation_pb.TranscriptRequest,
    responseType: translation_v1_translation_pb.TranscriptResponse,
    requestSerialize: serialize_sagittarius_translation_v1_TranscriptRequest,
    requestDeserialize: deserialize_sagittarius_translation_v1_TranscriptRequest,
    responseSerialize: serialize_sagittarius_translation_v1_TranscriptResponse,
    responseDeserialize: deserialize_sagittarius_translation_v1_TranscriptResponse,
  },
  // Translate text by Google Translation Service
  translateText: {
    path: '/sagittarius.translation.v1.Translation/TranslateText',
    requestStream: false,
    responseStream: false,
    requestType: translation_v1_translation_pb.TextTranslationRequest,
    responseType: translation_v1_translation_pb.TextTranslationResponse,
    requestSerialize: serialize_sagittarius_translation_v1_TextTranslationRequest,
    requestDeserialize: deserialize_sagittarius_translation_v1_TextTranslationRequest,
    responseSerialize: serialize_sagittarius_translation_v1_TextTranslationResponse,
    responseDeserialize: deserialize_sagittarius_translation_v1_TextTranslationResponse,
  },
  // Performs bidirectional streaming audio translation: receive results after or while
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
  // Check StreamingTranslationTask results or estimate finish time 
  // and maybe other informations related to the task
  streamingTranslationTask: {
    path: '/sagittarius.translation.v1.Translation/StreamingTranslationTask',
    requestStream: false,
    responseStream: false,
    requestType: translation_v1_translation_pb.StreamingTranslationTaskInfoRequest,
    responseType: translation_v1_translation_pb.StreamingTranslationTaskInfoResponse,
    requestSerialize: serialize_sagittarius_translation_v1_StreamingTranslationTaskInfoRequest,
    requestDeserialize: deserialize_sagittarius_translation_v1_StreamingTranslationTaskInfoRequest,
    responseSerialize: serialize_sagittarius_translation_v1_StreamingTranslationTaskInfoResponse,
    responseDeserialize: deserialize_sagittarius_translation_v1_StreamingTranslationTaskInfoResponse,
  },
};

exports.TranslationClient = grpc.makeGenericClientConstructor(TranslationService);
