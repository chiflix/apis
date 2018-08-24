import { expect, assert } from 'chai';

var rpcMsg = require('../health/v1/health_pb');
var rpcSvc = require('../health/v1/health_grpc_pb');

var grpc = require('grpc');
var fs = require('fs');

describe('TestHealth()', function () {
  it('health status should be serving', function (done) {

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

    var client = new rpcSvc.HealthClient('apis.stage.sagittarius.ai:8443',
                                            ssl_creds, options);
    var request = new rpcMsg.HealthCheckRequest();

    client.check(request, function(err, response) {
      assert.equal(response.getStatus(), rpcMsg.HealthCheckResponse.ServingStatus.SERVING);
      done();
    });
  });
});
