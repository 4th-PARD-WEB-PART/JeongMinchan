import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 라우터 사용 위해 필수 -> <App />을 감싸줘야함 */}
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
