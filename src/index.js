import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers'
import './index.css';
import App from './components/App';

const composeEnhancers = 
typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const store = createStore(
    reducer, 
    enhancer
);

render(
    < Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('root')
);
