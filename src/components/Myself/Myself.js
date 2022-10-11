import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house }) => {
    return (
        <div className='rounded-md bg-lime-400 text-lg font-semibold p-5'>
            <h4>Myself</h4>
            <Special></Special>
        </div>
    );
};

export default Myself;