import { Currency } from '../models';

export interface CryptoneumDatasourceInterface {
  getSelected: () => Promise<Currency[]>;
}
