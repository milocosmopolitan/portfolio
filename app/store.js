import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import * as Reducers from './reducers';

/* Combine Reducers */
function combine(reducers){

	const result = {};

	Object.keys(reducers).map(key=>{
		result[key] = Reducers[key]
	})

	return result;
}

const allReducers = combineReducers(combine(Reducers))

/* Middleware */
const logger = createLogger();

export default createStore(allReducers, applyMiddleware(logger, thunkMiddleware));
