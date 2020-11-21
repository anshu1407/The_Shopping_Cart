import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
	cart:[]

};

const reducer=(state= initialState,action)=>{
	return state;
};

const store= createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
		
	,
	document.getElementById('root')
);


