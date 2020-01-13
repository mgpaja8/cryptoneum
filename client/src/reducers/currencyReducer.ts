import { CurrencyStore } from '../store/store';
import { asyncReducer, emptyAPIResult, mapReducersArray, valueReducer } from '../lib/redux/reducers';
import { currencyActions } from '../actions/actionTypes';

const INITIAL_STATE: CurrencyStore = {
  selected: emptyAPIResult(),
  focused: undefined
};

export default mapReducersArray<CurrencyStore>([
  asyncReducer(currencyActions.getSelected, 'selected'),
  [currencyActions.setFocused, valueReducer('focused')]
], INITIAL_STATE);
