import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { corsOptions } from './constants/cors-options';
import { exceptionHandler } from './middlewares/exception-handler';
import productsController from './products/products.controller';

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello',
  });
});

app.use('/products', productsController);

app.all('*', (req, res) => {
  return res.status(404).json({ error: 'Not Found' });
});

app.use(exceptionHandler);

app.listen(8000, () => {
  console.log('App is running at port: 8000');
});
