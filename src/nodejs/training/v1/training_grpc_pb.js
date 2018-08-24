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
var training_v1_training_pb = require('../../training/v1/training_pb.js');
var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
var google_rpc_status_pb = require('../../google/rpc/status_pb.js');
var google_cloud_speech_v1_cloud_speech_pb = require('../../google/cloud/speech/v1/cloud_speech_pb.js');

function serialize_google_rpc_Status(arg) {
  if (!(arg instanceof google_rpc_status_pb.Status)) {
    throw new Error('Expected argument of type google.rpc.Status');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_rpc_Status(buffer_arg) {
  return google_rpc_status_pb.Status.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_training_v1_StreamingTrainingRequest(arg) {
  if (!(arg instanceof training_v1_training_pb.StreamingTrainingRequest)) {
    throw new Error('Expected argument of type sagittarius.training.v1.StreamingTrainingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_training_v1_StreamingTrainingRequest(buffer_arg) {
  return training_v1_training_pb.StreamingTrainingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sagittarius_training_v1_TrainingData(arg) {
  if (!(arg instanceof training_v1_training_pb.TrainingData)) {
    throw new Error('Expected argument of type sagittarius.training.v1.TrainingData');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_sagittarius_training_v1_TrainingData(buffer_arg) {
  return training_v1_training_pb.TrainingData.deserializeBinary(new Uint8Array(buffer_arg));
}


// Trainng that implements Sagittarius Translation API
var TrainngService = exports.TrainngService = {
  // Push accture traning data to server
  pushData: {
    path: '/sagittarius.training.v1.Trainng/PushData',
    requestStream: false,
    responseStream: false,
    requestType: training_v1_training_pb.TrainingData,
    responseType: google_rpc_status_pb.Status,
    requestSerialize: serialize_sagittarius_training_v1_TrainingData,
    requestDeserialize: deserialize_sagittarius_training_v1_TrainingData,
    responseSerialize: serialize_google_rpc_Status,
    responseDeserialize: deserialize_google_rpc_Status,
  },
  // Performs bidirectional streaming audio translation: receive results while
  // sending audio. This method is only available via the gRPC API (not REST).
  streamingTraining: {
    path: '/sagittarius.training.v1.Trainng/StreamingTraining',
    requestStream: true,
    responseStream: false,
    requestType: training_v1_training_pb.StreamingTrainingRequest,
    responseType: google_rpc_status_pb.Status,
    requestSerialize: serialize_sagittarius_training_v1_StreamingTrainingRequest,
    requestDeserialize: deserialize_sagittarius_training_v1_StreamingTrainingRequest,
    responseSerialize: serialize_google_rpc_Status,
    responseDeserialize: deserialize_google_rpc_Status,
  },
};

exports.TrainngClient = grpc.makeGenericClientConstructor(TrainngService);
