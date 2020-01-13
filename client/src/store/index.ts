import configureStore from './createStore';
import reducers from '../reducers';

const store = configureStore({}, reducers);

export default store;
