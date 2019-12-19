import { createStore, combineReducers, applyMiddleware } from 'redux';

import counter from '../_reducers/counter';
import users from '../_reducers/users';

//import middleware
import {logger} from './middleware';

// setup combine reducers, for multiple reducer
// ex = reducers articles, categories, comments
const reducers = combineReducers({
  counter,
  users
})

const store =
 createStore(reducers, 
applyMiddleware(logger));

export default store