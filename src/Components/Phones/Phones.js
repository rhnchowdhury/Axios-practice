import axios from 'axios';
import React, { useState } from 'react';
import PhoneShow from '../PhoneShow/PhoneShow';

const Phones = () => {

    const [phones, setPhones] = useState([]);

    axios.get('phone.json')
        // axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const allPhones = data.data.data;
            console.log(allPhones)
            setPhones(allPhones)
        });

    return (
        <div className='d-flex'>
            {
                phones.map((phn, idx) => <PhoneShow key={idx} phn={phn}></PhoneShow>)
            }
        </div>
    );
};

export default Phones;