import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// redux actions
import * as productActions from 'store/modules/product/actions';

// utils
import { formatCurrency, sumTotal } from 'utils/currency';
import { setLocalStorage, getLocalStorage } from 'utils/localStorage';

// Components
import ProductCard from 'components/ProductCard';
import UserForm from 'components/UserForm';

// CSS
import * as Style from './Home.style';

export const Home = ({ products, purchaseProduct, updateProducts }) => {
	const [active, setActive] = useState(-1);
	const [errors, setErrors] = useState({
		name: '',
		email: '',
		gender: '',
	});

	useEffect(() => {
		document.body.style.backgroundColor = 'white';
		const prod = getLocalStorage('products');
		if (prod) updateProducts(prod);
	}, []);

	const classes = Style.useStyles();
	const total = sumTotal(products);
	const formRef = useRef(null);
	const { push } = useHistory();

	const handleFinishPurchase = () => formRef.current.submit();
	const handleSubmit = (values) => {
		const error = {
			name: '',
			email: '',
			gender: '',
		};
		setErrors({ ...error });

		const re = new RegExp(
			// eslint-disable-next-line max-len
			/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
		);

		if (values.name === undefined || values.name === '')
			error.name = 'O nome é obrigatório';

		if (values.email === undefined || values.email === '')
			error.email = 'O email é obrigatório';
		else if (!re.test(values.email.toLowerCase())) {
			error.email =
				'O formato do email fornecido está inválido ex: exemplo@xpto.com';
		}

		if (values.gender === undefined || values.gender === '')
			error.gender = 'O sexo é obrigatório';

		if (error.name !== '' || error.email !== '' || error.gender !== '') {
			setErrors({ ...error });
		} else if (sumTotal(products) === 0) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text:
					'Para finalizar a compra você deve adicionar pelo menos um produto no carrinho!',
			});
		} else {
			setLocalStorage('products', products);
			setLocalStorage('user', values);
			push('/finish');
		}
	};

	return (
		<Container maxWidth="lg">
			<section>
				<Typography className={classes.pageTitle} component="span">
					Produtos
				</Typography>
				<Style.Hr />
			</section>
			<Style.StyledGrid
				container
				alignItems="flex-start"
				direction="row"
				justify="flex-start"
				className={classes.root}
				spacing={3}
			>
				{products.map((product) => (
					<Grid item xs={12} sm={4} md={3} key={product.id}>
						<ProductCard
							active={product.id === active}
							product={product}
							purchase={purchaseProduct}
							setActive={setActive}
						/>
					</Grid>
				))}
			</Style.StyledGrid>
			<section>
				<Typography className={classes.pageTitle} component="span">
					Dados do cliente
				</Typography>
				<Style.Hr />
			</section>
			<section id="section-user">
				<UserForm ref={formRef} errors={errors} onSubmit={handleSubmit} />
			</section>
			<Style.SectionPurchase>
				Total R$ {formatCurrency(total)}
				<Button variant="contained" onClick={handleFinishPurchase}>
					Finalizar Compra
				</Button>
			</Style.SectionPurchase>
		</Container>
	);
};

Home.propTypes = {
	products: PropTypes.array.isRequired,
	updateProducts: PropTypes.func.isRequired,
	purchaseProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	products: state.products,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(productActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
