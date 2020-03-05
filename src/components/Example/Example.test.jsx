import React from 'react';
import { shallow } from 'enzyme';

// Components
import Example from './Example';

// NOTE “describes” are meant to explain conditions, whereas “its” are meant to explain the expected output

/* NOTE Example of nesting test
describe('rendering', () => {
  let wrapper;
  const createWrapper = (props) => shallow(<MyComponent {...props} />);

  beforeEach(() => {
    // NOTE create a general test props function to use on the subsequent tests to generate random values
    const props = createTestProps();
    wrapper = createWrapper(props);
  });

  describe('initial state', () => {
    it('has default isOpen state')
    describe('when there is an initial value', () => {
      it('should use the given value')
    })
    describe('when there is no initial value', () => {
      it('should use the default value')
    })
  })
})
*/

describe('Testing render component', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Example />);
	});

	it('renders the text without crashing', () => {
		expect(wrapper.text()).toBe('Hello World');
	});
});
