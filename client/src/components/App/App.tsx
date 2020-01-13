import React from 'react';
import './App.css';
import { Currency } from '../../models';

export interface AppProps {
  selected: Currency[];

  getSelected: () => void;
}

export class App extends React.PureComponent<AppProps> {
  componentDidMount(): void {
    this.props.getSelected();
  }

  render(): React.ReactNode {
    return (
      <div className='App'>
      </div>
    );
  }
}
