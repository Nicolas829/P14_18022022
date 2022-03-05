import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store/store';

import Routage from './route/route';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
   
    <Routage />
    
    </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);


