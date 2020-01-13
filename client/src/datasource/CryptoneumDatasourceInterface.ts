import { Currency, Stats } from '../models';

export interface CryptoneumDatasourceInterface {
  getSelected: () => Promise<Currency[]>;
  getStats: (id: number) => Promise<Stats>;
}
