import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Grid, Typography, Button } from '@material-ui/core';

// redux actions
import * as productActions from 'store/modules/product/actions';

// utils
import { formatCurrency } from 'utils/currency';

// Components
import ProductCard from 'components/ProductCard';

// CSS
import * as Style from './Home.style';

export const Home = ({ products, purchaseProduct }) => {
	const [active, setActive] = useState(-1);
	const classes = Style.useStyles();

	const totalArray = products.map((p) => p.price * p.qtd);
	const total = totalArray.length > 0 ? totalArray.reduce((a, t) => a + t) : 0;

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
			<Style.SectionPurchase>
				Total R$ {formatCurrency(total)}
				<Button fullWidth variant="contained" onClick={() => {}}>
					Finalizar Compra
				</Button>
			</Style.SectionPurchase>
		</Container>
	);
};

Home.propTypes = {
	products: PropTypes.array.isRequired,
	purchaseProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	products: state.products,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators(productActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
