import { Router } from 'express';
import { CryptoCurrencyController } from '../controllers';

const cryptoCurrencyRouter = Router();

cryptoCurrencyRouter.get('/selected', CryptoCurrencyController.getAllSelected);
cryptoCurrencyRouter.get('/:id', CryptoCurrencyController.getOne);
cryptoCurrencyRouter.get('/', CryptoCurrencyController.getAll);

export default cryptoCurrencyRouter;
