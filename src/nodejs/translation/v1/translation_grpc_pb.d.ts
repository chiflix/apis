// package: sagittarius.translation.v1
// file: translation/v1/translation.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as translation_v1_translation_pb from "../../translation/v1/translation_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";
import * as google_cloud_speech_v1_cloud_speech_pb from "../../google/cloud/speech/v1/cloud_speech_pb";

interface ITranslationService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    translateMedia: ITranslationService_ITranslateMedia;
    detectLanguage: ITranslationService_IDetectLanguage;
    transcript: ITranslationService_ITranscript;
    streamingTranslation: ITranslationService_IStreamingTranslation;
}

interface ITranslationService_ITranslateMedia extends grpc.MethodDefinition<translation_v1_translation_pb.MediaTranslationRequest, translation_v1_translation_pb.MediaTranslationResponse> {
    path: string; // "/sagittarius.translation.v1.Translation/TranslateMedia"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<translation_v1_translation_pb.MediaTranslationRequest>;
    requestDeserialize: grpc.deserialize<translation_v1_translation_pb.MediaTranslationRequest>;
    responseSerialize: grpc.serialize<translation_v1_translation_pb.MediaTranslationResponse>;
    responseDeserialize: grpc.deserialize<translation_v1_translation_pb.MediaTranslationResponse>;
}
interface ITranslationService_IDetectLanguage extends grpc.MethodDefinition<translation_v1_translation_pb.DetectionRequest, translation_v1_translation_pb.DetectionResponse> {
    path: string; // "/sagittarius.translation.v1.Translation/DetectLanguage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<translation_v1_translation_pb.DetectionRequest>;
    requestDeserialize: grpc.deserialize<translation_v1_translation_pb.DetectionRequest>;
    responseSerialize: grpc.serialize<translation_v1_translation_pb.DetectionResponse>;
    responseDeserialize: grpc.deserialize<translation_v1_translation_pb.DetectionResponse>;
}
interface ITranslationService_ITranscript extends grpc.MethodDefinition<translation_v1_translation_pb.TranscriptRequest, translation_v1_translation_pb.TranscriptResponse> {
    path: string; // "/sagittarius.translation.v1.Translation/Transcript"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<translation_v1_translation_pb.TranscriptRequest>;
    requestDeserialize: grpc.deserialize<translation_v1_translation_pb.TranscriptRequest>;
    responseSerialize: grpc.serialize<translation_v1_translation_pb.TranscriptResponse>;
    responseDeserialize: grpc.deserialize<translation_v1_translation_pb.TranscriptResponse>;
}
interface ITranslationService_IStreamingTranslation extends grpc.MethodDefinition<translation_v1_translation_pb.StreamingTranslationRequest, translation_v1_translation_pb.StreamingTranslationResponse> {
    path: string; // "/sagittarius.translation.v1.Translation/StreamingTranslation"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<translation_v1_translation_pb.StreamingTranslationRequest>;
    requestDeserialize: grpc.deserialize<translation_v1_translation_pb.StreamingTranslationRequest>;
    responseSerialize: grpc.serialize<translation_v1_translation_pb.StreamingTranslationResponse>;
    responseDeserialize: grpc.deserialize<translation_v1_translation_pb.StreamingTranslationResponse>;
}

export const TranslationService: ITranslationService;

export interface ITranslationServer {
    translateMedia: grpc.handleUnaryCall<translation_v1_translation_pb.MediaTranslationRequest, translation_v1_translation_pb.MediaTranslationResponse>;
    detectLanguage: grpc.handleUnaryCall<translation_v1_translation_pb.DetectionRequest, translation_v1_translation_pb.DetectionResponse>;
    transcript: grpc.handleUnaryCall<translation_v1_translation_pb.TranscriptRequest, translation_v1_translation_pb.TranscriptResponse>;
    streamingTranslation: grpc.handleBidiStreamingCall<translation_v1_translation_pb.StreamingTranslationRequest, translation_v1_translation_pb.StreamingTranslationResponse>;
}

export interface ITranslationClient {
    translateMedia(request: translation_v1_translation_pb.MediaTranslationRequest, callback: (error: Error | null, response: translation_v1_translation_pb.MediaTranslationResponse) => void): grpc.ClientUnaryCall;
    translateMedia(request: translation_v1_translation_pb.MediaTranslationRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: translation_v1_translation_pb.MediaTranslationResponse) => void): grpc.ClientUnaryCall;
    translateMedia(request: translation_v1_translation_pb.MediaTranslationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: translation_v1_translation_pb.MediaTranslationResponse) => void): grpc.ClientUnaryCall;
    detectLanguage(request: translation_v1_translation_pb.DetectionRequest, callback: (error: Error | null, response: translation_v1_translation_pb.DetectionResponse) => void): grpc.ClientUnaryCall;
    detectLanguage(request: translation_v1_translation_pb.DetectionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: translation_v1_translation_pb.DetectionResponse) => void): grpc.ClientUnaryCall;
    detectLanguage(request: translation_v1_translation_pb.DetectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: translation_v1_translation_pb.DetectionResponse) => void): grpc.ClientUnaryCall;
    transcript(request: translation_v1_translation_pb.TranscriptRequest, callback: (error: Error | null, response: translation_v1_translation_pb.TranscriptResponse) => void): grpc.ClientUnaryCall;
    transcript(request: translation_v1_translation_pb.TranscriptRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: translation_v1_translation_pb.TranscriptResponse) => void): grpc.ClientUnaryCall;
    transcript(request: translation_v1_translation_pb.TranscriptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: translation_v1_translation_pb.TranscriptResponse) => void): grpc.ClientUnaryCall;
    streamingTranslation(): grpc.ClientDuplexStream<translation_v1_translation_pb.StreamingTranslationRequest, translation_v1_translation_pb.StreamingTranslationResponse>;
    streamingTranslation(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<translation_v1_translation_pb.StreamingTranslationRequest, translation_v1_translation_pb.StreamingTranslationResponse>;
    streamingTranslation(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<translation_v1_translation_pb.StreamingTranslationRequest, translation_v1_translation_pb.StreamingTranslationResponse>;
}

export class TranslationClient extends grpc.Client implements ITranslationClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public translateMedia(request: translation_v1_translation_pb.MediaTranslationRequest, callback: (error: Error | null, response: translation_v1_translation_pb.MediaTranslationResponse) => void): grpc.ClientUnaryCall;
    public translateMedia(request: translation_v1_translation_pb.MediaTranslationRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: translation_v1_translation_pb.MediaTranslationResponse) => void): grpc.ClientUnaryCall;
    public translateMedia(request: translation_v1_translation_pb.MediaTranslationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: translation_v1_translation_pb.MediaTranslationResponse) => void): grpc.ClientUnaryCall;
    public detectLanguage(request: translation_v1_translation_pb.DetectionRequest, callback: (error: Error | null, response: translation_v1_translation_pb.DetectionResponse) => void): grpc.ClientUnaryCall;
    public detectLanguage(request: translation_v1_translation_pb.DetectionRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: translation_v1_translation_pb.DetectionResponse) => void): grpc.ClientUnaryCall;
    public detectLanguage(request: translation_v1_translation_pb.DetectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: translation_v1_translation_pb.DetectionResponse) => void): grpc.ClientUnaryCall;
    public transcript(request: translation_v1_translation_pb.TranscriptRequest, callback: (error: Error | null, response: translation_v1_translation_pb.TranscriptResponse) => void): grpc.ClientUnaryCall;
    public transcript(request: translation_v1_translation_pb.TranscriptRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: translation_v1_translation_pb.TranscriptResponse) => void): grpc.ClientUnaryCall;
    public transcript(request: translation_v1_translation_pb.TranscriptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: translation_v1_translation_pb.TranscriptResponse) => void): grpc.ClientUnaryCall;
    public streamingTranslation(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<translation_v1_translation_pb.StreamingTranslationRequest, translation_v1_translation_pb.StreamingTranslationResponse>;
    public streamingTranslation(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<translation_v1_translation_pb.StreamingTranslationRequest, translation_v1_translation_pb.StreamingTranslationResponse>;
}
