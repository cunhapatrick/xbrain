import produce from 'immer';
import initialState from './store';

import { TYPE_EXAMPLE } from './types';

const example = (state = initialState, action) => {
	switch (action.type) {
		case TYPE_EXAMPLE:
			return produce(state, (draft) => {
				draft.push(action.payload);
			});
		default:
			return state;
	}
};

export default example;
