import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

import routerApi from './routes/index';

const app = express();

// Body parser
app.use(express.json());

// CORS
// const whitelist = 'http://localhost:3000/';
// const options = {
//   origin: (origin: string, callback: Function) => {
//     if (whitelist.includes(origin)) callback(null, true);
//     else callback(new Error('Not allowed'));
//   },
// };
app.use(cors());

// App router
routerApi(app);

const PORT = 5005;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}/`);
});
