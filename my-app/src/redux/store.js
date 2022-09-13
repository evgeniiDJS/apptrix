import { createStore, combineReducers, applyMiddleware } from 'redux';
import  thunkMiddleware from 'redux-thunk';
import repoAuthorization from './repoAuthorization';

const rootReducer = combineReducers({
    auth: repoAuthorization,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));