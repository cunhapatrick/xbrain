import React, { useState, useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// Material ui components
import { Container } from '@material-ui/core';

// Components
import LoadingPage from 'components/LoadingPage';

// actions
import * as productActions from 'store/modules/product/actions';

// CSS
// import * as style from './Home.style';

// functions
import { formatCurrency, sumTotal } from 'utils/currency';
import { getLocalStorage } from 'utils/localStorage';

// lazy loaded Components
const FinishCard = lazy(() => import('components/FinishCard'));

export const Finish = ({ products, updateProducts }) => {
	const [user, setUser] = useState({});
	useEffect(() => {
		document.body.style.backgroundColor = 'lightgrey';
		updateProducts(getLocalStorage('products'));
		setUser(getLocalStorage('user'));
	}, []);

	const total = formatCurrency(sumTotal(products));

	return (
		<Container>
			<Suspense fallback={<LoadingPage />}>
				<FinishCard name={user.name} total={total} />
			</Suspense>
		</Container>
	);
};

Finish.propTypes = {
	/* props store */
	products: PropTypes.array.isRequired,
	/* props func */
	updateProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	user: state.user,
	products: state.products,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(productActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Finish);
