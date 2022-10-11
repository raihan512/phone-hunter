import React from 'react';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Mother = ({ house, chain }) => {
    return (
        <div className='bg-green-500 p-8 rounded-md my-5'>
            <h3 className='font-bold text-2xl mb-3'>Mother</h3>
            <h5 className='text-5xl mb-3'>House: {house}</h5>
            <section className='grid grid-cols-2 gap-2'>
                <Myself house={house}></Myself>
                <Sister house={house} chain={chain}></Sister>
            </section>
        </div>
    );
};

export default Mother;