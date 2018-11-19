import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './routes'

//redux
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducer from './reducer'
import reduxThunk from 'redux-thunk';


const initialState = {}
const store = createStore (
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(reduxThunk)
    )
)

ReactDOM.render(
<Provider store = {store}>
<Router />
</Provider>
, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

