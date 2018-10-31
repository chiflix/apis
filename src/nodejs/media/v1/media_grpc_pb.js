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
var media_v1_media_pb = require('../../media/v1/media_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_rpc_status_pb = require('../../google/rpc/status_pb.js');

function serialize_google_rpc_Status(arg) {
  if (!(arg instanceof google_rpc_status_pb.Status)) {
    throw new Error('Expected argument of type google.rpc.Status');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_rpc_Status(buffer_arg) {
  return google_rpc_status_pb.Status.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_media_v1_GetInfoRequest(arg) {
  if (!(arg instanceof media_v1_media_pb.GetInfoRequest)) {
    throw new Error('Expected argument of type sagittarius.media.v1.GetInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_media_v1_GetInfoRequest(buffer_arg) {
  return media_v1_media_pb.GetInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_media_v1_GetThumbRequest(arg) {
  if (!(arg instanceof media_v1_media_pb.GetThumbRequest)) {
    throw new Error('Expected argument of type sagittarius.media.v1.GetThumbRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_media_v1_GetThumbRequest(buffer_arg) {
  return media_v1_media_pb.GetThumbRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_media_v1_Info(arg) {
  if (!(arg instanceof media_v1_media_pb.Info)) {
    throw new Error('Expected argument of type sagittarius.media.v1.Info');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_media_v1_Info(buffer_arg) {
  return media_v1_media_pb.Info.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_media_v1_PutThumbRequest(arg) {
  if (!(arg instanceof media_v1_media_pb.PutThumbRequest)) {
    throw new Error('Expected argument of type sagittarius.media.v1.PutThumbRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_media_v1_PutThumbRequest(buffer_arg) {
  return media_v1_media_pb.PutThumbRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_media_v1_ThumbList(arg) {
  if (!(arg instanceof media_v1_media_pb.ThumbList)) {
    throw new Error('Expected argument of type sagittarius.media.v1.ThumbList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_media_v1_ThumbList(buffer_arg) {
  return media_v1_media_pb.ThumbList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_media_v1_UpdateInfoRequest(arg) {
  if (!(arg instanceof media_v1_media_pb.UpdateInfoRequest)) {
    throw new Error('Expected argument of type sagittarius.media.v1.UpdateInfoRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_media_v1_UpdateInfoRequest(buffer_arg) {
  return media_v1_media_pb.UpdateInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service that implements Sagittarius Media API
var MediaService = exports.MediaService = {
  //
  getInfo: {
    path: '/sagittarius.media.v1.Media/GetInfo',
    requestStream: false,
    responseStream: false,
    requestType: media_v1_media_pb.GetInfoRequest,
    responseType: media_v1_media_pb.Info,
    requestSerialize: serialize_sagittarius_media_v1_GetInfoRequest,
    requestDeserialize: deserialize_sagittarius_media_v1_GetInfoRequest,
    responseSerialize: serialize_sagittarius_media_v1_Info,
    responseDeserialize: deserialize_sagittarius_media_v1_Info,
  },
  //
  updateInfo: {
    path: '/sagittarius.media.v1.Media/UpdateInfo',
    requestStream: false,
    responseStream: false,
    requestType: media_v1_media_pb.UpdateInfoRequest,
    responseType: media_v1_media_pb.Info,
    requestSerialize: serialize_sagittarius_media_v1_UpdateInfoRequest,
    requestDeserialize: deserialize_sagittarius_media_v1_UpdateInfoRequest,
    responseSerialize: serialize_sagittarius_media_v1_Info,
    responseDeserialize: deserialize_sagittarius_media_v1_Info,
  },
  // Query thumb list by media identity
  getThumb: {
    path: '/sagittarius.media.v1.Media/GetThumb',
    requestStream: false,
    responseStream: false,
    requestType: media_v1_media_pb.GetThumbRequest,
    responseType: media_v1_media_pb.ThumbList,
    requestSerialize: serialize_sagittarius_media_v1_GetThumbRequest,
    requestDeserialize: deserialize_sagittarius_media_v1_GetThumbRequest,
    responseSerialize: serialize_sagittarius_media_v1_ThumbList,
    responseDeserialize: deserialize_sagittarius_media_v1_ThumbList,
  },
  // Upload thumb
  putThumb: {
    path: '/sagittarius.media.v1.Media/PutThumb',
    requestStream: false,
    responseStream: false,
    requestType: media_v1_media_pb.PutThumbRequest,
    responseType: google_rpc_status_pb.Status,
    requestSerialize: serialize_sagittarius_media_v1_PutThumbRequest,
    requestDeserialize: deserialize_sagittarius_media_v1_PutThumbRequest,
    responseSerialize: serialize_google_rpc_Status,
    responseDeserialize: deserialize_google_rpc_Status,
  },
};

exports.MediaClient = grpc.makeGenericClientConstructor(MediaService);
