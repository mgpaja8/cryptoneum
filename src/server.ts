import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import router from './routes';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

export default app;
