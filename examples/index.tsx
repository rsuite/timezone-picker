// https://babeljs.io/docs/en/babel-polyfill
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

import { RsLogo } from '../src';
import './index.less';

ReactDOM.render(
  <>
    <RsLogo width={48} height={48} />
  </>,
  document.getElementById('app')
);
