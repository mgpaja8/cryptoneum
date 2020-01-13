import { Request, Response } from 'express';
import { getOneCryptoCurrency, getStats } from '../services';

export class StatisticsController {
  static getStats = async (request: Request, response: Response) => {
    const { id } = request.params;

    const stats = await getStats(parseInt(id, 10));

    if (!!stats) {
      response.status(200).json(stats);
    } else {
      response.status(404).json({ error: 'Not found' });
    }
  }
}
