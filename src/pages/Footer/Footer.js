import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright,  } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    const element = <FontAwesomeIcon icon={faCopyright} />
    return (
        <div className='mt-5'>
            <h4>{element} Copyright 2021. All Rights Reserved by Air-Waves Tourism (Pte.) Ltd.</h4>
        </div>
    );
};

export default Footer;