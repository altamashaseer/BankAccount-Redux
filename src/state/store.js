import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"; //use redux thunk
// import { configureStore } from '@reduxjs/toolkit' //as create store in depriciated
import reducers from './reducers'

export const store = createStore(reducers, {}, applyMiddleware(thunk))