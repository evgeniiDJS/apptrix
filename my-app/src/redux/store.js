import { createStore, combineReducers, applyMiddleware } from 'redux';
import  thunkMiddleware from 'redux-thunk';
import repoAuthorization from './repoAuthorization';
import repoUsers from './repoUsers';

const rootReducer = combineReducers({
    auth: repoAuthorization,
    user: repoUsers,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));