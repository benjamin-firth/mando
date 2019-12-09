import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App/App.js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
ReactDOM.render(router, document.getElementById('root'));
serviceWorker.unregister();
