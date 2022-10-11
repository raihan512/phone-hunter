import React from 'react';
import Nephew from '../Nephew/Nephew';

const Sister = ({ house, chain }) => {
    return (
        <div className='rounded-md bg-lime-400 text-lg font-semibold p-5'>
            <h4>Sister</h4>
            <p className='text-lg font-semibold'>House: {house}</p>
            <Nephew chain={chain}></Nephew>
        </div>
    );
};

export default Sister;