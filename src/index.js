import React from 'react';
import { render } from 'react-dom'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
render( 
<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();