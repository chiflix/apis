// DO NOT EDIT.
//
// Generated by the Swift generator plugin for the protocol buffer compiler.
// Source: google/type/dayofweek.proto
//
// For information on using the generated types, please see the documentation:
//   https://github.com/apple/swift-protobuf/

// Copyright 2016 Google Inc.
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

import Foundation
import SwiftProtobuf

// If the compiler emits an error on this type, it is because this file
// was generated by a version of the `protoc` Swift plug-in that is
// incompatible with the version of SwiftProtobuf to which you are linking.
// Please ensure that your are building against the same version of the API
// that was used to generate this file.
fileprivate struct _GeneratedWithProtocGenSwiftVersion: SwiftProtobuf.ProtobufAPIVersionCheck {
  struct _2: SwiftProtobuf.ProtobufAPIVersion_2 {}
  typealias Version = _2
}

/// Represents a day of week.
public enum Google_Type_DayOfWeek: SwiftProtobuf.Enum {
  public typealias RawValue = Int

  /// The unspecified day-of-week.
  case unspecified // = 0

  /// The day-of-week of Monday.
  case monday // = 1

  /// The day-of-week of Tuesday.
  case tuesday // = 2

  /// The day-of-week of Wednesday.
  case wednesday // = 3

  /// The day-of-week of Thursday.
  case thursday // = 4

  /// The day-of-week of Friday.
  case friday // = 5

  /// The day-of-week of Saturday.
  case saturday // = 6

  /// The day-of-week of Sunday.
  case sunday // = 7
  case UNRECOGNIZED(Int)

  public init() {
    self = .unspecified
  }

  public init?(rawValue: Int) {
    switch rawValue {
    case 0: self = .unspecified
    case 1: self = .monday
    case 2: self = .tuesday
    case 3: self = .wednesday
    case 4: self = .thursday
    case 5: self = .friday
    case 6: self = .saturday
    case 7: self = .sunday
    default: self = .UNRECOGNIZED(rawValue)
    }
  }

  public var rawValue: Int {
    switch self {
    case .unspecified: return 0
    case .monday: return 1
    case .tuesday: return 2
    case .wednesday: return 3
    case .thursday: return 4
    case .friday: return 5
    case .saturday: return 6
    case .sunday: return 7
    case .UNRECOGNIZED(let i): return i
    }
  }

}

#if swift(>=4.2)

extension Google_Type_DayOfWeek: CaseIterable {
  // The compiler won't synthesize support with the UNRECOGNIZED case.
  public static var allCases: [Google_Type_DayOfWeek] = [
    .unspecified,
    .monday,
    .tuesday,
    .wednesday,
    .thursday,
    .friday,
    .saturday,
    .sunday,
  ]
}

#endif  // swift(>=4.2)

// MARK: - Code below here is support for the SwiftProtobuf runtime.

extension Google_Type_DayOfWeek: SwiftProtobuf._ProtoNameProviding {
  public static let _protobuf_nameMap: SwiftProtobuf._NameMap = [
    0: .same(proto: "DAY_OF_WEEK_UNSPECIFIED"),
    1: .same(proto: "MONDAY"),
    2: .same(proto: "TUESDAY"),
    3: .same(proto: "WEDNESDAY"),
    4: .same(proto: "THURSDAY"),
    5: .same(proto: "FRIDAY"),
    6: .same(proto: "SATURDAY"),
    7: .same(proto: "SUNDAY"),
  ]
}