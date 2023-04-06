import React from 'react';
import './ReviewItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItme = ({ product , handleRemoveCart }) => {
    const { id, img, name, price, quantity } = product;
    return (
        <div className='review-item'>
            <div className="review-details">
                <img src={img} alt="" />
                <div>
                    <p>{name}</p>
                    <p>Price : <span className='oranger-text'>$ {price}</span></p>
                    <p>Quantity : <span className='oranger-text'> {quantity}</span></p>
                </div>
            </div>
            <button onClick={()=> handleRemoveCart(id)} className='delete-btn'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItme;