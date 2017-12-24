import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import 'normalize.css/normalize.css';
import './styles/styles.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
