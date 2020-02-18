cmake_minimum_required(VERSION 3.2)

project(SagiAPI)

set(CMAKE_MACOSX_RPATH 0)
set(CMAKE_CXX_STANDARD 11)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

SET(CMAKE_INSTALL_PREFIX ${PROJECT_SOURCE_DIR}/bin)

include(FetchContent)
FetchContent_Declare(
  gRPC
  GIT_REPOSITORY https://github.com/grpc/grpc
  GIT_TAG        v1.27.2
)
FetchContent_MakeAvailable(gRPC)

file(GLOB_RECURSE sources ${PROJECT_SOURCE_DIR}/src/*)

include_directories(${PROJECT_SOURCE_DIR}/src)
 
add_library(SagiAPI STATIC ${sources})
target_link_libraries(SagiAPI grpc++)

file(GLOB_RECURSE pubFiles 
                  ${PROJECT_SOURCE_DIR}/src/health/*.h
                  ${PROJECT_SOURCE_DIR}/src/media/*.h
                  ${PROJECT_SOURCE_DIR}/src/training/*.h
                  ${PROJECT_SOURCE_DIR}/src/translation/*.h)

INSTALL(TARGETS SagiAPI DESTINATION ${PROJECT_SOURCE_DIR}/bin/lib)
INSTALL(FILES ${pubFiles} DESTINATION ${PROJECT_SOURCE_DIR}/bin/include/sagi)

# Build test
include_directories(${PROJECT_SOURCE_DIR}/bin/include)
link_directories(${PROJECT_SOURCE_DIR}/bin/lib)
add_executable(test test.cpp)
target_link_libraries(test SagiAPI)