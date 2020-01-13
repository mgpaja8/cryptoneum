import { connect } from 'react-redux';
import { BalkaneumStore } from '../../store/store';
import { CurrencyDetails, CurrencyDetailsProps } from './CurrencyDetails';

type StoreProps = Pick<CurrencyDetailsProps, 'focused' | 'stats'>;
const mapStateToProps: (store: BalkaneumStore) => StoreProps = store => {
  const { focused } = store.currency;
  const { stats } = store.stats;

  const stat = stats.value && focused && stats.value[focused.id];

  return {
    focused,
    stats: stat
  };
};

export const CurrencyDetailsContainer = connect(mapStateToProps)(CurrencyDetails);
