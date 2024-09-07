/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';

import mainRoutes from './src/routes';
import { connectDB } from './src/db';

require('dotenv').config();

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(bodyParser.json());

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      },
    },
  })
);

app.use(function (req, res, next) {
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type, Accept,Authorization,Origin'
  );
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});



app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.use('/api/v1/', mainRoutes);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});

export default app;
