import React from 'react';
import ReactDOM from 'react-dom';

const title = "My Minimal React Webpack Bable Setup";

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);
module.hot.accept();
