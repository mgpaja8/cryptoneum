import * as React from 'react';
import TimeAgo from 'react-timeago';
import './CurrentPrice.css';

export interface CurrentPriceProps {
  price?: number;
  priceChange?: number;
  updatedAt: number;
}

export class CurrentPrice extends React.PureComponent<CurrentPriceProps> {
  render(): React.ReactNode {
    const { price, priceChange, updatedAt } = this.props;
    const changeClassName = priceChange && priceChange > 0 ? 'positive' : 'negative';

    return (
      <div className='current-price'>
        <div className='current-price-text'>{`Price: ${price ? `$${price}` : ''}`}</div>
        {!!priceChange && <div className={changeClassName}>{`${priceChange.toFixed(3)}%`}</div>}
        <TimeAgo date={updatedAt}/>
      </div>
    );
  }
}
