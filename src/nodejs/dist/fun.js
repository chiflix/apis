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
    global.fun = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var partial = function partial(fn) {
    return function () {
      for (var _len = arguments.length, pargs = Array(_len), _key = 0; _key < _len; _key++) {
        pargs[_key] = arguments[_key];
      }

      return function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return fn.apply(undefined, pargs.concat(args));
      };
    };
  };
  var partialRight = function partialRight(fn) {
    return function () {
      for (var _len3 = arguments.length, pargs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        pargs[_key3] = arguments[_key3];
      }

      return function () {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return fn.apply(undefined, args.concat(_toConsumableArray(pargs.reverse())));
      };
    };
  };
  var curry = function curry(f) {
    var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return function () {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return function (a) {
        return a.length === f.length ? f.apply(undefined, _toConsumableArray(a)) : curry(f, a);
      }([].concat(_toConsumableArray(arr), args));
    };
  };
  var compose = function compose() {
    for (var _len6 = arguments.length, fns = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      fns[_key6] = arguments[_key6];
    }

    return function (x) {
      return fns.reduceRight(function (v, f) {
        return f(v);
      }, x);
    };
  };
  var pipe = function pipe() {
    for (var _len7 = arguments.length, fns = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      fns[_key7] = arguments[_key7];
    }

    return compose.apply(undefined, _toConsumableArray(fns.reverse()));
  };

  exports.default = {
    partial: partial,
    partialRight: partialRight,
    curry: curry,
    compose: compose,
    pipe: pipe
  };
});