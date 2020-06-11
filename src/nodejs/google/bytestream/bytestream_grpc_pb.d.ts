// package: google.bytestream
// file: google/bytestream/bytestream.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as google_bytestream_bytestream_pb from "../../google/bytestream/bytestream_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

interface IByteStreamService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    read: IByteStreamService_IRead;
    write: IByteStreamService_IWrite;
    queryWriteStatus: IByteStreamService_IQueryWriteStatus;
}

interface IByteStreamService_IRead extends grpc.MethodDefinition<google_bytestream_bytestream_pb.ReadRequest, google_bytestream_bytestream_pb.ReadResponse> {
    path: string; // "/google.bytestream.ByteStream/Read"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<google_bytestream_bytestream_pb.ReadRequest>;
    requestDeserialize: grpc.deserialize<google_bytestream_bytestream_pb.ReadRequest>;
    responseSerialize: grpc.serialize<google_bytestream_bytestream_pb.ReadResponse>;
    responseDeserialize: grpc.deserialize<google_bytestream_bytestream_pb.ReadResponse>;
}
interface IByteStreamService_IWrite extends grpc.MethodDefinition<google_bytestream_bytestream_pb.WriteRequest, google_bytestream_bytestream_pb.WriteResponse> {
    path: string; // "/google.bytestream.ByteStream/Write"
    requestStream: boolean; // true
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_bytestream_bytestream_pb.WriteRequest>;
    requestDeserialize: grpc.deserialize<google_bytestream_bytestream_pb.WriteRequest>;
    responseSerialize: grpc.serialize<google_bytestream_bytestream_pb.WriteResponse>;
    responseDeserialize: grpc.deserialize<google_bytestream_bytestream_pb.WriteResponse>;
}
interface IByteStreamService_IQueryWriteStatus extends grpc.MethodDefinition<google_bytestream_bytestream_pb.QueryWriteStatusRequest, google_bytestream_bytestream_pb.QueryWriteStatusResponse> {
    path: string; // "/google.bytestream.ByteStream/QueryWriteStatus"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_bytestream_bytestream_pb.QueryWriteStatusRequest>;
    requestDeserialize: grpc.deserialize<google_bytestream_bytestream_pb.QueryWriteStatusRequest>;
    responseSerialize: grpc.serialize<google_bytestream_bytestream_pb.QueryWriteStatusResponse>;
    responseDeserialize: grpc.deserialize<google_bytestream_bytestream_pb.QueryWriteStatusResponse>;
}

export const ByteStreamService: IByteStreamService;

export interface IByteStreamServer {
    read: grpc.handleServerStreamingCall<google_bytestream_bytestream_pb.ReadRequest, google_bytestream_bytestream_pb.ReadResponse>;
    write: grpc.handleClientStreamingCall<google_bytestream_bytestream_pb.WriteRequest, google_bytestream_bytestream_pb.WriteResponse>;
    queryWriteStatus: grpc.handleUnaryCall<google_bytestream_bytestream_pb.QueryWriteStatusRequest, google_bytestream_bytestream_pb.QueryWriteStatusResponse>;
}

export interface IByteStreamClient {
    read(request: google_bytestream_bytestream_pb.ReadRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<google_bytestream_bytestream_pb.ReadRequest>;
    read(request: google_bytestream_bytestream_pb.ReadRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<google_bytestream_bytestream_pb.ReadRequest>;
    write(callback: (error: Error | null, response: google_bytestream_bytestream_pb.WriteResponse) => void): grpc.ClientWritableStream<google_bytestream_bytestream_pb.WriteRequest>;
    write(metadata: grpc.Metadata, callback: (error: Error | null, response: google_bytestream_bytestream_pb.WriteResponse) => void): grpc.ClientWritableStream<google_bytestream_bytestream_pb.WriteRequest>;
    write(options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_bytestream_bytestream_pb.WriteResponse) => void): grpc.ClientWritableStream<google_bytestream_bytestream_pb.WriteRequest>;
    write(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_bytestream_bytestream_pb.WriteResponse) => void): grpc.ClientWritableStream<google_bytestream_bytestream_pb.WriteRequest>;
    queryWriteStatus(request: google_bytestream_bytestream_pb.QueryWriteStatusRequest, callback: (error: Error | null, response: google_bytestream_bytestream_pb.QueryWriteStatusResponse) => void): grpc.ClientUnaryCall;
    queryWriteStatus(request: google_bytestream_bytestream_pb.QueryWriteStatusRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_bytestream_bytestream_pb.QueryWriteStatusResponse) => void): grpc.ClientUnaryCall;
    queryWriteStatus(request: google_bytestream_bytestream_pb.QueryWriteStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_bytestream_bytestream_pb.QueryWriteStatusResponse) => void): grpc.ClientUnaryCall;
}

export class ByteStreamClient extends grpc.Client implements IByteStreamClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public read(request: google_bytestream_bytestream_pb.ReadRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<google_bytestream_bytestream_pb.ReadRequest>;
    public read(request: google_bytestream_bytestream_pb.ReadRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<google_bytestream_bytestream_pb.ReadRequest>;
    public write(callback: (error: Error | null, response: google_bytestream_bytestream_pb.WriteResponse) => void): grpc.ClientWritableStream<google_bytestream_bytestream_pb.WriteRequest>;
    public write(metadata: grpc.Metadata, callback: (error: Error | null, response: google_bytestream_bytestream_pb.WriteResponse) => void): grpc.ClientWritableStream<google_bytestream_bytestream_pb.WriteRequest>;
    public write(options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_bytestream_bytestream_pb.WriteResponse) => void): grpc.ClientWritableStream<google_bytestream_bytestream_pb.WriteRequest>;
    public write(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_bytestream_bytestream_pb.WriteResponse) => void): grpc.ClientWritableStream<google_bytestream_bytestream_pb.WriteRequest>;
    public queryWriteStatus(request: google_bytestream_bytestream_pb.QueryWriteStatusRequest, callback: (error: Error | null, response: google_bytestream_bytestream_pb.QueryWriteStatusResponse) => void): grpc.ClientUnaryCall;
    public queryWriteStatus(request: google_bytestream_bytestream_pb.QueryWriteStatusRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_bytestream_bytestream_pb.QueryWriteStatusResponse) => void): grpc.ClientUnaryCall;
    public queryWriteStatus(request: google_bytestream_bytestream_pb.QueryWriteStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_bytestream_bytestream_pb.QueryWriteStatusResponse) => void): grpc.ClientUnaryCall;
}
