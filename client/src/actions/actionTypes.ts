import { actionTypeGenerator } from '../lib/redux/actions';

const currencyActionGenerator = actionTypeGenerator('CURRENCY');
export const currencyActions = {
  getSelected: currencyActionGenerator.async('GET_SELECTED'),
  setFocused: currencyActionGenerator.value('SET_FOCUSED'),
  updatedCurrency: currencyActionGenerator.value('UPDATED')
};

const statsActionGenerator = actionTypeGenerator('STATS');
export const statsActions = {
  getStat: statsActionGenerator.async('ADD'),
  updatedStat: statsActionGenerator.value('UPDATED')
};
