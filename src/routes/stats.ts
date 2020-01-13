import { Router } from 'express';
import { StatisticsController } from '../controllers';

const statsRouter = Router();

statsRouter.get('/:id', StatisticsController.getStats);

export default statsRouter;
