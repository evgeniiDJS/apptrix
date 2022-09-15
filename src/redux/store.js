import { createStore, combineReducers, applyMiddleware } from 'redux';
import  thunkMiddleware from 'redux-thunk';
import repoAuthorization from './repoAuthorization';
import repoTask from './repoTask';
import repoTimesheets from './repoTimesheets';
import repoUsers from './repoUsers';

const rootReducer = combineReducers({
    auth: repoAuthorization,
    user: repoUsers,
    task: repoTask,
    time: repoTimesheets,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));