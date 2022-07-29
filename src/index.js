import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reducer from './store/reducer'
import {Provider} from 'react-redux'
import {legacy_createStore} from 'redux'
import { store } from './Service/store';
// const store = legacy_createStore(store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
  </Provider>
   );
