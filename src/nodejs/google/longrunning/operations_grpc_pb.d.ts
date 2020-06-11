// package: google.longrunning
// file: google/longrunning/operations.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as google_longrunning_operations_pb from "../../google/longrunning/operations_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";

interface IOperationsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listOperations: IOperationsService_IListOperations;
    getOperation: IOperationsService_IGetOperation;
    deleteOperation: IOperationsService_IDeleteOperation;
    cancelOperation: IOperationsService_ICancelOperation;
}

interface IOperationsService_IListOperations extends grpc.MethodDefinition<google_longrunning_operations_pb.ListOperationsRequest, google_longrunning_operations_pb.ListOperationsResponse> {
    path: string; // "/google.longrunning.Operations/ListOperations"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_longrunning_operations_pb.ListOperationsRequest>;
    requestDeserialize: grpc.deserialize<google_longrunning_operations_pb.ListOperationsRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.ListOperationsResponse>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.ListOperationsResponse>;
}
interface IOperationsService_IGetOperation extends grpc.MethodDefinition<google_longrunning_operations_pb.GetOperationRequest, google_longrunning_operations_pb.Operation> {
    path: string; // "/google.longrunning.Operations/GetOperation"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_longrunning_operations_pb.GetOperationRequest>;
    requestDeserialize: grpc.deserialize<google_longrunning_operations_pb.GetOperationRequest>;
    responseSerialize: grpc.serialize<google_longrunning_operations_pb.Operation>;
    responseDeserialize: grpc.deserialize<google_longrunning_operations_pb.Operation>;
}
interface IOperationsService_IDeleteOperation extends grpc.MethodDefinition<google_longrunning_operations_pb.DeleteOperationRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/google.longrunning.Operations/DeleteOperation"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_longrunning_operations_pb.DeleteOperationRequest>;
    requestDeserialize: grpc.deserialize<google_longrunning_operations_pb.DeleteOperationRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IOperationsService_ICancelOperation extends grpc.MethodDefinition<google_longrunning_operations_pb.CancelOperationRequest, google_protobuf_empty_pb.Empty> {
    path: string; // "/google.longrunning.Operations/CancelOperation"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<google_longrunning_operations_pb.CancelOperationRequest>;
    requestDeserialize: grpc.deserialize<google_longrunning_operations_pb.CancelOperationRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const OperationsService: IOperationsService;

export interface IOperationsServer {
    listOperations: grpc.handleUnaryCall<google_longrunning_operations_pb.ListOperationsRequest, google_longrunning_operations_pb.ListOperationsResponse>;
    getOperation: grpc.handleUnaryCall<google_longrunning_operations_pb.GetOperationRequest, google_longrunning_operations_pb.Operation>;
    deleteOperation: grpc.handleUnaryCall<google_longrunning_operations_pb.DeleteOperationRequest, google_protobuf_empty_pb.Empty>;
    cancelOperation: grpc.handleUnaryCall<google_longrunning_operations_pb.CancelOperationRequest, google_protobuf_empty_pb.Empty>;
}

export interface IOperationsClient {
    listOperations(request: google_longrunning_operations_pb.ListOperationsRequest, callback: (error: Error | null, response: google_longrunning_operations_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: google_longrunning_operations_pb.ListOperationsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_longrunning_operations_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    listOperations(request: google_longrunning_operations_pb.ListOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_longrunning_operations_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    getOperation(request: google_longrunning_operations_pb.GetOperationRequest, callback: (error: Error | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    getOperation(request: google_longrunning_operations_pb.GetOperationRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    getOperation(request: google_longrunning_operations_pb.GetOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    deleteOperation(request: google_longrunning_operations_pb.DeleteOperationRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteOperation(request: google_longrunning_operations_pb.DeleteOperationRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteOperation(request: google_longrunning_operations_pb.DeleteOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelOperation(request: google_longrunning_operations_pb.CancelOperationRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelOperation(request: google_longrunning_operations_pb.CancelOperationRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    cancelOperation(request: google_longrunning_operations_pb.CancelOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class OperationsClient extends grpc.Client implements IOperationsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public listOperations(request: google_longrunning_operations_pb.ListOperationsRequest, callback: (error: Error | null, response: google_longrunning_operations_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: google_longrunning_operations_pb.ListOperationsRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_longrunning_operations_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    public listOperations(request: google_longrunning_operations_pb.ListOperationsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_longrunning_operations_pb.ListOperationsResponse) => void): grpc.ClientUnaryCall;
    public getOperation(request: google_longrunning_operations_pb.GetOperationRequest, callback: (error: Error | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public getOperation(request: google_longrunning_operations_pb.GetOperationRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public getOperation(request: google_longrunning_operations_pb.GetOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_longrunning_operations_pb.Operation) => void): grpc.ClientUnaryCall;
    public deleteOperation(request: google_longrunning_operations_pb.DeleteOperationRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteOperation(request: google_longrunning_operations_pb.DeleteOperationRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteOperation(request: google_longrunning_operations_pb.DeleteOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelOperation(request: google_longrunning_operations_pb.CancelOperationRequest, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelOperation(request: google_longrunning_operations_pb.CancelOperationRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public cancelOperation(request: google_longrunning_operations_pb.CancelOperationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
