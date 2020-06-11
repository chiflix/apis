// package: google.cloud.speech.v1
// file: google/cloud/speech/v1/cloud_speech.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as google_cloud_speech_v1_cloud_speech_pb from "../../../../google/cloud/speech/v1/cloud_speech_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_rpc_status_pb from "../../../../google/rpc/status_pb";

interface ISpeechService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    recognize: ISpeechService_IRecognize;
    longRunningRecognize: ISpeechService_ILongRunningRecognize;
    streamingRecognize: ISpeechService_IStreamingRecognize;
}

interface ISpeechService_IRecognize extends grpc.MethodDefinition<google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest, google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse> {
    path: string; // "/google.cloud.speech.v1.Speech/Recognize"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest>;
    responseSerialize: grpc.serialize<google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse>;
    responseDeserialize: grpc.deserialize<google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse>;
}
interface ISpeechService_ILongRunningRecognize extends grpc.MethodDefinition<google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest, google_longrunning_operations_pb.Operation> {
    path: string; // "/google.cloud.speech.v1.Speech/LongRunningRecognize"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface ISpeechService_IStreamingRecognize extends grpc.MethodDefinition<google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse> {
    path: string; // "/google.cloud.speech.v1.Speech/StreamingRecognize"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest>;
    requestDeserialize: grpc.deserialize<google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest>;
    responseSerialize: grpc.serialize<google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse>;
    responseDeserialize: grpc.deserialize<google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse>;
}

export const SpeechService: ISpeechService;

export interface ISpeechServer {
    recognize: grpc.handleUnaryCall<google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest, google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse>;
    longRunningRecognize: grpc.handleUnaryCall<google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest, google_longrunning_operations_pb.Operation>;
    streamingRecognize: grpc.handleBidiStreamingCall<google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse>;
}

export interface ISpeechClient {
    recognize(request: google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse) => void): grpc.ClientUnaryCall;
    recognize(request: google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse) => void): grpc.ClientUnaryCall;
    recognize(request: google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse) => void): grpc.ClientUnaryCall;
    longRunningRecognize(request: google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    longRunningRecognize(request: google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    longRunningRecognize(request: google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    streamingRecognize(): grpc.ClientDuplexStream<google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse>;
    streamingRecognize(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse>;
    streamingRecognize(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse>;
}

export class SpeechClient extends grpc.Client implements ISpeechClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public recognize(request: google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest, callback: (error: grpc.ServiceError | null, response: google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse) => void): grpc.ClientUnaryCall;
    public recognize(request: google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse) => void): grpc.ClientUnaryCall;
    public recognize(request: google_cloud_speech_v1_cloud_speech_pb.RecognizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_cloud_speech_v1_cloud_speech_pb.RecognizeResponse) => void): grpc.ClientUnaryCall;
    public longRunningRecognize(request: google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public longRunningRecognize(request: google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public longRunningRecognize(request: google_cloud_speech_v1_cloud_speech_pb.LongRunningRecognizeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public streamingRecognize(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse>;
    public streamingRecognize(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeRequest, google_cloud_speech_v1_cloud_speech_pb.StreamingRecognizeResponse>;
}
