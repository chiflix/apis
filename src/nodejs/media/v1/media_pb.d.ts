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

export class GetThumbRequest extends jspb.Message { 
    getMediaHash(): string;
    setMediaHash(value: string): void;

    clearThumbIdList(): void;
    getThumbIdList(): Array<number>;
    setThumbIdList(value: Array<number>): void;
    addThumbId(value: number, index?: number): number;


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
        thumbIdList: Array<number>,
    }
}

export class ThumbList extends jspb.Message { 
    getMediaHash(): string;
    setMediaHash(value: string): void;


    getThumbMap(): jspb.Map<number, Uint8Array | string>;
    clearThumbMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThumbList.AsObject;
    static toObject(includeInstance: boolean, msg: ThumbList): ThumbList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThumbList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThumbList;
    static deserializeBinaryFromReader(message: ThumbList, reader: jspb.BinaryReader): ThumbList;
}

export namespace ThumbList {
    export type AsObject = {
        mediaHash: string,

        thumbMap: Array<[number, Uint8Array | string]>,
    }
}

export class PutThumbRequest extends jspb.Message { 
    getMediaHash(): string;
    setMediaHash(value: string): void;

    getThumbId(): number;
    setThumbId(value: number): void;

    getMd5(): string;
    setMd5(value: string): void;

    getPayload(): Uint8Array | string;
    getPayload_asU8(): Uint8Array;
    getPayload_asB64(): string;
    setPayload(value: Uint8Array | string): void;


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
        thumbId: number,
        md5: string,
        payload: Uint8Array | string,
    }
}
