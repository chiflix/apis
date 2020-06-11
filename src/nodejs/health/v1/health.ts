import * as pb_1 from "google-protobuf";
import * as grpc_1 from "grpc";
export namespace sagittarius.health.v1 {
    export class HealthCheckRequest extends pb_1.Message {
        constructor(data?: any[] | {
            service?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.service = data.service;
            }
        }
        get service(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set service(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        toObject() {
            return {
                service: this.service
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.service !== undefined)
                writer.writeString(1, this.service);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HealthCheckRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HealthCheckRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.service = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class HealthCheckResponse extends pb_1.Message {
        constructor(data?: any[] | {
            status?: HealthCheckResponse.ServingStatus;
            version?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.status = data.status;
                this.version = data.version;
            }
        }
        get status(): HealthCheckResponse.ServingStatus | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as HealthCheckResponse.ServingStatus | undefined;
        }
        set status(value: HealthCheckResponse.ServingStatus) {
            pb_1.Message.setField(this, 1, value);
        }
        get version(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string | undefined;
        }
        set version(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        toObject() {
            return {
                status: this.status,
                version: this.version
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.status !== undefined)
                writer.writeEnum(1, this.status);
            if (this.version !== undefined)
                writer.writeString(2, this.version);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HealthCheckResponse {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new HealthCheckResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.status = reader.readEnum();
                        break;
                    case 2:
                        message.version = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export namespace HealthCheckResponse {
        export enum ServingStatus {
            UNKNOWN = 0,
            SERVING = 1,
            NOT_SERVING = 2
        }
    }
    export var Health = {
        Check: {
            path: "/sagittarius.health.v1.Health/Check",
            requestStream: false,
            responseStream: false,
            requestType: sagittarius.health.v1.HealthCheckRequest,
            responseType: sagittarius.health.v1.HealthCheckResponse,
            requestSerialize: (message: HealthCheckRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => HealthCheckRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: HealthCheckResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => HealthCheckResponse.deserialize(new Uint8Array(bytes))
        }
    };
    export class HealthClient extends grpc_1.makeGenericClientConstructor(Health, "Health", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials) {
            super(address, credentials)
        }
    }
}
