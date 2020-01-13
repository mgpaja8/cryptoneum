import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import { Action, ErrorAction, SuccessAction } from '../lib/redux/actions';
import { cryptoneumDatasource } from '../datasource';
import { statsActions } from './actionTypes';
import { Stats } from '../models';

export function getStats(dispatch: Dispatch<Action>): (id: number) => void {
  return (id: number) => {
    dispatch({ type: statsActions.getStat.start });
    cryptoneumDatasource.getStats(id)
      .then(stat => {
        dispatch<SuccessAction<Stats>>({
          type: statsActions.getStat.done,
          value: stat
        });
      })
      .catch(error => dispatch<ErrorAction<AxiosError>>({
        type: statsActions.getStat.fail,
        error
      }));
  };
}
