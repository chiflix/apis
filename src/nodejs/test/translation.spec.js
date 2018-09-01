
import { expect, assert } from 'chai';
import { client } from '../src';

describe('translation api', function () {
  const sagi = new client('./test/ca.pem', './test/key.pem', './test/cert.pem')

  it('sagi.mediaTranslate should return OK', function (done) {
    sagi.mediaTranslate('11-22-33-44').then((resp) => {
      if (process.env.NODE_ENV === 'production') {
        expect(resp.getError().toObject().code, 'error').to.equal(5); // no result
        done();
        return;
      }
      expect(resp.getError().toObject().code, 'error').to.equal(0);
      expect(resp.getError().toObject().message, 'error message').to.equal('OK');
      const res = resp.getResultsList();
      expect(res.length, 'results list length').to.be.above(1);
      done();
    }, (reason) => {
      done('reject: ' + reason);
    }).catch((err) => {
      // fail the test
      done('error: ' + err);
    });
  });
});
