// package: sagittarius.media.v1
// file: media/v1/media.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as media_v1_media_pb from "../../media/v1/media_pb";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";

interface IMediaService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getInfo: IMediaService_IGetInfo;
    updateInfo: IMediaService_IUpdateInfo;
    getThumbnailTimeRanges: IMediaService_IGetThumbnailTimeRanges;
    getThumbnail: IMediaService_IGetThumbnail;
    updateThumbnail: IMediaService_IUpdateThumbnail;
}

interface IMediaService_IGetInfo extends grpc.MethodDefinition<media_v1_media_pb.GetInfoRequest, media_v1_media_pb.Info> {
    path: string; // "/sagittarius.media.v1.Media/GetInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<media_v1_media_pb.GetInfoRequest>;
    requestDeserialize: grpc.deserialize<media_v1_media_pb.GetInfoRequest>;
    responseSerialize: grpc.serialize<media_v1_media_pb.Info>;
    responseDeserialize: grpc.deserialize<media_v1_media_pb.Info>;
}
interface IMediaService_IUpdateInfo extends grpc.MethodDefinition<media_v1_media_pb.UpdateInfoRequest, media_v1_media_pb.Info> {
    path: string; // "/sagittarius.media.v1.Media/UpdateInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<media_v1_media_pb.UpdateInfoRequest>;
    requestDeserialize: grpc.deserialize<media_v1_media_pb.UpdateInfoRequest>;
    responseSerialize: grpc.serialize<media_v1_media_pb.Info>;
    responseDeserialize: grpc.deserialize<media_v1_media_pb.Info>;
}
interface IMediaService_IGetThumbnailTimeRanges extends grpc.MethodDefinition<media_v1_media_pb.ThumbnailTimeRangesRequest, media_v1_media_pb.ThumbnailTimeRangesResponse> {
    path: string; // "/sagittarius.media.v1.Media/GetThumbnailTimeRanges"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<media_v1_media_pb.ThumbnailTimeRangesRequest>;
    requestDeserialize: grpc.deserialize<media_v1_media_pb.ThumbnailTimeRangesRequest>;
    responseSerialize: grpc.serialize<media_v1_media_pb.ThumbnailTimeRangesResponse>;
    responseDeserialize: grpc.deserialize<media_v1_media_pb.ThumbnailTimeRangesResponse>;
}
interface IMediaService_IGetThumbnail extends grpc.MethodDefinition<media_v1_media_pb.ThumbnailRequest, media_v1_media_pb.ThumbnailResponse> {
    path: string; // "/sagittarius.media.v1.Media/GetThumbnail"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<media_v1_media_pb.ThumbnailRequest>;
    requestDeserialize: grpc.deserialize<media_v1_media_pb.ThumbnailRequest>;
    responseSerialize: grpc.serialize<media_v1_media_pb.ThumbnailResponse>;
    responseDeserialize: grpc.deserialize<media_v1_media_pb.ThumbnailResponse>;
}
interface IMediaService_IUpdateThumbnail extends grpc.MethodDefinition<media_v1_media_pb.UpdateThumbnailRequest, google_rpc_status_pb.Status> {
    path: string; // "/sagittarius.media.v1.Media/UpdateThumbnail"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<media_v1_media_pb.UpdateThumbnailRequest>;
    requestDeserialize: grpc.deserialize<media_v1_media_pb.UpdateThumbnailRequest>;
    responseSerialize: grpc.serialize<google_rpc_status_pb.Status>;
    responseDeserialize: grpc.deserialize<google_rpc_status_pb.Status>;
}

export const MediaService: IMediaService;

export interface IMediaServer {
    getInfo: grpc.handleUnaryCall<media_v1_media_pb.GetInfoRequest, media_v1_media_pb.Info>;
    updateInfo: grpc.handleUnaryCall<media_v1_media_pb.UpdateInfoRequest, media_v1_media_pb.Info>;
    getThumbnailTimeRanges: grpc.handleUnaryCall<media_v1_media_pb.ThumbnailTimeRangesRequest, media_v1_media_pb.ThumbnailTimeRangesResponse>;
    getThumbnail: grpc.handleUnaryCall<media_v1_media_pb.ThumbnailRequest, media_v1_media_pb.ThumbnailResponse>;
    updateThumbnail: grpc.handleUnaryCall<media_v1_media_pb.UpdateThumbnailRequest, google_rpc_status_pb.Status>;
}

export interface IMediaClient {
    getInfo(request: media_v1_media_pb.GetInfoRequest, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    getInfo(request: media_v1_media_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    getInfo(request: media_v1_media_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    updateInfo(request: media_v1_media_pb.UpdateInfoRequest, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    updateInfo(request: media_v1_media_pb.UpdateInfoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    updateInfo(request: media_v1_media_pb.UpdateInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    getThumbnailTimeRanges(request: media_v1_media_pb.ThumbnailTimeRangesRequest, callback: (error: Error | null, response: media_v1_media_pb.ThumbnailTimeRangesResponse) => void): grpc.ClientUnaryCall;
    getThumbnailTimeRanges(request: media_v1_media_pb.ThumbnailTimeRangesRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: media_v1_media_pb.ThumbnailTimeRangesResponse) => void): grpc.ClientUnaryCall;
    getThumbnailTimeRanges(request: media_v1_media_pb.ThumbnailTimeRangesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: media_v1_media_pb.ThumbnailTimeRangesResponse) => void): grpc.ClientUnaryCall;
    getThumbnail(request: media_v1_media_pb.ThumbnailRequest, callback: (error: Error | null, response: media_v1_media_pb.ThumbnailResponse) => void): grpc.ClientUnaryCall;
    getThumbnail(request: media_v1_media_pb.ThumbnailRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: media_v1_media_pb.ThumbnailResponse) => void): grpc.ClientUnaryCall;
    getThumbnail(request: media_v1_media_pb.ThumbnailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: media_v1_media_pb.ThumbnailResponse) => void): grpc.ClientUnaryCall;
    updateThumbnail(request: media_v1_media_pb.UpdateThumbnailRequest, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
    updateThumbnail(request: media_v1_media_pb.UpdateThumbnailRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
    updateThumbnail(request: media_v1_media_pb.UpdateThumbnailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
}

export class MediaClient extends grpc.Client implements IMediaClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getInfo(request: media_v1_media_pb.GetInfoRequest, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    public getInfo(request: media_v1_media_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    public getInfo(request: media_v1_media_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    public updateInfo(request: media_v1_media_pb.UpdateInfoRequest, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    public updateInfo(request: media_v1_media_pb.UpdateInfoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    public updateInfo(request: media_v1_media_pb.UpdateInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    public getThumbnailTimeRanges(request: media_v1_media_pb.ThumbnailTimeRangesRequest, callback: (error: Error | null, response: media_v1_media_pb.ThumbnailTimeRangesResponse) => void): grpc.ClientUnaryCall;
    public getThumbnailTimeRanges(request: media_v1_media_pb.ThumbnailTimeRangesRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: media_v1_media_pb.ThumbnailTimeRangesResponse) => void): grpc.ClientUnaryCall;
    public getThumbnailTimeRanges(request: media_v1_media_pb.ThumbnailTimeRangesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: media_v1_media_pb.ThumbnailTimeRangesResponse) => void): grpc.ClientUnaryCall;
    public getThumbnail(request: media_v1_media_pb.ThumbnailRequest, callback: (error: Error | null, response: media_v1_media_pb.ThumbnailResponse) => void): grpc.ClientUnaryCall;
    public getThumbnail(request: media_v1_media_pb.ThumbnailRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: media_v1_media_pb.ThumbnailResponse) => void): grpc.ClientUnaryCall;
    public getThumbnail(request: media_v1_media_pb.ThumbnailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: media_v1_media_pb.ThumbnailResponse) => void): grpc.ClientUnaryCall;
    public updateThumbnail(request: media_v1_media_pb.UpdateThumbnailRequest, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
    public updateThumbnail(request: media_v1_media_pb.UpdateThumbnailRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
    public updateThumbnail(request: media_v1_media_pb.UpdateThumbnailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
}
