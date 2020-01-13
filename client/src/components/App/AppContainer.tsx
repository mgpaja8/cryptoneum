import { connect } from 'react-redux';
import { BalkaneumStore } from '../../store/store';
import { App, AppProps } from './App';
import { Dispatch } from 'redux';
import { Action } from '../../lib/redux/actions';
import { getSelectedCurrencies } from '../../actions/currencyActions';

type StoreProps = Pick<AppProps, 'selected'>;
const mapStateToProps: (store: BalkaneumStore) => StoreProps = store => {
  return {
    selected: []
  };
};

interface DispatchProps {
  getSelected: () => void;
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    getSelected: getSelectedCurrencies(dispatch)
  };
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
