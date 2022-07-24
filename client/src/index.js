import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import reportWebVitals from './reportWebVitals';
import CreateSurvey from './routes/CreateSurvey';
import Page from './components/Page';
import TakeSurvey from './routes/TakeSurvey';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        
          <Route path="take_survey" element={<TakeSurvey />} />
          <Route path="create_survey" element={<CreateSurvey />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
