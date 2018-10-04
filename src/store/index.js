import { createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer  from './reducer';

// const store = createStore(
// 	reducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
	  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
	}) : compose;

const enhancer = composeEnhancers(
	applyMiddleware(thunk),
	// applyMiddleware(sagaMiddleware),

// other store enhancers if any
);
const store = createStore(reducer, enhancer);

export default store;