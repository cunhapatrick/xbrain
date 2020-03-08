import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import products from './product/reducer';

export default combineReducers({
	products,
	form: formReducer,
});
