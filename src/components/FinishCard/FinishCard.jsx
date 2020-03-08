import React from 'react';
import PropTypes from 'prop-types';

// Material Ui components
import { Paper, Link } from '@material-ui/core';

// CSS
import * as Style from './FinishCard.style';

const FinishCard = ({ name, total }) => {
	const containerClass = Style.useContainerStyles();
	const linkClass = Style.useLinkStyles();

	return (
		<Paper className={containerClass.root}>
			<Style.Title>{name},</Style.Title>
			<Style.Text component="div">
				Sua compra no valor <span>R$ {total}</span> foi finalizada com sucesso{' '}
			</Style.Text>
			<Style.Img src="img/purchase.png" alt="purchase" title="purchase image" />
			<Link href="/" className={linkClass.root}>
				iniciar nova compra
			</Link>
		</Paper>
	);
};

FinishCard.propTypes = {
	name: PropTypes.string.isRequired,
	total: PropTypes.string.isRequired,
};

export default FinishCard;
