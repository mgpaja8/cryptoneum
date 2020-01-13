import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import { Action, ErrorAction, SuccessAction } from '../lib/redux/actions';
import { cryptoneumDatasource } from '../datasource';
import { currencyActions } from './actionTypes';
import { getStats } from './statsActions';
import { Currency } from '../models';

export function getSelectedCurrencies(dispatch: Dispatch<Action>): () => void {
  return () => {
    dispatch({ type: currencyActions.getSelected.start });
    cryptoneumDatasource.getSelected()
      .then(selected => {
        dispatch<SuccessAction<Currency[]>>({
          type: currencyActions.getSelected.done,
          value: selected
        });

        dispatch<SuccessAction<Currency>>({
          type: currencyActions.setFocused,
          value: selected[0]
        });

        const ids = selected.map(currency => currency.id);
        ids.map(id => getStats(dispatch)(id));
      })
      .catch(error => dispatch<ErrorAction<AxiosError>>({
        type: currencyActions.getSelected.fail,
        error
      }));
  };
}

export function setFocused(dispatch: Dispatch<Action>): (currency: Currency) => void {
  return (currency: Currency) => {
    dispatch<SuccessAction<Currency>>({ type: currencyActions.setFocused, value: currency });
  };
}
