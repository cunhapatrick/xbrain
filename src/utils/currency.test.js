import { formatCurrency } from './currency';

describe('Unit test covering most of the cases', () => {
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
});
