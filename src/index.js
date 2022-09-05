import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import VarEstado from '../src/pages/variaveisEstado'
import Renderizacao from '../src/pages/renderizacao'
import Efeito from '../src/pages/efeitos'
import Props from '../src/pages/Props'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Props/>
  </React.StrictMode>
);

