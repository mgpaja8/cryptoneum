import { CryptoCurrency } from '../models';

export interface BalkaneumDatasourceInterface {
  getAll: () => Promise<CryptoCurrency[]>;
  getOne: (symbol: string) => Promise<CryptoCurrency>;
}
