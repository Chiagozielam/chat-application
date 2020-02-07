import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {persistStore, PersistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

