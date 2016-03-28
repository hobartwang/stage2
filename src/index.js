import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import App from './App';
import './style/main.scss';

import { Router, browserHistory } from 'react-router'
import routes from './routes';

render(<Router history={browserHistory}>{routes}</Router>
, document.getElementById('root'));

