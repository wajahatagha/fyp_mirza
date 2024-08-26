import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './Admin/css/style.css';
import './Admin/css/satoshi.css';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);
