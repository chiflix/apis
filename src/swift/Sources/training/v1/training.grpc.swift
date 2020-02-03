//
// DO NOT EDIT.
//
// Generated by the protocol buffer compiler.
// Source: training/v1/training.proto
//

//
// Copyright 2018, gRPC Authors All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import Foundation
import GRPC
import NIO
import NIOHTTP1
import SwiftProtobuf
import GoogleAPIModel
import GoogleCloudSpeechV1Model
import GoogleRPCModel


/// Usage: instantiate Sagittarius_Training_V1_TrainngServiceClient, then call methods of this protocol to make API calls.
public protocol Sagittarius_Training_V1_TrainngService {
  func pushData(_ request: Sagittarius_Training_V1_TrainingData, callOptions: CallOptions?) -> UnaryCall<Sagittarius_Training_V1_TrainingData, GoogleRPCModel.Google_Rpc_Status>
  func streamingTraining(callOptions: CallOptions?) -> ClientStreamingCall<Sagittarius_Training_V1_StreamingTrainingRequest, GoogleRPCModel.Google_Rpc_Status>
}

public final class Sagittarius_Training_V1_TrainngServiceClient: GRPCClient, Sagittarius_Training_V1_TrainngService {
  public let connection: ClientConnection
  public var defaultCallOptions: CallOptions

  /// Creates a client for the sagittarius.training.v1.Trainng service.
  ///
  /// - Parameters:
  ///   - connection: `ClientConnection` to the service host.
  ///   - defaultCallOptions: Options to use for each service call if the user doesn't provide them.
  public init(connection: ClientConnection, defaultCallOptions: CallOptions = CallOptions()) {
    self.connection = connection
    self.defaultCallOptions = defaultCallOptions
  }

  /// Asynchronous unary call to PushData.
  ///
  /// - Parameters:
  ///   - request: Request to send to PushData.
  ///   - callOptions: Call options; `self.defaultCallOptions` is used if `nil`.
  /// - Returns: A `UnaryCall` with futures for the metadata, status and response.
  public func pushData(_ request: Sagittarius_Training_V1_TrainingData, callOptions: CallOptions? = nil) -> UnaryCall<Sagittarius_Training_V1_TrainingData, GoogleRPCModel.Google_Rpc_Status> {
    return self.makeUnaryCall(path: "/sagittarius.training.v1.Trainng/PushData",
                              request: request,
                              callOptions: callOptions ?? self.defaultCallOptions)
  }

  /// Asynchronous client-streaming call to StreamingTraining.
  ///
  /// Callers should use the `send` method on the returned object to send messages
  /// to the server. The caller should send an `.end` after the final message has been sent.
  ///
  /// - Parameters:
  ///   - callOptions: Call options; `self.defaultCallOptions` is used if `nil`.
  /// - Returns: A `ClientStreamingCall` with futures for the metadata, status and response.
  public func streamingTraining(callOptions: CallOptions? = nil) -> ClientStreamingCall<Sagittarius_Training_V1_StreamingTrainingRequest, GoogleRPCModel.Google_Rpc_Status> {
    return self.makeClientStreamingCall(path: "/sagittarius.training.v1.Trainng/StreamingTraining",
                                        callOptions: callOptions ?? self.defaultCallOptions)
  }

}

/// To build a server, implement a class that conforms to this protocol.
public protocol Sagittarius_Training_V1_TrainngProvider: CallHandlerProvider {
  func pushData(request: Sagittarius_Training_V1_TrainingData, context: StatusOnlyCallContext) -> EventLoopFuture<GoogleRPCModel.Google_Rpc_Status>
  func streamingTraining(context: UnaryResponseCallContext<GoogleRPCModel.Google_Rpc_Status>) -> EventLoopFuture<(StreamEvent<Sagittarius_Training_V1_StreamingTrainingRequest>) -> Void>
}

extension Sagittarius_Training_V1_TrainngProvider {
  public var serviceName: String { return "sagittarius.training.v1.Trainng" }

  /// Determines, calls and returns the appropriate request handler, depending on the request's method.
  /// Returns nil for methods not handled by this service.
  public func handleMethod(_ methodName: String, callHandlerContext: CallHandlerContext) -> GRPCCallHandler? {
    switch methodName {
    case "PushData":
      return UnaryCallHandler(callHandlerContext: callHandlerContext) { context in
        return { request in
          self.pushData(request: request, context: context)
        }
      }

    case "StreamingTraining":
      return ClientStreamingCallHandler(callHandlerContext: callHandlerContext) { context in
        return self.streamingTraining(context: context)
      }

    default: return nil
    }
  }
}
