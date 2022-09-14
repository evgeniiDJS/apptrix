import { createStore, combineReducers, applyMiddleware } from 'redux';
import  thunkMiddleware from 'redux-thunk';
import repoAuthorization from './repoAuthorization';
import repoTask from './repoTask';
import repoUsers from './repoUsers';

const rootReducer = combineReducers({
    auth: repoAuthorization,
    user: repoUsers,
    task: repoTask,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));