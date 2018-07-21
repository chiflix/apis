var { expect, assert } = require('chai');

var rpcMsg = require('../translation/v1/translation_pb');
var rpcSvc = require('../translation/v1/translation_grpc_pb');

var grpc = require('grpc');
var fs = require('fs');

describe('TestTranslation()', function () {
  it('translation should return cue', function (done) {

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

    var ssl_creds = grpc.credentials.createSsl(
      fs.readFileSync('./test/ca.pem'),
      fs.readFileSync('./test/key.pem'),
      fs.readFileSync('./test/cert.pem')
    );

    var options = {
      'grpc.ssl_target_name_override' : 'apis.stage.sagittarius.ai',
      'grpc.default_authority': 'apis.stage.sagittarius.ai',
      'rejectUnauthorized': 'false',
    };

    var client = new rpcSvc.TranslationClient('apis.stage.sagittarius.ai:8443',
                                            ssl_creds, options);
    var request = new rpcMsg.MediaTranslationRequest();

    client.translateMedia(request, function(err, response) {
      expect(response.getTranscriptsList()[0].getText(), '在线翻译测试\nOnline Translation Test');
      done();
    });
  });
});
