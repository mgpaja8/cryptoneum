import React from 'react';
import { Currency } from '../../models';
import { Sidebar } from '../Sidebar';
import { CurrencyDetailsContainer } from '../CurrencyDetails';
import './App.css';

export interface AppProps {
  selected: Currency[];
  focused?: Currency;

  getSelected: () => void;
  setFocused: (currency: Currency) => void;
}

export class App extends React.PureComponent<AppProps> {
  componentDidMount(): void {
    this.props.getSelected();
  }

  render(): React.ReactNode {
    const { focused, selected, setFocused } = this.props;

    return (
      <div className='app'>
        <Sidebar selected={selected} focused={focused} setFocused={setFocused}/>
        <CurrencyDetailsContainer />
      </div>
    );
  }
}
