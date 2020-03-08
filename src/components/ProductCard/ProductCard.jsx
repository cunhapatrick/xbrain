import React from 'react';
import PropTypes from 'prop-types';

// Material-ui CSS
import {
	Card,
	CardMedia,
	CardContent,
	CardActionArea,
	Typography,
	Button,
	TextField,
} from '@material-ui/core';

// Icons
import AddIcon from 'assets/icons/add';
import RemoveIcon from 'assets/icons/remove';

// CSS
import * as Style from './ProductCard.style';

const ProductCard = ({
	/* local state */
	amount,
	/* local funcs */
	handleAmount,
	/* local constants */
	incash,
	term,
	/* prop states */
	active,
	product,
	/* prop funcs */
	setActive,
	purchase,
}) => {
	const generalCardClasses = Style.generalCardStyles(active);
	const cardAreaActionClass = Style.cardAreaActionUseStyle(active);

	return (
		<Card className={generalCardClasses.root} elevation={active ? 2 : 0}>
			<CardActionArea
				className={cardAreaActionClass.root}
				onClick={() => setActive(product.id)}
			/>
			<CardMedia className={generalCardClasses.media}>
				<img
					width="225"
					height="175"
					alt="Product"
					title="Product image"
					src={product.img}
				/>
			</CardMedia>
			<CardContent className={generalCardClasses.content}>
				<Typography component="p">{product.title}</Typography>
				<Typography className={generalCardClasses.price} component="p">
					R$ {product.price}
				</Typography>
				<Typography className={generalCardClasses.small} component="p">
					Em até 12x de R$ {term}
				</Typography>
				<Typography className={generalCardClasses.small} component="p">
					R$ {incash} à vista (10% de desconto)
				</Typography>
				<>
					<Style.SectionAmount>
						<Style.RemoveIconButton
							amount={amount}
							onClick={() => handleAmount({ name: 'remove' })}
						>
							<RemoveIcon />
						</Style.RemoveIconButton>
						<TextField
							margin="dense"
							className={generalCardClasses.textField}
							value={amount}
							variant="outlined"
							onChange={handleAmount}
						/>
						<Style.AddIconButton onClick={() => handleAmount({ name: 'plus' })}>
							<AddIcon />
						</Style.AddIconButton>
					</Style.SectionAmount>
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={() => purchase(product.id, amount)}
					>
						adicionar
					</Button>
				</>
			</CardContent>
		</Card>
	);
};

ProductCard.propTypes = {
	/* local states */
	amount: PropTypes.number.isRequired,
	/* local funcs */
	handleAmount: PropTypes.func.isRequired,
	/* local constants */
	incash: PropTypes.string.isRequired,
	term: PropTypes.string.isRequired,
	/* prop states */
	active: PropTypes.bool.isRequired,
	product: PropTypes.object.isRequired,
	/* props funcs */
	purchase: PropTypes.func.isRequired,
	setActive: PropTypes.func.isRequired,
};

export default ProductCard;
