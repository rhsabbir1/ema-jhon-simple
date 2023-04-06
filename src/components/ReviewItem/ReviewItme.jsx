import React from 'react';
import './ReviewItem.css'

const ReviewItme = ({product}) => {
    const {id , img , name , price , quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
        </div>
    );
};

export default ReviewItme;