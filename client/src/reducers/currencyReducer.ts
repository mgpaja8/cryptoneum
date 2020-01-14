import { CurrencyStore } from '../store/store';
import { asyncReducer, emptyAPIResult, mapReducersArray, valueReducer } from '../lib/redux/reducers';
import { currencyActions } from '../actions/actionTypes';
import { Quote } from '../models';
import { SuccessAction } from '../lib/redux/actions';

const INITIAL_STATE: CurrencyStore = {
  selected: emptyAPIResult(),
  focused: undefined
};

function updateCurrency(store: CurrencyStore, action: SuccessAction<Quote>): CurrencyStore {
  const { value } = store.selected;

  const currencies = value
    ? value.map(c => {
      if (c.id === action.value.currencyId) {
        const currency = {...c};
        currency.marketCap = action.value.marketCap;
        currency.price = action.value.price;
        currency.updatedAt = action.value.lastUpdated;

        return currency;
      } else {
        return c;
      }
    })
    : [];

  return {
    ...store,
    selected: {
      ...store.selected,
      value: currencies
    }
  };
}

export default mapReducersArray<CurrencyStore>([
  asyncReducer(currencyActions.getSelected, 'selected'),
  [currencyActions.setFocused, valueReducer('focused')],
  [currencyActions.updatedCurrency, updateCurrency]
], INITIAL_STATE);
