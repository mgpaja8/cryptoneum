import * as React from 'react';
import { Pill } from '../Pill';
import { CurrentPrice } from '../CurrentPrice';
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
        {this.renderMarketCap(focused.marketCap)}
        <CurrentPrice price={focused.price} updatedAt={focused.updatedAt}/>
      </div>
    );
  }

  private renderMarketCap = (marketCap?: number): React.ReactNode => {
    if (!marketCap) {
      return null;
    }

    const cap = marketCap / 1_000_000_000 >> 0
      ? `$ ${(marketCap / 1_000_000_000).toFixed(2)} B`
      : marketCap / 1_000_000 >> 0
        ? `$ ${(marketCap / 1_000_000).toFixed(2)} M`
        : marketCap / 1_000 >> 0
          ? `$ ${(marketCap / 1_000).toFixed(2)} K`
          : `$ ${marketCap}`;

    return (
      <div className='currency-details-cap'>{cap}</div>
    );
  }
}
