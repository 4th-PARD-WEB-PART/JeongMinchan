import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {RecoilRoot} from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecoilRoot>
        {/* 라우터 사용 위해 필수 -> <App />을 감싸줘야함 */}
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </RecoilRoot>

);

reportWebVitals();
