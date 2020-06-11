// package: sagittarius.training.v1
// file: training/v1/training.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as training_v1_training_pb from "../../training/v1/training_pb";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";
import * as google_cloud_speech_v1_cloud_speech_pb from "../../google/cloud/speech/v1/cloud_speech_pb";

interface ITrainngService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    pushData: ITrainngService_IPushData;
    streamingTraining: ITrainngService_IStreamingTraining;
}

interface ITrainngService_IPushData extends grpc.MethodDefinition<training_v1_training_pb.TrainingData, google_rpc_status_pb.Status> {
    path: string; // "/sagittarius.training.v1.Trainng/PushData"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<training_v1_training_pb.TrainingData>;
    requestDeserialize: grpc.deserialize<training_v1_training_pb.TrainingData>;
    responseSerialize: grpc.serialize<google_rpc_status_pb.Status>;
    responseDeserialize: grpc.deserialize<google_rpc_status_pb.Status>;
}
interface ITrainngService_IStreamingTraining extends grpc.MethodDefinition<training_v1_training_pb.StreamingTrainingRequest, google_rpc_status_pb.Status> {
    path: string; // "/sagittarius.training.v1.Trainng/StreamingTraining"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<training_v1_training_pb.StreamingTrainingRequest>;
    requestDeserialize: grpc.deserialize<training_v1_training_pb.StreamingTrainingRequest>;
    responseSerialize: grpc.serialize<google_rpc_status_pb.Status>;
    responseDeserialize: grpc.deserialize<google_rpc_status_pb.Status>;
}

export const TrainngService: ITrainngService;

export interface ITrainngServer {
    pushData: grpc.handleUnaryCall<training_v1_training_pb.TrainingData, google_rpc_status_pb.Status>;
    streamingTraining: grpc.handleClientStreamingCall<training_v1_training_pb.StreamingTrainingRequest, google_rpc_status_pb.Status>;
}

export interface ITrainngClient {
    pushData(request: training_v1_training_pb.TrainingData, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
    pushData(request: training_v1_training_pb.TrainingData, metadata: grpc.Metadata, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
    pushData(request: training_v1_training_pb.TrainingData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
    streamingTraining(callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientWritableStream<training_v1_training_pb.StreamingTrainingRequest>;
    streamingTraining(metadata: grpc.Metadata, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientWritableStream<training_v1_training_pb.StreamingTrainingRequest>;
    streamingTraining(options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientWritableStream<training_v1_training_pb.StreamingTrainingRequest>;
    streamingTraining(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientWritableStream<training_v1_training_pb.StreamingTrainingRequest>;
}

export class TrainngClient extends grpc.Client implements ITrainngClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public pushData(request: training_v1_training_pb.TrainingData, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
    public pushData(request: training_v1_training_pb.TrainingData, metadata: grpc.Metadata, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
    public pushData(request: training_v1_training_pb.TrainingData, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
    public streamingTraining(callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientWritableStream<training_v1_training_pb.StreamingTrainingRequest>;
    public streamingTraining(metadata: grpc.Metadata, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientWritableStream<training_v1_training_pb.StreamingTrainingRequest>;
    public streamingTraining(options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientWritableStream<training_v1_training_pb.StreamingTrainingRequest>;
    public streamingTraining(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientWritableStream<training_v1_training_pb.StreamingTrainingRequest>;
}
