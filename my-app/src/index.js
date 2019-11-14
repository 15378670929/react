import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App.jsx';
import Routers from './router/index.js'
import * as serviceWorker from './serviceWorker';
import { HashRouter, Router } from 'react-router-dom'
import { createBrowserHistory } from "history";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer/firstReducer'
import {addtodo} from './store/action/firstAction'

let store = createStore(reducer);
console.log(store.getState())

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addtodo('test1'))
store.dispatch(addtodo('Learn about actions'))
store.dispatch(addtodo('Learn about reducers'))
store.dispatch(addtodo('Learn about store'))

unsubscribe();

const history = createBrowserHistory();

const ModeRouter = ({ children }) => {
    return Object.is(process.env.NODE_ENV, 'development') ? (
        <Router history={history}>{children}</Router>
    ) : (
        <HashRouter>{children}</HashRouter>
    )
}

ReactDOM.render(
  <Provider store={store}>
    <ModeRouter>
        <Routers />
    </ModeRouter>
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
