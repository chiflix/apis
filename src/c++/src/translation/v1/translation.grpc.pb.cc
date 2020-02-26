// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: translation/v1/translation.proto

#include "translation/v1/translation.pb.h"
#include "translation/v1/translation.grpc.pb.h"

#include <functional>
#include <grpcpp/impl/codegen/async_stream.h>
#include <grpcpp/impl/codegen/async_unary_call.h>
#include <grpcpp/impl/codegen/channel_interface.h>
#include <grpcpp/impl/codegen/client_unary_call.h>
#include <grpcpp/impl/codegen/client_callback.h>
#include <grpcpp/impl/codegen/message_allocator.h>
#include <grpcpp/impl/codegen/method_handler.h>
#include <grpcpp/impl/codegen/rpc_service_method.h>
#include <grpcpp/impl/codegen/server_callback.h>
#include <grpcpp/impl/codegen/server_callback_handlers.h>
#include <grpcpp/impl/codegen/server_context.h>
#include <grpcpp/impl/codegen/service_type.h>
#include <grpcpp/impl/codegen/sync_stream.h>
namespace sagittarius {
namespace translation {
namespace v1 {

static const char* Translation_method_names[] = {
  "/sagittarius.translation.v1.Translation/TranslateMedia",
  "/sagittarius.translation.v1.Translation/DetectLanguage",
  "/sagittarius.translation.v1.Translation/Transcript",
  "/sagittarius.translation.v1.Translation/TranslateText",
  "/sagittarius.translation.v1.Translation/StreamingTranslation",
  "/sagittarius.translation.v1.Translation/StreamingTranslationTask",
  "/sagittarius.translation.v1.Translation/GetUserQuota",
};

std::unique_ptr< Translation::Stub> Translation::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< Translation::Stub> stub(new Translation::Stub(channel));
  return stub;
}

Translation::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_TranslateMedia_(Translation_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_DetectLanguage_(Translation_method_names[1], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_Transcript_(Translation_method_names[2], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_TranslateText_(Translation_method_names[3], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_StreamingTranslation_(Translation_method_names[4], ::grpc::internal::RpcMethod::BIDI_STREAMING, channel)
  , rpcmethod_StreamingTranslationTask_(Translation_method_names[5], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  , rpcmethod_GetUserQuota_(Translation_method_names[6], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status Translation::Stub::TranslateMedia(::grpc::ClientContext* context, const ::sagittarius::translation::v1::MediaTranslationRequest& request, ::sagittarius::translation::v1::MediaTranslationResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_TranslateMedia_, context, request, response);
}

void Translation::Stub::experimental_async::TranslateMedia(::grpc::ClientContext* context, const ::sagittarius::translation::v1::MediaTranslationRequest* request, ::sagittarius::translation::v1::MediaTranslationResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_TranslateMedia_, context, request, response, std::move(f));
}

void Translation::Stub::experimental_async::TranslateMedia(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::sagittarius::translation::v1::MediaTranslationResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_TranslateMedia_, context, request, response, std::move(f));
}

void Translation::Stub::experimental_async::TranslateMedia(::grpc::ClientContext* context, const ::sagittarius::translation::v1::MediaTranslationRequest* request, ::sagittarius::translation::v1::MediaTranslationResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_TranslateMedia_, context, request, response, reactor);
}

void Translation::Stub::experimental_async::TranslateMedia(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::sagittarius::translation::v1::MediaTranslationResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_TranslateMedia_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::sagittarius::translation::v1::MediaTranslationResponse>* Translation::Stub::AsyncTranslateMediaRaw(::grpc::ClientContext* context, const ::sagittarius::translation::v1::MediaTranslationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::sagittarius::translation::v1::MediaTranslationResponse>::Create(channel_.get(), cq, rpcmethod_TranslateMedia_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::sagittarius::translation::v1::MediaTranslationResponse>* Translation::Stub::PrepareAsyncTranslateMediaRaw(::grpc::ClientContext* context, const ::sagittarius::translation::v1::MediaTranslationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::sagittarius::translation::v1::MediaTranslationResponse>::Create(channel_.get(), cq, rpcmethod_TranslateMedia_, context, request, false);
}

::grpc::Status Translation::Stub::DetectLanguage(::grpc::ClientContext* context, const ::sagittarius::translation::v1::DetectionRequest& request, ::sagittarius::translation::v1::DetectionResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_DetectLanguage_, context, request, response);
}

void Translation::Stub::experimental_async::DetectLanguage(::grpc::ClientContext* context, const ::sagittarius::translation::v1::DetectionRequest* request, ::sagittarius::translation::v1::DetectionResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_DetectLanguage_, context, request, response, std::move(f));
}

void Translation::Stub::experimental_async::DetectLanguage(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::sagittarius::translation::v1::DetectionResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_DetectLanguage_, context, request, response, std::move(f));
}

void Translation::Stub::experimental_async::DetectLanguage(::grpc::ClientContext* context, const ::sagittarius::translation::v1::DetectionRequest* request, ::sagittarius::translation::v1::DetectionResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_DetectLanguage_, context, request, response, reactor);
}

void Translation::Stub::experimental_async::DetectLanguage(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::sagittarius::translation::v1::DetectionResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_DetectLanguage_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::sagittarius::translation::v1::DetectionResponse>* Translation::Stub::AsyncDetectLanguageRaw(::grpc::ClientContext* context, const ::sagittarius::translation::v1::DetectionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::sagittarius::translation::v1::DetectionResponse>::Create(channel_.get(), cq, rpcmethod_DetectLanguage_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::sagittarius::translation::v1::DetectionResponse>* Translation::Stub::PrepareAsyncDetectLanguageRaw(::grpc::ClientContext* context, const ::sagittarius::translation::v1::DetectionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::sagittarius::translation::v1::DetectionResponse>::Create(channel_.get(), cq, rpcmethod_DetectLanguage_, context, request, false);
}

::grpc::Status Translation::Stub::Transcript(::grpc::ClientContext* context, const ::sagittarius::translation::v1::TranscriptRequest& request, ::sagittarius::translation::v1::TranscriptResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_Transcript_, context, request, response);
}

void Translation::Stub::experimental_async::Transcript(::grpc::ClientContext* context, const ::sagittarius::translation::v1::TranscriptRequest* request, ::sagittarius::translation::v1::TranscriptResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_Transcript_, context, request, response, std::move(f));
}

void Translation::Stub::experimental_async::Transcript(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::sagittarius::translation::v1::TranscriptResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_Transcript_, context, request, response, std::move(f));
}

void Translation::Stub::experimental_async::Transcript(::grpc::ClientContext* context, const ::sagittarius::translation::v1::TranscriptRequest* request, ::sagittarius::translation::v1::TranscriptResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_Transcript_, context, request, response, reactor);
}

void Translation::Stub::experimental_async::Transcript(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::sagittarius::translation::v1::TranscriptResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_Transcript_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::sagittarius::translation::v1::TranscriptResponse>* Translation::Stub::AsyncTranscriptRaw(::grpc::ClientContext* context, const ::sagittarius::translation::v1::TranscriptRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::sagittarius::translation::v1::TranscriptResponse>::Create(channel_.get(), cq, rpcmethod_Transcript_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::sagittarius::translation::v1::TranscriptResponse>* Translation::Stub::PrepareAsyncTranscriptRaw(::grpc::ClientContext* context, const ::sagittarius::translation::v1::TranscriptRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::sagittarius::translation::v1::TranscriptResponse>::Create(channel_.get(), cq, rpcmethod_Transcript_, context, request, false);
}

::grpc::Status Translation::Stub::TranslateText(::grpc::ClientContext* context, const ::sagittarius::translation::v1::TextTranslationRequest& request, ::sagittarius::translation::v1::TextTranslationResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_TranslateText_, context, request, response);
}

void Translation::Stub::experimental_async::TranslateText(::grpc::ClientContext* context, const ::sagittarius::translation::v1::TextTranslationRequest* request, ::sagittarius::translation::v1::TextTranslationResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_TranslateText_, context, request, response, std::move(f));
}

void Translation::Stub::experimental_async::TranslateText(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::sagittarius::translation::v1::TextTranslationResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_TranslateText_, context, request, response, std::move(f));
}

void Translation::Stub::experimental_async::TranslateText(::grpc::ClientContext* context, const ::sagittarius::translation::v1::TextTranslationRequest* request, ::sagittarius::translation::v1::TextTranslationResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_TranslateText_, context, request, response, reactor);
}

void Translation::Stub::experimental_async::TranslateText(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::sagittarius::translation::v1::TextTranslationResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_TranslateText_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::sagittarius::translation::v1::TextTranslationResponse>* Translation::Stub::AsyncTranslateTextRaw(::grpc::ClientContext* context, const ::sagittarius::translation::v1::TextTranslationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::sagittarius::translation::v1::TextTranslationResponse>::Create(channel_.get(), cq, rpcmethod_TranslateText_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::sagittarius::translation::v1::TextTranslationResponse>* Translation::Stub::PrepareAsyncTranslateTextRaw(::grpc::ClientContext* context, const ::sagittarius::translation::v1::TextTranslationRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::sagittarius::translation::v1::TextTranslationResponse>::Create(channel_.get(), cq, rpcmethod_TranslateText_, context, request, false);
}

::grpc::ClientReaderWriter< ::sagittarius::translation::v1::StreamingTranslationRequest, ::sagittarius::translation::v1::StreamingTranslationResponse>* Translation::Stub::StreamingTranslationRaw(::grpc::ClientContext* context) {
  return ::grpc_impl::internal::ClientReaderWriterFactory< ::sagittarius::translation::v1::StreamingTranslationRequest, ::sagittarius::translation::v1::StreamingTranslationResponse>::Create(channel_.get(), rpcmethod_StreamingTranslation_, context);
}

void Translation::Stub::experimental_async::StreamingTranslation(::grpc::ClientContext* context, ::grpc::experimental::ClientBidiReactor< ::sagittarius::translation::v1::StreamingTranslationRequest,::sagittarius::translation::v1::StreamingTranslationResponse>* reactor) {
  ::grpc_impl::internal::ClientCallbackReaderWriterFactory< ::sagittarius::translation::v1::StreamingTranslationRequest,::sagittarius::translation::v1::StreamingTranslationResponse>::Create(stub_->channel_.get(), stub_->rpcmethod_StreamingTranslation_, context, reactor);
}

::grpc::ClientAsyncReaderWriter< ::sagittarius::translation::v1::StreamingTranslationRequest, ::sagittarius::translation::v1::StreamingTranslationResponse>* Translation::Stub::AsyncStreamingTranslationRaw(::grpc::ClientContext* context, ::grpc::CompletionQueue* cq, void* tag) {
  return ::grpc_impl::internal::ClientAsyncReaderWriterFactory< ::sagittarius::translation::v1::StreamingTranslationRequest, ::sagittarius::translation::v1::StreamingTranslationResponse>::Create(channel_.get(), cq, rpcmethod_StreamingTranslation_, context, true, tag);
}

::grpc::ClientAsyncReaderWriter< ::sagittarius::translation::v1::StreamingTranslationRequest, ::sagittarius::translation::v1::StreamingTranslationResponse>* Translation::Stub::PrepareAsyncStreamingTranslationRaw(::grpc::ClientContext* context, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncReaderWriterFactory< ::sagittarius::translation::v1::StreamingTranslationRequest, ::sagittarius::translation::v1::StreamingTranslationResponse>::Create(channel_.get(), cq, rpcmethod_StreamingTranslation_, context, false, nullptr);
}

::grpc::Status Translation::Stub::StreamingTranslationTask(::grpc::ClientContext* context, const ::sagittarius::translation::v1::StreamingTranslationTaskRequest& request, ::sagittarius::translation::v1::StreamingTranslationTaskResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_StreamingTranslationTask_, context, request, response);
}

void Translation::Stub::experimental_async::StreamingTranslationTask(::grpc::ClientContext* context, const ::sagittarius::translation::v1::StreamingTranslationTaskRequest* request, ::sagittarius::translation::v1::StreamingTranslationTaskResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_StreamingTranslationTask_, context, request, response, std::move(f));
}

void Translation::Stub::experimental_async::StreamingTranslationTask(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::sagittarius::translation::v1::StreamingTranslationTaskResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_StreamingTranslationTask_, context, request, response, std::move(f));
}

void Translation::Stub::experimental_async::StreamingTranslationTask(::grpc::ClientContext* context, const ::sagittarius::translation::v1::StreamingTranslationTaskRequest* request, ::sagittarius::translation::v1::StreamingTranslationTaskResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_StreamingTranslationTask_, context, request, response, reactor);
}

void Translation::Stub::experimental_async::StreamingTranslationTask(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::sagittarius::translation::v1::StreamingTranslationTaskResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_StreamingTranslationTask_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::sagittarius::translation::v1::StreamingTranslationTaskResponse>* Translation::Stub::AsyncStreamingTranslationTaskRaw(::grpc::ClientContext* context, const ::sagittarius::translation::v1::StreamingTranslationTaskRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::sagittarius::translation::v1::StreamingTranslationTaskResponse>::Create(channel_.get(), cq, rpcmethod_StreamingTranslationTask_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::sagittarius::translation::v1::StreamingTranslationTaskResponse>* Translation::Stub::PrepareAsyncStreamingTranslationTaskRaw(::grpc::ClientContext* context, const ::sagittarius::translation::v1::StreamingTranslationTaskRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::sagittarius::translation::v1::StreamingTranslationTaskResponse>::Create(channel_.get(), cq, rpcmethod_StreamingTranslationTask_, context, request, false);
}

::grpc::Status Translation::Stub::GetUserQuota(::grpc::ClientContext* context, const ::sagittarius::translation::v1::UserQuotaRequest& request, ::sagittarius::translation::v1::UserQuotaResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetUserQuota_, context, request, response);
}

void Translation::Stub::experimental_async::GetUserQuota(::grpc::ClientContext* context, const ::sagittarius::translation::v1::UserQuotaRequest* request, ::sagittarius::translation::v1::UserQuotaResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetUserQuota_, context, request, response, std::move(f));
}

void Translation::Stub::experimental_async::GetUserQuota(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::sagittarius::translation::v1::UserQuotaResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetUserQuota_, context, request, response, std::move(f));
}

void Translation::Stub::experimental_async::GetUserQuota(::grpc::ClientContext* context, const ::sagittarius::translation::v1::UserQuotaRequest* request, ::sagittarius::translation::v1::UserQuotaResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_GetUserQuota_, context, request, response, reactor);
}

void Translation::Stub::experimental_async::GetUserQuota(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::sagittarius::translation::v1::UserQuotaResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_GetUserQuota_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::sagittarius::translation::v1::UserQuotaResponse>* Translation::Stub::AsyncGetUserQuotaRaw(::grpc::ClientContext* context, const ::sagittarius::translation::v1::UserQuotaRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::sagittarius::translation::v1::UserQuotaResponse>::Create(channel_.get(), cq, rpcmethod_GetUserQuota_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::sagittarius::translation::v1::UserQuotaResponse>* Translation::Stub::PrepareAsyncGetUserQuotaRaw(::grpc::ClientContext* context, const ::sagittarius::translation::v1::UserQuotaRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::sagittarius::translation::v1::UserQuotaResponse>::Create(channel_.get(), cq, rpcmethod_GetUserQuota_, context, request, false);
}

Translation::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Translation_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Translation::Service, ::sagittarius::translation::v1::MediaTranslationRequest, ::sagittarius::translation::v1::MediaTranslationResponse>(
          std::mem_fn(&Translation::Service::TranslateMedia), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Translation_method_names[1],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Translation::Service, ::sagittarius::translation::v1::DetectionRequest, ::sagittarius::translation::v1::DetectionResponse>(
          std::mem_fn(&Translation::Service::DetectLanguage), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Translation_method_names[2],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Translation::Service, ::sagittarius::translation::v1::TranscriptRequest, ::sagittarius::translation::v1::TranscriptResponse>(
          std::mem_fn(&Translation::Service::Transcript), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Translation_method_names[3],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Translation::Service, ::sagittarius::translation::v1::TextTranslationRequest, ::sagittarius::translation::v1::TextTranslationResponse>(
          std::mem_fn(&Translation::Service::TranslateText), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Translation_method_names[4],
      ::grpc::internal::RpcMethod::BIDI_STREAMING,
      new ::grpc::internal::BidiStreamingHandler< Translation::Service, ::sagittarius::translation::v1::StreamingTranslationRequest, ::sagittarius::translation::v1::StreamingTranslationResponse>(
          std::mem_fn(&Translation::Service::StreamingTranslation), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Translation_method_names[5],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Translation::Service, ::sagittarius::translation::v1::StreamingTranslationTaskRequest, ::sagittarius::translation::v1::StreamingTranslationTaskResponse>(
          std::mem_fn(&Translation::Service::StreamingTranslationTask), this)));
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Translation_method_names[6],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Translation::Service, ::sagittarius::translation::v1::UserQuotaRequest, ::sagittarius::translation::v1::UserQuotaResponse>(
          std::mem_fn(&Translation::Service::GetUserQuota), this)));
}

Translation::Service::~Service() {
}

::grpc::Status Translation::Service::TranslateMedia(::grpc::ServerContext* context, const ::sagittarius::translation::v1::MediaTranslationRequest* request, ::sagittarius::translation::v1::MediaTranslationResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status Translation::Service::DetectLanguage(::grpc::ServerContext* context, const ::sagittarius::translation::v1::DetectionRequest* request, ::sagittarius::translation::v1::DetectionResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status Translation::Service::Transcript(::grpc::ServerContext* context, const ::sagittarius::translation::v1::TranscriptRequest* request, ::sagittarius::translation::v1::TranscriptResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status Translation::Service::TranslateText(::grpc::ServerContext* context, const ::sagittarius::translation::v1::TextTranslationRequest* request, ::sagittarius::translation::v1::TextTranslationResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status Translation::Service::StreamingTranslation(::grpc::ServerContext* context, ::grpc::ServerReaderWriter< ::sagittarius::translation::v1::StreamingTranslationResponse, ::sagittarius::translation::v1::StreamingTranslationRequest>* stream) {
  (void) context;
  (void) stream;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status Translation::Service::StreamingTranslationTask(::grpc::ServerContext* context, const ::sagittarius::translation::v1::StreamingTranslationTaskRequest* request, ::sagittarius::translation::v1::StreamingTranslationTaskResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}

::grpc::Status Translation::Service::GetUserQuota(::grpc::ServerContext* context, const ::sagittarius::translation::v1::UserQuotaRequest* request, ::sagittarius::translation::v1::UserQuotaResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace sagittarius
}  // namespace translation
}  // namespace v1

