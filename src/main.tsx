import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/index.css';
import CalcContextProvider from './context/CalcContextProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CalcContextProvider>
      <App />
    </CalcContextProvider>
  </React.StrictMode>,
);
