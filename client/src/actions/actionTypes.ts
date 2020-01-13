import { actionTypeGenerator } from '../lib/redux/actions';

const generalActionGenerator = actionTypeGenerator('GENERAL');
export const generalActions = {
  updateStatus: generalActionGenerator.value('UPDATE_STATUS')
};
