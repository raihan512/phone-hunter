import React from 'react';

const Nephew = ({ chain }) => {
    return (
        <div className='bg-red-300  py-5 px-2 rounded-md'>
            <p className='text-sm'>Nephew: {chain}</p>
        </div>
    );
};

export default Nephew;