import axios, { AxiosInstance } from 'axios';
import { CryptoneumDatasourceInterface } from './CryptoneumDatasourceInterface';
import { getCurrencies } from './normalizers';
import { Currency, Stats } from '../models';

export interface CryptoneumDatasourceConfig {
  baseURL: string;
}

export class CryptoneumDatasource implements CryptoneumDatasourceInterface {
  private client: AxiosInstance;

  constructor(config: CryptoneumDatasourceConfig) {
    const { baseURL } = config;

    this.client = axios.create({
      baseURL
    });
  }

  async getSelected(): Promise<Currency[]> {
    const { data } = await this.client.get('/cryptocurrency/selected');
    return getCurrencies(data);
  }

  async getStats(id: number): Promise<Stats> {
    const { data } = await this.client.get(`/stats/${id}`);
    return data;
  }
}
