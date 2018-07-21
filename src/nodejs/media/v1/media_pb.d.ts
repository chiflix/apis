// package: sagittarius.media.v1
// file: media/v1/media.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";

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

