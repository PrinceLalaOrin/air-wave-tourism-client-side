import React from 'react';
import banner from '../../images/home-banner.png'
import LoadItems from './LoadItems/LoadItems';

import './Home.css'
import Hajj from './Hajj/Hajj';
import Offer from './Offer/Offer';
import Discount from './Discount/Discount';
const Home = () => {
    return (
        <div className='banner'>
            <img src={banner} alt="" />
            <LoadItems/>
            <Offer/>
            <Discount/>
            <Hajj/>
            
        </div>
    );
};

export default Home;