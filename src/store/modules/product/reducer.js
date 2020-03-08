import produce from 'immer';
import initialState from './store';

import { PURCHASE_PRODUCT, UPDATE_PRODUCTS } from './types';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case PURCHASE_PRODUCT:
			return produce(state, (draft) => {
				draft[action.id - 1].qtd = action.qtd;
			});
		case UPDATE_PRODUCTS:
			return produce(state, (draft) => {
				action.products.forEach((product) => {
					draft[product.id - 1] = product;
				});
			});
		default:
			return state;
	}
};

export default reducer;
