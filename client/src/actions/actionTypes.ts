import { actionTypeGenerator } from '../lib/redux/actions';

const currencyActionGenerator = actionTypeGenerator('CURRENCY');
export const currencyActions = {
  getSelected: currencyActionGenerator.async('GET_SELECTED'),
  setFocused: currencyActionGenerator.value('SET_FOCUSED')
};
