import React from 'react';
import ReactDOM from 'react-dom';
import Radium, { StyleRoot } from 'radium';

import App from './App';


ReactDOM.render(
    <StyleRoot>
        <App />
        </StyleRoot>
  ,
  document.getElementById('root')
);

