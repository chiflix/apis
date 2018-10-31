// package: sagittarius.media.v1
// file: media/v1/media.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as media_v1_media_pb from "../../media/v1/media_pb";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";

interface IMediaService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getInfo: IMediaService_IGetInfo;
    updateInfo: IMediaService_IUpdateInfo;
    getThumb: IMediaService_IGetThumb;
    putThumb: IMediaService_IPutThumb;
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
interface IMediaService_IGetThumb extends grpc.MethodDefinition<media_v1_media_pb.GetThumbRequest, media_v1_media_pb.ThumbList> {
    path: string; // "/sagittarius.media.v1.Media/GetThumb"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<media_v1_media_pb.GetThumbRequest>;
    requestDeserialize: grpc.deserialize<media_v1_media_pb.GetThumbRequest>;
    responseSerialize: grpc.serialize<media_v1_media_pb.ThumbList>;
    responseDeserialize: grpc.deserialize<media_v1_media_pb.ThumbList>;
}
interface IMediaService_IPutThumb extends grpc.MethodDefinition<media_v1_media_pb.PutThumbRequest, google_rpc_status_pb.Status> {
    path: string; // "/sagittarius.media.v1.Media/PutThumb"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<media_v1_media_pb.PutThumbRequest>;
    requestDeserialize: grpc.deserialize<media_v1_media_pb.PutThumbRequest>;
    responseSerialize: grpc.serialize<google_rpc_status_pb.Status>;
    responseDeserialize: grpc.deserialize<google_rpc_status_pb.Status>;
}

export const MediaService: IMediaService;

export interface IMediaServer {
    getInfo: grpc.handleUnaryCall<media_v1_media_pb.GetInfoRequest, media_v1_media_pb.Info>;
    updateInfo: grpc.handleUnaryCall<media_v1_media_pb.UpdateInfoRequest, media_v1_media_pb.Info>;
    getThumb: grpc.handleUnaryCall<media_v1_media_pb.GetThumbRequest, media_v1_media_pb.ThumbList>;
    putThumb: grpc.handleUnaryCall<media_v1_media_pb.PutThumbRequest, google_rpc_status_pb.Status>;
}

export interface IMediaClient {
    getInfo(request: media_v1_media_pb.GetInfoRequest, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    getInfo(request: media_v1_media_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    getInfo(request: media_v1_media_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    updateInfo(request: media_v1_media_pb.UpdateInfoRequest, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    updateInfo(request: media_v1_media_pb.UpdateInfoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    updateInfo(request: media_v1_media_pb.UpdateInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    getThumb(request: media_v1_media_pb.GetThumbRequest, callback: (error: Error | null, response: media_v1_media_pb.ThumbList) => void): grpc.ClientUnaryCall;
    getThumb(request: media_v1_media_pb.GetThumbRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: media_v1_media_pb.ThumbList) => void): grpc.ClientUnaryCall;
    getThumb(request: media_v1_media_pb.GetThumbRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: media_v1_media_pb.ThumbList) => void): grpc.ClientUnaryCall;
    putThumb(request: media_v1_media_pb.PutThumbRequest, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
    putThumb(request: media_v1_media_pb.PutThumbRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
    putThumb(request: media_v1_media_pb.PutThumbRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
}

export class MediaClient extends grpc.Client implements IMediaClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getInfo(request: media_v1_media_pb.GetInfoRequest, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    public getInfo(request: media_v1_media_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    public getInfo(request: media_v1_media_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    public updateInfo(request: media_v1_media_pb.UpdateInfoRequest, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    public updateInfo(request: media_v1_media_pb.UpdateInfoRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    public updateInfo(request: media_v1_media_pb.UpdateInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: media_v1_media_pb.Info) => void): grpc.ClientUnaryCall;
    public getThumb(request: media_v1_media_pb.GetThumbRequest, callback: (error: Error | null, response: media_v1_media_pb.ThumbList) => void): grpc.ClientUnaryCall;
    public getThumb(request: media_v1_media_pb.GetThumbRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: media_v1_media_pb.ThumbList) => void): grpc.ClientUnaryCall;
    public getThumb(request: media_v1_media_pb.GetThumbRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: media_v1_media_pb.ThumbList) => void): grpc.ClientUnaryCall;
    public putThumb(request: media_v1_media_pb.PutThumbRequest, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
    public putThumb(request: media_v1_media_pb.PutThumbRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
    public putThumb(request: media_v1_media_pb.PutThumbRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_rpc_status_pb.Status) => void): grpc.ClientUnaryCall;
}
