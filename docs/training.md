# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [training/v1/training.proto](#training/v1/training.proto)
    - [StreamingTrainingRequest](#sagittarius.training.v1.StreamingTrainingRequest)
    - [TrainingData](#sagittarius.training.v1.TrainingData)
  
  
  
    - [Trainng](#sagittarius.training.v1.Trainng)
  

- [Scalar Value Types](#scalar-value-types)



<a name="training/v1/training.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## training/v1/training.proto



<a name="sagittarius.training.v1.StreamingTrainingRequest"></a>

### StreamingTrainingRequest
TODO:


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| streaming_config | [google.cloud.speech.v1.RecognitionConfig](#google.cloud.speech.v1.RecognitionConfig) |  | Provides information to the recognizer that specifies how to process the request. The first `StreamingTranslationRequest` message must contain a `streaming_config` message. |
| audio_content | [bytes](#bytes) |  | The audio data to be trained. Sequential chunks of audio data are sent in sequential `StreamingTranslationRequest` messages. The first `StreamingTranslationRequest` message must not contain `audio_content` data and all subsequent `StreamingTranslationRequest` messages must contain `audio_content` data. The audio bytes must be encoded as specified in `RecognitionConfig`. Note: as with all bytes fields, protobuffers use a pure binary representation (not base64). See [audio limits](https://cloud.google.com/speech/limits#content). |
| transcript | [string](#string) |  |  |
| media_identity | [string](#string) |  | the media identity |






<a name="sagittarius.training.v1.TrainingData"></a>

### TrainingData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| media_identity | [string](#string) |  | the media identity |
| language_code | [string](#string) |  | the language code of the payload |
| format | [string](#string) |  | the format of the payload |
| played_time | [double](#double) |  | how long does this transcript been played |
| total_time | [double](#double) |  | how long of the entire video |
| delay | [int64](#int64) |  | in ms, can be &#43;/- |
| transcript_identity | [string](#string) |  | transcript identity if any |
| payload | [bytes](#bytes) |  | the transcripts payload |





 

 

 


<a name="sagittarius.training.v1.Trainng"></a>

### Trainng
Trainng that implements Sagittarius Translation API

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| PushData | [TrainingData](#sagittarius.training.v1.TrainingData) | [.google.rpc.Status](#google.rpc.Status) | Push accture traning data to server |
| StreamingTraining | [StreamingTrainingRequest](#sagittarius.training.v1.StreamingTrainingRequest) stream | [.google.rpc.Status](#google.rpc.Status) | Performs bidirectional streaming audio translation: receive results while sending audio. This method is only available via the gRPC API (not REST). |

 



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

