// store
import products from 'store/modules/product/store';

import { formatCurrency, sumTotal } from './currency';

describe('Unit test covering currency format', () => {
	let currency;

	beforeEach(() => {
		currency = 0;
	});

	it('Should return a formated string with the default currency values', () => {
		expect(formatCurrency(currency)).toMatch(/0,00/);
		currency = 1000000;
		expect(formatCurrency(currency)).toMatch(/1.000.000,00/);
	});

	it('All params should work properly', () => {
		expect(formatCurrency(currency, 3)).toMatch(/0,000/);
		expect(formatCurrency(currency, 2, '.')).toMatch(/0.00/);
		currency = 1000000;
		expect(formatCurrency(currency, 2, '.', ',')).toMatch(/1,000,000.00/);
	});

	it('Should return match a determinate string if value provided is different then a number', () => {
		currency = 'teste';
		expect(formatCurrency(currency)).toMatch(/0.00/);
	});
});

describe('Unit test covering price sum of the products array of objects', () => {
	it('Should sum the prices properly', () => {
		expect(sumTotal(products)).toBe(0);

		products[0].qtd = 1;
		const { qtd, price } = products[0];
		expect(sumTotal(products)).toBe(qtd * price);
	});

	it('Should return 0 if no product exists', () => {
		expect(sumTotal([])).toBe(0);
	});
});
