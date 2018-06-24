# Protocol Documentation
<a name="top"/>

## Table of Contents

- [media/v1/media.proto](#media/v1/media.proto)
    - [GetInfoRequest](#sagittarius.media.v1.GetInfoRequest)
    - [Info](#sagittarius.media.v1.Info)
    - [TrackInfo](#sagittarius.media.v1.TrackInfo)
    - [UpdateInfoRequest](#sagittarius.media.v1.UpdateInfoRequest)
  
    - [TrackInfo.Type](#sagittarius.media.v1.TrackInfo.Type)
  
  
    - [Media](#sagittarius.media.v1.Media)
  

- [Scalar Value Types](#scalar-value-types)



<a name="media/v1/media.proto"/>
<p align="right"><a href="#top">Top</a></p>

## media/v1/media.proto



<a name="sagittarius.media.v1.GetInfoRequest"/>

### GetInfoRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| media_hash | [string](#string) |  | quick hash of a media. For example: &#34;media/1111-2222-3333-4444/info&#34;. |






<a name="sagittarius.media.v1.Info"/>

### Info



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| media_hash | [string](#string) |  | Resource id of the media. It must have the format of &#34;media/*/info&#34;. For example: &#34;media/1111-2222-3333-4444/info&#34;. |
| tracks | [TrackInfo](#sagittarius.media.v1.TrackInfo) | repeated |  |






<a name="sagittarius.media.v1.TrackInfo"/>

### TrackInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| types | [TrackInfo.Type](#sagittarius.media.v1.TrackInfo.Type) |  |  |






<a name="sagittarius.media.v1.UpdateInfoRequest"/>

### UpdateInfoRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| media_hash | [string](#string) |  | Resource name of the parent resource where to create the book. For example: &#34;shelves/shelf1&#34;. |
| info | [Info](#sagittarius.media.v1.Info) |  | The Book resource to be created. Client must not set the `Book.name` field. |





 


<a name="sagittarius.media.v1.TrackInfo.Type"/>

### TrackInfo.Type


| Name | Number | Description |
| ---- | ------ | ----------- |
| VIDEO | 0 |  |
| AUDIO | 1 |  |
| TEXT | 2 |  |
| OTHER | 3 |  |


 

 


<a name="sagittarius.media.v1.Media"/>

### Media
Service that implements Sagittarius Media API

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetInfo | [GetInfoRequest](#sagittarius.media.v1.GetInfoRequest) | [Info](#sagittarius.media.v1.GetInfoRequest) |  |
| UpdateInfo | [UpdateInfoRequest](#sagittarius.media.v1.UpdateInfoRequest) | [Info](#sagittarius.media.v1.UpdateInfoRequest) |  |

 



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

