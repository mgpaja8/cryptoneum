import { connect } from 'react-redux';
import { BalkaneumStore } from '../../store/store';
import { App, AppProps } from './App';
import { Dispatch } from 'redux';
import { Action } from '../../lib/redux/actions';
import { getSelectedCurrencies, setFocused } from '../../actions/currencyActions';
import { Currency } from '../../models';

type StoreProps = Pick<AppProps, 'selected' | 'focused'>;
const mapStateToProps: (store: BalkaneumStore) => StoreProps = store => {
  const { selected, focused } = store.currency;
  return {
    selected: selected.value ? selected.value : [],
    focused
  };
};

interface DispatchProps {
  getSelected: () => void;
  setFocused: (currency: Currency) => void;
}
const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => {
  return {
    getSelected: getSelectedCurrencies(dispatch),
    setFocused: setFocused(dispatch)
  };
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
