var expect = require('chai').expect;

var messages = require('../health/v1/health_pb');
var services = require('../health/v1/health_grpc_pb');

var grpc = require('grpc');
var fs = require('fs');

describe('TestHealth()', function () {
  it('health status should be serving', function () {

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

    var client = new services.HealthClient('apis.stage.sagittarius.ai:8443',
                                            ssl_creds, options);
    var request = new messages.HealthCheckRequest();

    client.check(request, function(err, response) {
      if (response.getStatus() !== messages.HealthCheckResponse.ServingStatus.SERVING) {
        console.log('ERROR:', err, response);
      } else {
        console.log('PASS');
      }
    });
  });
});
