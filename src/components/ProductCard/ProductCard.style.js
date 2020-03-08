import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

export const generalCardStyles = makeStyles((theme) => ({
	root: {
		width: 270,
		[theme.breakpoints.between('sm', 'md')]: {
			width: 200,
		},
		minHeight: 315,
		position: 'relative',
	},
	content: {
		background: 'rgba(255, 255, 255, 0.7)',
		transition: 'all 0.5s ease-in-out',
		position: 'absolute',
		bottom: (active) => (active ? -15 : -110),
	},
	media: {
		textAlign: 'center',
		position: 'relative',
		maxHeight: 175,
	},
	price: {
		fontWeight: 'bold',
	},
	small: {
		fontSize: 12,
		color: 'grey',
	},
	textField: {
		width: '48%',
		[theme.breakpoints.between('sm', 'md')]: {
			width: '35%',
		},
		margin: '0 20px',
	},
}));

export const cardAreaActionUseStyle = makeStyles((theme) => ({
	root: {
		maxWidth: 270,
		[theme.breakpoints.between('sm', 'md')]: {
			maxWidth: 200,
		},
		height: 315,
		position: 'absolute',
		zIndex: 1,
		top: 0,
		left: 0,
		visibility: (active) => (active ? 'hidden' : 'visible'),
		transition: 'all 0.5s ease-in-out',
	},
}));

export const SectionAmount = styled.section`
	margin: 10px 0;
`;

export const AddIconButton = styled((props) => <IconButton {...props} />)`
	&& {
		background: lightgrey;
		padding: 5px 5px;
	}
`;

export const RemoveIconButton = styled(IconButton)`
	&& {
		margin-top: 1px;
		background: lightgrey;
		padding: 5px 5px;
		opacity: ${({ amount }) => (amount === 0 ? 0.4 : 1)};
		cursor: ${({ amount }) => (amount === 0 ? 'not-allowed' : 'pointer')};
	}
`;
