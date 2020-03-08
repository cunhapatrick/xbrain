import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useLinkStyles = makeStyles({
	root: {
		marginTop: 10,
		maxWidth: 250,
		marginLeft: 'auto',
		marginRight: 'auto',
		display: 'block',
		padding: 10,
		borderRadius: 5,
		background: 'orange',
		fontWeight: 'bold',
		color: 'white',
		textDecoration: 'none',
		textTransform: 'uppercase',
		textAlign: 'center',
		'&:hover': {
			textDecoration: 'none',
			background: 'darkorange',
		},
	},
});

export const useContainerStyles = makeStyles((theme) => ({
	root: {
		width: '25%',
		textAlign: 'center',
		[theme.breakpoints.between('sm', 'md')]: {
			width: '46%',
		},
		padding: '50px 35px',
		[theme.breakpoints.between('xs', 'sm')]: {
			width: '100%',
			padding: '50px 25px',
		},
		margin: '5% auto',
	},
}));

export const Title = styled.div`
	font-weight: bold;
	font-size: 24px;
	text-align: center;
	margin-bottom: 5px;
`;

export const Text = styled.div`
	font-weight: 600;
	font-size: 15px;
	text-align: center;
	margin-bottom: 20px;
	> span {
		color: blue;
	}
`;
export const Img = styled.img`
	width: 175px;
	height: 150px;
	margin: 20px 30px;
`;
