import { Router } from 'express';
import healthCheckRouter from './healthCheck';
import cryptoCurrencyRouter from './cryptoCurrency';
import statsRouter from './stats';

const router = Router();

router.use('/healthcheck', healthCheckRouter);
router.use('/cryptocurrency', cryptoCurrencyRouter);
router.use('/stats', statsRouter);

export default router;
