import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItme from '../ReviewItem/ReviewItme';
import './Order.css';

const Orders = () => {
    const cart = useLoaderData();
    
    return (
        <div className='shop-container'>
            <div className="review-container">
              {
                cart.map(product => <ReviewItme 
                    key={product.id}
                    product={product}
                ></ReviewItme>)
              }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;

