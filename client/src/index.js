import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import reportWebVitals from './reportWebVitals';
import CreateSurvey from './components/CreateSurvey';
import Page from './components/Page';
import TakeSurvey from './components/TakeSurvey';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page>
      <TakeSurvey />
    </Page>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
