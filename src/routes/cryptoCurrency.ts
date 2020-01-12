import { Router } from 'express';
import { CryptoCurrencyController } from '../controllers';

const cryptoCurrencyRouter = Router();

cryptoCurrencyRouter.get('/', CryptoCurrencyController.getAll);

export default cryptoCurrencyRouter;
