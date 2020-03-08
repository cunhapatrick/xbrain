/* eslint-disable no-underscore-dangle */
import { createStore, compose } from 'redux';

import rootReducer from './modules/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer =
	process.env.NODE_ENV === 'development'
		? composeEnhancers(console.tron.createEnhancer())
		: null;

const store = createStore(rootReducer, enhancer);

export default store;
