// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: google/api/log.proto

#include "google/api/log.pb.h"

#include <algorithm>

#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/extension_set.h>
#include <google/protobuf/wire_format_lite.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
extern PROTOBUF_INTERNAL_EXPORT_google_2fapi_2flabel_2eproto ::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_LabelDescriptor_google_2fapi_2flabel_2eproto;
namespace google {
namespace api {
class LogDescriptorDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<LogDescriptor> _instance;
} _LogDescriptor_default_instance_;
}  // namespace api
}  // namespace google
static void InitDefaultsscc_info_LogDescriptor_google_2fapi_2flog_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::google::api::_LogDescriptor_default_instance_;
    new (ptr) ::google::api::LogDescriptor();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::google::api::LogDescriptor::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<1> scc_info_LogDescriptor_google_2fapi_2flog_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 1, 0, InitDefaultsscc_info_LogDescriptor_google_2fapi_2flog_2eproto}, {
      &scc_info_LabelDescriptor_google_2fapi_2flabel_2eproto.base,}};

static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_google_2fapi_2flog_2eproto[1];
static constexpr ::PROTOBUF_NAMESPACE_ID::EnumDescriptor const** file_level_enum_descriptors_google_2fapi_2flog_2eproto = nullptr;
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_google_2fapi_2flog_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_google_2fapi_2flog_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::google::api::LogDescriptor, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::google::api::LogDescriptor, name_),
  PROTOBUF_FIELD_OFFSET(::google::api::LogDescriptor, labels_),
  PROTOBUF_FIELD_OFFSET(::google::api::LogDescriptor, description_),
  PROTOBUF_FIELD_OFFSET(::google::api::LogDescriptor, display_name_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::google::api::LogDescriptor)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::google::api::_LogDescriptor_default_instance_),
};

const char descriptor_table_protodef_google_2fapi_2flog_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n\024google/api/log.proto\022\ngoogle.api\032\026goog"
  "le/api/label.proto\"u\n\rLogDescriptor\022\014\n\004n"
  "ame\030\001 \001(\t\022+\n\006labels\030\002 \003(\0132\033.google.api.L"
  "abelDescriptor\022\023\n\013description\030\003 \001(\t\022\024\n\014d"
  "isplay_name\030\004 \001(\tBj\n\016com.google.apiB\010Log"
  "ProtoP\001ZEgoogle.golang.org/genproto/goog"
  "leapis/api/serviceconfig;serviceconfig\242\002"
  "\004GAPIb\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_google_2fapi_2flog_2eproto_deps[1] = {
  &::descriptor_table_google_2fapi_2flabel_2eproto,
};
static ::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase*const descriptor_table_google_2fapi_2flog_2eproto_sccs[1] = {
  &scc_info_LogDescriptor_google_2fapi_2flog_2eproto.base,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_google_2fapi_2flog_2eproto_once;
static bool descriptor_table_google_2fapi_2flog_2eproto_initialized = false;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_google_2fapi_2flog_2eproto = {
  &descriptor_table_google_2fapi_2flog_2eproto_initialized, descriptor_table_protodef_google_2fapi_2flog_2eproto, "google/api/log.proto", 293,
  &descriptor_table_google_2fapi_2flog_2eproto_once, descriptor_table_google_2fapi_2flog_2eproto_sccs, descriptor_table_google_2fapi_2flog_2eproto_deps, 1, 1,
  schemas, file_default_instances, TableStruct_google_2fapi_2flog_2eproto::offsets,
  file_level_metadata_google_2fapi_2flog_2eproto, 1, file_level_enum_descriptors_google_2fapi_2flog_2eproto, file_level_service_descriptors_google_2fapi_2flog_2eproto,
};

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_google_2fapi_2flog_2eproto = (  ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptors(&descriptor_table_google_2fapi_2flog_2eproto), true);
namespace google {
namespace api {

// ===================================================================

void LogDescriptor::InitAsDefaultInstance() {
}
class LogDescriptor::_Internal {
 public:
};

void LogDescriptor::clear_labels() {
  labels_.Clear();
}
LogDescriptor::LogDescriptor()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:google.api.LogDescriptor)
}
LogDescriptor::LogDescriptor(const LogDescriptor& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr),
      labels_(from.labels_) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  name_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_name().empty()) {
    name_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.name_);
  }
  description_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_description().empty()) {
    description_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.description_);
  }
  display_name_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_display_name().empty()) {
    display_name_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.display_name_);
  }
  // @@protoc_insertion_point(copy_constructor:google.api.LogDescriptor)
}

void LogDescriptor::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_LogDescriptor_google_2fapi_2flog_2eproto.base);
  name_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  description_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  display_name_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

LogDescriptor::~LogDescriptor() {
  // @@protoc_insertion_point(destructor:google.api.LogDescriptor)
  SharedDtor();
}

void LogDescriptor::SharedDtor() {
  name_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  description_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  display_name_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void LogDescriptor::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const LogDescriptor& LogDescriptor::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_LogDescriptor_google_2fapi_2flog_2eproto.base);
  return *internal_default_instance();
}


void LogDescriptor::Clear() {
// @@protoc_insertion_point(message_clear_start:google.api.LogDescriptor)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  labels_.Clear();
  name_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  description_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  display_name_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  _internal_metadata_.Clear();
}

const char* LogDescriptor::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // string name = 1;
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          auto str = _internal_mutable_name();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "google.api.LogDescriptor.name"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // repeated .google.api.LabelDescriptor labels = 2;
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 18)) {
          ptr -= 1;
          do {
            ptr += 1;
            ptr = ctx->ParseMessage(_internal_add_labels(), ptr);
            CHK_(ptr);
            if (!ctx->DataAvailable(ptr)) break;
          } while (::PROTOBUF_NAMESPACE_ID::internal::ExpectTag<18>(ptr));
        } else goto handle_unusual;
        continue;
      // string description = 3;
      case 3:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 26)) {
          auto str = _internal_mutable_description();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "google.api.LogDescriptor.description"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string display_name = 4;
      case 4:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 34)) {
          auto str = _internal_mutable_display_name();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "google.api.LogDescriptor.display_name"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      default: {
      handle_unusual:
        if ((tag & 7) == 4 || tag == 0) {
          ctx->SetLastTag(tag);
          goto success;
        }
        ptr = UnknownFieldParse(tag, &_internal_metadata_, ptr, ctx);
        CHK_(ptr != nullptr);
        continue;
      }
    }  // switch
  }  // while
success:
  return ptr;
failure:
  ptr = nullptr;
  goto success;
#undef CHK_
}

::PROTOBUF_NAMESPACE_ID::uint8* LogDescriptor::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:google.api.LogDescriptor)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string name = 1;
  if (this->name().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_name().data(), static_cast<int>(this->_internal_name().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "google.api.LogDescriptor.name");
    target = stream->WriteStringMaybeAliased(
        1, this->_internal_name(), target);
  }

  // repeated .google.api.LabelDescriptor labels = 2;
  for (unsigned int i = 0,
      n = static_cast<unsigned int>(this->_internal_labels_size()); i < n; i++) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::
      InternalWriteMessage(2, this->_internal_labels(i), target, stream);
  }

  // string description = 3;
  if (this->description().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_description().data(), static_cast<int>(this->_internal_description().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "google.api.LogDescriptor.description");
    target = stream->WriteStringMaybeAliased(
        3, this->_internal_description(), target);
  }

  // string display_name = 4;
  if (this->display_name().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_display_name().data(), static_cast<int>(this->_internal_display_name().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "google.api.LogDescriptor.display_name");
    target = stream->WriteStringMaybeAliased(
        4, this->_internal_display_name(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:google.api.LogDescriptor)
  return target;
}

size_t LogDescriptor::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:google.api.LogDescriptor)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // repeated .google.api.LabelDescriptor labels = 2;
  total_size += 1UL * this->_internal_labels_size();
  for (const auto& msg : this->labels_) {
    total_size +=
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::MessageSize(msg);
  }

  // string name = 1;
  if (this->name().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_name());
  }

  // string description = 3;
  if (this->description().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_description());
  }

  // string display_name = 4;
  if (this->display_name().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_display_name());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void LogDescriptor::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:google.api.LogDescriptor)
  GOOGLE_DCHECK_NE(&from, this);
  const LogDescriptor* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<LogDescriptor>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:google.api.LogDescriptor)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:google.api.LogDescriptor)
    MergeFrom(*source);
  }
}

void LogDescriptor::MergeFrom(const LogDescriptor& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:google.api.LogDescriptor)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  labels_.MergeFrom(from.labels_);
  if (from.name().size() > 0) {

    name_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.name_);
  }
  if (from.description().size() > 0) {

    description_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.description_);
  }
  if (from.display_name().size() > 0) {

    display_name_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.display_name_);
  }
}

void LogDescriptor::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:google.api.LogDescriptor)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void LogDescriptor::CopyFrom(const LogDescriptor& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:google.api.LogDescriptor)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool LogDescriptor::IsInitialized() const {
  return true;
}

void LogDescriptor::InternalSwap(LogDescriptor* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  labels_.InternalSwap(&other->labels_);
  name_.Swap(&other->name_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  description_.Swap(&other->description_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  display_name_.Swap(&other->display_name_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
}

::PROTOBUF_NAMESPACE_ID::Metadata LogDescriptor::GetMetadata() const {
  return GetMetadataStatic();
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace api
}  // namespace google
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::google::api::LogDescriptor* Arena::CreateMaybeMessage< ::google::api::LogDescriptor >(Arena* arena) {
  return Arena::CreateInternal< ::google::api::LogDescriptor >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
