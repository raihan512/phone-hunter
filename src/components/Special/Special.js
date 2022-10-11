import React, { useContext } from 'react';
import { RingContext } from '../Grandfather/Grandfather';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div className='p-2 bg-red-700 rounded-md'>
            <p><strong>Gift: {ring}</strong></p>
        </div>
    );
};

export default Special;