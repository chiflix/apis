// package: sagittarius.media.v1
// file: media/v1/media.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";

export class Info extends jspb.Message { 
    getMediaHash(): string;
    setMediaHash(value: string): void;

    clearTracksList(): void;
    getTracksList(): Array<Info.TrackInfo>;
    setTracksList(value: Array<Info.TrackInfo>): void;
    addTracks(value?: Info.TrackInfo, index?: number): Info.TrackInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Info.AsObject;
    static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Info;
    static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
}

export namespace Info {
    export type AsObject = {
        mediaHash: string,
        tracksList: Array<Info.TrackInfo.AsObject>,
    }


    export class TrackInfo extends jspb.Message { 
    getTypes(): Info.TrackInfo.Type;
    setTypes(value: Info.TrackInfo.Type): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TrackInfo.AsObject;
        static toObject(includeInstance: boolean, msg: TrackInfo): TrackInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TrackInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TrackInfo;
        static deserializeBinaryFromReader(message: TrackInfo, reader: jspb.BinaryReader): TrackInfo;
    }

    export namespace TrackInfo {
        export type AsObject = {
        types: Info.TrackInfo.Type,
        }

        export enum Type {
    VIDEO = 0,
    AUDIO = 1,
    TEXT = 2,
    OTHER = 3,
        }

    }

}

export class GetInfoRequest extends jspb.Message { 
    getMediaHash(): string;
    setMediaHash(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetInfoRequest): GetInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetInfoRequest;
    static deserializeBinaryFromReader(message: GetInfoRequest, reader: jspb.BinaryReader): GetInfoRequest;
}

export namespace GetInfoRequest {
    export type AsObject = {
        mediaHash: string,
    }
}

export class UpdateInfoRequest extends jspb.Message { 
    getMediaHash(): string;
    setMediaHash(value: string): void;


    hasInfo(): boolean;
    clearInfo(): void;
    getInfo(): Info | undefined;
    setInfo(value?: Info): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateInfoRequest): UpdateInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateInfoRequest;
    static deserializeBinaryFromReader(message: UpdateInfoRequest, reader: jspb.BinaryReader): UpdateInfoRequest;
}

export namespace UpdateInfoRequest {
    export type AsObject = {
        mediaHash: string,
        info?: Info.AsObject,
    }
}

export class ThumbnailTimeRangesRequest extends jspb.Message { 
    getMediaHash(): string;
    setMediaHash(value: string): void;

    getMediaLength(): number;
    setMediaLength(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThumbnailTimeRangesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ThumbnailTimeRangesRequest): ThumbnailTimeRangesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThumbnailTimeRangesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThumbnailTimeRangesRequest;
    static deserializeBinaryFromReader(message: ThumbnailTimeRangesRequest, reader: jspb.BinaryReader): ThumbnailTimeRangesRequest;
}

export namespace ThumbnailTimeRangesRequest {
    export type AsObject = {
        mediaHash: string,
        mediaLength: number,
    }
}

export class TimeRange extends jspb.Message { 
    getBegin(): number;
    setBegin(value: number): void;

    getEnd(): number;
    setEnd(value: number): void;

    getInterval(): number;
    setInterval(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeRange.AsObject;
    static toObject(includeInstance: boolean, msg: TimeRange): TimeRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeRange;
    static deserializeBinaryFromReader(message: TimeRange, reader: jspb.BinaryReader): TimeRange;
}

export namespace TimeRange {
    export type AsObject = {
        begin: number,
        end: number,
        interval: number,
    }
}

export class ThumbnailTimeRangesResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): void;

    getMediaHash(): string;
    setMediaHash(value: string): void;

    clearAvailablesList(): void;
    getAvailablesList(): Array<TimeRange>;
    setAvailablesList(value: Array<TimeRange>): void;
    addAvailables(value?: TimeRange, index?: number): TimeRange;

    clearMissingsList(): void;
    getMissingsList(): Array<TimeRange>;
    setMissingsList(value: Array<TimeRange>): void;
    addMissings(value?: TimeRange, index?: number): TimeRange;

    getToken(): string;
    setToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThumbnailTimeRangesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ThumbnailTimeRangesResponse): ThumbnailTimeRangesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThumbnailTimeRangesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThumbnailTimeRangesResponse;
    static deserializeBinaryFromReader(message: ThumbnailTimeRangesResponse, reader: jspb.BinaryReader): ThumbnailTimeRangesResponse;
}

export namespace ThumbnailTimeRangesResponse {
    export type AsObject = {
        error?: google_rpc_status_pb.Status.AsObject,
        mediaHash: string,
        availablesList: Array<TimeRange.AsObject>,
        missingsList: Array<TimeRange.AsObject>,
        token: string,
    }
}

export class ThumbnailRequest extends jspb.Message { 
    getMediaHash(): string;
    setMediaHash(value: string): void;


    hasRange(): boolean;
    clearRange(): void;
    getRange(): TimeRange | undefined;
    setRange(value?: TimeRange): void;


    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): number;
    setTimestamp(value: number): void;

    getToken(): string;
    setToken(value: string): void;


    getTimeCase(): ThumbnailRequest.TimeCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThumbnailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ThumbnailRequest): ThumbnailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThumbnailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThumbnailRequest;
    static deserializeBinaryFromReader(message: ThumbnailRequest, reader: jspb.BinaryReader): ThumbnailRequest;
}

export namespace ThumbnailRequest {
    export type AsObject = {
        mediaHash: string,
        range?: TimeRange.AsObject,
        timestamp: number,
        token: string,
    }

    export enum TimeCase {
        TIME_NOT_SET = 0,
    
    RANGE = 2,

    TIMESTAMP = 3,

    }

}

export class Thumbnail extends jspb.Message { 
    getTimestamp(): number;
    setTimestamp(value: number): void;

    getExt(): string;
    setExt(value: string): void;

    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Thumbnail.AsObject;
    static toObject(includeInstance: boolean, msg: Thumbnail): Thumbnail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Thumbnail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Thumbnail;
    static deserializeBinaryFromReader(message: Thumbnail, reader: jspb.BinaryReader): Thumbnail;
}

export namespace Thumbnail {
    export type AsObject = {
        timestamp: number,
        ext: string,
        payload: Uint8Array | string,
    }
}

export class ThumbnailResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): void;

    clearThumbnailsList(): void;
    getThumbnailsList(): Array<Thumbnail>;
    setThumbnailsList(value: Array<Thumbnail>): void;
    addThumbnails(value?: Thumbnail, index?: number): Thumbnail;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThumbnailResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ThumbnailResponse): ThumbnailResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThumbnailResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThumbnailResponse;
    static deserializeBinaryFromReader(message: ThumbnailResponse, reader: jspb.BinaryReader): ThumbnailResponse;
}

export namespace ThumbnailResponse {
    export type AsObject = {
        error?: google_rpc_status_pb.Status.AsObject,
        thumbnailsList: Array<Thumbnail.AsObject>,
    }
}

export class UpdateThumbnailRequest extends jspb.Message { 
    getMediaHash(): string;
    setMediaHash(value: string): void;

    clearThumbnailsList(): void;
    getThumbnailsList(): Array<Thumbnail>;
    setThumbnailsList(value: Array<Thumbnail>): void;
    addThumbnails(value?: Thumbnail, index?: number): Thumbnail;

    getToken(): string;
    setToken(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateThumbnailRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateThumbnailRequest): UpdateThumbnailRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateThumbnailRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateThumbnailRequest;
    static deserializeBinaryFromReader(message: UpdateThumbnailRequest, reader: jspb.BinaryReader): UpdateThumbnailRequest;
}

export namespace UpdateThumbnailRequest {
    export type AsObject = {
        mediaHash: string,
        thumbnailsList: Array<Thumbnail.AsObject>,
        token: string,
    }
}
