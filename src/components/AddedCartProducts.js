/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { getCartItems } from '../shared/globals';
import PropTypes from 'prop-types';

export default function AddedCartProducts(props) {
	const cart = getCartItems();
	console.log('Get Cart', cart);

	return (
		<div>
			<div>
				<header style={{ backgroundColor: 'pink' }}>
					<h1>Card Items</h1>
				</header>
				<table>
					<tr>
						<th>Dishes</th>
						<br></br>
						<th>Price</th>
						<br></br>
						<th>Quantity</th>
						<br></br>
						<th>Addons</th>
						<br></br>
						<th>Total</th>
					</tr>

					{cart &&
            cart.map((dish) => {
            	return (
            		<tr key={dish.id}>
            			<td>{dish.name}</td>
                  -----------
            			<td>Rs.{dish.price}</td>
                  -----------
            			<td>{dish.addedItemQuantity}</td>
                  -----------
            			<td>{(dish.addedAddons || []).join(', ')}</td>
                  -----------
            			{/* <td>
                  {dish.addedAddons === props.data1.name}
                </td> */}
            			<td>
                    Rs.
            				{dish.addedItemQuantity * dish.price +
                      (dish.addedAddons || []).reduce((acc, currentValue) => {
                      	const addon = props.addons.find(
                      		(addon) => addon.name === currentValue
                      	);
                      	if (addon) {
                      		return acc + addon.price;
                      	}

                      	return acc;
                      }, 0)}
            			</td>
            		</tr>
            	);
            })}
				</table>
			</div>
		</div>
	);
}
AddedCartProducts.propTypes ={
	addons: PropTypes.array.isRequired,
};