import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './appReducer';
import SidebarReducer from 'app/module/Sidebar/reducer';




export default () => {
	const reducers = {
		app : appReducer,
		Sidebar : SidebarReducer,
	};

	const middleware = [thunk];
	return createStore(
		combineReducers(reducers),
		applyMiddleware(...middleware),
	);
};
