// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: health/v1/health.proto

#include "health/v1/health.pb.h"
#include "health/v1/health.grpc.pb.h"

#include <functional>
#include <grpcpp/impl/codegen/async_stream.h>
#include <grpcpp/impl/codegen/async_unary_call.h>
#include <grpcpp/impl/codegen/channel_interface.h>
#include <grpcpp/impl/codegen/client_unary_call.h>
#include <grpcpp/impl/codegen/client_callback.h>
#include <grpcpp/impl/codegen/method_handler.h>
#include <grpcpp/impl/codegen/rpc_service_method.h>
#include <grpcpp/impl/codegen/server_callback.h>
#include <grpcpp/impl/codegen/service_type.h>
#include <grpcpp/impl/codegen/sync_stream.h>
namespace sagittarius {
namespace health {
namespace v1 {

static const char* Health_method_names[] = {
  "/sagittarius.health.v1.Health/Check",
};

std::unique_ptr< Health::Stub> Health::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< Health::Stub> stub(new Health::Stub(channel));
  return stub;
}

Health::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_Check_(Health_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status Health::Stub::Check(::grpc::ClientContext* context, const ::sagittarius::health::v1::HealthCheckRequest& request, ::sagittarius::health::v1::HealthCheckResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_Check_, context, request, response);
}

void Health::Stub::experimental_async::Check(::grpc::ClientContext* context, const ::sagittarius::health::v1::HealthCheckRequest* request, ::sagittarius::health::v1::HealthCheckResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_Check_, context, request, response, std::move(f));
}

void Health::Stub::experimental_async::Check(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::sagittarius::health::v1::HealthCheckResponse* response, std::function<void(::grpc::Status)> f) {
  ::grpc_impl::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_Check_, context, request, response, std::move(f));
}

void Health::Stub::experimental_async::Check(::grpc::ClientContext* context, const ::sagittarius::health::v1::HealthCheckRequest* request, ::sagittarius::health::v1::HealthCheckResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_Check_, context, request, response, reactor);
}

void Health::Stub::experimental_async::Check(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::sagittarius::health::v1::HealthCheckResponse* response, ::grpc::experimental::ClientUnaryReactor* reactor) {
  ::grpc_impl::internal::ClientCallbackUnaryFactory::Create(stub_->channel_.get(), stub_->rpcmethod_Check_, context, request, response, reactor);
}

::grpc::ClientAsyncResponseReader< ::sagittarius::health::v1::HealthCheckResponse>* Health::Stub::AsyncCheckRaw(::grpc::ClientContext* context, const ::sagittarius::health::v1::HealthCheckRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::sagittarius::health::v1::HealthCheckResponse>::Create(channel_.get(), cq, rpcmethod_Check_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::sagittarius::health::v1::HealthCheckResponse>* Health::Stub::PrepareAsyncCheckRaw(::grpc::ClientContext* context, const ::sagittarius::health::v1::HealthCheckRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc_impl::internal::ClientAsyncResponseReaderFactory< ::sagittarius::health::v1::HealthCheckResponse>::Create(channel_.get(), cq, rpcmethod_Check_, context, request, false);
}

Health::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Health_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Health::Service, ::sagittarius::health::v1::HealthCheckRequest, ::sagittarius::health::v1::HealthCheckResponse>(
          std::mem_fn(&Health::Service::Check), this)));
}

Health::Service::~Service() {
}

::grpc::Status Health::Service::Check(::grpc::ServerContext* context, const ::sagittarius::health::v1::HealthCheckRequest* request, ::sagittarius::health::v1::HealthCheckResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace sagittarius
}  // namespace health
}  // namespace v1

