import { Request, Response } from 'express';
import { getAllCryptoCurrencies } from '../services';

export class CryptoCurrencyController {
  static getAll = async (request: Request, response: Response) => {
    const cryptoCurrencies = await getAllCryptoCurrencies();

    response.status(200).json(cryptoCurrencies);
  }
}
