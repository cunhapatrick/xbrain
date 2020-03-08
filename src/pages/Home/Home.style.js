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
	margin: 15px 0 30px 0;
	font-weight: bold;
	font-size: 22px;
	max-width: 200px;

	> button {
		float: right;
		max-width: 180px;
		margin-top: 10px;
		font-size: 14px;
		font-weight: bolder;
		display: block;
		border-radius: 5px;
		background: orange;
		color: white;
	}
`;

export const StyledGrid = styled((props) => <Grid {...props} />)`
	margin: 20px 0;
`;
