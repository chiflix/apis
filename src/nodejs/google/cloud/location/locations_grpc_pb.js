// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google Inc.
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
var google_cloud_location_locations_pb = require('../../../google/cloud/location/locations_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');

function serialize_google_cloud_location_GetLocationRequest(arg) {
  if (!(arg instanceof google_cloud_location_locations_pb.GetLocationRequest)) {
    throw new Error('Expected argument of type google.cloud.location.GetLocationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_location_GetLocationRequest(buffer_arg) {
  return google_cloud_location_locations_pb.GetLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_location_ListLocationsRequest(arg) {
  if (!(arg instanceof google_cloud_location_locations_pb.ListLocationsRequest)) {
    throw new Error('Expected argument of type google.cloud.location.ListLocationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_location_ListLocationsRequest(buffer_arg) {
  return google_cloud_location_locations_pb.ListLocationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_location_ListLocationsResponse(arg) {
  if (!(arg instanceof google_cloud_location_locations_pb.ListLocationsResponse)) {
    throw new Error('Expected argument of type google.cloud.location.ListLocationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_location_ListLocationsResponse(buffer_arg) {
  return google_cloud_location_locations_pb.ListLocationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_location_Location(arg) {
  if (!(arg instanceof google_cloud_location_locations_pb.Location)) {
    throw new Error('Expected argument of type google.cloud.location.Location');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_location_Location(buffer_arg) {
  return google_cloud_location_locations_pb.Location.deserializeBinary(new Uint8Array(buffer_arg));
}


// An abstract interface that provides location-related information for
// a service. Service-specific metadata is provided through the
// [Location.metadata][google.cloud.location.Location.metadata] field.
var LocationsService = exports.LocationsService = {
  // Lists information about the supported locations for this service.
  listLocations: {
    path: '/google.cloud.location.Locations/ListLocations',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_location_locations_pb.ListLocationsRequest,
    responseType: google_cloud_location_locations_pb.ListLocationsResponse,
    requestSerialize: serialize_google_cloud_location_ListLocationsRequest,
    requestDeserialize: deserialize_google_cloud_location_ListLocationsRequest,
    responseSerialize: serialize_google_cloud_location_ListLocationsResponse,
    responseDeserialize: deserialize_google_cloud_location_ListLocationsResponse,
  },
  // Gets information about a location.
  getLocation: {
    path: '/google.cloud.location.Locations/GetLocation',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_location_locations_pb.GetLocationRequest,
    responseType: google_cloud_location_locations_pb.Location,
    requestSerialize: serialize_google_cloud_location_GetLocationRequest,
    requestDeserialize: deserialize_google_cloud_location_GetLocationRequest,
    responseSerialize: serialize_google_cloud_location_Location,
    responseDeserialize: deserialize_google_cloud_location_Location,
  },
};

exports.LocationsClient = grpc.makeGenericClientConstructor(LocationsService);
