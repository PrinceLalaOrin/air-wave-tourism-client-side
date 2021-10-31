import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileContract } from '@fortawesome/free-solid-svg-icons'
import discount from '../Images/discount.png'

const Discount = () => {
    const element = <FontAwesomeIcon icon={faFileContract} />
    return (
        <div className='mt-5 banner'>
            <h1>We are Offering Amazing  15% Off on some of our scheduled packages.</h1>

            <img src={discount} alt="" />
            <br />
            <br />
            <span>{element} terms & conditions applicable.</span>
        </div>
    );
};

export default Discount;