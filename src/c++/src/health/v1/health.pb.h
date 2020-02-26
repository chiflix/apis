// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: health/v1/health.proto

#ifndef GOOGLE_PROTOBUF_INCLUDED_health_2fv1_2fhealth_2eproto
#define GOOGLE_PROTOBUF_INCLUDED_health_2fv1_2fhealth_2eproto

#include <limits>
#include <string>

#include <google/protobuf/port_def.inc>
#if PROTOBUF_VERSION < 3011000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers. Please update
#error your headers.
#endif
#if 3011002 < PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers. Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/port_undef.inc>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_table_driven.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/inlined_string_field.h>
#include <google/protobuf/metadata.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/generated_enum_reflection.h>
#include <google/protobuf/unknown_field_set.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_health_2fv1_2fhealth_2eproto
PROTOBUF_NAMESPACE_OPEN
namespace internal {
class AnyMetadata;
}  // namespace internal
PROTOBUF_NAMESPACE_CLOSE

// Internal implementation detail -- do not use these members.
struct TableStruct_health_2fv1_2fhealth_2eproto {
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::AuxillaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::ParseTable schema[2]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::PROTOBUF_NAMESPACE_ID::internal::FieldMetadata field_metadata[];
  static const ::PROTOBUF_NAMESPACE_ID::internal::SerializationTable serialization_table[];
  static const ::PROTOBUF_NAMESPACE_ID::uint32 offsets[];
};
extern const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_health_2fv1_2fhealth_2eproto;
namespace sagittarius {
namespace health {
namespace v1 {
class HealthCheckRequest;
class HealthCheckRequestDefaultTypeInternal;
extern HealthCheckRequestDefaultTypeInternal _HealthCheckRequest_default_instance_;
class HealthCheckResponse;
class HealthCheckResponseDefaultTypeInternal;
extern HealthCheckResponseDefaultTypeInternal _HealthCheckResponse_default_instance_;
}  // namespace v1
}  // namespace health
}  // namespace sagittarius
PROTOBUF_NAMESPACE_OPEN
template<> ::sagittarius::health::v1::HealthCheckRequest* Arena::CreateMaybeMessage<::sagittarius::health::v1::HealthCheckRequest>(Arena*);
template<> ::sagittarius::health::v1::HealthCheckResponse* Arena::CreateMaybeMessage<::sagittarius::health::v1::HealthCheckResponse>(Arena*);
PROTOBUF_NAMESPACE_CLOSE
namespace sagittarius {
namespace health {
namespace v1 {

enum HealthCheckResponse_ServingStatus : int {
  HealthCheckResponse_ServingStatus_UNKNOWN = 0,
  HealthCheckResponse_ServingStatus_SERVING = 1,
  HealthCheckResponse_ServingStatus_NOT_SERVING = 2,
  HealthCheckResponse_ServingStatus_HealthCheckResponse_ServingStatus_INT_MIN_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::min(),
  HealthCheckResponse_ServingStatus_HealthCheckResponse_ServingStatus_INT_MAX_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::PROTOBUF_NAMESPACE_ID::int32>::max()
};
bool HealthCheckResponse_ServingStatus_IsValid(int value);
constexpr HealthCheckResponse_ServingStatus HealthCheckResponse_ServingStatus_ServingStatus_MIN = HealthCheckResponse_ServingStatus_UNKNOWN;
constexpr HealthCheckResponse_ServingStatus HealthCheckResponse_ServingStatus_ServingStatus_MAX = HealthCheckResponse_ServingStatus_NOT_SERVING;
constexpr int HealthCheckResponse_ServingStatus_ServingStatus_ARRAYSIZE = HealthCheckResponse_ServingStatus_ServingStatus_MAX + 1;

const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* HealthCheckResponse_ServingStatus_descriptor();
template<typename T>
inline const std::string& HealthCheckResponse_ServingStatus_Name(T enum_t_value) {
  static_assert(::std::is_same<T, HealthCheckResponse_ServingStatus>::value ||
    ::std::is_integral<T>::value,
    "Incorrect type passed to function HealthCheckResponse_ServingStatus_Name.");
  return ::PROTOBUF_NAMESPACE_ID::internal::NameOfEnum(
    HealthCheckResponse_ServingStatus_descriptor(), enum_t_value);
}
inline bool HealthCheckResponse_ServingStatus_Parse(
    const std::string& name, HealthCheckResponse_ServingStatus* value) {
  return ::PROTOBUF_NAMESPACE_ID::internal::ParseNamedEnum<HealthCheckResponse_ServingStatus>(
    HealthCheckResponse_ServingStatus_descriptor(), name, value);
}
// ===================================================================

class HealthCheckRequest :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:sagittarius.health.v1.HealthCheckRequest) */ {
 public:
  HealthCheckRequest();
  virtual ~HealthCheckRequest();

  HealthCheckRequest(const HealthCheckRequest& from);
  HealthCheckRequest(HealthCheckRequest&& from) noexcept
    : HealthCheckRequest() {
    *this = ::std::move(from);
  }

  inline HealthCheckRequest& operator=(const HealthCheckRequest& from) {
    CopyFrom(from);
    return *this;
  }
  inline HealthCheckRequest& operator=(HealthCheckRequest&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  inline ::PROTOBUF_NAMESPACE_ID::Arena* GetArena() const final {
    return GetArenaNoVirtual();
  }
  inline void* GetMaybeArenaPointer() const final {
    return MaybeArenaPtr();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* GetDescriptor() {
    return GetMetadataStatic().descriptor;
  }
  static const ::PROTOBUF_NAMESPACE_ID::Reflection* GetReflection() {
    return GetMetadataStatic().reflection;
  }
  static const HealthCheckRequest& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const HealthCheckRequest* internal_default_instance() {
    return reinterpret_cast<const HealthCheckRequest*>(
               &_HealthCheckRequest_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  friend void swap(HealthCheckRequest& a, HealthCheckRequest& b) {
    a.Swap(&b);
  }
  inline void Swap(HealthCheckRequest* other) {
    if (other == this) return;
    if (GetArenaNoVirtual() == other->GetArenaNoVirtual()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(HealthCheckRequest* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetArenaNoVirtual() == other->GetArenaNoVirtual());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline HealthCheckRequest* New() const final {
    return CreateMaybeMessage<HealthCheckRequest>(nullptr);
  }

  HealthCheckRequest* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<HealthCheckRequest>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const HealthCheckRequest& from);
  void MergeFrom(const HealthCheckRequest& from);
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) final;
  ::PROTOBUF_NAMESPACE_ID::uint8* _InternalSerialize(
      ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  inline void SharedCtor();
  inline void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(HealthCheckRequest* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "sagittarius.health.v1.HealthCheckRequest";
  }
  protected:
  explicit HealthCheckRequest(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  private:
  static void ArenaDtor(void* object);
  inline void RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  private:
  inline ::PROTOBUF_NAMESPACE_ID::Arena* GetArenaNoVirtual() const {
    return _internal_metadata_.arena();
  }
  inline void* MaybeArenaPtr() const {
    return _internal_metadata_.raw_arena_ptr();
  }
  public:

  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;
  private:
  static ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadataStatic() {
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_health_2fv1_2fhealth_2eproto);
    return ::descriptor_table_health_2fv1_2fhealth_2eproto.file_level_metadata[kIndexInFileMessages];
  }

  public:

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  enum : int {
    kServiceFieldNumber = 1,
  };
  // string service = 1;
  void clear_service();
  const std::string& service() const;
  void set_service(const std::string& value);
  void set_service(std::string&& value);
  void set_service(const char* value);
  void set_service(const char* value, size_t size);
  std::string* mutable_service();
  std::string* release_service();
  void set_allocated_service(std::string* service);
  GOOGLE_PROTOBUF_RUNTIME_DEPRECATED("The unsafe_arena_ accessors for"
  "    string fields are deprecated and will be removed in a"
  "    future release.")
  std::string* unsafe_arena_release_service();
  GOOGLE_PROTOBUF_RUNTIME_DEPRECATED("The unsafe_arena_ accessors for"
  "    string fields are deprecated and will be removed in a"
  "    future release.")
  void unsafe_arena_set_allocated_service(
      std::string* service);
  private:
  const std::string& _internal_service() const;
  void _internal_set_service(const std::string& value);
  std::string* _internal_mutable_service();
  public:

  // @@protoc_insertion_point(class_scope:sagittarius.health.v1.HealthCheckRequest)
 private:
  class _Internal;

  ::PROTOBUF_NAMESPACE_ID::internal::InternalMetadataWithArena _internal_metadata_;
  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr service_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_health_2fv1_2fhealth_2eproto;
};
// -------------------------------------------------------------------

class HealthCheckResponse :
    public ::PROTOBUF_NAMESPACE_ID::Message /* @@protoc_insertion_point(class_definition:sagittarius.health.v1.HealthCheckResponse) */ {
 public:
  HealthCheckResponse();
  virtual ~HealthCheckResponse();

  HealthCheckResponse(const HealthCheckResponse& from);
  HealthCheckResponse(HealthCheckResponse&& from) noexcept
    : HealthCheckResponse() {
    *this = ::std::move(from);
  }

  inline HealthCheckResponse& operator=(const HealthCheckResponse& from) {
    CopyFrom(from);
    return *this;
  }
  inline HealthCheckResponse& operator=(HealthCheckResponse&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  inline ::PROTOBUF_NAMESPACE_ID::Arena* GetArena() const final {
    return GetArenaNoVirtual();
  }
  inline void* GetMaybeArenaPointer() const final {
    return MaybeArenaPtr();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::PROTOBUF_NAMESPACE_ID::Descriptor* GetDescriptor() {
    return GetMetadataStatic().descriptor;
  }
  static const ::PROTOBUF_NAMESPACE_ID::Reflection* GetReflection() {
    return GetMetadataStatic().reflection;
  }
  static const HealthCheckResponse& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const HealthCheckResponse* internal_default_instance() {
    return reinterpret_cast<const HealthCheckResponse*>(
               &_HealthCheckResponse_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    1;

  friend void swap(HealthCheckResponse& a, HealthCheckResponse& b) {
    a.Swap(&b);
  }
  inline void Swap(HealthCheckResponse* other) {
    if (other == this) return;
    if (GetArenaNoVirtual() == other->GetArenaNoVirtual()) {
      InternalSwap(other);
    } else {
      ::PROTOBUF_NAMESPACE_ID::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(HealthCheckResponse* other) {
    if (other == this) return;
    GOOGLE_DCHECK(GetArenaNoVirtual() == other->GetArenaNoVirtual());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  inline HealthCheckResponse* New() const final {
    return CreateMaybeMessage<HealthCheckResponse>(nullptr);
  }

  HealthCheckResponse* New(::PROTOBUF_NAMESPACE_ID::Arena* arena) const final {
    return CreateMaybeMessage<HealthCheckResponse>(arena);
  }
  void CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) final;
  void CopyFrom(const HealthCheckResponse& from);
  void MergeFrom(const HealthCheckResponse& from);
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  const char* _InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) final;
  ::PROTOBUF_NAMESPACE_ID::uint8* _InternalSerialize(
      ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  inline void SharedCtor();
  inline void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(HealthCheckResponse* other);
  friend class ::PROTOBUF_NAMESPACE_ID::internal::AnyMetadata;
  static ::PROTOBUF_NAMESPACE_ID::StringPiece FullMessageName() {
    return "sagittarius.health.v1.HealthCheckResponse";
  }
  protected:
  explicit HealthCheckResponse(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  private:
  static void ArenaDtor(void* object);
  inline void RegisterArenaDtor(::PROTOBUF_NAMESPACE_ID::Arena* arena);
  private:
  inline ::PROTOBUF_NAMESPACE_ID::Arena* GetArenaNoVirtual() const {
    return _internal_metadata_.arena();
  }
  inline void* MaybeArenaPtr() const {
    return _internal_metadata_.raw_arena_ptr();
  }
  public:

  ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadata() const final;
  private:
  static ::PROTOBUF_NAMESPACE_ID::Metadata GetMetadataStatic() {
    ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&::descriptor_table_health_2fv1_2fhealth_2eproto);
    return ::descriptor_table_health_2fv1_2fhealth_2eproto.file_level_metadata[kIndexInFileMessages];
  }

  public:

  // nested types ----------------------------------------------------

  typedef HealthCheckResponse_ServingStatus ServingStatus;
  static constexpr ServingStatus UNKNOWN =
    HealthCheckResponse_ServingStatus_UNKNOWN;
  static constexpr ServingStatus SERVING =
    HealthCheckResponse_ServingStatus_SERVING;
  static constexpr ServingStatus NOT_SERVING =
    HealthCheckResponse_ServingStatus_NOT_SERVING;
  static inline bool ServingStatus_IsValid(int value) {
    return HealthCheckResponse_ServingStatus_IsValid(value);
  }
  static constexpr ServingStatus ServingStatus_MIN =
    HealthCheckResponse_ServingStatus_ServingStatus_MIN;
  static constexpr ServingStatus ServingStatus_MAX =
    HealthCheckResponse_ServingStatus_ServingStatus_MAX;
  static constexpr int ServingStatus_ARRAYSIZE =
    HealthCheckResponse_ServingStatus_ServingStatus_ARRAYSIZE;
  static inline const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor*
  ServingStatus_descriptor() {
    return HealthCheckResponse_ServingStatus_descriptor();
  }
  template<typename T>
  static inline const std::string& ServingStatus_Name(T enum_t_value) {
    static_assert(::std::is_same<T, ServingStatus>::value ||
      ::std::is_integral<T>::value,
      "Incorrect type passed to function ServingStatus_Name.");
    return HealthCheckResponse_ServingStatus_Name(enum_t_value);
  }
  static inline bool ServingStatus_Parse(const std::string& name,
      ServingStatus* value) {
    return HealthCheckResponse_ServingStatus_Parse(name, value);
  }

  // accessors -------------------------------------------------------

  enum : int {
    kVersionFieldNumber = 2,
    kStatusFieldNumber = 1,
  };
  // string version = 2;
  void clear_version();
  const std::string& version() const;
  void set_version(const std::string& value);
  void set_version(std::string&& value);
  void set_version(const char* value);
  void set_version(const char* value, size_t size);
  std::string* mutable_version();
  std::string* release_version();
  void set_allocated_version(std::string* version);
  GOOGLE_PROTOBUF_RUNTIME_DEPRECATED("The unsafe_arena_ accessors for"
  "    string fields are deprecated and will be removed in a"
  "    future release.")
  std::string* unsafe_arena_release_version();
  GOOGLE_PROTOBUF_RUNTIME_DEPRECATED("The unsafe_arena_ accessors for"
  "    string fields are deprecated and will be removed in a"
  "    future release.")
  void unsafe_arena_set_allocated_version(
      std::string* version);
  private:
  const std::string& _internal_version() const;
  void _internal_set_version(const std::string& value);
  std::string* _internal_mutable_version();
  public:

  // .sagittarius.health.v1.HealthCheckResponse.ServingStatus status = 1;
  void clear_status();
  ::sagittarius::health::v1::HealthCheckResponse_ServingStatus status() const;
  void set_status(::sagittarius::health::v1::HealthCheckResponse_ServingStatus value);
  private:
  ::sagittarius::health::v1::HealthCheckResponse_ServingStatus _internal_status() const;
  void _internal_set_status(::sagittarius::health::v1::HealthCheckResponse_ServingStatus value);
  public:

  // @@protoc_insertion_point(class_scope:sagittarius.health.v1.HealthCheckResponse)
 private:
  class _Internal;

  ::PROTOBUF_NAMESPACE_ID::internal::InternalMetadataWithArena _internal_metadata_;
  template <typename T> friend class ::PROTOBUF_NAMESPACE_ID::Arena::InternalHelper;
  typedef void InternalArenaConstructable_;
  typedef void DestructorSkippable_;
  ::PROTOBUF_NAMESPACE_ID::internal::ArenaStringPtr version_;
  int status_;
  mutable ::PROTOBUF_NAMESPACE_ID::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_health_2fv1_2fhealth_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// HealthCheckRequest

// string service = 1;
inline void HealthCheckRequest::clear_service() {
  service_.ClearToEmpty(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline const std::string& HealthCheckRequest::service() const {
  // @@protoc_insertion_point(field_get:sagittarius.health.v1.HealthCheckRequest.service)
  return _internal_service();
}
inline void HealthCheckRequest::set_service(const std::string& value) {
  _internal_set_service(value);
  // @@protoc_insertion_point(field_set:sagittarius.health.v1.HealthCheckRequest.service)
}
inline std::string* HealthCheckRequest::mutable_service() {
  // @@protoc_insertion_point(field_mutable:sagittarius.health.v1.HealthCheckRequest.service)
  return _internal_mutable_service();
}
inline const std::string& HealthCheckRequest::_internal_service() const {
  return service_.Get();
}
inline void HealthCheckRequest::_internal_set_service(const std::string& value) {
  
  service_.Set(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), value, GetArenaNoVirtual());
}
inline void HealthCheckRequest::set_service(std::string&& value) {
  
  service_.Set(
    &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::move(value), GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_rvalue:sagittarius.health.v1.HealthCheckRequest.service)
}
inline void HealthCheckRequest::set_service(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  service_.Set(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(value),
              GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_char:sagittarius.health.v1.HealthCheckRequest.service)
}
inline void HealthCheckRequest::set_service(const char* value,
    size_t size) {
  
  service_.Set(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size), GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_pointer:sagittarius.health.v1.HealthCheckRequest.service)
}
inline std::string* HealthCheckRequest::_internal_mutable_service() {
  
  return service_.Mutable(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline std::string* HealthCheckRequest::release_service() {
  // @@protoc_insertion_point(field_release:sagittarius.health.v1.HealthCheckRequest.service)
  
  return service_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline void HealthCheckRequest::set_allocated_service(std::string* service) {
  if (service != nullptr) {
    
  } else {
    
  }
  service_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), service,
      GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_allocated:sagittarius.health.v1.HealthCheckRequest.service)
}
inline std::string* HealthCheckRequest::unsafe_arena_release_service() {
  // @@protoc_insertion_point(field_unsafe_arena_release:sagittarius.health.v1.HealthCheckRequest.service)
  GOOGLE_DCHECK(GetArenaNoVirtual() != nullptr);
  
  return service_.UnsafeArenaRelease(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      GetArenaNoVirtual());
}
inline void HealthCheckRequest::unsafe_arena_set_allocated_service(
    std::string* service) {
  GOOGLE_DCHECK(GetArenaNoVirtual() != nullptr);
  if (service != nullptr) {
    
  } else {
    
  }
  service_.UnsafeArenaSetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      service, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:sagittarius.health.v1.HealthCheckRequest.service)
}

// -------------------------------------------------------------------

// HealthCheckResponse

// .sagittarius.health.v1.HealthCheckResponse.ServingStatus status = 1;
inline void HealthCheckResponse::clear_status() {
  status_ = 0;
}
inline ::sagittarius::health::v1::HealthCheckResponse_ServingStatus HealthCheckResponse::_internal_status() const {
  return static_cast< ::sagittarius::health::v1::HealthCheckResponse_ServingStatus >(status_);
}
inline ::sagittarius::health::v1::HealthCheckResponse_ServingStatus HealthCheckResponse::status() const {
  // @@protoc_insertion_point(field_get:sagittarius.health.v1.HealthCheckResponse.status)
  return _internal_status();
}
inline void HealthCheckResponse::_internal_set_status(::sagittarius::health::v1::HealthCheckResponse_ServingStatus value) {
  
  status_ = value;
}
inline void HealthCheckResponse::set_status(::sagittarius::health::v1::HealthCheckResponse_ServingStatus value) {
  _internal_set_status(value);
  // @@protoc_insertion_point(field_set:sagittarius.health.v1.HealthCheckResponse.status)
}

// string version = 2;
inline void HealthCheckResponse::clear_version() {
  version_.ClearToEmpty(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline const std::string& HealthCheckResponse::version() const {
  // @@protoc_insertion_point(field_get:sagittarius.health.v1.HealthCheckResponse.version)
  return _internal_version();
}
inline void HealthCheckResponse::set_version(const std::string& value) {
  _internal_set_version(value);
  // @@protoc_insertion_point(field_set:sagittarius.health.v1.HealthCheckResponse.version)
}
inline std::string* HealthCheckResponse::mutable_version() {
  // @@protoc_insertion_point(field_mutable:sagittarius.health.v1.HealthCheckResponse.version)
  return _internal_mutable_version();
}
inline const std::string& HealthCheckResponse::_internal_version() const {
  return version_.Get();
}
inline void HealthCheckResponse::_internal_set_version(const std::string& value) {
  
  version_.Set(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), value, GetArenaNoVirtual());
}
inline void HealthCheckResponse::set_version(std::string&& value) {
  
  version_.Set(
    &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::move(value), GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_rvalue:sagittarius.health.v1.HealthCheckResponse.version)
}
inline void HealthCheckResponse::set_version(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  version_.Set(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(value),
              GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_char:sagittarius.health.v1.HealthCheckResponse.version)
}
inline void HealthCheckResponse::set_version(const char* value,
    size_t size) {
  
  version_.Set(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size), GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_pointer:sagittarius.health.v1.HealthCheckResponse.version)
}
inline std::string* HealthCheckResponse::_internal_mutable_version() {
  
  return version_.Mutable(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline std::string* HealthCheckResponse::release_version() {
  // @@protoc_insertion_point(field_release:sagittarius.health.v1.HealthCheckResponse.version)
  
  return version_.Release(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), GetArenaNoVirtual());
}
inline void HealthCheckResponse::set_allocated_version(std::string* version) {
  if (version != nullptr) {
    
  } else {
    
  }
  version_.SetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), version,
      GetArenaNoVirtual());
  // @@protoc_insertion_point(field_set_allocated:sagittarius.health.v1.HealthCheckResponse.version)
}
inline std::string* HealthCheckResponse::unsafe_arena_release_version() {
  // @@protoc_insertion_point(field_unsafe_arena_release:sagittarius.health.v1.HealthCheckResponse.version)
  GOOGLE_DCHECK(GetArenaNoVirtual() != nullptr);
  
  return version_.UnsafeArenaRelease(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      GetArenaNoVirtual());
}
inline void HealthCheckResponse::unsafe_arena_set_allocated_version(
    std::string* version) {
  GOOGLE_DCHECK(GetArenaNoVirtual() != nullptr);
  if (version != nullptr) {
    
  } else {
    
  }
  version_.UnsafeArenaSetAllocated(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
      version, GetArenaNoVirtual());
  // @@protoc_insertion_point(field_unsafe_arena_set_allocated:sagittarius.health.v1.HealthCheckResponse.version)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace v1
}  // namespace health
}  // namespace sagittarius

PROTOBUF_NAMESPACE_OPEN

template <> struct is_proto_enum< ::sagittarius::health::v1::HealthCheckResponse_ServingStatus> : ::std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::sagittarius::health::v1::HealthCheckResponse_ServingStatus>() {
  return ::sagittarius::health::v1::HealthCheckResponse_ServingStatus_descriptor();
}

PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // GOOGLE_PROTOBUF_INCLUDED_GOOGLE_PROTOBUF_INCLUDED_health_2fv1_2fhealth_2eproto
