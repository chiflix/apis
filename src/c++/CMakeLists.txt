cmake_minimum_required(VERSION 3.2)

project(SagiAPI)

set(CMAKE_MACOSX_RPATH 0)
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

set(CMAKE_INSTALL_PREFIX ${PROJECT_SOURCE_DIR}/build/bin)

set(protobuf_BUILD_TESTS OFF)
set(protobuf_BUILD_PROTOC_BINARIES OFF)
set(CARES_BUILD_TOOLS OFF)
set(CARES_INSTALL OFF)
set(gRPC_BUILD_CODEGEN OFF)
set(protobuf_BUILD_PROTOC_BINARIES OFF)


include(FetchContent)
FetchContent_Declare(
  gRPC
  GIT_REPOSITORY https://github.com/grpc/grpc
  GIT_TAG        v1.25.0
)
FetchContent_MakeAvailable(gRPC)

file(GLOB_RECURSE sources ${PROJECT_SOURCE_DIR}/src/*)

file(GLOB_RECURSE pubFiles 
                  ${PROJECT_SOURCE_DIR}/src/health/*.h
                  ${PROJECT_SOURCE_DIR}/src/media/*.h
                  ${PROJECT_SOURCE_DIR}/src/training/*.h
                  ${PROJECT_SOURCE_DIR}/src/translation/*.h)

include_directories(${PROJECT_SOURCE_DIR}/src)
include_directories(${Protobuf_INCLUDE_DIRS})

add_library(SagiAPI STATIC ${sources})
target_link_libraries(SagiAPI grpc++)

INSTALL(TARGETS SagiAPI DESTINATION ${PROJECT_SOURCE_DIR}/build/bin/lib)
INSTALL(FILES ${pubFiles} DESTINATION ${PROJECT_SOURCE_DIR}/build/bin/include/sagi)

# Build test
include_directories(${PROJECT_SOURCE_DIR}/build/bin/include)
link_directories(${PROJECT_SOURCE_DIR}/build/bin/lib)
add_executable(test test.cpp)
target_link_libraries(test SagiAPI)