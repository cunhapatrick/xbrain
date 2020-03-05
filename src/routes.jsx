import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './pages/Home';

const Routes = () => (
	<Switch>
		<Route path="/">
			<Home />
		</Route>
	</Switch>
);

export default Routes;
