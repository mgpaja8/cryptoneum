import { StatsStore } from '../store/store';
import { emptyAPIResult, errorReducer, loadingReducer, mapReducersArray } from '../lib/redux/reducers';
import { statsActions } from '../actions/actionTypes';
import { SuccessAction } from '../lib/redux/actions';
import { Stats } from '../models';

const INITIAL_STATE: StatsStore = {
  stats: emptyAPIResult()
};

function addUpdateStat(store: StatsStore, action: SuccessAction<Stats>): StatsStore {
  return {
    ...store,
    stats: {
      loading: false,
      value: {
        ...store.stats.value,
        [action.value.id]: action.value
      }
    }
  };
}

export default mapReducersArray<StatsStore>([
  [statsActions.getStat.start, loadingReducer('stats')],
  [statsActions.getStat.done, addUpdateStat],
  [statsActions.getStat.fail, errorReducer('stats')],
  [statsActions.updatedStat, addUpdateStat]
], INITIAL_STATE);
