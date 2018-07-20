# Protocol Documentation
<a name="top"/>

## Table of Contents

- [translation/v1/translation.proto](#translation/v1/translation.proto)
    - [DetectionRequest](#sagittarius.translation.v1.DetectionRequest)
    - [DetectionResponse](#sagittarius.translation.v1.DetectionResponse)
    - [MediaTranslationRequest](#sagittarius.translation.v1.MediaTranslationRequest)
    - [MediaTranslationResponse](#sagittarius.translation.v1.MediaTranslationResponse)
    - [MediaTranslationResponse.Cue](#sagittarius.translation.v1.MediaTranslationResponse.Cue)
    - [StreamingTranslationRequest](#sagittarius.translation.v1.StreamingTranslationRequest)
    - [StreamingTranslationResponse](#sagittarius.translation.v1.StreamingTranslationResponse)
    - [StreamingTranslationResult](#sagittarius.translation.v1.StreamingTranslationResult)
    - [TranscriptRequest](#sagittarius.translation.v1.TranscriptRequest)
  
  
  
    - [Translation](#sagittarius.translation.v1.Translation)
  

- [Scalar Value Types](#scalar-value-types)



<a name="translation/v1/translation.proto"/>
<p align="right"><a href="#top">Top</a></p>

## translation/v1/translation.proto



<a name="sagittarius.translation.v1.DetectionRequest"/>

### DetectionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  | the text to be detect |






<a name="sagittarius.translation.v1.DetectionResponse"/>

### DetectionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| language_code | [string](#string) |  | Output-only* the language code of the detection result |
| confidence | [float](#float) |  | Output-only* The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the detection result are correct. |






<a name="sagittarius.translation.v1.MediaTranslationRequest"/>

### MediaTranslationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| media_identity | [string](#string) |  | Media Identity |
| language_code | [string](#string) |  | oneof case 1 target language ISO-639-1 Code https://cloud.google.com/translate/docs/languages |
| format | [string](#string) |  | the format of the transcripts |
| start_time | [google.protobuf.Duration](#google.protobuf.Duration) |  | position of the transcript relative to the begginning of the audio or video |
| extra_names | [string](#string) |  | names for more possible results |






<a name="sagittarius.translation.v1.MediaTranslationResponse"/>

### MediaTranslationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error | [google.rpc.Status](#google.rpc.Status) |  | Output-only* If set, returns a [google.rpc.Status][google.rpc.Status] message that specifies the error for the operation. return 404 if no result, in this case, client should use StreamingTranslationRequest |
| transcript_identity | [string](#string) |  | the identity, can be used in TranslationRequest |
| to_be_continued | [bool](#bool) |  | total line of the transcripts there should be |
| transcripts | [MediaTranslationResponse.Cue](#sagittarius.translation.v1.MediaTranslationResponse.Cue) | repeated | each line of the transcript |
| nextbest_transcript_id | [string](#string) | repeated | next best translation results |






<a name="sagittarius.translation.v1.MediaTranslationResponse.Cue"/>

### MediaTranslationResponse.Cue



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| start_time | [google.protobuf.Duration](#google.protobuf.Duration) |  | the start and end of the transcripts |
| end_time | [google.protobuf.Duration](#google.protobuf.Duration) |  |  |
| text | [string](#string) |  |  |






<a name="sagittarius.translation.v1.StreamingTranslationRequest"/>

### StreamingTranslationRequest
The top-level message sent by the client for the `StreamingRecognize` method.
Multiple `StreamingTranslationRequest` messages are sent. The first message
must contain a `streaming_config` message and must not contain `audio` data.
All subsequent messages must contain `audio` data and must not contain a
`streaming_config` message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| streaming_config | [google.cloud.speech.v1.RecognitionConfig](#google.cloud.speech.v1.RecognitionConfig) |  | Provides information to the recognizer that specifies how to process the request. The first `StreamingTranslationRequest` message must contain a `streaming_config` message. |
| audio_content | [bytes](#bytes) |  | The audio data to be recognized. Sequential chunks of audio data are sent in sequential `StreamingTranslationRequest` messages. The first `StreamingTranslationRequest` message must not contain `audio_content` data and all subsequent `StreamingTranslationRequest` messages must contain `audio_content` data. The audio bytes must be encoded as specified in `RecognitionConfig`. Note: as with all bytes fields, protobuffers use a pure binary representation (not base64). See [audio limits](https://cloud.google.com/speech/limits#content). |






<a name="sagittarius.translation.v1.StreamingTranslationResponse"/>

### StreamingTranslationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error | [google.rpc.Status](#google.rpc.Status) |  | Output-only* If set, returns a [google.rpc.Status][google.rpc.Status] message that specifies the error for the operation. |
| results | [StreamingTranslationResult](#sagittarius.translation.v1.StreamingTranslationResult) | repeated | Output-only* This repeated list contains zero or more results that correspond to consecutive portions of the audio currently being processed. It contains zero or more `is_final=false` results followed by zero or one `is_final=true` result (the newly settled portion). |






<a name="sagittarius.translation.v1.StreamingTranslationResult"/>

### StreamingTranslationResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transcript | [string](#string) |  | Output-only* Transcript text representing the words that the user spoke. |
| confidence | [float](#float) |  | Output-only* The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is typically provided only for the top hypothesis, and only for `is_final=true` results. Clients should not rely on the `confidence` field as it is not guaranteed to be accurate or consistent. The default of 0.0 is a sentinel value indicating `confidence` was not set. |
| stability | [float](#float) |  | Output-only* An estimate of the likelihood that the recognizer will not change its guess about this interim result. Values range from 0.0 (completely unstable) to 1.0 (completely stable). This field is only provided for interim results (`is_final=false`). The default of 0.0 is a sentinel value indicating `stability` was not set. |
| start_time | [google.protobuf.Duration](#google.protobuf.Duration) |  | Output-only* Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. |
| end_time | [google.protobuf.Duration](#google.protobuf.Duration) |  | Output-only* Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. |






<a name="sagittarius.translation.v1.TranscriptRequest"/>

### TranscriptRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transcript_identity | [string](#string) |  | oneof case 2 return translate result by transcript_identity |
| start_time | [google.protobuf.Duration](#google.protobuf.Duration) |  | position of the transcript relative to the begginning of the audio or video |





 

 

 


<a name="sagittarius.translation.v1.Translation"/>

### Translation
Service that implements Sagittarius Translation API

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| TranslateMedia | [MediaTranslationRequest](#sagittarius.translation.v1.MediaTranslationRequest) | [MediaTranslationResponse](#sagittarius.translation.v1.MediaTranslationRequest) | Translate media(audio or video) by media identity |
| DetectLanguage | [DetectionRequest](#sagittarius.translation.v1.DetectionRequest) | [DetectionResponse](#sagittarius.translation.v1.DetectionRequest) | detect the language of text |
| Transcript | [TranscriptRequest](#sagittarius.translation.v1.TranscriptRequest) | [MediaTranslationResponse](#sagittarius.translation.v1.TranscriptRequest) |  |
| StreamingTranslation | [StreamingTranslationRequest](#sagittarius.translation.v1.StreamingTranslationRequest) | [StreamingTranslationResponse](#sagittarius.translation.v1.StreamingTranslationRequest) | Performs bidirectional streaming audio translation: receive results while sending audio. This method is only available via the gRPC API (not REST). |

 



## Scalar Value Types

| .proto Type | Notes | C++ Type | Java Type | Python Type |
| ----------- | ----- | -------- | --------- | ----------- |
| <a name="double" /> double |  | double | double | float |
| <a name="float" /> float |  | float | float | float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long |
| <a name="bool" /> bool |  | bool | boolean | boolean |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str |

