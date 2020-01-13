import * as React from 'react';
import TimeAgo from 'react-timeago';
import './CurrentPrice.css';

export interface CurrentPriceProps {
  price?: number;
  updatedAt: number;
}

export class CurrentPrice extends React.PureComponent<CurrentPriceProps> {
  render(): React.ReactNode {
    const { price, updatedAt } = this.props;
    return (
      <div className='current-price'>
        <div className='current-price-text'>{`Price: ${price ? `$${price}` : ''}`}</div>
        <TimeAgo date={updatedAt}/>
      </div>
    );
  }
}
