import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';

import store from './store';

// Global Style
import GlobalStyle from './styles/global.style';

const App = () => (
	<Provider store={store}>
		<Router>
			<Routes />
			<GlobalStyle />
		</Router>
	</Provider>
);

export default App;
