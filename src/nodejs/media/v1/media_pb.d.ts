// package: sagittarius.media.v1
// file: media/v1/media.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";

export class Info extends jspb.Message { 
    getMediaHash(): string;
    setMediaHash(value: string): void;

    clearTracksList(): void;
    getTracksList(): Array<TrackInfo>;
    setTracksList(value: Array<TrackInfo>): void;
    addTracks(value?: TrackInfo, index?: number): TrackInfo;


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
        tracksList: Array<TrackInfo.AsObject>,
    }
}

export class TrackInfo extends jspb.Message { 
    getTypes(): TrackInfo.Type;
    setTypes(value: TrackInfo.Type): void;


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
        types: TrackInfo.Type,
    }

    export enum Type {
    VIDEO = 0,
    AUDIO = 1,
    TEXT = 2,
    OTHER = 3,
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

export class GetThumbInfoRequest extends jspb.Message { 
    getMediaHash(): string;
    setMediaHash(value: string): void;

    getMediaLength(): number;
    setMediaLength(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetThumbInfoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetThumbInfoRequest): GetThumbInfoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetThumbInfoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetThumbInfoRequest;
    static deserializeBinaryFromReader(message: GetThumbInfoRequest, reader: jspb.BinaryReader): GetThumbInfoRequest;
}

export namespace GetThumbInfoRequest {
    export type AsObject = {
        mediaHash: string,
        mediaLength: number,
    }
}

export class GetThumbInfoResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): void;

    getMediaHash(): string;
    setMediaHash(value: string): void;

    clearTimestampList(): void;
    getTimestampList(): Array<number>;
    setTimestampList(value: Array<number>): void;
    addTimestamp(value: number, index?: number): number;

    clearThumbNeedList(): void;
    getThumbNeedList(): Array<GetThumbInfoResponse.TimeRange>;
    setThumbNeedList(value: Array<GetThumbInfoResponse.TimeRange>): void;
    addThumbNeed(value?: GetThumbInfoResponse.TimeRange, index?: number): GetThumbInfoResponse.TimeRange;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetThumbInfoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetThumbInfoResponse): GetThumbInfoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetThumbInfoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetThumbInfoResponse;
    static deserializeBinaryFromReader(message: GetThumbInfoResponse, reader: jspb.BinaryReader): GetThumbInfoResponse;
}

export namespace GetThumbInfoResponse {
    export type AsObject = {
        error?: google_rpc_status_pb.Status.AsObject,
        mediaHash: string,
        timestampList: Array<number>,
        thumbNeedList: Array<GetThumbInfoResponse.TimeRange.AsObject>,
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

}

export class Thumb extends jspb.Message { 
    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): void;

    getExt(): string;
    setExt(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Thumb.AsObject;
    static toObject(includeInstance: boolean, msg: Thumb): Thumb.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Thumb, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Thumb;
    static deserializeBinaryFromReader(message: Thumb, reader: jspb.BinaryReader): Thumb;
}

export namespace Thumb {
    export type AsObject = {
        payload: Uint8Array | string,
        ext: string,
    }
}

export class PutThumbRequest extends jspb.Message { 
    getMediaHash(): string;
    setMediaHash(value: string): void;

    getTimestamp(): number;
    setTimestamp(value: number): void;


    hasThumb(): boolean;
    clearThumb(): void;
    getThumb(): Thumb | undefined;
    setThumb(value?: Thumb): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PutThumbRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PutThumbRequest): PutThumbRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PutThumbRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PutThumbRequest;
    static deserializeBinaryFromReader(message: PutThumbRequest, reader: jspb.BinaryReader): PutThumbRequest;
}

export namespace PutThumbRequest {
    export type AsObject = {
        mediaHash: string,
        timestamp: number,
        thumb?: Thumb.AsObject,
    }
}

export class GetThumbRequest extends jspb.Message { 
    getMediaHash(): string;
    setMediaHash(value: string): void;

    clearTimestampList(): void;
    getTimestampList(): Array<number>;
    setTimestampList(value: Array<number>): void;
    addTimestamp(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetThumbRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetThumbRequest): GetThumbRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetThumbRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetThumbRequest;
    static deserializeBinaryFromReader(message: GetThumbRequest, reader: jspb.BinaryReader): GetThumbRequest;
}

export namespace GetThumbRequest {
    export type AsObject = {
        mediaHash: string,
        timestampList: Array<number>,
    }
}

export class GetThumbResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): void;

    getMediaHash(): string;
    setMediaHash(value: string): void;


    getThumbSetMap(): jspb.Map<number, Thumb>;
    clearThumbSetMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetThumbResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetThumbResponse): GetThumbResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetThumbResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetThumbResponse;
    static deserializeBinaryFromReader(message: GetThumbResponse, reader: jspb.BinaryReader): GetThumbResponse;
}

export namespace GetThumbResponse {
    export type AsObject = {
        error?: google_rpc_status_pb.Status.AsObject,
        mediaHash: string,

        thumbSetMap: Array<[number, Thumb.AsObject]>,
    }
}
