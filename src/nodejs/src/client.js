import fs from 'fs';
import healthMsg from '../health/v1/health_pb';
import healthRpc from '../health/v1/health_grpc_pb';
import translationMsg from '../translation/v1/translation_pb';
import translationRpc from '../translation/v1/translation_grpc_pb';
/* eslint-disable */
const grpc = require('grpc');
/* eslint-enable */

class Sagi {
  constructor(ca, key, cert) {
    this.creds = grpc.credentials.createSsl(
      // How to access resources with fs see:
      // https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
      fs.readFileSync(ca),
      fs.readFileSync(key),
      fs.readFileSync(cert),
    );
    if (process.env.NODE_ENV === 'production') {
      this.endpoint = 'apis.sagittarius.ai:8443';
    } else {
      this.endpoint = 'apis.stage.sagittarius.ai:8443';
    }
  }

  mediaTranslate(mediaIdentity) {
    return new Promise((resolve, reject) => {
      const client = new translationRpc.TranslationClient(this.endpoint, this.creds);
      const req = new translationMsg.MediaTranslationRequest();
      req.setMediaIdentity(mediaIdentity);
      client.translateMedia(req, (err, response) => {
        if (err) {
          reject(err);
        } else {
          // TODO: fetch real transcripts
          resolve(response);
        }
      });
    });
  }

  getTranscript(transcriptIdentity) {
    return new Promise((resolve, reject) => {
      const client = new translationRpc.TranslationClient(this.endpoint, this.creds);
      const req = new translationMsg.TranscriptRequest();
      req.setTranscriptIdentity(transcriptIdentity);
      client.transcript(req, (err, res) => {
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
  healthCheck() {
    return new Promise((resolve, reject) => {
      const client = new healthRpc.HealthClient(this.endpoint, this.creds);
      client.check(new healthMsg.HealthCheckRequest(), (err, response) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          resolve(response.getStatus());
        }
      });
    });
  }
}

export default Sagi;
