import { ActionReducer } from '../lib/redux/reducers';
import generalReducer from './generalReducer';

import { GeneralStore } from '../store/store';

export interface CryptoneumReducers {
  general: ActionReducer<GeneralStore>;
}

const reducers: CryptoneumReducers = {
  general: generalReducer
};

export default reducers;
