(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'grpc'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('grpc'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.grpc);
    global.obj = mod.exports;
  }
})(this, function (exports, grpc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var isObj = function isObj(obj) {
    return !!obj && Object.getPrototypeOf(obj) === Object.prototype;
  };
  var clone = function clone(obj) {
    var cloned = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach(function (key) {
      var value = obj[key];
      cloned[key] = isObj(value) || Array.isArray(value) ? clone(value) : value;
    });
    return cloned;
  };

  exports.default = {
    isObj: isObj,
    clone: clone
  };
});