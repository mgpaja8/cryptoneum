import { connect } from 'react-redux';
import { BalkaneumStore } from '../../store/store';
import { CurrencyDetails, CurrencyDetailsProps } from './CurrencyDetails';

type StoreProps = Pick<CurrencyDetailsProps, 'focused'>;
const mapStateToProps: (store: BalkaneumStore) => StoreProps = store => {
  const { focused } = store.currency;
  return {
    focused
  };
};

export const CurrencyDetailsContainer = connect(mapStateToProps)(CurrencyDetails);
