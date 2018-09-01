import { expect, assert } from 'chai';
import { client } from '../src';
import rpcMsg from  '../health/v1/health_pb';

describe('TestHealth()', function () {
  it('health status should be serving', function (done) {
    const sagi = new client('./test/ca.pem', './test/key.pem', './test/cert.pem')

    sagi.healthCheck().then((status) => {
      expect(status).to.equal(rpcMsg.HealthCheckResponse.ServingStatus.SERVING);
      done();
    }).catch((err) => {
      // fail the test
      done('error: ' + err);
    });
  });
});
