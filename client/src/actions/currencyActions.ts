import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import { Action, ErrorAction, SuccessAction } from '../lib/redux/actions';
import { cryptoneumDatasource } from '../datasource';
import { currencyActions } from './actionTypes';
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
      })
      .catch(error => dispatch<ErrorAction<AxiosError>>({
        type: currencyActions.getSelected.fail,
        error
      }));
  };
}
