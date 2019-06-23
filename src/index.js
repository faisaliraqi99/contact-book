import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers';
import { fetchAllContacts } from './actions/index';
import './index.css';
import NavBar from './component/NavBar';
import ContactsContainer from './container/contacts-container';
import AddContactContainer from './container/add-contact-container';
import DetailsContactContainer from './container/details-contact-container';
import EditContactContainer from './container/edit-contact-container';

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

store.dispatch(fetchAllContacts());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<NavBar></NavBar>
			<Switch>
				<Route exact path='/' component={() => <ContactsContainer store={store} />} />
				<Route path='/add' component={() => <AddContactContainer store={store} />} />
				<Route path='/details' component={() => <DetailsContactContainer store={store} />} />
				<Route path='/edit' component={() => <EditContactContainer store={store} />} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
