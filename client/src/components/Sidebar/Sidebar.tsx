import * as React from 'react';
import { Currency } from '../../models';
import './Sidebar.css';

export interface SidebarProps {
  selected: Currency[];
  focused?: Currency;

  setFocused: (currency: Currency) => void;
}

export class Sidebar extends React.PureComponent<SidebarProps> {
  render(): React.ReactNode {
    return (
      <div className='sidebar'>
        {this.props.selected.map(this.renderCurrency)}
      </div>
    );
  }

  private renderCurrency = (currency: Currency): React.ReactNode => {
    const { focused } = this.props;
    const className = `sidebar-item ${focused && focused.id === currency.id ? 'focused' : ''}`;

    return (
      <div
        className={className}
        key={currency.symbol}
        onClick={this.onCurrencyClick(currency)}
      >
        {currency.name}
      </div>
    );
  }

  private onCurrencyClick = (currency: Currency) => () => {
    this.props.setFocused(currency);
  }
}
