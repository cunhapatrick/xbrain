import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

export const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		marginTop: '10px',
	},
	pageTitle: {
		fontSize: '18px',
		fontWeight: 'medium',
	},
});

export const Hr = styled.hr`
	border-color: lightgrey;
`;

export const SectionPurchase = styled.section`
	float: right;
	text-align: right;
	margin-top: 15px;
	font-weight: bold;
	font-size: 22px;
	max-width: 200px;

	> button {
		margin-top: 10px;
		background: orange;
		font-weight: bold;
		color: white;
	}
`;

export const StyledGrid = styled((props) => <Grid {...props} />)`
	margin: 20px 0;
`;
