(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.mat = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var flot = function flot(min, max) {
    return Math.random() * (max - min) + min;
  };
  var int = function int(min, max) {
    return flot(min, max + 1) | 0;
  };
  var bool = function bool() {
    return Math.random() > 0.5;
  };

  exports.default = {
    rand: {
      flot: flot,
      int: int,
      bool: bool
    }
  };
});