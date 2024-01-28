import bodyParser from 'koa-bodyparser';
import Koa from 'koa';
import http from 'http';
import https from 'https';
import cors from '@koa/cors';
import helmet from 'koa-helmet';

import {
  port,
  environment,
} from './config/index.js';
import router from './router/index.js';
import { getCurrentTime } from './utils/index.js';

/* Connect to DB
    Connection logic goes here
*/

// Create Koa Application
const app = new Koa();

app
  .use(cors({ credentials: true }))
  .use(bodyParser())
  .use(helmet());

app.use(router.routes());


const currentTime = getCurrentTime();
// Start the application
if (environment === 'production') {
  const options = {
    cert: '', // sslCertificate
    key: '', // sslKey 
  };
  https.createServer(options, app.callback()).listen(port, () => {
    console.log(
      `✅  ${currentTime} - The server is running at https://localhost:${port}/`
    );
  });
} else {
   http.createServer(app.callback()).listen(port, () => {
    console.log(
      `✅  ${currentTime} - The server is running at http://localhost:${port}/`
    );
  });
}

export default app;