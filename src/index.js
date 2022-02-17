import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoadingContext from './contexts/LoadingContext'
import UserContext from './contexts/UserContext'

ReactDOM.render(

  <React.StrictMode>
    <LoadingContext>
      <UserContext>
        <App />
      </UserContext>
    </LoadingContext>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
