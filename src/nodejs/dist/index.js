(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './mat', './arr', './obj', './fun'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./mat'), require('./arr'), require('./obj'), require('./fun'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.mat, global.arr, global.obj, global.fun);
    global.index = mod.exports;
  }
})(this, function (exports, _mat, _arr, _obj, _fun) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'mat', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_mat).default;
    }
  });
  Object.defineProperty(exports, 'arr', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_arr).default;
    }
  });
  Object.defineProperty(exports, 'obj', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_obj).default;
    }
  });
  Object.defineProperty(exports, 'fun', {
    enumerable: true,
    get: function () {
      return _interopRequireDefault(_fun).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
});