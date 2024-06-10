import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css'
import './styles/defaults.css'
import './styles/fonts.css'
import './styles/variables.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);


