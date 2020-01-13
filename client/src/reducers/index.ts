import { ActionReducer } from '../lib/redux/reducers';
import generalReducer from './generalReducer';
import currencyReducer from './currencyReducer';

import { CurrencyStore, GeneralStore } from '../store/store';

export interface CryptoneumReducers {
  general: ActionReducer<GeneralStore>;
  currency: ActionReducer<CurrencyStore>;
}

const reducers: CryptoneumReducers = {
  general: generalReducer,
  currency: currencyReducer
};

export default reducers;
