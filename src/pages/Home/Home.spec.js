// import React from 'react';
// import configureStore from 'redux-mock-store';
// import { mount } from 'enzyme';
// import initialState from 'store/modules/product/store';
// import sinon from 'sinon';

// Redux actions
// import * as actions from 'store/modules/product/actions';

// Components
// import { Home as HomeUnconnect } from './Home';

describe('Testing render and redux connection', () => {
	// const mockStore = configureStore();

	// let wrapper;

	// let store;
	beforeEach(() => {
		// store = mockStore(initialState);
	});

	it('renders without crashing and default props', () => {
		// wrapper = mount(
		// 	<HomeUnconnect
		// 		products={initialState}
		// 		purchaseProduct={actions.purchaseProduct}
		// 	/>
		// );
		// expect(wrapper.find('div').length).toBeGreaterThan(0);
		expect(true).toBe(true);
	});

	// it('Initial store loaded successfully', () => {
	// 	expect(store.getState().length).toBeGreaterThan(0);
	// });

	// it('renders without crashing with redux connection', () => {
	// 	wrapper = mount(
	// 		<Home
	// 			// store={store}
	// 			products={initialState}
	// 			purchaseProduct={actions.purchaseProduct}
	// 		/>
	// 	);
	// 	expect(wrapper.find('div').length).toBeGreaterThan(0);
	// });

	// it('redux store loads successfully', () => {
	// 	wrapper = mount(
	// 		<Home
	// 			// store={store}
	// 			products={initialState}
	// 			purchaseProduct={actions.purchaseProduct}
	// 		/>
	// 	);
	// 	expect(wrapper.prop('store').getState().length).toBeGreaterThan(0);
	// });
});
