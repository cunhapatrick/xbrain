import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import initialState from 'store/modules/example/store';

// Components
import Home, { Home as HomeUnconnect } from './Home';

describe('Testing render and redux connection', () => {
	const mockStore = configureStore();

	let wrapper;
	let store;

	beforeEach(() => {
		store = mockStore(initialState);
	});

	it('renders without crashing', () => {
		wrapper = mount(<HomeUnconnect />);
		expect(wrapper.find('main').length).toBe(1);
	});

	it('renders without crashing with redux connection', () => {
		wrapper = mount(<Home store={store} />);
		expect(wrapper.find('main').length).toBe(1);
	});

	it('redux store loads successfully', () => {
		wrapper = mount(<Home store={store} />);
		expect(wrapper.prop('store').getState().example.length).toBe(0);
	});
});
