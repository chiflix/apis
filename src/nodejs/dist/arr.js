(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './mat'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./mat'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mat);
    global.arr = mod.exports;
  }
})(this, function (exports, _mat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _mat2 = _interopRequireDefault(_mat);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var pickRand = function pickRand(arr) {
    return arr[_mat2.default.rand.int(0, arr.length - 1)];
  };
  var range = function range(start, end) {
    return Array.apply(null, Array(end - start + 1)).map(function (n, i) {
      return i + start;
    });
  };
  var shuffle = function shuffle(arr) {
    return arr.slice().reverse().reduce(function (p, c, i, a) {
      var rnd = _mat2.default.rand.int(0, i);
      var tmp = a[i];
      a[i] = a[rnd];
      a[rnd] = tmp;
      return a;
    }, []);
  };

  exports.default = {
    pickRand: pickRand,
    range: range,
    shuffle: shuffle
  };
});