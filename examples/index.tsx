// https://babeljs.io/docs/en/babel-polyfill
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));
