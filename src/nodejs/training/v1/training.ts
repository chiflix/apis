import * as pb_1 from "google-protobuf";
import * as grpc_1 from "grpc";
export namespace sagittarius.training.v1 {
    export class TrainingData extends pb_1.Message {
        constructor(data?: any[] | {
            media_identity?: string;
            language_code?: string;
            format?: string;
            played_time?: number;
            total_time?: number;
            delay?: number;
            hints?: string;
            transcript_identity?: string;
            payload?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.media_identity = data.media_identity;
                this.language_code = data.language_code;
                this.format = data.format;
                this.played_time = data.played_time;
                this.total_time = data.total_time;
                this.delay = data.delay;
                this.hints = data.hints;
                this.transcript_identity = data.transcript_identity;
                this.payload = data.payload;
            }
        }
        get media_identity(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set media_identity(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get language_code(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string | undefined;
        }
        set language_code(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get format(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string | undefined;
        }
        set format(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get played_time(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number | undefined;
        }
        set played_time(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        get total_time(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 6, undefined) as number | undefined;
        }
        set total_time(value: number) {
            pb_1.Message.setField(this, 6, value);
        }
        get delay(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 8, undefined) as number | undefined;
        }
        set delay(value: number) {
            pb_1.Message.setField(this, 8, value);
        }
        get hints(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 9, undefined) as string | undefined;
        }
        set hints(value: string) {
            pb_1.Message.setField(this, 9, value);
        }
        get transcript_identity(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string | undefined;
        }
        set transcript_identity(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get payload(): Uint8Array | undefined {
            return pb_1.Message.getFieldWithDefault(this, 7, undefined) as Uint8Array | undefined;
        }
        set payload(value: Uint8Array) {
            pb_1.Message.setField(this, 7, value);
        }
        toObject() {
            return {
                media_identity: this.media_identity,
                language_code: this.language_code,
                format: this.format,
                played_time: this.played_time,
                total_time: this.total_time,
                delay: this.delay,
                hints: this.hints,
                transcript_identity: this.transcript_identity,
                payload: this.payload
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.media_identity !== undefined)
                writer.writeString(1, this.media_identity);
            if (this.language_code !== undefined)
                writer.writeString(2, this.language_code);
            if (this.format !== undefined)
                writer.writeString(4, this.format);
            if (this.played_time !== undefined)
                writer.writeDouble(5, this.played_time);
            if (this.total_time !== undefined)
                writer.writeDouble(6, this.total_time);
            if (this.delay !== undefined)
                writer.writeInt64(8, this.delay);
            if (this.hints !== undefined)
                writer.writeString(9, this.hints);
            if (this.transcript_identity !== undefined)
                writer.writeString(3, this.transcript_identity);
            if (this.payload !== undefined)
                writer.writeBytes(7, this.payload);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TrainingData {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TrainingData();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.media_identity = reader.readString();
                        break;
                    case 2:
                        message.language_code = reader.readString();
                        break;
                    case 4:
                        message.format = reader.readString();
                        break;
                    case 5:
                        message.played_time = reader.readDouble();
                        break;
                    case 6:
                        message.total_time = reader.readDouble();
                        break;
                    case 8:
                        message.delay = reader.readInt64();
                        break;
                    case 9:
                        message.hints = reader.readString();
                        break;
                    case 3:
                        message.transcript_identity = reader.readString();
                        break;
                    case 7:
                        message.payload = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class StreamingTrainingRequest extends pb_1.Message {
        constructor(data?: any[] | {
            streaming_config?: google.cloud.speech.v1.RecognitionConfig;
            audio_content?: Uint8Array;
            transcript?: string;
            media_identity?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.streaming_config = data.streaming_config;
                this.audio_content = data.audio_content;
                this.transcript = data.transcript;
                this.media_identity = data.media_identity;
            }
        }
        get streaming_config(): google.cloud.speech.v1.RecognitionConfig | undefined {
            return pb_1.Message.getWrapperField(this, google.cloud.speech.v1.RecognitionConfig, 1) as google.cloud.speech.v1.RecognitionConfig | undefined;
        }
        set streaming_config(value: google.cloud.speech.v1.RecognitionConfig) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get audio_content(): Uint8Array | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as Uint8Array | undefined;
        }
        set audio_content(value: Uint8Array) {
            pb_1.Message.setField(this, 2, value);
        }
        get transcript(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string | undefined;
        }
        set transcript(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get media_identity(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string | undefined;
        }
        set media_identity(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        toObject() {
            return {
                streaming_config: this.streaming_config && this.streaming_config.toObject(),
                audio_content: this.audio_content,
                transcript: this.transcript,
                media_identity: this.media_identity
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.streaming_config !== undefined)
                writer.writeMessage(1, this.streaming_config, () => this.streaming_config.serialize(writer));
            if (this.audio_content !== undefined)
                writer.writeBytes(2, this.audio_content);
            if (this.transcript !== undefined)
                writer.writeString(3, this.transcript);
            if (this.media_identity !== undefined)
                writer.writeString(4, this.media_identity);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StreamingTrainingRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new StreamingTrainingRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.streaming_config, () => message.streaming_config = google.cloud.speech.v1.RecognitionConfig.deserialize(reader));
                        break;
                    case 2:
                        message.audio_content = reader.readBytes();
                        break;
                    case 3:
                        message.transcript = reader.readString();
                        break;
                    case 4:
                        message.media_identity = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export var Trainng = {
        PushData: {
            path: "/sagittarius.training.v1.Trainng/PushData",
            requestStream: false,
            responseStream: false,
            requestType: sagittarius.training.v1.TrainingData,
            responseType: google.rpc.Status,
            requestSerialize: (message: TrainingData) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => TrainingData.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: google.rpc.Status) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => google.rpc.Status.deserialize(new Uint8Array(bytes))
        },
        StreamingTraining: {
            path: "/sagittarius.training.v1.Trainng/StreamingTraining",
            requestStream: true,
            responseStream: false,
            requestType: sagittarius.training.v1.StreamingTrainingRequest,
            responseType: google.rpc.Status,
            requestSerialize: (message: StreamingTrainingRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => StreamingTrainingRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: google.rpc.Status) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => google.rpc.Status.deserialize(new Uint8Array(bytes))
        }
    };
    export class TrainngClient extends grpc_1.makeGenericClientConstructor(Trainng, "Trainng", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials) {
            super(address, credentials)
        }
    }
}
