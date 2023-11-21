import React from 'react';

const PhoneShow = ({ phn }) => {
    const { phone_name, image } = phn
    return (
        <div className='d-flex flex-column'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{phone_name}</h5>
                </div>
            </div>
        </div>
    );
};

export default PhoneShow;