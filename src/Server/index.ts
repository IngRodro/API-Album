import express, {Router} from 'express';

import getConfig from 'config';
import cors from 'cors';
import initializeDB from './db';

const { port } = getConfig();

const app = express();

const initializeServer = async (routes: Router) => {
  // initialize DB
  await initializeDB();

  app.use(cors());

  // json parse
  app.use(express.json());

  // set urls
  app.use(routes);

  // create express app
  app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
  });
};

export default initializeServer;
