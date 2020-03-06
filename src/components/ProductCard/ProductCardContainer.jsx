import React, { useState } from 'react';
import PropTypes from 'prop-types';

// utils
import { formatCurrency } from 'utils/currency';

// Component
import ProductCard from './ProductCard';

const ProductCardContainer = ({ product, ...rest }) => {
	const [amount, setAmount] = useState(product.qtd);

	const handleAmount = ({ name, value }) => {
		switch (name) {
			case 'plus':
				setAmount(amount + 1);
				break;
			case 'remove':
				if (amount !== 0) setAmount(amount - 1);
				break;
			default:
				if (parseInt(value, 10)) setAmount(parseInt(value, 10));
		}
	};

	const productMutated = {
		...product,
		price: formatCurrency(product.price),
	};

	const term = formatCurrency(product.price / 12);
	const incash = formatCurrency(product.price * 0.9);

	return (
		<ProductCard
			{...rest}
			product={productMutated}
			amount={amount}
			term={term}
			incash={incash}
			handleAmount={handleAmount}
		/>
	);
};

ProductCardContainer.propTypes = {
	product: PropTypes.object.isRequired,
	active: PropTypes.bool.isRequired,
	purchase: PropTypes.func.isRequired,
	setActive: PropTypes.func.isRequired,
};

export default ProductCardContainer;
