import * as React from 'react';
import './Pill.css';

export interface PillProps {
  text: string | number;
}

export class Pill extends React.PureComponent<PillProps> {
  render(): React.ReactNode {
    return (
      <div className='pill'>{this.props.text}</div>
    );
  }
}
