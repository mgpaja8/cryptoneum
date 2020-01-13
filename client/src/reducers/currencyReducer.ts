import { CurrencyStore } from '../store/store';
import { asyncReducer, emptyAPIResult, mapReducersArray } from '../lib/redux/reducers';
import { currencyActions } from '../actions/actionTypes';

const INITIAL_STATE: CurrencyStore = {
  selected: emptyAPIResult()
};

export default mapReducersArray<CurrencyStore>([
  asyncReducer(currencyActions.getSelected, 'selected')
], INITIAL_STATE);
