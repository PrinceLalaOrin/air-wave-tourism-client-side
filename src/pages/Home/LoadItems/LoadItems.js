import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayItems from '../DisplayItems/DisplayItems';

const LoadItems = () => {
    const[products, setProducts] = useState([])
    // console.log(products)
    useEffect(() =>{
        fetch('https://guarded-refuge-72039.herokuapp.com/items')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='container-fluid'>
            <div className="row cards">
                <h2>Main Offering</h2>
                
                {
                    products.map(product => <DisplayItems key={product._id} product={product}></DisplayItems>)
                }
            </div>
        </div>
    );
};

export default LoadItems;