// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: google/api/config_change.proto

#include "google/api/config_change.pb.h"

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
extern PROTOBUF_INTERNAL_EXPORT_google_2fapi_2fconfig_5fchange_2eproto ::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_Advice_google_2fapi_2fconfig_5fchange_2eproto;
namespace google {
namespace api {
class ConfigChangeDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<ConfigChange> _instance;
} _ConfigChange_default_instance_;
class AdviceDefaultTypeInternal {
 public:
  ::PROTOBUF_NAMESPACE_ID::internal::ExplicitlyConstructed<Advice> _instance;
} _Advice_default_instance_;
}  // namespace api
}  // namespace google
static void InitDefaultsscc_info_Advice_google_2fapi_2fconfig_5fchange_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::google::api::_Advice_default_instance_;
    new (ptr) ::google::api::Advice();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::google::api::Advice::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<0> scc_info_Advice_google_2fapi_2fconfig_5fchange_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 0, 0, InitDefaultsscc_info_Advice_google_2fapi_2fconfig_5fchange_2eproto}, {}};

static void InitDefaultsscc_info_ConfigChange_google_2fapi_2fconfig_5fchange_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::google::api::_ConfigChange_default_instance_;
    new (ptr) ::google::api::ConfigChange();
    ::PROTOBUF_NAMESPACE_ID::internal::OnShutdownDestroyMessage(ptr);
  }
  ::google::api::ConfigChange::InitAsDefaultInstance();
}

::PROTOBUF_NAMESPACE_ID::internal::SCCInfo<1> scc_info_ConfigChange_google_2fapi_2fconfig_5fchange_2eproto =
    {{ATOMIC_VAR_INIT(::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase::kUninitialized), 1, 0, InitDefaultsscc_info_ConfigChange_google_2fapi_2fconfig_5fchange_2eproto}, {
      &scc_info_Advice_google_2fapi_2fconfig_5fchange_2eproto.base,}};

static ::PROTOBUF_NAMESPACE_ID::Metadata file_level_metadata_google_2fapi_2fconfig_5fchange_2eproto[2];
static const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* file_level_enum_descriptors_google_2fapi_2fconfig_5fchange_2eproto[1];
static constexpr ::PROTOBUF_NAMESPACE_ID::ServiceDescriptor const** file_level_service_descriptors_google_2fapi_2fconfig_5fchange_2eproto = nullptr;

const ::PROTOBUF_NAMESPACE_ID::uint32 TableStruct_google_2fapi_2fconfig_5fchange_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::google::api::ConfigChange, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::google::api::ConfigChange, element_),
  PROTOBUF_FIELD_OFFSET(::google::api::ConfigChange, old_value_),
  PROTOBUF_FIELD_OFFSET(::google::api::ConfigChange, new_value_),
  PROTOBUF_FIELD_OFFSET(::google::api::ConfigChange, change_type_),
  PROTOBUF_FIELD_OFFSET(::google::api::ConfigChange, advices_),
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::google::api::Advice, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::google::api::Advice, description_),
};
static const ::PROTOBUF_NAMESPACE_ID::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::google::api::ConfigChange)},
  { 10, -1, sizeof(::google::api::Advice)},
};

static ::PROTOBUF_NAMESPACE_ID::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::google::api::_ConfigChange_default_instance_),
  reinterpret_cast<const ::PROTOBUF_NAMESPACE_ID::Message*>(&::google::api::_Advice_default_instance_),
};

const char descriptor_table_protodef_google_2fapi_2fconfig_5fchange_2eproto[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) =
  "\n\036google/api/config_change.proto\022\ngoogle"
  ".api\"\227\001\n\014ConfigChange\022\017\n\007element\030\001 \001(\t\022\021"
  "\n\told_value\030\002 \001(\t\022\021\n\tnew_value\030\003 \001(\t\022+\n\013"
  "change_type\030\004 \001(\0162\026.google.api.ChangeTyp"
  "e\022#\n\007advices\030\005 \003(\0132\022.google.api.Advice\"\035"
  "\n\006Advice\022\023\n\013description\030\002 \001(\t*O\n\nChangeT"
  "ype\022\033\n\027CHANGE_TYPE_UNSPECIFIED\020\000\022\t\n\005ADDE"
  "D\020\001\022\013\n\007REMOVED\020\002\022\014\n\010MODIFIED\020\003Bq\n\016com.go"
  "ogle.apiB\021ConfigChangeProtoP\001ZCgoogle.go"
  "lang.org/genproto/googleapis/api/configc"
  "hange;configchange\242\002\004GAPIb\006proto3"
  ;
static const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable*const descriptor_table_google_2fapi_2fconfig_5fchange_2eproto_deps[1] = {
};
static ::PROTOBUF_NAMESPACE_ID::internal::SCCInfoBase*const descriptor_table_google_2fapi_2fconfig_5fchange_2eproto_sccs[2] = {
  &scc_info_Advice_google_2fapi_2fconfig_5fchange_2eproto.base,
  &scc_info_ConfigChange_google_2fapi_2fconfig_5fchange_2eproto.base,
};
static ::PROTOBUF_NAMESPACE_ID::internal::once_flag descriptor_table_google_2fapi_2fconfig_5fchange_2eproto_once;
static bool descriptor_table_google_2fapi_2fconfig_5fchange_2eproto_initialized = false;
const ::PROTOBUF_NAMESPACE_ID::internal::DescriptorTable descriptor_table_google_2fapi_2fconfig_5fchange_2eproto = {
  &descriptor_table_google_2fapi_2fconfig_5fchange_2eproto_initialized, descriptor_table_protodef_google_2fapi_2fconfig_5fchange_2eproto, "google/api/config_change.proto", 433,
  &descriptor_table_google_2fapi_2fconfig_5fchange_2eproto_once, descriptor_table_google_2fapi_2fconfig_5fchange_2eproto_sccs, descriptor_table_google_2fapi_2fconfig_5fchange_2eproto_deps, 2, 0,
  schemas, file_default_instances, TableStruct_google_2fapi_2fconfig_5fchange_2eproto::offsets,
  file_level_metadata_google_2fapi_2fconfig_5fchange_2eproto, 2, file_level_enum_descriptors_google_2fapi_2fconfig_5fchange_2eproto, file_level_service_descriptors_google_2fapi_2fconfig_5fchange_2eproto,
};

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_google_2fapi_2fconfig_5fchange_2eproto = (  ::PROTOBUF_NAMESPACE_ID::internal::AddDescriptors(&descriptor_table_google_2fapi_2fconfig_5fchange_2eproto), true);
namespace google {
namespace api {
const ::PROTOBUF_NAMESPACE_ID::EnumDescriptor* ChangeType_descriptor() {
  ::PROTOBUF_NAMESPACE_ID::internal::AssignDescriptors(&descriptor_table_google_2fapi_2fconfig_5fchange_2eproto);
  return file_level_enum_descriptors_google_2fapi_2fconfig_5fchange_2eproto[0];
}
bool ChangeType_IsValid(int value) {
  switch (value) {
    case 0:
    case 1:
    case 2:
    case 3:
      return true;
    default:
      return false;
  }
}


// ===================================================================

void ConfigChange::InitAsDefaultInstance() {
}
class ConfigChange::_Internal {
 public:
};

ConfigChange::ConfigChange()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:google.api.ConfigChange)
}
ConfigChange::ConfigChange(const ConfigChange& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr),
      advices_(from.advices_) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  element_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_element().empty()) {
    element_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.element_);
  }
  old_value_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_old_value().empty()) {
    old_value_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.old_value_);
  }
  new_value_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_new_value().empty()) {
    new_value_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.new_value_);
  }
  change_type_ = from.change_type_;
  // @@protoc_insertion_point(copy_constructor:google.api.ConfigChange)
}

void ConfigChange::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_ConfigChange_google_2fapi_2fconfig_5fchange_2eproto.base);
  element_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  old_value_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  new_value_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  change_type_ = 0;
}

ConfigChange::~ConfigChange() {
  // @@protoc_insertion_point(destructor:google.api.ConfigChange)
  SharedDtor();
}

void ConfigChange::SharedDtor() {
  element_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  old_value_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  new_value_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void ConfigChange::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const ConfigChange& ConfigChange::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_ConfigChange_google_2fapi_2fconfig_5fchange_2eproto.base);
  return *internal_default_instance();
}


void ConfigChange::Clear() {
// @@protoc_insertion_point(message_clear_start:google.api.ConfigChange)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  advices_.Clear();
  element_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  old_value_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  new_value_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  change_type_ = 0;
  _internal_metadata_.Clear();
}

const char* ConfigChange::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // string element = 1;
      case 1:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 10)) {
          auto str = _internal_mutable_element();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "google.api.ConfigChange.element"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string old_value = 2;
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 18)) {
          auto str = _internal_mutable_old_value();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "google.api.ConfigChange.old_value"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // string new_value = 3;
      case 3:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 26)) {
          auto str = _internal_mutable_new_value();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "google.api.ConfigChange.new_value"));
          CHK_(ptr);
        } else goto handle_unusual;
        continue;
      // .google.api.ChangeType change_type = 4;
      case 4:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 32)) {
          ::PROTOBUF_NAMESPACE_ID::uint64 val = ::PROTOBUF_NAMESPACE_ID::internal::ReadVarint(&ptr);
          CHK_(ptr);
          _internal_set_change_type(static_cast<::google::api::ChangeType>(val));
        } else goto handle_unusual;
        continue;
      // repeated .google.api.Advice advices = 5;
      case 5:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 42)) {
          ptr -= 1;
          do {
            ptr += 1;
            ptr = ctx->ParseMessage(_internal_add_advices(), ptr);
            CHK_(ptr);
            if (!ctx->DataAvailable(ptr)) break;
          } while (::PROTOBUF_NAMESPACE_ID::internal::ExpectTag<42>(ptr));
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

::PROTOBUF_NAMESPACE_ID::uint8* ConfigChange::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:google.api.ConfigChange)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string element = 1;
  if (this->element().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_element().data(), static_cast<int>(this->_internal_element().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "google.api.ConfigChange.element");
    target = stream->WriteStringMaybeAliased(
        1, this->_internal_element(), target);
  }

  // string old_value = 2;
  if (this->old_value().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_old_value().data(), static_cast<int>(this->_internal_old_value().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "google.api.ConfigChange.old_value");
    target = stream->WriteStringMaybeAliased(
        2, this->_internal_old_value(), target);
  }

  // string new_value = 3;
  if (this->new_value().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_new_value().data(), static_cast<int>(this->_internal_new_value().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "google.api.ConfigChange.new_value");
    target = stream->WriteStringMaybeAliased(
        3, this->_internal_new_value(), target);
  }

  // .google.api.ChangeType change_type = 4;
  if (this->change_type() != 0) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::WriteEnumToArray(
      4, this->_internal_change_type(), target);
  }

  // repeated .google.api.Advice advices = 5;
  for (unsigned int i = 0,
      n = static_cast<unsigned int>(this->_internal_advices_size()); i < n; i++) {
    target = stream->EnsureSpace(target);
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::
      InternalWriteMessage(5, this->_internal_advices(i), target, stream);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:google.api.ConfigChange)
  return target;
}

size_t ConfigChange::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:google.api.ConfigChange)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // repeated .google.api.Advice advices = 5;
  total_size += 1UL * this->_internal_advices_size();
  for (const auto& msg : this->advices_) {
    total_size +=
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::MessageSize(msg);
  }

  // string element = 1;
  if (this->element().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_element());
  }

  // string old_value = 2;
  if (this->old_value().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_old_value());
  }

  // string new_value = 3;
  if (this->new_value().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_new_value());
  }

  // .google.api.ChangeType change_type = 4;
  if (this->change_type() != 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::EnumSize(this->_internal_change_type());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void ConfigChange::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:google.api.ConfigChange)
  GOOGLE_DCHECK_NE(&from, this);
  const ConfigChange* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<ConfigChange>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:google.api.ConfigChange)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:google.api.ConfigChange)
    MergeFrom(*source);
  }
}

void ConfigChange::MergeFrom(const ConfigChange& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:google.api.ConfigChange)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  advices_.MergeFrom(from.advices_);
  if (from.element().size() > 0) {

    element_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.element_);
  }
  if (from.old_value().size() > 0) {

    old_value_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.old_value_);
  }
  if (from.new_value().size() > 0) {

    new_value_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.new_value_);
  }
  if (from.change_type() != 0) {
    _internal_set_change_type(from._internal_change_type());
  }
}

void ConfigChange::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:google.api.ConfigChange)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void ConfigChange::CopyFrom(const ConfigChange& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:google.api.ConfigChange)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool ConfigChange::IsInitialized() const {
  return true;
}

void ConfigChange::InternalSwap(ConfigChange* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  advices_.InternalSwap(&other->advices_);
  element_.Swap(&other->element_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  old_value_.Swap(&other->old_value_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  new_value_.Swap(&other->new_value_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  swap(change_type_, other->change_type_);
}

::PROTOBUF_NAMESPACE_ID::Metadata ConfigChange::GetMetadata() const {
  return GetMetadataStatic();
}


// ===================================================================

void Advice::InitAsDefaultInstance() {
}
class Advice::_Internal {
 public:
};

Advice::Advice()
  : ::PROTOBUF_NAMESPACE_ID::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:google.api.Advice)
}
Advice::Advice(const Advice& from)
  : ::PROTOBUF_NAMESPACE_ID::Message(),
      _internal_metadata_(nullptr) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  description_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  if (!from._internal_description().empty()) {
    description_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.description_);
  }
  // @@protoc_insertion_point(copy_constructor:google.api.Advice)
}

void Advice::SharedCtor() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&scc_info_Advice_google_2fapi_2fconfig_5fchange_2eproto.base);
  description_.UnsafeSetDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

Advice::~Advice() {
  // @@protoc_insertion_point(destructor:google.api.Advice)
  SharedDtor();
}

void Advice::SharedDtor() {
  description_.DestroyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
}

void Advice::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const Advice& Advice::default_instance() {
  ::PROTOBUF_NAMESPACE_ID::internal::InitSCC(&::scc_info_Advice_google_2fapi_2fconfig_5fchange_2eproto.base);
  return *internal_default_instance();
}


void Advice::Clear() {
// @@protoc_insertion_point(message_clear_start:google.api.Advice)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  description_.ClearToEmptyNoArena(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited());
  _internal_metadata_.Clear();
}

const char* Advice::_InternalParse(const char* ptr, ::PROTOBUF_NAMESPACE_ID::internal::ParseContext* ctx) {
#define CHK_(x) if (PROTOBUF_PREDICT_FALSE(!(x))) goto failure
  while (!ctx->Done(&ptr)) {
    ::PROTOBUF_NAMESPACE_ID::uint32 tag;
    ptr = ::PROTOBUF_NAMESPACE_ID::internal::ReadTag(ptr, &tag);
    CHK_(ptr);
    switch (tag >> 3) {
      // string description = 2;
      case 2:
        if (PROTOBUF_PREDICT_TRUE(static_cast<::PROTOBUF_NAMESPACE_ID::uint8>(tag) == 18)) {
          auto str = _internal_mutable_description();
          ptr = ::PROTOBUF_NAMESPACE_ID::internal::InlineGreedyStringParser(str, ptr, ctx);
          CHK_(::PROTOBUF_NAMESPACE_ID::internal::VerifyUTF8(str, "google.api.Advice.description"));
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

::PROTOBUF_NAMESPACE_ID::uint8* Advice::_InternalSerialize(
    ::PROTOBUF_NAMESPACE_ID::uint8* target, ::PROTOBUF_NAMESPACE_ID::io::EpsCopyOutputStream* stream) const {
  // @@protoc_insertion_point(serialize_to_array_start:google.api.Advice)
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string description = 2;
  if (this->description().size() > 0) {
    ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::VerifyUtf8String(
      this->_internal_description().data(), static_cast<int>(this->_internal_description().length()),
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::SERIALIZE,
      "google.api.Advice.description");
    target = stream->WriteStringMaybeAliased(
        2, this->_internal_description(), target);
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    target = ::PROTOBUF_NAMESPACE_ID::internal::WireFormat::InternalSerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target, stream);
  }
  // @@protoc_insertion_point(serialize_to_array_end:google.api.Advice)
  return target;
}

size_t Advice::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:google.api.Advice)
  size_t total_size = 0;

  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // string description = 2;
  if (this->description().size() > 0) {
    total_size += 1 +
      ::PROTOBUF_NAMESPACE_ID::internal::WireFormatLite::StringSize(
        this->_internal_description());
  }

  if (PROTOBUF_PREDICT_FALSE(_internal_metadata_.have_unknown_fields())) {
    return ::PROTOBUF_NAMESPACE_ID::internal::ComputeUnknownFieldsSize(
        _internal_metadata_, total_size, &_cached_size_);
  }
  int cached_size = ::PROTOBUF_NAMESPACE_ID::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void Advice::MergeFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:google.api.Advice)
  GOOGLE_DCHECK_NE(&from, this);
  const Advice* source =
      ::PROTOBUF_NAMESPACE_ID::DynamicCastToGenerated<Advice>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:google.api.Advice)
    ::PROTOBUF_NAMESPACE_ID::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:google.api.Advice)
    MergeFrom(*source);
  }
}

void Advice::MergeFrom(const Advice& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:google.api.Advice)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::PROTOBUF_NAMESPACE_ID::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  if (from.description().size() > 0) {

    description_.AssignWithDefault(&::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(), from.description_);
  }
}

void Advice::CopyFrom(const ::PROTOBUF_NAMESPACE_ID::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:google.api.Advice)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Advice::CopyFrom(const Advice& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:google.api.Advice)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Advice::IsInitialized() const {
  return true;
}

void Advice::InternalSwap(Advice* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  description_.Swap(&other->description_, &::PROTOBUF_NAMESPACE_ID::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
}

::PROTOBUF_NAMESPACE_ID::Metadata Advice::GetMetadata() const {
  return GetMetadataStatic();
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace api
}  // namespace google
PROTOBUF_NAMESPACE_OPEN
template<> PROTOBUF_NOINLINE ::google::api::ConfigChange* Arena::CreateMaybeMessage< ::google::api::ConfigChange >(Arena* arena) {
  return Arena::CreateInternal< ::google::api::ConfigChange >(arena);
}
template<> PROTOBUF_NOINLINE ::google::api::Advice* Arena::CreateMaybeMessage< ::google::api::Advice >(Arena* arena) {
  return Arena::CreateInternal< ::google::api::Advice >(arena);
}
PROTOBUF_NAMESPACE_CLOSE

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
