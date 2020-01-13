import * as React from 'react';
import './PriceDifference.css';
import { StatItem } from '../../models';

export interface PriceDifferenceProps {
  distance: number;
  statItem: StatItem;
}

export class PriceDifference extends React.PureComponent<PriceDifferenceProps> {
  render(): React.ReactNode {
    const { statItem, distance } = this.props;
    if (!statItem.available) {
      return (
        <div className='price-difference-container'>N/A</div>
      );
    }

    const changeClassName = statItem.change && statItem.change > 0 ? 'positive' : 'negative';
    return (
      <div className='price-difference-container'>
        <div>{`${distance} data points ago`}</div>
        <div>{`Price: ${statItem.price?.toFixed(4)}`}</div>
        <div className={changeClassName}>{`${statItem.change?.toFixed(3)}%`}</div>
      </div>
    );
  }
}
