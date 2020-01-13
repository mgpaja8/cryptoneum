import { APIResult } from '../lib/redux/reducers';
import { Currency, Stats } from '../models';
import { AxiosError } from 'axios';

export interface BalkaneumStore {
  general: GeneralStore;
  currency: CurrencyStore;
  stats: StatsStore;
}

export interface GeneralStore {
  author: string;
}

export interface CurrencyStore {
  selected: APIResult<Currency[], AxiosError>;
  focused: Currency | undefined;
}

export interface StatsStore {
  stats: APIResult<{[key: number]: Stats}, AxiosError>;
}
