# Protocol Documentation
<a name="top"/>

## Table of Contents

- [translation/v1/translation.proto](#translation/v1/translation.proto)
    - [DetectionPrediction](#sagittarius.translation.v1.DetectionPrediction)
    - [DetectionRequest](#sagittarius.translation.v1.DetectionRequest)
    - [DetectionResponse](#sagittarius.translation.v1.DetectionResponse)
    - [MediaTranslationRequest](#sagittarius.translation.v1.MediaTranslationRequest)
    - [MediaTranslationResponse](#sagittarius.translation.v1.MediaTranslationResponse)
    - [StreamingTranslationRequest](#sagittarius.translation.v1.StreamingTranslationRequest)
    - [StreamingTranslationRequestConfig](#sagittarius.translation.v1.StreamingTranslationRequestConfig)
    - [StreamingTranslationResponse](#sagittarius.translation.v1.StreamingTranslationResponse)
    - [StreamingTranslationResult](#sagittarius.translation.v1.StreamingTranslationResult)
    - [StreamingTranslationTaskInfo](#sagittarius.translation.v1.StreamingTranslationTaskInfo)
    - [StreamingTranslationTaskRequest](#sagittarius.translation.v1.StreamingTranslationTaskRequest)
    - [StreamingTranslationTaskResponse](#sagittarius.translation.v1.StreamingTranslationTaskResponse)
    - [TextTranslationRequest](#sagittarius.translation.v1.TextTranslationRequest)
    - [TextTranslationResponse](#sagittarius.translation.v1.TextTranslationResponse)
    - [TextTranslationResponse.Text](#sagittarius.translation.v1.TextTranslationResponse.Text)
    - [TranscriptInfo](#sagittarius.translation.v1.TranscriptInfo)
    - [TranscriptRequest](#sagittarius.translation.v1.TranscriptRequest)
    - [TranscriptResponse](#sagittarius.translation.v1.TranscriptResponse)
    - [TranscriptResponse.Cue](#sagittarius.translation.v1.TranscriptResponse.Cue)
  
    - [StreamingTranslationTaskCode](#sagittarius.translation.v1.StreamingTranslationTaskCode)
  
  
    - [Translation](#sagittarius.translation.v1.Translation)
  

- [Scalar Value Types](#scalar-value-types)



<a name="translation/v1/translation.proto"/>
<p align="right"><a href="#top">Top</a></p>

## translation/v1/translation.proto



<a name="sagittarius.translation.v1.DetectionPrediction"/>

### DetectionPrediction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| language_code | [string](#string) |  | Output-only* the language code of the detection result |
| confidence | [float](#float) |  | Output-only* The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the detection result are correct. |






<a name="sagittarius.translation.v1.DetectionRequest"/>

### DetectionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) |  | the text to be detect |






<a name="sagittarius.translation.v1.DetectionResponse"/>

### DetectionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| prediction | [DetectionPrediction](#sagittarius.translation.v1.DetectionPrediction) | repeated | there might be more than one prediction |






<a name="sagittarius.translation.v1.MediaTranslationRequest"/>

### MediaTranslationRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| media_identity | [string](#string) |  | Media Identity |
| language_code | [string](#string) |  | target language ISO-639-1 Code https://cloud.google.com/translate/docs/languages |
| format | [string](#string) |  | the format of the transcripts |
| start_time | [double](#double) |  | position of the transcript relative to the begginning of the audio or video |
| hints | [string](#string) |  | hints or keywords for more possible results |






<a name="sagittarius.translation.v1.MediaTranslationResponse"/>

### MediaTranslationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error | [google.rpc.Status](#google.rpc.Status) |  | Output-only* If set, returns a [google.rpc.Status][google.rpc.Status] message that specifies the error for the operation. return 404 if no result, in this case, client should use StreamingTranslationRequest |
| results | [TranscriptInfo](#sagittarius.translation.v1.TranscriptInfo) | repeated | best translation results |
| stream_translation_task_id | [string](#string) |  | if there is a stream translation task running, return task id |






<a name="sagittarius.translation.v1.StreamingTranslationRequest"/>

### StreamingTranslationRequest
The top-level message sent by the client for the `StreamingTranslation` method.
Multiple `StreamingTranslationRequest` messages are sent. The first message
must contain a `streaming_config` message 
and must not contain `audio` data.
All subsequent messages must contain `audio` data and must not contain a
`streaming_config` message.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| streaming_config | [StreamingTranslationRequestConfig](#sagittarius.translation.v1.StreamingTranslationRequestConfig) |  |  |
| audio_content | [bytes](#bytes) |  | The audio data to be recognized. Sequential chunks of audio data are sent in sequential `StreamingTranslationRequest` messages. The first `StreamingTranslationRequest` message must not contain `audio_content` data and all subsequent `StreamingTranslationRequest` messages must contain `audio_content` data. The audio bytes must be encoded as specified in `RecognitionConfig`. Note: as with all bytes fields, protobuffers use a pure binary representation (not base64). See [audio limits](https://cloud.google.com/speech/limits#content). |






<a name="sagittarius.translation.v1.StreamingTranslationRequestConfig"/>

### StreamingTranslationRequestConfig



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| streaming_config | [google.cloud.speech.v1.RecognitionConfig](#google.cloud.speech.v1.RecognitionConfig) |  | Provides information to the recognizer that specifies how to process the request. The first `StreamingTranslationRequest` message must contain a `streaming_config` message. |
| media_identity | [string](#string) |  | the media identity |
| audio_language_code | [string](#string) |  | the language code of the audio ISO-639-1 Code https://cloud.google.com/translate/docs/languages |
| target_language_code | [string](#string) |  | ISO-639-1 Code https://cloud.google.com/translate/docs/languages |
| audio_track | [string](#string) |  | the track of audio |






<a name="sagittarius.translation.v1.StreamingTranslationResponse"/>

### StreamingTranslationResponse
The top-level message sent by server for the `StreamingTranslation` method.
Multiple `StreamingTranslationResponse` messages may be sent.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error | [google.rpc.Status](#google.rpc.Status) |  | Output-only* If set, returns a [google.rpc.Status][google.rpc.Status] message that specifies the error for the operation. |
| streaming_result | [StreamingTranslationResult](#sagittarius.translation.v1.StreamingTranslationResult) |  | Output-only* If the request is suit for streaming result, This contains results that correspond to consecutive portions of the audio currently being processed. |
| taskinfo | [StreamingTranslationTaskInfo](#sagittarius.translation.v1.StreamingTranslationTaskInfo) |  | Output-only* If StreamingTranslationTask has been created for farther inquiry this is the task info include id and estimated finish time, etc. |
| transcript_result | [TranscriptInfo](#sagittarius.translation.v1.TranscriptInfo) |  | Output-only* If the StreamingTranslationTask has finished and the client still alive this is the translated transcript in whole |






<a name="sagittarius.translation.v1.StreamingTranslationResult"/>

### StreamingTranslationResult



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transcript | [string](#string) |  | Output-only* Transcript text representing the words that the user spoke. |
| confidence | [float](#float) |  | Output-only* The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is typically provided only for the top hypothesis, and only for `is_final=true` results. Clients should not rely on the `confidence` field as it is not guaranteed to be accurate or consistent. The default of 0.0 is a sentinel value indicating `confidence` was not set. |
| stability | [float](#float) |  | Output-only* An estimate of the likelihood that the recognizer will not change its guess about this interim result. Values range from 0.0 (completely unstable) to 1.0 (completely stable). This field is only provided for interim results (`is_final=false`). The default of 0.0 is a sentinel value indicating `stability` was not set. |
| start_time | [double](#double) |  | Output-only* Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. |
| end_time | [double](#double) |  | Output-only* Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. |






<a name="sagittarius.translation.v1.StreamingTranslationTaskInfo"/>

### StreamingTranslationTaskInfo
the StreamingTranslationTask that created by the `StreamingTranslation` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  | this task id can be used for farther inquiry |
| estimate_time | [double](#double) |  | this is the estimated finished time, the task is finished if the time is zero or less |






<a name="sagittarius.translation.v1.StreamingTranslationTaskRequest"/>

### StreamingTranslationTaskRequest
the StreamingTranslationTask id that created by the `StreamingTranslation` method.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| task_id | [string](#string) |  |  |






<a name="sagittarius.translation.v1.StreamingTranslationTaskResponse"/>

### StreamingTranslationTaskResponse
the translated TranscriptInfo or `StreamingTranslationTaskInfo`


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error | [google.rpc.Status](#google.rpc.Status) |  | maybe be: StreamingTranslationTaskCode.CONTINUE StreamingTranslationTaskCode.SKIP_AUDIO |
| taskinfo | [StreamingTranslationTaskInfo](#sagittarius.translation.v1.StreamingTranslationTaskInfo) |  |  |
| transcriptinfo | [TranscriptInfo](#sagittarius.translation.v1.TranscriptInfo) |  | can return result |






<a name="sagittarius.translation.v1.TextTranslationRequest"/>

### TextTranslationRequest
We use Google Translation Service for text translation.
Translation API Reference: https://cloud.google.com/translate/docs/reference/translate


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| text | [string](#string) | repeated | The text to translate |
| target_language_code | [string](#string) |  | The language to use for translation of the text ISO-639-1/bcp47 Code with tags https://cloud.google.com/translate/docs/languages |
| source_language_code | [string](#string) |  | The language of the source text ISO-639-1/bcp47 Code with tags https://cloud.google.com/translate/docs/languages |






<a name="sagittarius.translation.v1.TextTranslationResponse"/>

### TextTranslationResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error | [google.rpc.Status](#google.rpc.Status) |  |  |
| results | [TextTranslationResponse.Text](#sagittarius.translation.v1.TextTranslationResponse.Text) | repeated | translation results for the requested text |






<a name="sagittarius.translation.v1.TextTranslationResponse.Text"/>

### TextTranslationResponse.Text



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| source_language | [string](#string) |  | The source language of the text detected ISO-639-1/bcp47 Code with tags https://cloud.google.com/translate/docs/languages |
| text | [string](#string) |  | The translated Text |






<a name="sagittarius.translation.v1.TranscriptInfo"/>

### TranscriptInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transcript_identity | [string](#string) |  | the identity, can be used in TranslationRequest |
| language_code | [string](#string) |  | ISO-639-1 Code https://cloud.google.com/translate/docs/languages |
| ranking | [float](#float) |  | actually we should use as &#34;confidence&#34; use &#34;ranking&#34; for back ward competibility |
| tags | [string](#string) | repeated | maybe: &#34;ai&#34; - result from ai tranlation &#34;edited&#34; - result from user contribution |
| delay | [int64](#int64) |  | in ms, can be &#43;/- |
| confidence | [float](#float) |  | the confidence of the quality of the translation |






<a name="sagittarius.translation.v1.TranscriptRequest"/>

### TranscriptRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transcript_identity | [string](#string) |  | oneof case 2 return translate result by transcript_identity |
| start_time | [double](#double) |  | position of the transcript relative to the begginning of the audio or video |






<a name="sagittarius.translation.v1.TranscriptResponse"/>

### TranscriptResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error | [google.rpc.Status](#google.rpc.Status) |  |  |
| transcripts | [TranscriptResponse.Cue](#sagittarius.translation.v1.TranscriptResponse.Cue) | repeated | each line of the transcript |
| is_end_of_transcript | [bool](#bool) |  | if transcripts ended in this result |






<a name="sagittarius.translation.v1.TranscriptResponse.Cue"/>

### TranscriptResponse.Cue



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| start_time | [double](#double) |  | the start and end of the transcripts |
| end_time | [double](#double) |  |  |
| text | [string](#string) |  |  |





 


<a name="sagittarius.translation.v1.StreamingTranslationTaskCode"/>

### StreamingTranslationTaskCode
The canonical error codes for StreamingTranslationTaskResponse

| Name | Number | Description |
| ---- | ------ | ----------- |
| OK | 0 | The first enum value must be zero in proto3. |
| CONTINUE | 9100 | instruct client to continue sending audio data |
| SKIP_AUDIO | 9101 | instruct client to skip sending audio data |


 

 


<a name="sagittarius.translation.v1.Translation"/>

### Translation
Service that implements Sagittarius Translation API

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| TranslateMedia | [MediaTranslationRequest](#sagittarius.translation.v1.MediaTranslationRequest) | [MediaTranslationResponse](#sagittarius.translation.v1.MediaTranslationRequest) | Translate media(audio or video) by media identity |
| DetectLanguage | [DetectionRequest](#sagittarius.translation.v1.DetectionRequest) | [DetectionResponse](#sagittarius.translation.v1.DetectionRequest) | detect the language of text |
| Transcript | [TranscriptRequest](#sagittarius.translation.v1.TranscriptRequest) | [TranscriptResponse](#sagittarius.translation.v1.TranscriptRequest) |  |
| TranslateText | [TextTranslationRequest](#sagittarius.translation.v1.TextTranslationRequest) | [TextTranslationResponse](#sagittarius.translation.v1.TextTranslationRequest) | Translate text by Google Translation Service |
| StreamingTranslation | [StreamingTranslationRequest](#sagittarius.translation.v1.StreamingTranslationRequest) | [StreamingTranslationResponse](#sagittarius.translation.v1.StreamingTranslationRequest) | Performs bidirectional streaming audio translation: receive results after or while sending audio. This method is only available via the gRPC API (not REST). |
| StreamingTranslationTask | [StreamingTranslationTaskRequest](#sagittarius.translation.v1.StreamingTranslationTaskRequest) | [StreamingTranslationTaskResponse](#sagittarius.translation.v1.StreamingTranslationTaskRequest) | Check StreamingTranslationTask results or estimate finish time and maybe other informations related to the task |

 



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

