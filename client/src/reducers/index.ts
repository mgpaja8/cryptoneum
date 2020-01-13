import { ActionReducer } from '../lib/redux/reducers';
import generalReducer from './generalReducer';
import currencyReducer from './currencyReducer';
import statsReducer from './statsReducer';

import { CurrencyStore, GeneralStore, StatsStore } from '../store/store';

export interface CryptoneumReducers {
  general: ActionReducer<GeneralStore>;
  currency: ActionReducer<CurrencyStore>;
  stats: ActionReducer<StatsStore>;
}

const reducers: CryptoneumReducers = {
  general: generalReducer,
  currency: currencyReducer,
  stats: statsReducer
};

export default reducers;
