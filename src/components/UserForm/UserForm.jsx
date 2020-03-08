import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import { Field, reduxForm } from 'redux-form';

// Material-ui CSS
import {
	TextField,
	Select,
	FormControl,
	FormHelperText,
	InputLabel,
	Grid,
} from '@material-ui/core';

// CSS
import * as Style from './UserForm.style';

/* FIXME Redux form issue on lazy component
  Due to a issue on redux form to render the component on real-time, it wasn't passing
  the properties to the child component, to solve the problem the child component
  of the Field has to be created previously as described on this link
  https://github.com/redux-form/redux-form/issues/961#issuecomment-219360214
*/

const initialState = {
	name: '',
	email: '',
	gender: '',
};

const NameInput = ({ input, error }) => (
	<TextField
		{...input}
		fullWidth
		required
		error={error !== ''}
		helperText={error}
		label="Nome"
		variant="outlined"
	/>
);

const EmailInput = ({ input, error }) => (
	<TextField
		{...input}
		fullWidth
		required
		type="email"
		error={error !== ''}
		helperText={error}
		label="Email"
		variant="outlined"
	/>
);
const GenderSelect = ({ input, error }) => (
	<FormControl error={error !== ''} fullWidth variant="outlined">
		<InputLabel htmlFor="gender-select">Sexo</InputLabel>
		<Select
			{...input}
			displayEmpty
			native
			labelWidth={40}
			inputProps={{
				name: 'gender',
				id: 'gender-select',
			}}
		>
			<option value="" />
			<option value="Masculino">Masculino</option>
			<option value="Feminino">Feminino</option>
		</Select>
		<FormHelperText>{error}</FormHelperText>
	</FormControl>
);

const reducer = (state, action) => ({ ...state, ...action });

const UserForm = ({ onSubmit, errors }) => {
	const [state, setState] = useReducer(reducer, initialState);

	const { name, email, gender } = state;

	const handleInput = ({ target }) => setState({ [target.name]: target.value });

	return (
		<Style.UserForm onSubmit={onSubmit}>
			<Grid
				container
				alignItems="flex-start"
				direction="row"
				justify="flex-start"
				spacing={3}
			>
				<Grid item xs={12} sm={6} md={5}>
					<Field
						name="name"
						value={name}
						onChange={handleInput}
						component={NameInput}
						error={errors.name}
					/>
				</Grid>

				<Grid item xs={12} sm={6} md={5}>
					<Field
						name="email"
						onChange={handleInput}
						value={email}
						component={EmailInput}
						error={errors.email}
					/>
				</Grid>

				<Grid item xs={12} sm={6} md={2}>
					<Field
						name="gender"
						onChange={handleInput}
						value={gender}
						component={GenderSelect}
						error={errors.gender}
					/>
				</Grid>
			</Grid>
		</Style.UserForm>
	);
};

NameInput.propTypes = {
	input: PropTypes.object.isRequired,
	error: PropTypes.string.isRequired,
};

EmailInput.propTypes = {
	input: PropTypes.object.isRequired,
	error: PropTypes.string.isRequired,
};

GenderSelect.propTypes = {
	input: PropTypes.object.isRequired,
	error: PropTypes.string.isRequired,
};

UserForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
};

export default reduxForm({ form: 'user' })(UserForm);
