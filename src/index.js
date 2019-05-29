import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers';
import { fetchAllContacts } from './actions/index';
import './index.css';
import NavBar from './component/NavBar';
import ContactsContainer from './container/contacts-container';
import AddContactContainer from './container/addcontact-container';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllContacts());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<NavBar></NavBar>
			<Switch>
				<Route exact path='/' component={ContactsContainer} />
				<Route path='/add' component={() => <AddContactContainer store={store} />} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
