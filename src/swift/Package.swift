// swift-tools-version:5.1
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "apis",
    platforms: [
      // We can't use `.watchOS(.v6)` since it isn't available with `swift-tools-version:5.0`.
      .macOS(.v10_12), .iOS(.v10), .watchOS("6.0")
    ],
    products: [
        // Products define the executables and libraries produced by a package, and make them visible to other packages.
        .library(name: "SagiHealthModel", targets: ["SagiHealthModel"]),
        .library(name: "SagiMediaModel", targets: ["SagiMediaModel"]),
        .library(name: "SagiTrainingModel", targets: ["SagiTrainingModel"]),
        .library(name: "SagiTranslationModel", targets: ["SagiTranslationModel"]),
        .library(name: "GoogleAPIModel", targets: ["GoogleAPIModel"])
    ],
    dependencies: [
        // Dependencies declare other packages that this package depends on.
        .package(path: "./grpc-swift"),
        .package(url: "https://github.com/apple/swift-protobuf.git", from: "1.8.0")
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages which this package depends on.
        .target(
            name: "SagiHealthModel",
            dependencies: [
                "GRPC",
                "SwiftProtobuf",
            ],
            path: "Sources/health/v1"
        ),
        .target(
            name: "SagiMediaModel",
            dependencies: [
                "GRPC",
                "SwiftProtobuf",
            ],
            path: "Sources/media/v1"
        ),
        .target(
            name: "SagiTrainingModel",
            dependencies: [
                "GRPC",
                "SwiftProtobuf",
            ],
            path: "Sources/training/v1"
        ),
        .target(
            name: "SagiTranslationModel",
            dependencies: [
                "GRPC",
                "SwiftProtobuf",
            ],
            path: "Sources/translation/v1"
        ),
        .target(
            name: "GoogleLongrunningModel",
            dependencies: [
                "GRPC",
                "SwiftProtobuf",
            ],
            path: "Sources/google/longrunning"
        ),
        .target(
            name: "GoogleCloudSpeechV1Model",
            dependencies: [
                "GRPC",
                "SwiftProtobuf",
            ],
            path: "Sources/google/cloud/speech/v1"
        ),
        .target(
            name: "GoogleRPCModel",
            dependencies: [
                "GRPC",
                "SwiftProtobuf",
            ],
            path: "Sources/google/rpc"
        ),
        .target(
            name: "GoogleAPIModel",
            dependencies: [
                "GRPC",
                "SwiftProtobuf"
            ],
            path: "Sources/google/api"
        ),
        .target(
            name: "GoogleTypeModel",
            dependencies: [
                "GRPC",
                "SwiftProtobuf"
            ],
            path: "Sources/google/type"
        ),
    ]
)
