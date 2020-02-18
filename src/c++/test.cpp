#include <chrono>
#include <iostream>
#include <memory>
#include <random>
#include <string>
#include <thread>
#include <fstream>
#include <streambuf>

#include <grpc/grpc.h>
#include <grpcpp/channel.h>
#include <grpcpp/client_context.h>
#include <grpcpp/create_channel.h>
#include <grpcpp/security/credentials.h>

#include "src/health/v1/health.grpc.pb.h"

using grpc::Channel;
using grpc::ClientContext;
using grpc::ClientReader;
using grpc::ClientReaderWriter;
using grpc::ClientWriter;
using grpc::Status;

class TestHealth {
public:
    TestHealth(std::shared_ptr<Channel> channel) : 
        stub_(sagittarius::health::v1::Health::NewStub(channel))
     {}

    void Check() {
        ClientContext context;
        const sagittarius::health::v1::HealthCheckRequest req;
        sagittarius::health::v1::HealthCheckResponse rsp;

        Status status = this->stub_->Check(&context, req, &rsp);

        std::cout << "check[" << status.error_code() << "] the service status: " << rsp.status() << std::endl;
    }


private:
    std::unique_ptr<sagittarius::health::v1::Health::Stub> stub_;
};

std::string readPem(std::string file) {
    std::ifstream t(file.c_str());
    return std::string((std::istreambuf_iterator<char>(t)),
                    std::istreambuf_iterator<char>());
}

int main(int argc, char** argv) {
   
    if (argc != 2) {
        std::cout << " Using  ./test /path/certs/" << std::endl;
        return -1;
    }

    std::string certPath = argv[1];
  
    auto root = readPem(std::string(certPath+"/ca.pem"));
    auto key = readPem(std::string(certPath+"/key.pem"));
    auto cert = readPem(std::string(certPath+"/cert.pem"));

    grpc::SslCredentialsOptions opts = {
        root,
        key,
        cert
    };


    auto sslCreds = grpc::SslCredentials(opts);
    auto channel = grpc::CreateChannel("apis.stage.sagittarius.ai:8443", sslCreds);

    TestHealth health(std::move(channel));

    health.Check();

  return 0;
}