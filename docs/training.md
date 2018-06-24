# Protocol Documentation
<a name="top"/>

## Table of Contents

- [translation/v1/training.proto](#translation/v1/training.proto)
    - [TrainingData](#sagittarius.training.v1.TrainingData)
  
  
  
    - [Trainng](#sagittarius.training.v1.Trainng)
  

- [Scalar Value Types](#scalar-value-types)



<a name="translation/v1/training.proto"/>
<p align="right"><a href="#top">Top</a></p>

## translation/v1/training.proto



<a name="sagittarius.training.v1.TrainingData"/>

### TrainingData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| media_identity | [string](#string) |  | the media identity |
| language_code | [string](#string) |  | the language code of the payload |
| format | [string](#string) |  | the format of the payload |
| played_time | [google.protobuf.Duration](#google.protobuf.Duration) |  | how long does this transcript been played |
| total_time | [google.protobuf.Duration](#google.protobuf.Duration) |  | how long of the entire video |
| transcript_identity | [string](#string) |  | transcript identity if any |
| payload | [bytes](#bytes) |  | the transcripts payload |





 

 

 


<a name="sagittarius.training.v1.Trainng"/>

### Trainng
Trainng that implements Sagittarius Translation API

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| PushData | [TrainingData](#sagittarius.training.v1.TrainingData) | [.google.rpc.Status](#sagittarius.training.v1.TrainingData) | Push accture traning data to server |

 



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

