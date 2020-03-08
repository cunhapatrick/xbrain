import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './pages/Home';
import Finish from './pages/Finish';

const Routes = () => (
	<Switch>
		<Route exact path="/">
			<Home />
		</Route>
		<Route path="/finish">
			<Finish />
		</Route>
	</Switch>
);

export default Routes;
