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
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_rpc_Status(buffer_arg) {
  return google_rpc_status_pb.Status.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_media_v1_GetInfoRequest(arg) {
  if (!(arg instanceof media_v1_media_pb.GetInfoRequest)) {
    throw new Error('Expected argument of type sagittarius.media.v1.GetInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sagittarius_media_v1_GetInfoRequest(buffer_arg) {
  return media_v1_media_pb.GetInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_media_v1_Info(arg) {
  if (!(arg instanceof media_v1_media_pb.Info)) {
    throw new Error('Expected argument of type sagittarius.media.v1.Info');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sagittarius_media_v1_Info(buffer_arg) {
  return media_v1_media_pb.Info.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_media_v1_ThumbnailRequest(arg) {
  if (!(arg instanceof media_v1_media_pb.ThumbnailRequest)) {
    throw new Error('Expected argument of type sagittarius.media.v1.ThumbnailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sagittarius_media_v1_ThumbnailRequest(buffer_arg) {
  return media_v1_media_pb.ThumbnailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_media_v1_ThumbnailResponse(arg) {
  if (!(arg instanceof media_v1_media_pb.ThumbnailResponse)) {
    throw new Error('Expected argument of type sagittarius.media.v1.ThumbnailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sagittarius_media_v1_ThumbnailResponse(buffer_arg) {
  return media_v1_media_pb.ThumbnailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_media_v1_ThumbnailTimeRangesRequest(arg) {
  if (!(arg instanceof media_v1_media_pb.ThumbnailTimeRangesRequest)) {
    throw new Error('Expected argument of type sagittarius.media.v1.ThumbnailTimeRangesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sagittarius_media_v1_ThumbnailTimeRangesRequest(buffer_arg) {
  return media_v1_media_pb.ThumbnailTimeRangesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_media_v1_ThumbnailTimeRangesResponse(arg) {
  if (!(arg instanceof media_v1_media_pb.ThumbnailTimeRangesResponse)) {
    throw new Error('Expected argument of type sagittarius.media.v1.ThumbnailTimeRangesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sagittarius_media_v1_ThumbnailTimeRangesResponse(buffer_arg) {
  return media_v1_media_pb.ThumbnailTimeRangesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_media_v1_UpdateInfoRequest(arg) {
  if (!(arg instanceof media_v1_media_pb.UpdateInfoRequest)) {
    throw new Error('Expected argument of type sagittarius.media.v1.UpdateInfoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sagittarius_media_v1_UpdateInfoRequest(buffer_arg) {
  return media_v1_media_pb.UpdateInfoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_media_v1_UpdateThumbnailRequest(arg) {
  if (!(arg instanceof media_v1_media_pb.UpdateThumbnailRequest)) {
    throw new Error('Expected argument of type sagittarius.media.v1.UpdateThumbnailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sagittarius_media_v1_UpdateThumbnailRequest(buffer_arg) {
  return media_v1_media_pb.UpdateThumbnailRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
  // Query obtainable thumbnails time range and unavailable ones by media identity
getThumbnailTimeRanges: {
    path: '/sagittarius.media.v1.Media/GetThumbnailTimeRanges',
    requestStream: false,
    responseStream: false,
    requestType: media_v1_media_pb.ThumbnailTimeRangesRequest,
    responseType: media_v1_media_pb.ThumbnailTimeRangesResponse,
    requestSerialize: serialize_sagittarius_media_v1_ThumbnailTimeRangesRequest,
    requestDeserialize: deserialize_sagittarius_media_v1_ThumbnailTimeRangesRequest,
    responseSerialize: serialize_sagittarius_media_v1_ThumbnailTimeRangesResponse,
    responseDeserialize: deserialize_sagittarius_media_v1_ThumbnailTimeRangesResponse,
  },
  // Get thumbnail by timestamps
getThumbnail: {
    path: '/sagittarius.media.v1.Media/GetThumbnail',
    requestStream: false,
    responseStream: false,
    requestType: media_v1_media_pb.ThumbnailRequest,
    responseType: media_v1_media_pb.ThumbnailResponse,
    requestSerialize: serialize_sagittarius_media_v1_ThumbnailRequest,
    requestDeserialize: deserialize_sagittarius_media_v1_ThumbnailRequest,
    responseSerialize: serialize_sagittarius_media_v1_ThumbnailResponse,
    responseDeserialize: deserialize_sagittarius_media_v1_ThumbnailResponse,
  },
  // Update thumbnail by timestamps
updateThumbnail: {
    path: '/sagittarius.media.v1.Media/UpdateThumbnail',
    requestStream: false,
    responseStream: false,
    requestType: media_v1_media_pb.UpdateThumbnailRequest,
    responseType: google_rpc_status_pb.Status,
    requestSerialize: serialize_sagittarius_media_v1_UpdateThumbnailRequest,
    requestDeserialize: deserialize_sagittarius_media_v1_UpdateThumbnailRequest,
    responseSerialize: serialize_google_rpc_Status,
    responseDeserialize: deserialize_google_rpc_Status,
  },
};

exports.MediaClient = grpc.makeGenericClientConstructor(MediaService);
