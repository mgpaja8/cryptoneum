import { GeneralStore } from '../store/store';
import { mapReducersArray } from '../lib/redux/reducers';

const INITIAL_STATE: GeneralStore = {
  author: 'Pavle Milicevic'
};

export default mapReducersArray<GeneralStore>([], INITIAL_STATE);
