import React, { useState, useEffect } from 'react';
import { setCartItems } from '../shared/globals';
import PropTypes from 'prop-types';

function ProductList(props) {
	const [cart, setCart] = useState([]);

	const addToCart = (dish) => {
		if (!cart.find((item) => item.id === dish.id)) {
			setCart((cart) => [
				...cart,
				{ ...dish, addedItemQuantity: dish.addedItemQuantity + 1 },
			]);
		}
		console.log('item added');
		console.log(cart);
		setCartItems(cart);
	};

	useEffect(() => {
		setCartItems(cart);
	});
	const increaseQuantity = (dishInCart) => {
		const x = cart.findIndex((item) => item.id === dishInCart.id);
		const oldDish = {
			...cart[x],
			addedItemQuantity: cart[x].addedItemQuantity + 1,
		};
		const oldCart = cart.filter((cartItem) => cartItem.id !== dishInCart.id);
		// debugger
		const newCart = [...oldCart, oldDish];
		console.log({ newCart });
		setCart(newCart);
		console.log(dishInCart.addedItemQuantity);
	};
	const decreaseQuantity = (dishInCart) => {
		if (dishInCart.addedItemQuantity > 1) {
			console.log({ cart });
			const x = cart.findIndex((item) => item.id === dishInCart.id);
			const oldDish = {
				...cart[x],
				addedItemQuantity: cart[x].addedItemQuantity - 1,
			};
			const oldCart = cart.filter((cartItem) => cartItem.id !== dishInCart.id);
			// debugger
			const newCart = [...oldCart, oldDish];
			console.log({ newCart });
			setCart(newCart);
		}
		console.log(dishInCart.addedItemQuantity);
	};
	const addAddons = (dishInCart, event) => {
		const a = dishInCart.addons.includes(event.target.value);
		if (a) {
			if (!dishInCart.addedAddons.includes(event.target.value)) {
				console.log(event.target.value);
				console.log(dishInCart.addedAddons);
				dishInCart.addedAddons.push(event.target.value);
				console.log(dishInCart.addedAddons.includes(dishInCart.addons));
				//  console.log(!dishInCart.addons.includes(dishInCart.addedAddons))
			}
		}
	};

	console.log('==================', cart);
	return (
		<div>
			<header style={{ backgroundColor: 'pink' }}>
				<h1>Parathas List</h1>
			</header>
			<table>
				<tr>
					<th>Dishes</th>
					<br></br>
					<th>Price</th>
				</tr>

				{props.data.map((dish) => {
					const dishInCart =
            cart.find((cartItem) => dish.id === cartItem.id) || {};
					return (
						<tr key={dish.id}>
							<td>{dish.name}</td>
              -----------
							<td>{dish.price}</td>
              -----------
							{!dishInCart.addedItemQuantity && (
								<td>
									<button
										style={{ backgroundColor: 'rosybrown', cursor: 'pointer' }}
										onClick={() => addToCart(dish)}
									>
                    Add to cart
									</button>
								</td>
							)}
							{dishInCart.addedItemQuantity >= 1 && (
								<>
									<td>
										<button onClick={() => increaseQuantity(dishInCart)}>
                      +
										</button>
										<p>{dishInCart.addedItemQuantity}</p>
										<button onClick={() => decreaseQuantity(dishInCart)}>
                      -
										</button>
									</td>
                  -----------
									{dish.addons.map((item) => {
										return (
											<td  key={item.id}>
												<button
													value={item}
													onClick={(Event) => addAddons(dishInCart, Event)}
												>
													{item}
												</button>
											</td>
										);
									})}
								</>
							)}
						</tr>
					);
				})}
			</table>
		</div>
	);
}
ProductList.propTypes = {
	data: PropTypes.array.isRequired,
};

export default ProductList;
