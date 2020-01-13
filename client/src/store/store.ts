import { APIResult } from '../lib/redux/reducers';
import { Currency } from '../models';
import { AxiosError } from 'axios';

export interface BalkaneumStore {
  general: GeneralStore;
  currency: CurrencyStore;
}

export interface GeneralStore {
  author: string;
}

export interface CurrencyStore {
  selected: APIResult<Currency[], AxiosError>;
  focused: Currency | undefined;
}
