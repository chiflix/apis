'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _health_pb = require('sagi-apis-client/health/v1/health_pb');

var _health_pb2 = _interopRequireDefault(_health_pb);

var _health_grpc_pb = require('sagi-apis-client/health/v1/health_grpc_pb');

var _health_grpc_pb2 = _interopRequireDefault(_health_grpc_pb);

var _translation_pb = require('sagi-apis-client/translation/v1/translation_pb');

var _translation_pb2 = _interopRequireDefault(_translation_pb);

var _translation_grpc_pb = require('sagi-apis-client/translation/v1/translation_grpc_pb');

var _translation_grpc_pb2 = _interopRequireDefault(_translation_grpc_pb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable */
var grpc = require('grpc');
/* eslint-enable */

var Sagi = function () {
  function Sagi() {
    _classCallCheck(this, Sagi);

    this.creds = grpc.credentials.createSsl(
    // How to access resources with fs see:
    // https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
    _fs2.default.readFileSync(_path2.default.join(__static, '/certs/ca.pem')), _fs2.default.readFileSync(_path2.default.join(__static, '/certs/key.pem')), _fs2.default.readFileSync(_path2.default.join(__static, '/certs/cert.pem')));
    if (process.env.NODE_ENV === 'production') {
      this.endpoint = 'apis.sagittarius.ai:8443';
    } else {
      this.endpoint = 'apis.stage.sagittarius.ai:8443';
    }
  }

  _createClass(Sagi, [{
    key: 'mediaTranslate',
    value: function mediaTranslate(mediaIdentity) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var client = new _translation_grpc_pb2.default.TranslationClient(_this.endpoint, _this.creds);
        var req = new _translation_pb2.default.MediaTranslationRequest();
        req.setMediaIdentity(mediaIdentity);
        client.translateMedia(req, function (err, response) {
          if (err) {
            reject(err);
          } else {
            // TODO: fetch real transcripts
            resolve(response);
          }
        });
      });
    }
  }, {
    key: 'getTranscript',
    value: function getTranscript(transcriptIdentity) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var client = new _translation_grpc_pb2.default.TranslationClient(_this2.endpoint, _this2.creds);
        var req = new _translation_pb2.default.TranscriptRequest();
        req.setTranscriptIdentity(transcriptIdentity);
        client.transcript(req, function (err, res) {
          if (err) {
            reject(err);
          } else {
            console.log(res);
            resolve(res);
          }
        });
      });
    }

    // check sagi-api health, return UNKNOWN(0), SERVING(1) or XXXXX

  }, {
    key: 'healthCheck',
    value: function healthCheck() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        var client = new _health_grpc_pb2.default.HealthClient(_this3.endpoint, _this3.creds);
        client.check(new _health_pb2.default.HealthCheckRequest(), function (err, response) {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(response.getStatus());
          }
        });
      });
    }
  }]);

  return Sagi;
}();

exports.default = new Sagi();