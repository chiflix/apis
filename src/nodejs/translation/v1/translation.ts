import * as pb_1 from "google-protobuf";
import * as grpc_1 from "grpc";
export namespace sagittarius.translation.v1 {
    export class MediaTranslationRequest extends pb_1.Message {
        constructor(data?: any[] | {
            media_identity?: string;
            language_code?: string;
            format?: string;
            start_time?: number;
            hints?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.media_identity = data.media_identity;
                this.language_code = data.language_code;
                this.format = data.format;
                this.start_time = data.start_time;
                this.hints = data.hints;
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
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string | undefined;
        }
        set format(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get start_time(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 6, undefined) as number | undefined;
        }
        set start_time(value: number) {
            pb_1.Message.setField(this, 6, value);
        }
        get hints(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 7, undefined) as string | undefined;
        }
        set hints(value: string) {
            pb_1.Message.setField(this, 7, value);
        }
        toObject() {
            return {
                media_identity: this.media_identity,
                language_code: this.language_code,
                format: this.format,
                start_time: this.start_time,
                hints: this.hints
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.media_identity !== undefined)
                writer.writeString(1, this.media_identity);
            if (this.language_code !== undefined)
                writer.writeString(2, this.language_code);
            if (this.format !== undefined)
                writer.writeString(3, this.format);
            if (this.start_time !== undefined)
                writer.writeDouble(6, this.start_time);
            if (this.hints !== undefined)
                writer.writeString(7, this.hints);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MediaTranslationRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new MediaTranslationRequest();
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
                    case 3:
                        message.format = reader.readString();
                        break;
                    case 6:
                        message.start_time = reader.readDouble();
                        break;
                    case 7:
                        message.hints = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class MediaTranslationResponse extends pb_1.Message {
        constructor(data?: any[] | {
            error?: google.rpc.Status;
            results?: TranscriptInfo[];
            stream_translation_task_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [2], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.error = data.error;
                this.results = data.results;
                this.stream_translation_task_id = data.stream_translation_task_id;
            }
        }
        get error(): google.rpc.Status | undefined {
            return pb_1.Message.getWrapperField(this, google.rpc.Status, 1) as google.rpc.Status | undefined;
        }
        set error(value: google.rpc.Status) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get results(): TranscriptInfo[] {
            return pb_1.Message.getRepeatedWrapperField(this, TranscriptInfo, 2) as TranscriptInfo[];
        }
        set results(value: TranscriptInfo[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get stream_translation_task_id(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string | undefined;
        }
        set stream_translation_task_id(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        toObject() {
            return {
                error: this.error && this.error.toObject(),
                results: this.results.map((item: TranscriptInfo) => item.toObject()),
                stream_translation_task_id: this.stream_translation_task_id
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.error !== undefined)
                writer.writeMessage(1, this.error, () => this.error.serialize(writer));
            if (this.results !== undefined)
                writer.writeRepeatedMessage(2, this.results, (item: TranscriptInfo) => item.serialize(writer));
            if (this.stream_translation_task_id !== undefined)
                writer.writeString(3, this.stream_translation_task_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MediaTranslationResponse {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new MediaTranslationResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.error, () => message.error = google.rpc.Status.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.results, () => pb_1.Message.addToRepeatedWrapperField(message, 2, TranscriptInfo.deserialize(reader), TranscriptInfo));
                        break;
                    case 3:
                        message.stream_translation_task_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class TranscriptInfo extends pb_1.Message {
        constructor(data?: any[] | {
            transcript_identity?: string;
            language_code?: string;
            ranking?: number;
            tags?: string[];
            delay?: number;
            confidence?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [4], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.transcript_identity = data.transcript_identity;
                this.language_code = data.language_code;
                this.ranking = data.ranking;
                this.tags = data.tags;
                this.delay = data.delay;
                this.confidence = data.confidence;
            }
        }
        get transcript_identity(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set transcript_identity(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get language_code(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string | undefined;
        }
        set language_code(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get ranking(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number | undefined;
        }
        set ranking(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get tags(): string[] {
            return pb_1.Message.getField(this, 4) as string[];
        }
        set tags(value: string[]) {
            pb_1.Message.setField(this, 4, value);
        }
        get delay(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number | undefined;
        }
        set delay(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        get confidence(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 6, undefined) as number | undefined;
        }
        set confidence(value: number) {
            pb_1.Message.setField(this, 6, value);
        }
        toObject() {
            return {
                transcript_identity: this.transcript_identity,
                language_code: this.language_code,
                ranking: this.ranking,
                tags: this.tags,
                delay: this.delay,
                confidence: this.confidence
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.transcript_identity !== undefined)
                writer.writeString(1, this.transcript_identity);
            if (this.language_code !== undefined)
                writer.writeString(2, this.language_code);
            if (this.ranking !== undefined)
                writer.writeFloat(3, this.ranking);
            if (this.tags !== undefined)
                writer.writeRepeatedString(4, this.tags);
            if (this.delay !== undefined)
                writer.writeInt64(5, this.delay);
            if (this.confidence !== undefined)
                writer.writeFloat(6, this.confidence);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TranscriptInfo {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TranscriptInfo();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.transcript_identity = reader.readString();
                        break;
                    case 2:
                        message.language_code = reader.readString();
                        break;
                    case 3:
                        message.ranking = reader.readFloat();
                        break;
                    case 4:
                        pb_1.Message.addToRepeatedField(message, 4, reader.readString());
                        break;
                    case 5:
                        message.delay = reader.readInt64();
                        break;
                    case 6:
                        message.confidence = reader.readFloat();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class DetectionRequest extends pb_1.Message {
        constructor(data?: any[] | {
            text?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.text = data.text;
            }
        }
        get text(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set text(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        toObject() {
            return {
                text: this.text
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.text !== undefined)
                writer.writeString(1, this.text);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DetectionRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new DetectionRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.text = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class DetectionResponse extends pb_1.Message {
        constructor(data?: any[] | {
            prediction?: DetectionPrediction[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [1], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.prediction = data.prediction;
            }
        }
        get prediction(): DetectionPrediction[] {
            return pb_1.Message.getRepeatedWrapperField(this, DetectionPrediction, 1) as DetectionPrediction[];
        }
        set prediction(value: DetectionPrediction[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        toObject() {
            return {
                prediction: this.prediction.map((item: DetectionPrediction) => item.toObject())
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.prediction !== undefined)
                writer.writeRepeatedMessage(1, this.prediction, (item: DetectionPrediction) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DetectionResponse {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new DetectionResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.prediction, () => pb_1.Message.addToRepeatedWrapperField(message, 1, DetectionPrediction.deserialize(reader), DetectionPrediction));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class DetectionPrediction extends pb_1.Message {
        constructor(data?: any[] | {
            language_code?: string;
            confidence?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.language_code = data.language_code;
                this.confidence = data.confidence;
            }
        }
        get language_code(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set language_code(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get confidence(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number | undefined;
        }
        set confidence(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        toObject() {
            return {
                language_code: this.language_code,
                confidence: this.confidence
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.language_code !== undefined)
                writer.writeString(1, this.language_code);
            if (this.confidence !== undefined)
                writer.writeFloat(2, this.confidence);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DetectionPrediction {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new DetectionPrediction();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.language_code = reader.readString();
                        break;
                    case 2:
                        message.confidence = reader.readFloat();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class TranscriptRequest extends pb_1.Message {
        constructor(data?: any[] | {
            transcript_identity?: string;
            start_time?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.transcript_identity = data.transcript_identity;
                this.start_time = data.start_time;
            }
        }
        get transcript_identity(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string | undefined;
        }
        set transcript_identity(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get start_time(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 6, undefined) as number | undefined;
        }
        set start_time(value: number) {
            pb_1.Message.setField(this, 6, value);
        }
        toObject() {
            return {
                transcript_identity: this.transcript_identity,
                start_time: this.start_time
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.transcript_identity !== undefined)
                writer.writeString(4, this.transcript_identity);
            if (this.start_time !== undefined)
                writer.writeDouble(6, this.start_time);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TranscriptRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TranscriptRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 4:
                        message.transcript_identity = reader.readString();
                        break;
                    case 6:
                        message.start_time = reader.readDouble();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class TranscriptResponse extends pb_1.Message {
        constructor(data?: any[] | {
            error?: google.rpc.Status;
            transcripts?: TranscriptResponse.Cue[];
            is_end_of_transcript?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [2], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.error = data.error;
                this.transcripts = data.transcripts;
                this.is_end_of_transcript = data.is_end_of_transcript;
            }
        }
        get error(): google.rpc.Status | undefined {
            return pb_1.Message.getWrapperField(this, google.rpc.Status, 1) as google.rpc.Status | undefined;
        }
        set error(value: google.rpc.Status) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get transcripts(): TranscriptResponse.Cue[] {
            return pb_1.Message.getRepeatedWrapperField(this, TranscriptResponse.Cue, 2) as TranscriptResponse.Cue[];
        }
        set transcripts(value: TranscriptResponse.Cue[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get is_end_of_transcript(): boolean | undefined {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as boolean | undefined;
        }
        set is_end_of_transcript(value: boolean) {
            pb_1.Message.setField(this, 3, value);
        }
        toObject() {
            return {
                error: this.error && this.error.toObject(),
                transcripts: this.transcripts.map((item: TranscriptResponse.Cue) => item.toObject()),
                is_end_of_transcript: this.is_end_of_transcript
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.error !== undefined)
                writer.writeMessage(1, this.error, () => this.error.serialize(writer));
            if (this.transcripts !== undefined)
                writer.writeRepeatedMessage(2, this.transcripts, (item: TranscriptResponse.Cue) => item.serialize(writer));
            if (this.is_end_of_transcript !== undefined)
                writer.writeBool(3, this.is_end_of_transcript);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TranscriptResponse {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TranscriptResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.error, () => message.error = google.rpc.Status.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.transcripts, () => pb_1.Message.addToRepeatedWrapperField(message, 2, TranscriptResponse.Cue.deserialize(reader), TranscriptResponse.Cue));
                        break;
                    case 3:
                        message.is_end_of_transcript = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export namespace TranscriptResponse {
        export class Cue extends pb_1.Message {
            constructor(data?: any[] | {
                start_time?: number;
                end_time?: number;
                text?: string;
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
                if (!Array.isArray(data) && typeof data == "object") {
                    this.start_time = data.start_time;
                    this.end_time = data.end_time;
                    this.text = data.text;
                }
            }
            get start_time(): number | undefined {
                return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number | undefined;
            }
            set start_time(value: number) {
                pb_1.Message.setField(this, 1, value);
            }
            get end_time(): number | undefined {
                return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number | undefined;
            }
            set end_time(value: number) {
                pb_1.Message.setField(this, 2, value);
            }
            get text(): string | undefined {
                return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string | undefined;
            }
            set text(value: string) {
                pb_1.Message.setField(this, 3, value);
            }
            toObject() {
                return {
                    start_time: this.start_time,
                    end_time: this.end_time,
                    text: this.text
                };
            }
            serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
                const writer = w || new pb_1.BinaryWriter();
                if (this.start_time !== undefined)
                    writer.writeDouble(1, this.start_time);
                if (this.end_time !== undefined)
                    writer.writeDouble(2, this.end_time);
                if (this.text !== undefined)
                    writer.writeString(3, this.text);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Cue {
                const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Cue();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.start_time = reader.readDouble();
                            break;
                        case 2:
                            message.end_time = reader.readDouble();
                            break;
                        case 3:
                            message.text = reader.readString();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
        }
    }
    export class StreamingTranslationRequest extends pb_1.Message {
        constructor(data?: any[] | {
            streaming_config?: StreamingTranslationRequestConfig;
            audio_content?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.streaming_config = data.streaming_config;
                this.audio_content = data.audio_content;
            }
        }
        get streaming_config(): StreamingTranslationRequestConfig | undefined {
            return pb_1.Message.getWrapperField(this, StreamingTranslationRequestConfig, 1) as StreamingTranslationRequestConfig | undefined;
        }
        set streaming_config(value: StreamingTranslationRequestConfig) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get audio_content(): Uint8Array | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as Uint8Array | undefined;
        }
        set audio_content(value: Uint8Array) {
            pb_1.Message.setField(this, 2, value);
        }
        toObject() {
            return {
                streaming_config: this.streaming_config && this.streaming_config.toObject(),
                audio_content: this.audio_content
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.streaming_config !== undefined)
                writer.writeMessage(1, this.streaming_config, () => this.streaming_config.serialize(writer));
            if (this.audio_content !== undefined)
                writer.writeBytes(2, this.audio_content);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StreamingTranslationRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new StreamingTranslationRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.streaming_config, () => message.streaming_config = StreamingTranslationRequestConfig.deserialize(reader));
                        break;
                    case 2:
                        message.audio_content = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class StreamingTranslationRequestConfig extends pb_1.Message {
        constructor(data?: any[] | {
            streaming_config?: google.cloud.speech.v1.RecognitionConfig;
            media_identity?: string;
            audio_language_code?: string;
            target_language_code?: string;
            audio_track?: string;
            hints?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.streaming_config = data.streaming_config;
                this.media_identity = data.media_identity;
                this.audio_language_code = data.audio_language_code;
                this.target_language_code = data.target_language_code;
                this.audio_track = data.audio_track;
                this.hints = data.hints;
            }
        }
        get streaming_config(): google.cloud.speech.v1.RecognitionConfig | undefined {
            return pb_1.Message.getWrapperField(this, google.cloud.speech.v1.RecognitionConfig, 1) as google.cloud.speech.v1.RecognitionConfig | undefined;
        }
        set streaming_config(value: google.cloud.speech.v1.RecognitionConfig) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get media_identity(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string | undefined;
        }
        set media_identity(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get audio_language_code(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string | undefined;
        }
        set audio_language_code(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        get target_language_code(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 4, undefined) as string | undefined;
        }
        set target_language_code(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get audio_track(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 5, undefined) as string | undefined;
        }
        set audio_track(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        get hints(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 6, undefined) as string | undefined;
        }
        set hints(value: string) {
            pb_1.Message.setField(this, 6, value);
        }
        toObject() {
            return {
                streaming_config: this.streaming_config && this.streaming_config.toObject(),
                media_identity: this.media_identity,
                audio_language_code: this.audio_language_code,
                target_language_code: this.target_language_code,
                audio_track: this.audio_track,
                hints: this.hints
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.streaming_config !== undefined)
                writer.writeMessage(1, this.streaming_config, () => this.streaming_config.serialize(writer));
            if (this.media_identity !== undefined)
                writer.writeString(2, this.media_identity);
            if (this.audio_language_code !== undefined)
                writer.writeString(3, this.audio_language_code);
            if (this.target_language_code !== undefined)
                writer.writeString(4, this.target_language_code);
            if (this.audio_track !== undefined)
                writer.writeString(5, this.audio_track);
            if (this.hints !== undefined)
                writer.writeString(6, this.hints);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StreamingTranslationRequestConfig {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new StreamingTranslationRequestConfig();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.streaming_config, () => message.streaming_config = google.cloud.speech.v1.RecognitionConfig.deserialize(reader));
                        break;
                    case 2:
                        message.media_identity = reader.readString();
                        break;
                    case 3:
                        message.audio_language_code = reader.readString();
                        break;
                    case 4:
                        message.target_language_code = reader.readString();
                        break;
                    case 5:
                        message.audio_track = reader.readString();
                        break;
                    case 6:
                        message.hints = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class StreamingTranslationResponse extends pb_1.Message {
        constructor(data?: any[] | {
            error?: google.rpc.Status;
            streaming_result?: StreamingTranslationResult;
            taskinfo?: StreamingTranslationTaskInfo;
            transcript_result?: TranscriptInfo;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.error = data.error;
                this.streaming_result = data.streaming_result;
                this.taskinfo = data.taskinfo;
                this.transcript_result = data.transcript_result;
            }
        }
        get error(): google.rpc.Status | undefined {
            return pb_1.Message.getWrapperField(this, google.rpc.Status, 1) as google.rpc.Status | undefined;
        }
        set error(value: google.rpc.Status) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get streaming_result(): StreamingTranslationResult | undefined {
            return pb_1.Message.getWrapperField(this, StreamingTranslationResult, 2) as StreamingTranslationResult | undefined;
        }
        set streaming_result(value: StreamingTranslationResult) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get taskinfo(): StreamingTranslationTaskInfo | undefined {
            return pb_1.Message.getWrapperField(this, StreamingTranslationTaskInfo, 3) as StreamingTranslationTaskInfo | undefined;
        }
        set taskinfo(value: StreamingTranslationTaskInfo) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get transcript_result(): TranscriptInfo | undefined {
            return pb_1.Message.getWrapperField(this, TranscriptInfo, 4) as TranscriptInfo | undefined;
        }
        set transcript_result(value: TranscriptInfo) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        toObject() {
            return {
                error: this.error && this.error.toObject(),
                streaming_result: this.streaming_result && this.streaming_result.toObject(),
                taskinfo: this.taskinfo && this.taskinfo.toObject(),
                transcript_result: this.transcript_result && this.transcript_result.toObject()
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.error !== undefined)
                writer.writeMessage(1, this.error, () => this.error.serialize(writer));
            if (this.streaming_result !== undefined)
                writer.writeMessage(2, this.streaming_result, () => this.streaming_result.serialize(writer));
            if (this.taskinfo !== undefined)
                writer.writeMessage(3, this.taskinfo, () => this.taskinfo.serialize(writer));
            if (this.transcript_result !== undefined)
                writer.writeMessage(4, this.transcript_result, () => this.transcript_result.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StreamingTranslationResponse {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new StreamingTranslationResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.error, () => message.error = google.rpc.Status.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.streaming_result, () => message.streaming_result = StreamingTranslationResult.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.taskinfo, () => message.taskinfo = StreamingTranslationTaskInfo.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.transcript_result, () => message.transcript_result = TranscriptInfo.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class StreamingTranslationTaskRequest extends pb_1.Message {
        constructor(data?: any[] | {
            task_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.task_id = data.task_id;
            }
        }
        get task_id(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set task_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        toObject() {
            return {
                task_id: this.task_id
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.task_id !== undefined)
                writer.writeString(1, this.task_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StreamingTranslationTaskRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new StreamingTranslationTaskRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.task_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class StreamingTranslationTaskResponse extends pb_1.Message {
        constructor(data?: any[] | {
            error?: google.rpc.Status;
            taskinfo?: StreamingTranslationTaskInfo;
            transcriptinfo?: TranscriptInfo;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.error = data.error;
                this.taskinfo = data.taskinfo;
                this.transcriptinfo = data.transcriptinfo;
            }
        }
        get error(): google.rpc.Status | undefined {
            return pb_1.Message.getWrapperField(this, google.rpc.Status, 1) as google.rpc.Status | undefined;
        }
        set error(value: google.rpc.Status) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get taskinfo(): StreamingTranslationTaskInfo | undefined {
            return pb_1.Message.getWrapperField(this, StreamingTranslationTaskInfo, 2) as StreamingTranslationTaskInfo | undefined;
        }
        set taskinfo(value: StreamingTranslationTaskInfo) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get transcriptinfo(): TranscriptInfo | undefined {
            return pb_1.Message.getWrapperField(this, TranscriptInfo, 3) as TranscriptInfo | undefined;
        }
        set transcriptinfo(value: TranscriptInfo) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        toObject() {
            return {
                error: this.error && this.error.toObject(),
                taskinfo: this.taskinfo && this.taskinfo.toObject(),
                transcriptinfo: this.transcriptinfo && this.transcriptinfo.toObject()
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.error !== undefined)
                writer.writeMessage(1, this.error, () => this.error.serialize(writer));
            if (this.taskinfo !== undefined)
                writer.writeMessage(2, this.taskinfo, () => this.taskinfo.serialize(writer));
            if (this.transcriptinfo !== undefined)
                writer.writeMessage(3, this.transcriptinfo, () => this.transcriptinfo.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StreamingTranslationTaskResponse {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new StreamingTranslationTaskResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.error, () => message.error = google.rpc.Status.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.taskinfo, () => message.taskinfo = StreamingTranslationTaskInfo.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.transcriptinfo, () => message.transcriptinfo = TranscriptInfo.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class StreamingTranslationTaskInfo extends pb_1.Message {
        constructor(data?: any[] | {
            task_id?: string;
            estimate_time?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.task_id = data.task_id;
                this.estimate_time = data.estimate_time;
            }
        }
        get task_id(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set task_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get estimate_time(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number | undefined;
        }
        set estimate_time(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        toObject() {
            return {
                task_id: this.task_id,
                estimate_time: this.estimate_time
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.task_id !== undefined)
                writer.writeString(1, this.task_id);
            if (this.estimate_time !== undefined)
                writer.writeDouble(2, this.estimate_time);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StreamingTranslationTaskInfo {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new StreamingTranslationTaskInfo();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.task_id = reader.readString();
                        break;
                    case 2:
                        message.estimate_time = reader.readDouble();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class StreamingTranslationResult extends pb_1.Message {
        constructor(data?: any[] | {
            transcript?: string;
            confidence?: number;
            stability?: number;
            start_time?: number;
            end_time?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.transcript = data.transcript;
                this.confidence = data.confidence;
                this.stability = data.stability;
                this.start_time = data.start_time;
                this.end_time = data.end_time;
            }
        }
        get transcript(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
        }
        set transcript(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get confidence(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number | undefined;
        }
        set confidence(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get stability(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as number | undefined;
        }
        set stability(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get start_time(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 4, undefined) as number | undefined;
        }
        set start_time(value: number) {
            pb_1.Message.setField(this, 4, value);
        }
        get end_time(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 5, undefined) as number | undefined;
        }
        set end_time(value: number) {
            pb_1.Message.setField(this, 5, value);
        }
        toObject() {
            return {
                transcript: this.transcript,
                confidence: this.confidence,
                stability: this.stability,
                start_time: this.start_time,
                end_time: this.end_time
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.transcript !== undefined)
                writer.writeString(1, this.transcript);
            if (this.confidence !== undefined)
                writer.writeFloat(2, this.confidence);
            if (this.stability !== undefined)
                writer.writeFloat(3, this.stability);
            if (this.start_time !== undefined)
                writer.writeDouble(4, this.start_time);
            if (this.end_time !== undefined)
                writer.writeDouble(5, this.end_time);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StreamingTranslationResult {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new StreamingTranslationResult();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.transcript = reader.readString();
                        break;
                    case 2:
                        message.confidence = reader.readFloat();
                        break;
                    case 3:
                        message.stability = reader.readFloat();
                        break;
                    case 4:
                        message.start_time = reader.readDouble();
                        break;
                    case 5:
                        message.end_time = reader.readDouble();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class TextTranslationRequest extends pb_1.Message {
        constructor(data?: any[] | {
            text?: string[];
            target_language_code?: string;
            source_language_code?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [1], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.text = data.text;
                this.target_language_code = data.target_language_code;
                this.source_language_code = data.source_language_code;
            }
        }
        get text(): string[] {
            return pb_1.Message.getField(this, 1) as string[];
        }
        set text(value: string[]) {
            pb_1.Message.setField(this, 1, value);
        }
        get target_language_code(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string | undefined;
        }
        set target_language_code(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get source_language_code(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 3, undefined) as string | undefined;
        }
        set source_language_code(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        toObject() {
            return {
                text: this.text,
                target_language_code: this.target_language_code,
                source_language_code: this.source_language_code
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.text !== undefined)
                writer.writeRepeatedString(1, this.text);
            if (this.target_language_code !== undefined)
                writer.writeString(2, this.target_language_code);
            if (this.source_language_code !== undefined)
                writer.writeString(3, this.source_language_code);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TextTranslationRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TextTranslationRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                        break;
                    case 2:
                        message.target_language_code = reader.readString();
                        break;
                    case 3:
                        message.source_language_code = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class TextTranslationResponse extends pb_1.Message {
        constructor(data?: any[] | {
            error?: google.rpc.Status;
            results?: TextTranslationResponse.Text[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [2], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.error = data.error;
                this.results = data.results;
            }
        }
        get error(): google.rpc.Status | undefined {
            return pb_1.Message.getWrapperField(this, google.rpc.Status, 1) as google.rpc.Status | undefined;
        }
        set error(value: google.rpc.Status) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get results(): TextTranslationResponse.Text[] {
            return pb_1.Message.getRepeatedWrapperField(this, TextTranslationResponse.Text, 2) as TextTranslationResponse.Text[];
        }
        set results(value: TextTranslationResponse.Text[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        toObject() {
            return {
                error: this.error && this.error.toObject(),
                results: this.results.map((item: TextTranslationResponse.Text) => item.toObject())
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.error !== undefined)
                writer.writeMessage(1, this.error, () => this.error.serialize(writer));
            if (this.results !== undefined)
                writer.writeRepeatedMessage(2, this.results, (item: TextTranslationResponse.Text) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TextTranslationResponse {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new TextTranslationResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.error, () => message.error = google.rpc.Status.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.results, () => pb_1.Message.addToRepeatedWrapperField(message, 2, TextTranslationResponse.Text.deserialize(reader), TextTranslationResponse.Text));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export namespace TextTranslationResponse {
        export class Text extends pb_1.Message {
            constructor(data?: any[] | {
                source_language?: string;
                text?: string;
            }) {
                super();
                pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
                if (!Array.isArray(data) && typeof data == "object") {
                    this.source_language = data.source_language;
                    this.text = data.text;
                }
            }
            get source_language(): string | undefined {
                return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
            }
            set source_language(value: string) {
                pb_1.Message.setField(this, 1, value);
            }
            get text(): string | undefined {
                return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string | undefined;
            }
            set text(value: string) {
                pb_1.Message.setField(this, 2, value);
            }
            toObject() {
                return {
                    source_language: this.source_language,
                    text: this.text
                };
            }
            serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
                const writer = w || new pb_1.BinaryWriter();
                if (this.source_language !== undefined)
                    writer.writeString(1, this.source_language);
                if (this.text !== undefined)
                    writer.writeString(2, this.text);
                if (!w)
                    return writer.getResultBuffer();
            }
            static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Text {
                const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new Text();
                while (reader.nextField()) {
                    if (reader.isEndGroup())
                        break;
                    switch (reader.getFieldNumber()) {
                        case 1:
                            message.source_language = reader.readString();
                            break;
                        case 2:
                            message.text = reader.readString();
                            break;
                        default: reader.skipField();
                    }
                }
                return message;
            }
        }
    }
    export class UserQuotaRequest extends pb_1.Message {
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        toObject() {
            return {};
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UserQuotaRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new UserQuotaRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class UserQuotaResponse extends pb_1.Message {
        constructor(data?: any[] | {
            quota?: number;
            time_left?: number;
            error?: google.rpc.Status;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.quota = data.quota;
                this.time_left = data.time_left;
                this.error = data.error;
            }
        }
        get quota(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number | undefined;
        }
        set quota(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get time_left(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number | undefined;
        }
        set time_left(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get error(): google.rpc.Status | undefined {
            return pb_1.Message.getWrapperField(this, google.rpc.Status, 3) as google.rpc.Status | undefined;
        }
        set error(value: google.rpc.Status) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        toObject() {
            return {
                quota: this.quota,
                time_left: this.time_left,
                error: this.error && this.error.toObject()
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.quota !== undefined)
                writer.writeInt64(1, this.quota);
            if (this.time_left !== undefined)
                writer.writeInt64(2, this.time_left);
            if (this.error !== undefined)
                writer.writeMessage(3, this.error, () => this.error.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): UserQuotaResponse {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new UserQuotaResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.quota = reader.readInt64();
                        break;
                    case 2:
                        message.time_left = reader.readInt64();
                        break;
                    case 3:
                        reader.readMessage(message.error, () => message.error = google.rpc.Status.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class ProcessOrderRequest extends pb_1.Message {
        constructor(data?: any[] | {
            order_id?: number;
            audio_uri?: string;
            audio_config?: google.cloud.speech.v1.RecognitionConfig;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.order_id = data.order_id;
                this.audio_uri = data.audio_uri;
                this.audio_config = data.audio_config;
            }
        }
        get order_id(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 1, undefined) as number | undefined;
        }
        set order_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get audio_uri(): string | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as string | undefined;
        }
        set audio_uri(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get audio_config(): google.cloud.speech.v1.RecognitionConfig | undefined {
            return pb_1.Message.getWrapperField(this, google.cloud.speech.v1.RecognitionConfig, 3) as google.cloud.speech.v1.RecognitionConfig | undefined;
        }
        set audio_config(value: google.cloud.speech.v1.RecognitionConfig) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        toObject() {
            return {
                order_id: this.order_id,
                audio_uri: this.audio_uri,
                audio_config: this.audio_config && this.audio_config.toObject()
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.order_id !== undefined)
                writer.writeInt64(1, this.order_id);
            if (this.audio_uri !== undefined)
                writer.writeString(2, this.audio_uri);
            if (this.audio_config !== undefined)
                writer.writeMessage(3, this.audio_config, () => this.audio_config.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProcessOrderRequest {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ProcessOrderRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.order_id = reader.readInt64();
                        break;
                    case 2:
                        message.audio_uri = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.audio_config, () => message.audio_config = google.cloud.speech.v1.RecognitionConfig.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export class ProcessOrderResponse extends pb_1.Message {
        constructor(data?: any[] | {
            error?: google.rpc.Status;
            order_status?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
            if (!Array.isArray(data) && typeof data == "object") {
                this.error = data.error;
                this.order_status = data.order_status;
            }
        }
        get error(): google.rpc.Status | undefined {
            return pb_1.Message.getWrapperField(this, google.rpc.Status, 1) as google.rpc.Status | undefined;
        }
        set error(value: google.rpc.Status) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get order_status(): number | undefined {
            return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number | undefined;
        }
        set order_status(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        toObject() {
            return {
                error: this.error && this.error.toObject(),
                order_status: this.order_status
            };
        }
        serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
            const writer = w || new pb_1.BinaryWriter();
            if (this.error !== undefined)
                writer.writeMessage(1, this.error, () => this.error.serialize(writer));
            if (this.order_status !== undefined)
                writer.writeInt64(2, this.order_status);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProcessOrderResponse {
            const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new ProcessOrderResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.error, () => message.error = google.rpc.Status.deserialize(reader));
                        break;
                    case 2:
                        message.order_status = reader.readInt64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
    }
    export enum StreamingTranslationTaskCode {
        OK = 0,
        CONTINUE = 9100,
        SKIP_AUDIO = 9101
    }
    export var Translation = {
        TranslateMedia: {
            path: "/sagittarius.translation.v1.Translation/TranslateMedia",
            requestStream: false,
            responseStream: false,
            requestType: sagittarius.translation.v1.MediaTranslationRequest,
            responseType: sagittarius.translation.v1.MediaTranslationResponse,
            requestSerialize: (message: MediaTranslationRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => MediaTranslationRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: MediaTranslationResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => MediaTranslationResponse.deserialize(new Uint8Array(bytes))
        },
        DetectLanguage: {
            path: "/sagittarius.translation.v1.Translation/DetectLanguage",
            requestStream: false,
            responseStream: false,
            requestType: sagittarius.translation.v1.DetectionRequest,
            responseType: sagittarius.translation.v1.DetectionResponse,
            requestSerialize: (message: DetectionRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => DetectionRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: DetectionResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => DetectionResponse.deserialize(new Uint8Array(bytes))
        },
        Transcript: {
            path: "/sagittarius.translation.v1.Translation/Transcript",
            requestStream: false,
            responseStream: false,
            requestType: sagittarius.translation.v1.TranscriptRequest,
            responseType: sagittarius.translation.v1.TranscriptResponse,
            requestSerialize: (message: TranscriptRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => TranscriptRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: TranscriptResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => TranscriptResponse.deserialize(new Uint8Array(bytes))
        },
        TranslateText: {
            path: "/sagittarius.translation.v1.Translation/TranslateText",
            requestStream: false,
            responseStream: false,
            requestType: sagittarius.translation.v1.TextTranslationRequest,
            responseType: sagittarius.translation.v1.TextTranslationResponse,
            requestSerialize: (message: TextTranslationRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => TextTranslationRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: TextTranslationResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => TextTranslationResponse.deserialize(new Uint8Array(bytes))
        },
        StreamingTranslation: {
            path: "/sagittarius.translation.v1.Translation/StreamingTranslation",
            requestStream: true,
            responseStream: true,
            requestType: sagittarius.translation.v1.StreamingTranslationRequest,
            responseType: sagittarius.translation.v1.StreamingTranslationResponse,
            requestSerialize: (message: StreamingTranslationRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => StreamingTranslationRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: StreamingTranslationResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => StreamingTranslationResponse.deserialize(new Uint8Array(bytes))
        },
        StreamingTranslationTask: {
            path: "/sagittarius.translation.v1.Translation/StreamingTranslationTask",
            requestStream: false,
            responseStream: false,
            requestType: sagittarius.translation.v1.StreamingTranslationTaskRequest,
            responseType: sagittarius.translation.v1.StreamingTranslationTaskResponse,
            requestSerialize: (message: StreamingTranslationTaskRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => StreamingTranslationTaskRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: StreamingTranslationTaskResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => StreamingTranslationTaskResponse.deserialize(new Uint8Array(bytes))
        },
        ProcessOrder: {
            path: "/sagittarius.translation.v1.Translation/ProcessOrder",
            requestStream: false,
            responseStream: false,
            requestType: sagittarius.translation.v1.ProcessOrderRequest,
            responseType: sagittarius.translation.v1.ProcessOrderResponse,
            requestSerialize: (message: ProcessOrderRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => ProcessOrderRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: ProcessOrderResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => ProcessOrderResponse.deserialize(new Uint8Array(bytes))
        },
        GetUserQuota: {
            path: "/sagittarius.translation.v1.Translation/GetUserQuota",
            requestStream: false,
            responseStream: false,
            requestType: sagittarius.translation.v1.UserQuotaRequest,
            responseType: sagittarius.translation.v1.UserQuotaResponse,
            requestSerialize: (message: UserQuotaRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => UserQuotaRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: UserQuotaResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => UserQuotaResponse.deserialize(new Uint8Array(bytes))
        }
    };
    export class TranslationClient extends grpc_1.makeGenericClientConstructor(Translation, "Translation", {}) {
        constructor(address: string, credentials: grpc_1.ChannelCredentials) {
            super(address, credentials)
        }
    }
}
