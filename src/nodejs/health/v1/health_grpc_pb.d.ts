// package: sagittarius.health.v1
// file: health/v1/health.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as health_v1_health_pb from "../../health/v1/health_pb";

interface IHealthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    check: IHealthService_ICheck;
}

interface IHealthService_ICheck extends grpc.MethodDefinition<health_v1_health_pb.HealthCheckRequest, health_v1_health_pb.HealthCheckResponse> {
    path: string; // "/sagittarius.health.v1.Health/Check"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<health_v1_health_pb.HealthCheckRequest>;
    requestDeserialize: grpc.deserialize<health_v1_health_pb.HealthCheckRequest>;
    responseSerialize: grpc.serialize<health_v1_health_pb.HealthCheckResponse>;
    responseDeserialize: grpc.deserialize<health_v1_health_pb.HealthCheckResponse>;
}

export const HealthService: IHealthService;

export interface IHealthServer {
    check: grpc.handleUnaryCall<health_v1_health_pb.HealthCheckRequest, health_v1_health_pb.HealthCheckResponse>;
}

export interface IHealthClient {
    check(request: health_v1_health_pb.HealthCheckRequest, callback: (error: Error | null, response: health_v1_health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    check(request: health_v1_health_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: health_v1_health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    check(request: health_v1_health_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: health_v1_health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
}

export class HealthClient extends grpc.Client implements IHealthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public check(request: health_v1_health_pb.HealthCheckRequest, callback: (error: Error | null, response: health_v1_health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public check(request: health_v1_health_pb.HealthCheckRequest, metadata: grpc.Metadata, callback: (error: Error | null, response: health_v1_health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public check(request: health_v1_health_pb.HealthCheckRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: Error | null, response: health_v1_health_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
}
