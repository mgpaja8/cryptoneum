import * as React from 'react';
import { Pill } from '../Pill';
import { CurrentPrice } from '../CurrentPrice';
import { PriceDifference } from '../PriceDifference';
import { Currency, Stats } from '../../models';
import './CurrencyDetails.css';

export interface CurrencyDetailsProps {
  focused?: Currency;
  stats?: Stats;
}

export class CurrencyDetails extends React.PureComponent<CurrencyDetailsProps> {
  render(): React.ReactNode {
    const { focused, stats } = this.props;
    if (!focused) {
      return <div>Please select one of the currencies!</div>;
    }

    return (
      <div className='currency-details'>
        <div className='currency-details-name'>{focused.name}</div>
        <div className='currency-details-symbol'>{focused.symbol}</div>
        <Pill text={`# ${focused.rank}`}/>
        {this.renderMarketCap(focused.marketCap)}
        <div className='price-container'>
          <CurrentPrice price={focused.price} updatedAt={focused.updatedAt} priceChange={stats?.current.change}/>
          {!!stats && this.renderStats(stats)}
        </div>
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

  private renderStats = (stats: Stats): React.ReactNode => {
    return (
      <div className='stats-container'>
        <div className='row'>
          <PriceDifference distance={5} statItem={stats[5]}/>
          <PriceDifference distance={10} statItem={stats[10]}/>
          <PriceDifference distance={15} statItem={stats[15]}/>
        </div>
        <div className='row'>
          <PriceDifference distance={20} statItem={stats[20]}/>
          <PriceDifference distance={25} statItem={stats[25]}/>
          <PriceDifference distance={30} statItem={stats[30]}/>
        </div>
      </div>
    );
  }
}
