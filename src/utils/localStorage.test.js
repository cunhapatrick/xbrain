import { setLocalStorage, getLocalStorage } from './localStorage';

describe('Unit test covering local storage functions', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('Should save data inside the local storage', () => {
		const test = { test: 'this is a test' };
		setLocalStorage('test', test);

		const getData = JSON.parse(localStorage.getItem('test'));
		expect(getData).toEqual({ test: 'this is a test' });
	});

	it('Should retrieve data inside the local storage', () => {
		const test = { test: 'this is a test' };
		setLocalStorage('test', test);
		const getData = getLocalStorage('test');
		expect(getData).toEqual({ test: 'this is a test' });
	});

	it('Should fail saving invalid data inside the local storage', () => {
		const test = null;
		setLocalStorage('test', test);

		let getData = localStorage.getItem('test');
		expect(getData).toBeNull();

		setLocalStorage('test');
		getData = localStorage.getItem('test');
		expect(getData).toBeNull();
	});

	it('Should fail saving data inside the local storage with invalid name index', () => {
		const test = 'teste';
		setLocalStorage(4534, test);

		const getData = localStorage.getItem('test');
		expect(getData).toBeNull();
	});
});
