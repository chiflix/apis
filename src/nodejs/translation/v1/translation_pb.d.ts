// package: sagittarius.translation.v1
// file: translation/v1/translation.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";
import * as google_cloud_speech_v1_cloud_speech_pb from "../../google/cloud/speech/v1/cloud_speech_pb";

export class MediaTranslationRequest extends jspb.Message { 
    getMediaIdentity(): string;
    setMediaIdentity(value: string): void;

    getLanguageCode(): string;
    setLanguageCode(value: string): void;

    getFormat(): string;
    setFormat(value: string): void;

    getStartTime(): number;
    setStartTime(value: number): void;

    getHints(): string;
    setHints(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MediaTranslationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MediaTranslationRequest): MediaTranslationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MediaTranslationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MediaTranslationRequest;
    static deserializeBinaryFromReader(message: MediaTranslationRequest, reader: jspb.BinaryReader): MediaTranslationRequest;
}

export namespace MediaTranslationRequest {
    export type AsObject = {
        mediaIdentity: string,
        languageCode: string,
        format: string,
        startTime: number,
        hints: string,
    }
}

export class MediaTranslationResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): void;

    clearResultsList(): void;
    getResultsList(): Array<TranscriptInfo>;
    setResultsList(value: Array<TranscriptInfo>): void;
    addResults(value?: TranscriptInfo, index?: number): TranscriptInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MediaTranslationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MediaTranslationResponse): MediaTranslationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MediaTranslationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MediaTranslationResponse;
    static deserializeBinaryFromReader(message: MediaTranslationResponse, reader: jspb.BinaryReader): MediaTranslationResponse;
}

export namespace MediaTranslationResponse {
    export type AsObject = {
        error?: google_rpc_status_pb.Status.AsObject,
        resultsList: Array<TranscriptInfo.AsObject>,
    }
}

export class TranscriptInfo extends jspb.Message { 
    getTranscriptIdentity(): string;
    setTranscriptIdentity(value: string): void;

    getLanguageCode(): string;
    setLanguageCode(value: string): void;

    getRanking(): number;
    setRanking(value: number): void;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): void;
    addTags(value: string, index?: number): string;

    getDelay(): number;
    setDelay(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranscriptInfo.AsObject;
    static toObject(includeInstance: boolean, msg: TranscriptInfo): TranscriptInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranscriptInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranscriptInfo;
    static deserializeBinaryFromReader(message: TranscriptInfo, reader: jspb.BinaryReader): TranscriptInfo;
}

export namespace TranscriptInfo {
    export type AsObject = {
        transcriptIdentity: string,
        languageCode: string,
        ranking: number,
        tagsList: Array<string>,
        delay: number,
    }
}

export class DetectionRequest extends jspb.Message { 
    getText(): string;
    setText(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DetectionRequest): DetectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectionRequest;
    static deserializeBinaryFromReader(message: DetectionRequest, reader: jspb.BinaryReader): DetectionRequest;
}

export namespace DetectionRequest {
    export type AsObject = {
        text: string,
    }
}

export class DetectionResponse extends jspb.Message { 
    clearPredictionList(): void;
    getPredictionList(): Array<DetectionPrediction>;
    setPredictionList(value: Array<DetectionPrediction>): void;
    addPrediction(value?: DetectionPrediction, index?: number): DetectionPrediction;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DetectionResponse): DetectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectionResponse;
    static deserializeBinaryFromReader(message: DetectionResponse, reader: jspb.BinaryReader): DetectionResponse;
}

export namespace DetectionResponse {
    export type AsObject = {
        predictionList: Array<DetectionPrediction.AsObject>,
    }
}

export class DetectionPrediction extends jspb.Message { 
    getLanguageCode(): string;
    setLanguageCode(value: string): void;

    getConfidence(): number;
    setConfidence(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectionPrediction.AsObject;
    static toObject(includeInstance: boolean, msg: DetectionPrediction): DetectionPrediction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetectionPrediction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectionPrediction;
    static deserializeBinaryFromReader(message: DetectionPrediction, reader: jspb.BinaryReader): DetectionPrediction;
}

export namespace DetectionPrediction {
    export type AsObject = {
        languageCode: string,
        confidence: number,
    }
}

export class TranscriptRequest extends jspb.Message { 
    getTranscriptIdentity(): string;
    setTranscriptIdentity(value: string): void;

    getStartTime(): number;
    setStartTime(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranscriptRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TranscriptRequest): TranscriptRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranscriptRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranscriptRequest;
    static deserializeBinaryFromReader(message: TranscriptRequest, reader: jspb.BinaryReader): TranscriptRequest;
}

export namespace TranscriptRequest {
    export type AsObject = {
        transcriptIdentity: string,
        startTime: number,
    }
}

export class TranscriptResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): void;

    clearTranscriptsList(): void;
    getTranscriptsList(): Array<TranscriptResponse.Cue>;
    setTranscriptsList(value: Array<TranscriptResponse.Cue>): void;
    addTranscripts(value?: TranscriptResponse.Cue, index?: number): TranscriptResponse.Cue;

    getIsEndOfTranscript(): boolean;
    setIsEndOfTranscript(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranscriptResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TranscriptResponse): TranscriptResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranscriptResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranscriptResponse;
    static deserializeBinaryFromReader(message: TranscriptResponse, reader: jspb.BinaryReader): TranscriptResponse;
}

export namespace TranscriptResponse {
    export type AsObject = {
        error?: google_rpc_status_pb.Status.AsObject,
        transcriptsList: Array<TranscriptResponse.Cue.AsObject>,
        isEndOfTranscript: boolean,
    }


    export class Cue extends jspb.Message { 
    getStartTime(): number;
    setStartTime(value: number): void;

    getEndTime(): number;
    setEndTime(value: number): void;

    getText(): string;
    setText(value: string): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Cue.AsObject;
        static toObject(includeInstance: boolean, msg: Cue): Cue.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Cue, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Cue;
        static deserializeBinaryFromReader(message: Cue, reader: jspb.BinaryReader): Cue;
    }

    export namespace Cue {
        export type AsObject = {
        startTime: number,
        endTime: number,
        text: string,
        }
    }

}

export class StreamingTranslationRequest extends jspb.Message { 

    hasStreamingConfig(): boolean;
    clearStreamingConfig(): void;
    getStreamingConfig(): StreamingTranslationRequestConfig | undefined;
    setStreamingConfig(value?: StreamingTranslationRequestConfig): void;


    hasAudioContent(): boolean;
    clearAudioContent(): void;
    getAudioContent(): Uint8Array | string;
    getAudioContent_asU8(): Uint8Array;
    getAudioContent_asB64(): string;
    setAudioContent(value: Uint8Array | string): void;


    getStreamingRequestCase(): StreamingTranslationRequest.StreamingRequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingTranslationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingTranslationRequest): StreamingTranslationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingTranslationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingTranslationRequest;
    static deserializeBinaryFromReader(message: StreamingTranslationRequest, reader: jspb.BinaryReader): StreamingTranslationRequest;
}

export namespace StreamingTranslationRequest {
    export type AsObject = {
        streamingConfig?: StreamingTranslationRequestConfig.AsObject,
        audioContent: Uint8Array | string,
    }

    export enum StreamingRequestCase {
        STREAMINGREQUEST_NOT_SET = 0,
    
    STREAMING_CONFIG = 1,

    AUDIO_CONTENT = 2,

    }

}

export class StreamingTranslationRequestConfig extends jspb.Message { 

    hasStreamingConfig(): boolean;
    clearStreamingConfig(): void;
    getStreamingConfig(): google_cloud_speech_v1_cloud_speech_pb.RecognitionConfig | undefined;
    setStreamingConfig(value?: google_cloud_speech_v1_cloud_speech_pb.RecognitionConfig): void;

    getMediaIdentity(): string;
    setMediaIdentity(value: string): void;

    getAudioLanguageCode(): string;
    setAudioLanguageCode(value: string): void;

    getTargetLanguageCode(): string;
    setTargetLanguageCode(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingTranslationRequestConfig.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingTranslationRequestConfig): StreamingTranslationRequestConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingTranslationRequestConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingTranslationRequestConfig;
    static deserializeBinaryFromReader(message: StreamingTranslationRequestConfig, reader: jspb.BinaryReader): StreamingTranslationRequestConfig;
}

export namespace StreamingTranslationRequestConfig {
    export type AsObject = {
        streamingConfig?: google_cloud_speech_v1_cloud_speech_pb.RecognitionConfig.AsObject,
        mediaIdentity: string,
        audioLanguageCode: string,
        targetLanguageCode: string,
    }
}

export class StreamingTranslationResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): void;


    hasStreamingResult(): boolean;
    clearStreamingResult(): void;
    getStreamingResult(): StreamingTranslationResult | undefined;
    setStreamingResult(value?: StreamingTranslationResult): void;


    hasTaskinfo(): boolean;
    clearTaskinfo(): void;
    getTaskinfo(): StreamingTranslationTaskInfo | undefined;
    setTaskinfo(value?: StreamingTranslationTaskInfo): void;


    hasTranscriptResult(): boolean;
    clearTranscriptResult(): void;
    getTranscriptResult(): TranscriptInfo | undefined;
    setTranscriptResult(value?: TranscriptInfo): void;


    getStreamingResponseCase(): StreamingTranslationResponse.StreamingResponseCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingTranslationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingTranslationResponse): StreamingTranslationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingTranslationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingTranslationResponse;
    static deserializeBinaryFromReader(message: StreamingTranslationResponse, reader: jspb.BinaryReader): StreamingTranslationResponse;
}

export namespace StreamingTranslationResponse {
    export type AsObject = {
        error?: google_rpc_status_pb.Status.AsObject,
        streamingResult?: StreamingTranslationResult.AsObject,
        taskinfo?: StreamingTranslationTaskInfo.AsObject,
        transcriptResult?: TranscriptInfo.AsObject,
    }

    export enum StreamingResponseCase {
        STREAMINGRESPONSE_NOT_SET = 0,
    
    STREAMING_RESULT = 2,

    TASKINFO = 3,

    TRANSCRIPT_RESULT = 4,

    }

}

export class StreamingTranslationTaskRequest extends jspb.Message { 
    getTaskId(): string;
    setTaskId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingTranslationTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingTranslationTaskRequest): StreamingTranslationTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingTranslationTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingTranslationTaskRequest;
    static deserializeBinaryFromReader(message: StreamingTranslationTaskRequest, reader: jspb.BinaryReader): StreamingTranslationTaskRequest;
}

export namespace StreamingTranslationTaskRequest {
    export type AsObject = {
        taskId: string,
    }
}

export class StreamingTranslationTaskResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): void;


    hasTaskinfo(): boolean;
    clearTaskinfo(): void;
    getTaskinfo(): StreamingTranslationTaskInfo | undefined;
    setTaskinfo(value?: StreamingTranslationTaskInfo): void;


    hasTranscriptinfo(): boolean;
    clearTranscriptinfo(): void;
    getTranscriptinfo(): TranscriptInfo | undefined;
    setTranscriptinfo(value?: TranscriptInfo): void;


    getStreamingRequestCase(): StreamingTranslationTaskResponse.StreamingRequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingTranslationTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingTranslationTaskResponse): StreamingTranslationTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingTranslationTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingTranslationTaskResponse;
    static deserializeBinaryFromReader(message: StreamingTranslationTaskResponse, reader: jspb.BinaryReader): StreamingTranslationTaskResponse;
}

export namespace StreamingTranslationTaskResponse {
    export type AsObject = {
        error?: google_rpc_status_pb.Status.AsObject,
        taskinfo?: StreamingTranslationTaskInfo.AsObject,
        transcriptinfo?: TranscriptInfo.AsObject,
    }

    export enum StreamingRequestCase {
        STREAMINGREQUEST_NOT_SET = 0,
    
    TASKINFO = 2,

    TRANSCRIPTINFO = 3,

    }

}

export class StreamingTranslationTaskInfo extends jspb.Message { 
    getTaskId(): string;
    setTaskId(value: string): void;

    getEstimateTime(): number;
    setEstimateTime(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingTranslationTaskInfo.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingTranslationTaskInfo): StreamingTranslationTaskInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingTranslationTaskInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingTranslationTaskInfo;
    static deserializeBinaryFromReader(message: StreamingTranslationTaskInfo, reader: jspb.BinaryReader): StreamingTranslationTaskInfo;
}

export namespace StreamingTranslationTaskInfo {
    export type AsObject = {
        taskId: string,
        estimateTime: number,
    }
}

export class StreamingTranslationResult extends jspb.Message { 
    getTranscript(): string;
    setTranscript(value: string): void;

    getConfidence(): number;
    setConfidence(value: number): void;

    getStability(): number;
    setStability(value: number): void;

    getStartTime(): number;
    setStartTime(value: number): void;

    getEndTime(): number;
    setEndTime(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingTranslationResult.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingTranslationResult): StreamingTranslationResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingTranslationResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingTranslationResult;
    static deserializeBinaryFromReader(message: StreamingTranslationResult, reader: jspb.BinaryReader): StreamingTranslationResult;
}

export namespace StreamingTranslationResult {
    export type AsObject = {
        transcript: string,
        confidence: number,
        stability: number,
        startTime: number,
        endTime: number,
    }
}

export class TextTranslationRequest extends jspb.Message { 
    clearTextList(): void;
    getTextList(): Array<string>;
    setTextList(value: Array<string>): void;
    addText(value: string, index?: number): string;

    getTargetLanguageCode(): string;
    setTargetLanguageCode(value: string): void;

    getSourceLanguageCode(): string;
    setSourceLanguageCode(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextTranslationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TextTranslationRequest): TextTranslationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextTranslationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextTranslationRequest;
    static deserializeBinaryFromReader(message: TextTranslationRequest, reader: jspb.BinaryReader): TextTranslationRequest;
}

export namespace TextTranslationRequest {
    export type AsObject = {
        textList: Array<string>,
        targetLanguageCode: string,
        sourceLanguageCode: string,
    }
}

export class TextTranslationResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): void;

    clearResultsList(): void;
    getResultsList(): Array<TextTranslationResponse.Text>;
    setResultsList(value: Array<TextTranslationResponse.Text>): void;
    addResults(value?: TextTranslationResponse.Text, index?: number): TextTranslationResponse.Text;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextTranslationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TextTranslationResponse): TextTranslationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextTranslationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextTranslationResponse;
    static deserializeBinaryFromReader(message: TextTranslationResponse, reader: jspb.BinaryReader): TextTranslationResponse;
}

export namespace TextTranslationResponse {
    export type AsObject = {
        error?: google_rpc_status_pb.Status.AsObject,
        resultsList: Array<TextTranslationResponse.Text.AsObject>,
    }


    export class Text extends jspb.Message { 
    getSourceLanguage(): string;
    setSourceLanguage(value: string): void;

    getText(): string;
    setText(value: string): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Text.AsObject;
        static toObject(includeInstance: boolean, msg: Text): Text.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Text, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Text;
        static deserializeBinaryFromReader(message: Text, reader: jspb.BinaryReader): Text;
    }

    export namespace Text {
        export type AsObject = {
        sourceLanguage: string,
        text: string,
        }
    }

}

export enum StreamingTranslationTaskCode {
    OK = 0,
    CONTINUE = 9100,
    SKIP_AUDIO = 9101,
}
