import React from 'react';
import { hydrate } from 'react-dom';
import './index.css';
import ConfiguredApp from './client.common';
import registerServiceWorker from './registerServiceWorker';

hydrate(<ConfiguredApp />, document.getElementById('root'));
registerServiceWorker();
