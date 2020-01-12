import axios, { AxiosInstance } from 'axios';
import { BalkaneumDatasourceInterface } from './BalkaneumDatasourceInterface';
import { getCryptoCurrencies, getCryptoCurrency } from './normalizers';
import { CryptoCurrency } from '../models';

export interface BalkaneumDatasourceConfig {
  baseURL: string;
}

export class BalkaneumDatasource implements BalkaneumDatasourceInterface {
  private client: AxiosInstance;

  constructor(config: BalkaneumDatasourceConfig) {
    const { baseURL } = config;

    this.client = axios.create({
      baseURL
    });
  }

  async getAll(): Promise<CryptoCurrency[]> {
    const { data } = await this.client.get('/cryptocurrency');
    return getCryptoCurrencies(data);
  }

  async getOne(symbol: string): Promise<CryptoCurrency> {
    const { data } = await this.client.get(`/cryptocurrency/${symbol}`);
    return getCryptoCurrency(data);
  }
}
