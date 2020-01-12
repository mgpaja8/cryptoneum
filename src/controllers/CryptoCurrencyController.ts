import { Request, Response } from 'express';
import { getAllCryptoCurrencies, getOneCryptoCurrency } from '../services';

export class CryptoCurrencyController {
  static getAll = async (request: Request, response: Response) => {
    const cryptoCurrencies = await getAllCryptoCurrencies();

    response.status(200).json(cryptoCurrencies);
  }

  static getOne = async (request: Request, response: Response) => {
    const { id } = request.params;

    const cryptoCurrency = await getOneCryptoCurrency(parseInt(id, 10));

    if (!!cryptoCurrency) {
      response.status(200).json(cryptoCurrency);
    } else {
      response.status(404).json({ error: 'Not found' });
    }
  }
}
