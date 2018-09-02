// package: sagittarius.training.v1
// file: training/v1/training.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";
import * as google_cloud_speech_v1_cloud_speech_pb from "../../google/cloud/speech/v1/cloud_speech_pb";

export class TrainingData extends jspb.Message { 
    getMediaIdentity(): string;
    setMediaIdentity(value: string): void;

    getLanguageCode(): string;
    setLanguageCode(value: string): void;

    getFormat(): string;
    setFormat(value: string): void;

    getPlayedTime(): number;
    setPlayedTime(value: number): void;

    getTotalTime(): number;
    setTotalTime(value: number): void;

    getDelay(): number;
    setDelay(value: number): void;


    hasTranscriptIdentity(): boolean;
    clearTranscriptIdentity(): void;
    getTranscriptIdentity(): string;
    setTranscriptIdentity(value: string): void;


    hasPayload(): boolean;
    clearPayload(): void;
    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): void;


    getDataCase(): TrainingData.DataCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TrainingData.AsObject;
    static toObject(includeInstance: boolean, msg: TrainingData): TrainingData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TrainingData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TrainingData;
    static deserializeBinaryFromReader(message: TrainingData, reader: jspb.BinaryReader): TrainingData;
}

export namespace TrainingData {
    export type AsObject = {
        mediaIdentity: string,
        languageCode: string,
        format: string,
        playedTime: number,
        totalTime: number,
        delay: number,
        transcriptIdentity: string,
        payload: Uint8Array | string,
    }

    export enum DataCase {
        DATA_NOT_SET = 0,
    
    TRANSCRIPT_IDENTITY = 3,

    PAYLOAD = 7,

    }

}

export class StreamingTrainingRequest extends jspb.Message { 

    hasStreamingConfig(): boolean;
    clearStreamingConfig(): void;
    getStreamingConfig(): google_cloud_speech_v1_cloud_speech_pb.RecognitionConfig | undefined;
    setStreamingConfig(value?: google_cloud_speech_v1_cloud_speech_pb.RecognitionConfig): void;


    hasAudioContent(): boolean;
    clearAudioContent(): void;
    getAudioContent(): Uint8Array | string;
    getAudioContent_asU8(): Uint8Array;
    getAudioContent_asB64(): string;
    setAudioContent(value: Uint8Array | string): void;

    getTranscript(): string;
    setTranscript(value: string): void;

    getMediaIdentity(): string;
    setMediaIdentity(value: string): void;


    getStreamingRequestCase(): StreamingTrainingRequest.StreamingRequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingTrainingRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingTrainingRequest): StreamingTrainingRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingTrainingRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingTrainingRequest;
    static deserializeBinaryFromReader(message: StreamingTrainingRequest, reader: jspb.BinaryReader): StreamingTrainingRequest;
}

export namespace StreamingTrainingRequest {
    export type AsObject = {
        streamingConfig?: google_cloud_speech_v1_cloud_speech_pb.RecognitionConfig.AsObject,
        audioContent: Uint8Array | string,
        transcript: string,
        mediaIdentity: string,
    }

    export enum StreamingRequestCase {
        STREAMINGREQUEST_NOT_SET = 0,
    
    STREAMING_CONFIG = 1,

    AUDIO_CONTENT = 2,

    }

}
