import { Router } from 'express';
import healthCheckRouter from './healthCheck';

const router = Router();

router.use('/healthcheck', healthCheckRouter);

export default router;
