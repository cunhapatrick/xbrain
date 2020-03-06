import produce from 'immer';
import initialState from './store';

import { PURCHASE_PRODUCT } from './types';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case PURCHASE_PRODUCT:
			return produce(state, (draft) => {
				draft[action.id - 1].qtd = action.qtd;
			});
		default:
			return state;
	}
};

export default reducer;
