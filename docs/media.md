# Protocol Documentation
<a name="top"/>

## Table of Contents

- [media/v1/media.proto](#media/v1/media.proto)
    - [GetInfoRequest](#sagittarius.media.v1.GetInfoRequest)
    - [Info](#sagittarius.media.v1.Info)
    - [Info.TrackInfo](#sagittarius.media.v1.Info.TrackInfo)
    - [Thumbnail](#sagittarius.media.v1.Thumbnail)
    - [ThumbnailRequest](#sagittarius.media.v1.ThumbnailRequest)
    - [ThumbnailResponse](#sagittarius.media.v1.ThumbnailResponse)
    - [ThumbnailTimeRangesRequest](#sagittarius.media.v1.ThumbnailTimeRangesRequest)
    - [ThumbnailTimeRangesResponse](#sagittarius.media.v1.ThumbnailTimeRangesResponse)
    - [TimeRange](#sagittarius.media.v1.TimeRange)
    - [UpdateInfoRequest](#sagittarius.media.v1.UpdateInfoRequest)
    - [UpdateThumbnailRequest](#sagittarius.media.v1.UpdateThumbnailRequest)
  
  
  
    - [Media](#sagittarius.media.v1.Media)
  

- [Scalar Value Types](#scalar-value-types)



<a name="media/v1/media.proto"/>
<p align="right"><a href="#top">Top</a></p>

## media/v1/media.proto



<a name="sagittarius.media.v1.GetInfoRequest"/>

### GetInfoRequest
retrieve media info like sound track resolutions, length/duringation etc.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| media_hash | [string](#string) |  | quick hash of the media. For example: &#34;media/1111-2222-3333-4444/info&#34;. |






<a name="sagittarius.media.v1.Info"/>

### Info



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| media_hash | [string](#string) |  | Resource id of the media. It must have the format of &#34;media/*/info&#34;. For example: &#34;media/1111-2222-3333-4444/info&#34;. |
| tracks | [Info.TrackInfo](#sagittarius.media.v1.Info.TrackInfo) | repeated |  |






<a name="sagittarius.media.v1.Info.TrackInfo"/>

### Info.TrackInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| types | [Info.TrackInfo.Type](#sagittarius.media.v1.Info.TrackInfo.Type) |  |  |






<a name="sagittarius.media.v1.Thumbnail"/>

### Thumbnail



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| timestamp | [double](#double) |  | timestamp of this thumbnail in relative to the begginning of the media_hash |
| ext | [string](#string) |  | image&#39;s file extension |
| payload | [bytes](#bytes) |  | image&#39;s binary content |






<a name="sagittarius.media.v1.ThumbnailRequest"/>

### ThumbnailRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| media_hash | [string](#string) |  |  |
| range | [TimeRange](#sagittarius.media.v1.TimeRange) |  |  |
| timestamp | [double](#double) |  |  |
| token | [string](#string) |  | access token for read and write thumbnail by timestamp |






<a name="sagittarius.media.v1.ThumbnailResponse"/>

### ThumbnailResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error | [google.rpc.Status](#google.rpc.Status) |  |  |
| thumbnails | [Thumbnail](#sagittarius.media.v1.Thumbnail) | repeated | thumbnails. with timestamp, extension, and payload |






<a name="sagittarius.media.v1.ThumbnailTimeRangesRequest"/>

### ThumbnailTimeRangesRequest
try to retrieve Thumbnails


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| media_hash | [string](#string) |  | use quick media hash to get thumbnails |
| media_length | [double](#double) |  | time length of the media resource, in seconds |






<a name="sagittarius.media.v1.ThumbnailTimeRangesResponse"/>

### ThumbnailTimeRangesResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| error | [google.rpc.Status](#google.rpc.Status) |  |  |
| media_hash | [string](#string) |  | time range is used to tell the client the screenshot range |
| availables | [TimeRange](#sagittarius.media.v1.TimeRange) | repeated | thumbnails that the server have, in time ranges |
| missings | [TimeRange](#sagittarius.media.v1.TimeRange) | repeated | thumbnails that the server is missing and wanted, in time ranges |
| token | [string](#string) |  | access token for read and/or write thumbnail by timestamp session_token will not have write premission if there is not missing |






<a name="sagittarius.media.v1.TimeRange"/>

### TimeRange
time range is used to tell the client the screenshot range


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| begin | [double](#double) |  | the beginning of the time range, in seconds |
| end | [double](#double) |  | the end of the time range, in seconds |
| interval | [double](#double) |  | time interval between each thumbnails, in seconds |






<a name="sagittarius.media.v1.UpdateInfoRequest"/>

### UpdateInfoRequest
try to update media info


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| media_hash | [string](#string) |  | quick hash of the media. For example: &#34;media/1111-2222-3333-4444/info&#34;. |
| info | [Info](#sagittarius.media.v1.Info) |  | the media info to be updated |






<a name="sagittarius.media.v1.UpdateThumbnailRequest"/>

### UpdateThumbnailRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| media_hash | [string](#string) |  |  |
| thumbnails | [Thumbnail](#sagittarius.media.v1.Thumbnail) | repeated | the thumbnails to be updated |
| token | [string](#string) |  | access token for read and write thumbnail by timestamp |





 

 

 


<a name="sagittarius.media.v1.Media"/>

### Media
Service that implements Sagittarius Media API

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetInfo | [GetInfoRequest](#sagittarius.media.v1.GetInfoRequest) | [Info](#sagittarius.media.v1.GetInfoRequest) |  |
| UpdateInfo | [UpdateInfoRequest](#sagittarius.media.v1.UpdateInfoRequest) | [Info](#sagittarius.media.v1.UpdateInfoRequest) |  |
| GetThumbnailTimeRanges | [ThumbnailTimeRangesRequest](#sagittarius.media.v1.ThumbnailTimeRangesRequest) | [ThumbnailTimeRangesResponse](#sagittarius.media.v1.ThumbnailTimeRangesRequest) | Query obtainable thumbnails time range and unavailable ones by media identity |
| GetThumbnail | [ThumbnailRequest](#sagittarius.media.v1.ThumbnailRequest) | [ThumbnailResponse](#sagittarius.media.v1.ThumbnailRequest) | Get thumbnail by timestamps |
| UpdateThumbnail | [UpdateThumbnailRequest](#sagittarius.media.v1.UpdateThumbnailRequest) | [.google.rpc.Status](#sagittarius.media.v1.UpdateThumbnailRequest) | Update thumbnail by timestamps |

 



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

