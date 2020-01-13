import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from './components/App';
import store from './store';
import './index.css';

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('app'));
