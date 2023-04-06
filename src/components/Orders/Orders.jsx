import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItme from '../ReviewItem/ReviewItme';
import './Order.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const saveCart = useLoaderData();
    const [cart , setCart] = useState(saveCart)
    const handleRemoveCart = (id)=>{
        const remaning = cart.filter(product => product.id  !== id)
        setCart(remaning)
        removeFromDb(id)
    }
    const clearCart = ()=>{
        setCart([])
        deleteShoppingCart()
    }
    
    return (
        <div className='shop-container'>
            <div className="review-container">
              {
                cart.map(product => <ReviewItme 
                    key={product.id}
                    product={product}
                    handleRemoveCart={handleRemoveCart}
                ></ReviewItme>)
              }
            </div>
            <div className="cart-container">
                <Cart 
                cart={cart}
                clearCart={clearCart}
                >
                    <Link className='link' to='/proccedCheekout'>
                        <button className='procid-cheekout'>
                            <span>Procide cheekout</span>
                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </button>
                        
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;

