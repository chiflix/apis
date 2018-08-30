
import { expect, assert } from 'chai';
import { client } from '../src';

describe('translation api', function () {
  this.timeout(10000);
  const sagi = new client('./test/ca.pem', './test/key.pem', './test/cert.pem')

  it('sagi.mediaTranslate should return OK', function (done) {
    sagi.mediaTranslate('11-22-33-44').then((resp) => {
      expect(resp.getError().toObject().code, 'error').to.equal(0);
      expect(resp.getError().toObject().message, 'error message').to.equal('OK');
      const res = resp.getResultsList();
      expect(res.length, 'results list length').to.be.above(1);
      res[0].
      done();
    }).catch((err) => {
      // fail the test
      expect.fail();
    });
  });
});
