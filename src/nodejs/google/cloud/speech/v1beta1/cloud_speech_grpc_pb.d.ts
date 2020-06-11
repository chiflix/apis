// package: google.cloud.speech.v1beta1
// file: google/cloud/speech/v1beta1/cloud_speech.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as google_cloud_speech_v1beta1_cloud_speech_pb from "../../../../google/cloud/speech/v1beta1/cloud_speech_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

interface ISpeechService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    syncRecognize: ISpeechService_ISyncRecognize;
    asyncRecognize: ISpeechService_IAsyncRecognize;
    streamingRecognize: ISpeechService_IStreamingRecognize;
}

interface ISpeechService_ISyncRecognize extends grpc.MethodDefinition<google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeRequest, google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeResponse> {
    path: string; // "/google.cloud.speech.v1beta1.Speech/SyncRecognize"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeRequest>;
    responseSerialize: grpc.serialize<google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeResponse>;
    responseDeserialize: grpc.deserialize<google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeResponse>;
}
interface ISpeechService_IAsyncRecognize extends grpc.MethodDefinition<google_cloud_speech_v1beta1_cloud_speech_pb.AsyncRecognizeRequest, google_longrunning_operations_pb.Operation> {
    path: string; // "/google.cloud.speech.v1beta1.Speech/AsyncRecognize"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_cloud_speech_v1beta1_cloud_speech_pb.AsyncRecognizeRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_speech_v1beta1_cloud_speech_pb.AsyncRecognizeRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface ISpeechService_IStreamingRecognize extends grpc.MethodDefinition<google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeResponse> {
    path: string; // "/google.cloud.speech.v1beta1.Speech/StreamingRecognize"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeRequest>;
    responseSerialize: grpc.serialize<google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeResponse>;
    responseDeserialize: grpc.deserialize<google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeResponse>;
}

export const SpeechService: ISpeechService;

export interface ISpeechServer {
    syncRecognize: grpc.handleUnaryCall<google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeRequest, google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeResponse>;
    asyncRecognize: grpc.handleUnaryCall<google_cloud_speech_v1beta1_cloud_speech_pb.AsyncRecognizeRequest, google_longrunning_operations_pb.Operation>;
    streamingRecognize: grpc.handleBidiStreamingCall<google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeResponse>;
}

export interface ISpeechClient {
    syncRecognize(request: google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeResponse) => void): grpc.ClientUnaryCall;
    syncRecognize(request: google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeResponse) => void): grpc.ClientUnaryCall;
    syncRecognize(request: google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeResponse) => void): grpc.ClientUnaryCall;
    asyncRecognize(request: google_cloud_speech_v1beta1_cloud_speech_pb.AsyncRecognizeRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    asyncRecognize(request: google_cloud_speech_v1beta1_cloud_speech_pb.AsyncRecognizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    asyncRecognize(request: google_cloud_speech_v1beta1_cloud_speech_pb.AsyncRecognizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    streamingRecognize(): grpc.ClientDuplexStream<google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeResponse>;
    streamingRecognize(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeResponse>;
    streamingRecognize(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeResponse>;
}

export class SpeechClient extends grpc.Client implements ISpeechClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public syncRecognize(request: google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeResponse) => void): grpc.ClientUnaryCall;
    public syncRecognize(request: google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeResponse) => void): grpc.ClientUnaryCall;
    public syncRecognize(request: google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_speech_v1beta1_cloud_speech_pb.SyncRecognizeResponse) => void): grpc.ClientUnaryCall;
    public asyncRecognize(request: google_cloud_speech_v1beta1_cloud_speech_pb.AsyncRecognizeRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public asyncRecognize(request: google_cloud_speech_v1beta1_cloud_speech_pb.AsyncRecognizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public asyncRecognize(request: google_cloud_speech_v1beta1_cloud_speech_pb.AsyncRecognizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public streamingRecognize(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeResponse>;
    public streamingRecognize(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1beta1_cloud_speech_pb.StreamingRecognizeResponse>;
}
