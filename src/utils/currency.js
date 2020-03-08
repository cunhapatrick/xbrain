export const formatCurrency = (
	amount,
	decimalCount = 2,
	decimal = ',',
	thousands = '.'
) => {
	decimalCount = Math.abs(decimalCount);
	// eslint-disable-next-line no-restricted-globals
	decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

	const negativeSign = amount < 0 ? '-' : '';

	const i = parseInt(
		(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
		10
	).toString();
	const j = i.length > 3 ? i.length % 3 : 0;

	return (
		negativeSign +
		(j ? i.substr(0, j) + thousands : '') +
		i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousands}`) +
		(decimalCount
			? decimal +
			  Math.abs(amount - i)
					.toFixed(decimalCount)
					.slice(2)
			: '')
	);
};

export const sumTotal = (products) => {
	const totalArray = products.map((p) => p.price * p.qtd);
	return totalArray.length > 0 ? totalArray.reduce((a, t) => a + t) : 0;
};
