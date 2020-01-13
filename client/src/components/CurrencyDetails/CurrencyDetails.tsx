import * as React from 'react';
import { Pill } from '../Pill';
import { Currency } from '../../models';
import './CurrencyDetails.css';

export interface CurrencyDetailsProps {
  focused?: Currency;
}

export class CurrencyDetails extends React.PureComponent<CurrencyDetailsProps> {
  render(): React.ReactNode {
    const { focused } = this.props;
    if (!focused) {
      return <div>Please select one of the currencies!</div>;
    }

    return (
      <div className='currency-details'>
        <div className='currency-details-name'>{focused.name}</div>
        <div className='currency-details-symbol'>{focused.symbol}</div>
        <Pill text={`# ${focused.rank}`}/>
      </div>
    );
  }
}
