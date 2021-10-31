import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const element = <FontAwesomeIcon icon={faMobileAlt} />
    const element1 = <FontAwesomeIcon icon={faEnvelope} />
    const element2 = <FontAwesomeIcon icon={faMapMarkerAlt} />
    return (
        <div>
                       <h1> Air-Waves Tourism (Pte) Ltd.</h1>
            <p>At Air-Waves Tourism , we welcome your inquiries, feedback and suggestions. We try to respond to all queries as quickly as possible, but in some cases, it may take longer to respond to your message.</p>
                    <p>{element}  04794233 & 02 3241526</p>
                    <p> {element1} info@tourismbyairwaves.com admin@travelAir-waves.com</p>
                    <p>{element2} Iskatan Road, Dhaka, 4010.</p>
        </div>
    );
};

export default Contact;