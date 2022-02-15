import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoadingContext from './contexts/LoadingContext'

ReactDOM.render(
  <React.StrictMode>
    <LoadingContext>
      <App />
    </LoadingContext>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
