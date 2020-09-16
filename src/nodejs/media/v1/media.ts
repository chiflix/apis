import * as pb_1 from "google-protobuf";
import * as grpc_1 from "grpc";
export namespace sagittarius.media.v1 {
    export class Info extends pb_1.Message {
        constructor(data?: any[] | {
            media_hash?: string;
            tracks?: Info.TrackInfo[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [2], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.media_hash = data.media_hash;
                this.tracks = data.tracks;
            }
        }
        get media_hash(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set media_hash(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get tracks(): Info.TrackInfo[] {
            return pb_1.Message.getRepeatedWrapperField(this, Info.TrackInfo, 2) as Info.TrackInfo[];
        }
        set tracks(value: Info.TrackInfo[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        toObject() {
            return {
                media_hash: this.media_hash,
                tracks: this.tracks.map((item: Info.TrackInfo) => item.toObject())
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.media_hash !== undefined)
                writer.writeString(1, this.media_hash);
            if (this.tracks !== undefined)
                writer.writeRepeatedMessage(2, this.tracks, (item: Info.TrackInfo) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Info {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Info();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.media_hash = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.tracks, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Info.TrackInfo.deserialize(reader), Info.TrackInfo));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export namespace Info {
        export class TrackInfo extends pb_1.Message {
            constructor(data?: any[] | {
                types?: Info.TrackInfo.Type;
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
                if (!Array.isArray(data) && typeof data == "object") {
                    this.types = data.types;
                }
            }
            get types(): Info.TrackInfo.Type | undefined {
                return pb_1.Message.getFieldWithDefault(this, 1, undefined) as Info.TrackInfo.Type | undefined;
            }
            set types(value: Info.TrackInfo.Type) {
                pb_1.Message.setField(this, 1, value);
            }
            toObject() {
                return {
                    types: this.types
                };
            }
            serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
                const writer = w || new pb_1.BinaryWriter();
                if (this.types !== undefined)
                    writer.writeEnum(1, this.types);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TrackInfo {
                const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TrackInfo();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.types = reader.readEnum();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
        }
    }
    export class GetInfoRequest extends pb_1.Message {
        constructor(data?: any[] | {
            media_hash?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.media_hash = data.media_hash;
            }
        }
        get media_hash(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set media_hash(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        toObject() {
            return {
                media_hash: this.media_hash
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.media_hash !== undefined)
                writer.writeString(1, this.media_hash);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetInfoRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new GetInfoRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.media_hash = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class UpdateInfoRequest extends pb_1.Message {
        constructor(data?: any[] | {
            media_hash?: string;
            info?: Info;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.media_hash = data.media_hash;
                this.info = data.info;
            }
        }
        get media_hash(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set media_hash(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get info(): Info | undefined {
            return pb_1.Message.getWrapperField(this, Info, 2) as Info | undefined;
        }
        set info(value: Info) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        toObject() {
            return {
                media_hash: this.media_hash,
                info: this.info && this.info.toObject()
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.media_hash !== undefined)
                writer.writeString(1, this.media_hash);
            if (this.info !== undefined)
                writer.writeMessage(2, this.info, () => this.info.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UpdateInfoRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new UpdateInfoRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.media_hash = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.info, () => message.info = Info.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class ThumbnailTimeRangesRequest extends pb_1.Message {
        constructor(data?: any[] | {
            media_hash?: string;
            media_length?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.media_hash = data.media_hash;
                this.media_length = data.media_length;
            }
        }
        get media_hash(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set media_hash(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get media_length(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number | undefined;
        }
        set media_length(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        toObject() {
            return {
                media_hash: this.media_hash,
                media_length: this.media_length
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.media_hash !== undefined)
                writer.writeString(1, this.media_hash);
            if (this.media_length !== undefined)
                writer.writeDouble(2, this.media_length);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ThumbnailTimeRangesRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ThumbnailTimeRangesRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.media_hash = reader.readString();
                        break;
                    case 2:
                        message.media_length = reader.readDouble();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class TimeRange extends pb_1.Message {
        constructor(data?: any[] | {
            begin?: number;
            end?: number;
            interval?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.begin = data.begin;
                this.end = data.end;
                this.interval = data.interval;
            }
        }
        get begin(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number | undefined;
        }
        set begin(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get end(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number | undefined;
        }
        set end(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get interval(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number | undefined;
        }
        set interval(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        toObject() {
            return {
                begin: this.begin,
                end: this.end,
                interval: this.interval
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.begin !== undefined)
                writer.writeDouble(1, this.begin);
            if (this.end !== undefined)
                writer.writeDouble(2, this.end);
            if (this.interval !== undefined)
                writer.writeDouble(3, this.interval);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TimeRange {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TimeRange();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.begin = reader.readDouble();
                        break;
                    case 2:
                        message.end = reader.readDouble();
                        break;
                    case 3:
                        message.interval = reader.readDouble();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class ThumbnailTimeRangesResponse extends pb_1.Message {
        constructor(data?: any[] | {
            error?: google.rpc.Status;
            media_hash?: string;
            availables?: TimeRange[];
            missings?: TimeRange[];
            token?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [3, 4], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.error = data.error;
                this.media_hash = data.media_hash;
                this.availables = data.availables;
                this.missings = data.missings;
                this.token = data.token;
            }
        }
        get error(): google.rpc.Status | undefined {
            return pb_1.Message.getWrapperField(this, google.rpc.Status, 1) as google.rpc.Status | undefined;
        }
        set error(value: google.rpc.Status) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get media_hash(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string | undefined;
        }
        set media_hash(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get availables(): TimeRange[] {
            return pb_1.Message.getRepeatedWrapperField(this, TimeRange, 3) as TimeRange[];
        }
        set availables(value: TimeRange[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get missings(): TimeRange[] {
            return pb_1.Message.getRepeatedWrapperField(this, TimeRange, 4) as TimeRange[];
        }
        set missings(value: TimeRange[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        get token(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 5, undefined) as string | undefined;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        toObject() {
            return {
                error: this.error && this.error.toObject(),
                media_hash: this.media_hash,
                availables: this.availables.map((item: TimeRange) => item.toObject()),
                missings: this.missings.map((item: TimeRange) => item.toObject()),
                token: this.token
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.error !== undefined)
                writer.writeMessage(1, this.error, () => this.error.serialize(writer));
            if (this.media_hash !== undefined)
                writer.writeString(2, this.media_hash);
            if (this.availables !== undefined)
                writer.writeRepeatedMessage(3, this.availables, (item: TimeRange) => item.serialize(writer));
            if (this.missings !== undefined)
                writer.writeRepeatedMessage(4, this.missings, (item: TimeRange) => item.serialize(writer));
            if (this.token !== undefined)
                writer.writeString(5, this.token);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ThumbnailTimeRangesResponse {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ThumbnailTimeRangesResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.error, () => message.error = google.rpc.Status.deserialize(reader));
                        break;
                    case 2:
                        message.media_hash = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.availables, () => pb_1.Message.addToRepeatedWrapperField(message, 3, TimeRange.deserialize(reader), TimeRange));
                        break;
                    case 4:
                        reader.readMessage(message.missings, () => pb_1.Message.addToRepeatedWrapperField(message, 4, TimeRange.deserialize(reader), TimeRange));
                        break;
                    case 5:
                        message.token = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class ThumbnailRequest extends pb_1.Message {
        constructor(data?: any[] | {
            media_hash?: string;
            range?: TimeRange;
            timestamp?: number;
            token?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.media_hash = data.media_hash;
                this.range = data.range;
                this.timestamp = data.timestamp;
                this.token = data.token;
            }
        }
        get media_hash(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set media_hash(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get range(): TimeRange | undefined {
            return pb_1.Message.getWrapperField(this, TimeRange, 2) as TimeRange | undefined;
        }
        set range(value: TimeRange) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get timestamp(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number | undefined;
        }
        set timestamp(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get token(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string | undefined;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        toObject() {
            return {
                media_hash: this.media_hash,
                range: this.range && this.range.toObject(),
                timestamp: this.timestamp,
                token: this.token
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.media_hash !== undefined)
                writer.writeString(1, this.media_hash);
            if (this.range !== undefined)
                writer.writeMessage(2, this.range, () => this.range.serialize(writer));
            if (this.timestamp !== undefined)
                writer.writeDouble(3, this.timestamp);
            if (this.token !== undefined)
                writer.writeString(4, this.token);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ThumbnailRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ThumbnailRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.media_hash = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.range, () => message.range = TimeRange.deserialize(reader));
                        break;
                    case 3:
                        message.timestamp = reader.readDouble();
                        break;
                    case 4:
                        message.token = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class Thumbnail extends pb_1.Message {
        constructor(data?: any[] | {
            timestamp?: number;
            ext?: string;
            payload?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.timestamp = data.timestamp;
                this.ext = data.ext;
                this.payload = data.payload;
            }
        }
        get timestamp(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number | undefined;
        }
        set timestamp(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get ext(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string | undefined;
        }
        set ext(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get payload(): Uint8Array | undefined {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as Uint8Array | undefined;
        }
        set payload(value: Uint8Array) {
            pb_1.Message.setField(this, 3, value);
        }
        toObject() {
            return {
                timestamp: this.timestamp,
                ext: this.ext,
                payload: this.payload
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.timestamp !== undefined)
                writer.writeDouble(1, this.timestamp);
            if (this.ext !== undefined)
                writer.writeString(2, this.ext);
            if (this.payload !== undefined)
                writer.writeBytes(3, this.payload);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Thumbnail {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Thumbnail();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.timestamp = reader.readDouble();
                        break;
                    case 2:
                        message.ext = reader.readString();
                        break;
                    case 3:
                        message.payload = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class ThumbnailResponse extends pb_1.Message {
        constructor(data?: any[] | {
            error?: google.rpc.Status;
            thumbnails?: Thumbnail[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [2], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.error = data.error;
                this.thumbnails = data.thumbnails;
            }
        }
        get error(): google.rpc.Status | undefined {
            return pb_1.Message.getWrapperField(this, google.rpc.Status, 1) as google.rpc.Status | undefined;
        }
        set error(value: google.rpc.Status) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get thumbnails(): Thumbnail[] {
            return pb_1.Message.getRepeatedWrapperField(this, Thumbnail, 2) as Thumbnail[];
        }
        set thumbnails(value: Thumbnail[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        toObject() {
            return {
                error: this.error && this.error.toObject(),
                thumbnails: this.thumbnails.map((item: Thumbnail) => item.toObject())
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.error !== undefined)
                writer.writeMessage(1, this.error, () => this.error.serialize(writer));
            if (this.thumbnails !== undefined)
                writer.writeRepeatedMessage(2, this.thumbnails, (item: Thumbnail) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ThumbnailResponse {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ThumbnailResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.error, () => message.error = google.rpc.Status.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.thumbnails, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Thumbnail.deserialize(reader), Thumbnail));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class UpdateThumbnailRequest extends pb_1.Message {
        constructor(data?: any[] | {
            media_hash?: string;
            thumbnails?: Thumbnail[];
            token?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [2], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.media_hash = data.media_hash;
                this.thumbnails = data.thumbnails;
                this.token = data.token;
            }
        }
        get media_hash(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set media_hash(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get thumbnails(): Thumbnail[] {
            return pb_1.Message.getRepeatedWrapperField(this, Thumbnail, 2) as Thumbnail[];
        }
        set thumbnails(value: Thumbnail[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get token(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string | undefined;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        toObject() {
            return {
                media_hash: this.media_hash,
                thumbnails: this.thumbnails.map((item: Thumbnail) => item.toObject()),
                token: this.token
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.media_hash !== undefined)
                writer.writeString(1, this.media_hash);
            if (this.thumbnails !== undefined)
                writer.writeRepeatedMessage(2, this.thumbnails, (item: Thumbnail) => item.serialize(writer));
            if (this.token !== undefined)
                writer.writeString(3, this.token);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UpdateThumbnailRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new UpdateThumbnailRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.media_hash = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.thumbnails, () => pb_1.Message.addToRepeatedWrapperField(message, 2, Thumbnail.deserialize(reader), Thumbnail));
                        break;
                    case 3:
                        message.token = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export var Media = {
        GetInfo: {
            path: "/sagittarius.media.v1.Media/GetInfo",
            requestStream: false,
            responseStream: false,
            requestType: sagittarius.media.v1.GetInfoRequest,
            responseType: sagittarius.media.v1.Info,
            requestSerialize: (message: GetInfoRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => GetInfoRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: Info) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => Info.deserialize(new Uint8Array(bytes))
        },
        UpdateInfo: {
            path: "/sagittarius.media.v1.Media/UpdateInfo",
            requestStream: false,
            responseStream: false,
            requestType: sagittarius.media.v1.UpdateInfoRequest,
            responseType: sagittarius.media.v1.Info,
            requestSerialize: (message: UpdateInfoRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => UpdateInfoRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: Info) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => Info.deserialize(new Uint8Array(bytes))
        },
        GetThumbnailTimeRanges: {
            path: "/sagittarius.media.v1.Media/GetThumbnailTimeRanges",
            requestStream: false,
            responseStream: false,
            requestType: sagittarius.media.v1.ThumbnailTimeRangesRequest,
            responseType: sagittarius.media.v1.ThumbnailTimeRangesResponse,
            requestSerialize: (message: ThumbnailTimeRangesRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => ThumbnailTimeRangesRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: ThumbnailTimeRangesResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => ThumbnailTimeRangesResponse.deserialize(new Uint8Array(bytes))
        },
        GetThumbnail: {
            path: "/sagittarius.media.v1.Media/GetThumbnail",
            requestStream: false,
            responseStream: false,
            requestType: sagittarius.media.v1.ThumbnailRequest,
            responseType: sagittarius.media.v1.ThumbnailResponse,
            requestSerialize: (message: ThumbnailRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => ThumbnailRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: ThumbnailResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => ThumbnailResponse.deserialize(new Uint8Array(bytes))
        },
        UpdateThumbnail: {
            path: "/sagittarius.media.v1.Media/UpdateThumbnail",
            requestStream: false,
            responseStream: false,
            requestType: sagittarius.media.v1.UpdateThumbnailRequest,
            responseType: google.rpc.Status,
            requestSerialize: (message: UpdateThumbnailRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => UpdateThumbnailRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: google.rpc.Status) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => google.rpc.Status.deserialize(new Uint8Array(bytes))
        }
    };
    export class MediaClient extends grpc_1.makeGenericClientConstructor(Media, "Media", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials) {
            super(address, credentials)
        }
    }
}
