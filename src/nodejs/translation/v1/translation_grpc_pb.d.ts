// package: sagittarius.translation.v1
// file: translation/v1/translation.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as translation_v1_translation_pb from "../../translation/v1/translation_pb";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";
import * as google_cloud_speech_v1_cloud_speech_pb from "../../google/cloud/speech/v1/cloud_speech_pb";

interface ITranslationService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    translateMedia: ITranslationService_ITranslateMedia;
    detectLanguage: ITranslationService_IDetectLanguage;
    transcript: ITranslationService_ITranscript;
    translateText: ITranslationService_ITranslateText;
    streamingTranslation: ITranslationService_IStreamingTranslation;
    streamingTranslationTask: ITranslationService_IStreamingTranslationTask;
    processOrder: ITranslationService_IProcessOrder;
    getUserQuota: ITranslationService_IGetUserQuota;
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
interface ITranslationService_ITranslateText extends grpc.MethodDefinition<translation_v1_translation_pb.TextTranslationRequest, translation_v1_translation_pb.TextTranslationResponse> {
    path: string; // "/sagittarius.translation.v1.Translation/TranslateText"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<translation_v1_translation_pb.TextTranslationRequest>;
    requestDeserialize: grpc.deserialize<translation_v1_translation_pb.TextTranslationRequest>;
    responseSerialize: grpc.serialize<translation_v1_translation_pb.TextTranslationResponse>;
    responseDeserialize: grpc.deserialize<translation_v1_translation_pb.TextTranslationResponse>;
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
interface ITranslationService_IStreamingTranslationTask extends grpc.MethodDefinition<translation_v1_translation_pb.StreamingTranslationTaskRequest, translation_v1_translation_pb.StreamingTranslationTaskResponse> {
    path: string; // "/sagittarius.translation.v1.Translation/StreamingTranslationTask"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<translation_v1_translation_pb.StreamingTranslationTaskRequest>;
    requestDeserialize: grpc.deserialize<translation_v1_translation_pb.StreamingTranslationTaskRequest>;
    responseSerialize: grpc.serialize<translation_v1_translation_pb.StreamingTranslationTaskResponse>;
    responseDeserialize: grpc.deserialize<translation_v1_translation_pb.StreamingTranslationTaskResponse>;
}
interface ITranslationService_IProcessOrder extends grpc.MethodDefinition<translation_v1_translation_pb.ProcessOrderRequest, translation_v1_translation_pb.ProcessOrderResponse> {
    path: string; // "/sagittarius.translation.v1.Translation/ProcessOrder"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<translation_v1_translation_pb.ProcessOrderRequest>;
    requestDeserialize: grpc.deserialize<translation_v1_translation_pb.ProcessOrderRequest>;
    responseSerialize: grpc.serialize<translation_v1_translation_pb.ProcessOrderResponse>;
    responseDeserialize: grpc.deserialize<translation_v1_translation_pb.ProcessOrderResponse>;
}
interface ITranslationService_IGetUserQuota extends grpc.MethodDefinition<translation_v1_translation_pb.UserQuotaRequest, translation_v1_translation_pb.UserQuotaResponse> {
    path: string; // "/sagittarius.translation.v1.Translation/GetUserQuota"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<translation_v1_translation_pb.UserQuotaRequest>;
    requestDeserialize: grpc.deserialize<translation_v1_translation_pb.UserQuotaRequest>;
    responseSerialize: grpc.serialize<translation_v1_translation_pb.UserQuotaResponse>;
    responseDeserialize: grpc.deserialize<translation_v1_translation_pb.UserQuotaResponse>;
}

export const TranslationService: ITranslationService;

export interface ITranslationServer {
    translateMedia: grpc.handleUnaryCall<translation_v1_translation_pb.MediaTranslationRequest, translation_v1_translation_pb.MediaTranslationResponse>;
    detectLanguage: grpc.handleUnaryCall<translation_v1_translation_pb.DetectionRequest, translation_v1_translation_pb.DetectionResponse>;
    transcript: grpc.handleUnaryCall<translation_v1_translation_pb.TranscriptRequest, translation_v1_translation_pb.TranscriptResponse>;
    translateText: grpc.handleUnaryCall<translation_v1_translation_pb.TextTranslationRequest, translation_v1_translation_pb.TextTranslationResponse>;
    streamingTranslation: grpc.handleBidiStreamingCall<translation_v1_translation_pb.StreamingTranslationRequest, translation_v1_translation_pb.StreamingTranslationResponse>;
    streamingTranslationTask: grpc.handleUnaryCall<translation_v1_translation_pb.StreamingTranslationTaskRequest, translation_v1_translation_pb.StreamingTranslationTaskResponse>;
    processOrder: grpc.handleUnaryCall<translation_v1_translation_pb.ProcessOrderRequest, translation_v1_translation_pb.ProcessOrderResponse>;
    getUserQuota: grpc.handleUnaryCall<translation_v1_translation_pb.UserQuotaRequest, translation_v1_translation_pb.UserQuotaResponse>;
}

export interface ITranslationClient {
    translateMedia(request: translation_v1_translation_pb.MediaTranslationRequest, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.MediaTranslationResponse) => void): grpc.ClientUnaryCall;
    translateMedia(request: translation_v1_translation_pb.MediaTranslationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.MediaTranslationResponse) => void): grpc.ClientUnaryCall;
    translateMedia(request: translation_v1_translation_pb.MediaTranslationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.MediaTranslationResponse) => void): grpc.ClientUnaryCall;
    detectLanguage(request: translation_v1_translation_pb.DetectionRequest, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.DetectionResponse) => void): grpc.ClientUnaryCall;
    detectLanguage(request: translation_v1_translation_pb.DetectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.DetectionResponse) => void): grpc.ClientUnaryCall;
    detectLanguage(request: translation_v1_translation_pb.DetectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.DetectionResponse) => void): grpc.ClientUnaryCall;
    transcript(request: translation_v1_translation_pb.TranscriptRequest, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.TranscriptResponse) => void): grpc.ClientUnaryCall;
    transcript(request: translation_v1_translation_pb.TranscriptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.TranscriptResponse) => void): grpc.ClientUnaryCall;
    transcript(request: translation_v1_translation_pb.TranscriptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.TranscriptResponse) => void): grpc.ClientUnaryCall;
    translateText(request: translation_v1_translation_pb.TextTranslationRequest, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.TextTranslationResponse) => void): grpc.ClientUnaryCall;
    translateText(request: translation_v1_translation_pb.TextTranslationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.TextTranslationResponse) => void): grpc.ClientUnaryCall;
    translateText(request: translation_v1_translation_pb.TextTranslationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.TextTranslationResponse) => void): grpc.ClientUnaryCall;
    streamingTranslation(): grpc.ClientDuplexStream<translation_v1_translation_pb.StreamingTranslationRequest, translation_v1_translation_pb.StreamingTranslationResponse>;
    streamingTranslation(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<translation_v1_translation_pb.StreamingTranslationRequest, translation_v1_translation_pb.StreamingTranslationResponse>;
    streamingTranslation(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<translation_v1_translation_pb.StreamingTranslationRequest, translation_v1_translation_pb.StreamingTranslationResponse>;
    streamingTranslationTask(request: translation_v1_translation_pb.StreamingTranslationTaskRequest, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.StreamingTranslationTaskResponse) => void): grpc.ClientUnaryCall;
    streamingTranslationTask(request: translation_v1_translation_pb.StreamingTranslationTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.StreamingTranslationTaskResponse) => void): grpc.ClientUnaryCall;
    streamingTranslationTask(request: translation_v1_translation_pb.StreamingTranslationTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.StreamingTranslationTaskResponse) => void): grpc.ClientUnaryCall;
    processOrder(request: translation_v1_translation_pb.ProcessOrderRequest, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.ProcessOrderResponse) => void): grpc.ClientUnaryCall;
    processOrder(request: translation_v1_translation_pb.ProcessOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.ProcessOrderResponse) => void): grpc.ClientUnaryCall;
    processOrder(request: translation_v1_translation_pb.ProcessOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.ProcessOrderResponse) => void): grpc.ClientUnaryCall;
    getUserQuota(request: translation_v1_translation_pb.UserQuotaRequest, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.UserQuotaResponse) => void): grpc.ClientUnaryCall;
    getUserQuota(request: translation_v1_translation_pb.UserQuotaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.UserQuotaResponse) => void): grpc.ClientUnaryCall;
    getUserQuota(request: translation_v1_translation_pb.UserQuotaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.UserQuotaResponse) => void): grpc.ClientUnaryCall;
}

export class TranslationClient extends grpc.Client implements ITranslationClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public translateMedia(request: translation_v1_translation_pb.MediaTranslationRequest, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.MediaTranslationResponse) => void): grpc.ClientUnaryCall;
    public translateMedia(request: translation_v1_translation_pb.MediaTranslationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.MediaTranslationResponse) => void): grpc.ClientUnaryCall;
    public translateMedia(request: translation_v1_translation_pb.MediaTranslationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.MediaTranslationResponse) => void): grpc.ClientUnaryCall;
    public detectLanguage(request: translation_v1_translation_pb.DetectionRequest, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.DetectionResponse) => void): grpc.ClientUnaryCall;
    public detectLanguage(request: translation_v1_translation_pb.DetectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.DetectionResponse) => void): grpc.ClientUnaryCall;
    public detectLanguage(request: translation_v1_translation_pb.DetectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.DetectionResponse) => void): grpc.ClientUnaryCall;
    public transcript(request: translation_v1_translation_pb.TranscriptRequest, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.TranscriptResponse) => void): grpc.ClientUnaryCall;
    public transcript(request: translation_v1_translation_pb.TranscriptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.TranscriptResponse) => void): grpc.ClientUnaryCall;
    public transcript(request: translation_v1_translation_pb.TranscriptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.TranscriptResponse) => void): grpc.ClientUnaryCall;
    public translateText(request: translation_v1_translation_pb.TextTranslationRequest, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.TextTranslationResponse) => void): grpc.ClientUnaryCall;
    public translateText(request: translation_v1_translation_pb.TextTranslationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.TextTranslationResponse) => void): grpc.ClientUnaryCall;
    public translateText(request: translation_v1_translation_pb.TextTranslationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.TextTranslationResponse) => void): grpc.ClientUnaryCall;
    public streamingTranslation(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<translation_v1_translation_pb.StreamingTranslationRequest, translation_v1_translation_pb.StreamingTranslationResponse>;
    public streamingTranslation(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<translation_v1_translation_pb.StreamingTranslationRequest, translation_v1_translation_pb.StreamingTranslationResponse>;
    public streamingTranslationTask(request: translation_v1_translation_pb.StreamingTranslationTaskRequest, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.StreamingTranslationTaskResponse) => void): grpc.ClientUnaryCall;
    public streamingTranslationTask(request: translation_v1_translation_pb.StreamingTranslationTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.StreamingTranslationTaskResponse) => void): grpc.ClientUnaryCall;
    public streamingTranslationTask(request: translation_v1_translation_pb.StreamingTranslationTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.StreamingTranslationTaskResponse) => void): grpc.ClientUnaryCall;
    public processOrder(request: translation_v1_translation_pb.ProcessOrderRequest, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.ProcessOrderResponse) => void): grpc.ClientUnaryCall;
    public processOrder(request: translation_v1_translation_pb.ProcessOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.ProcessOrderResponse) => void): grpc.ClientUnaryCall;
    public processOrder(request: translation_v1_translation_pb.ProcessOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.ProcessOrderResponse) => void): grpc.ClientUnaryCall;
    public getUserQuota(request: translation_v1_translation_pb.UserQuotaRequest, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.UserQuotaResponse) => void): grpc.ClientUnaryCall;
    public getUserQuota(request: translation_v1_translation_pb.UserQuotaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.UserQuotaResponse) => void): grpc.ClientUnaryCall;
    public getUserQuota(request: translation_v1_translation_pb.UserQuotaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: translation_v1_translation_pb.UserQuotaResponse) => void): grpc.ClientUnaryCall;
}
