import React from 'react';

const Cousin = ({ house }) => {
    return (
        <div className='rounded-md bg-lime-400 text-lg font-semibold p-5'>
            <h4>Cousin</h4>
            <p className='text-lg font-semibold'>House: {house}</p>
        </div>
    );
};

export default Cousin;