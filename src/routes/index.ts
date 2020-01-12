import { Router } from 'express';
import healthCheckRouter from './healthCheck';
import cryptoCurrencyRouter from './cryptoCurrency';

const router = Router();

router.use('/healthcheck', healthCheckRouter);
router.use('/cryptocurrency', cryptoCurrencyRouter);

export default router;
