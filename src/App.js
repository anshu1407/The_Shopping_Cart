import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import AddedCartProducts from './components/AddedCartProducts';
// import {getCartItems} from "./shared/globals"

function App() {
	// const cart= getCartItems();
	const [page, setPage] = useState('products');
	const PAGE_PRODUCTS = 'products';
	const PAGE_CART = 'cart';

	const [dishes] = useState([
		{
			id: 1,
			name: 'Plain Paratha and Yogurt',
			price: 40,
			addons: ['Extra sauce'],
			quantity: 10,
			limit: 5,
			addedItemQuantity: 0,
			addedAddons: [],
		},
		{
			id: 2,
			name: 'Aalo Paratha',
			price: 50,
			addons: ['Extra Sauce', 'Yogurt', 'Cheese'],
			quantity: 20,
			limit: 10,
			addedItemQuantity: 0,
			addedAddons: [],
		},
		{
			id: 3,
			name: 'Veg Paratha',
			price: 50,
			addons: ['Corn', 'Cabbage', 'Fenugreek', 'Cheese'],
			quantity: 30,
			limit: 15,
			addedItemQuantity: 0,
			addedAddons: [],
		},
		{
			id: 4,
			name: 'Double Cheese Paratha',
			price: 70,
			addons: ['Extra sauce', 'Yogurt', 'Corn'],
			quantity: 25,
			limit: 10,
			addedItemQuantity: 0,
			addedAddons: [],
		},
		{
			id: 5,
			name: 'Corn Cheese Paratha',
			price: 80,
			addons: ['Extra Sauce', 'Yogurt', 'Cheese'],
			quantity: 20,
			limit: 8,
			addedItemQuantity: 0,
			addedAddons: [],
		},
	]);

	const addons = [
		{
			id: 1,
			name: 'Extra Sauce',
			price: 5,
		},
		{
			id: 2,
			name: 'Yogurt',
			price: 15,
		},
		{
			id: 3,
			name: 'Cabbage',
			price: 15,
		},
		{
			id: 4,
			name: 'Corn',
			price: 10,
		},
		{
			id: 5,
			name: 'Fenugreek',
			price: 10,
		},
		{
			id: 6,
			name: 'Extra Cheese',
			price: 20,
		},
	];
	
	const navigateTo = (PAGE_CART) => {
		setPage(PAGE_CART);
	};
	return (
		<div className="App">
			{page === PAGE_PRODUCTS && <ProductList data={dishes} />}
			{page === PAGE_CART && <AddedCartProducts addons={addons}/>}

			<div>
				{page === PAGE_PRODUCTS && (
					<button
						style={{
							padding: '10px',
							backgroundColor: 'green',
							cursor: 'pointer',
						}}
						onClick={() => navigateTo(PAGE_CART)}
					>
            Go to Cart
					</button>
				)}

				{page === PAGE_CART && (
					<button
						style={{
							padding: '10px',
							backgroundColor: 'green',
							cursor: 'pointer',
						}}
						onClick={() => navigateTo(PAGE_CART)}
					>
            Checkout
					</button>
				)}
			</div>
			<div>
				<button
					style={{
						padding: '10px',
						backgroundColor: 'green',
						cursor: 'pointer',
					}}
					onClick={() => navigateTo(PAGE_PRODUCTS)}
				>
          View Products
				</button>
			</div>
		</div>
	);
}

export default App;
