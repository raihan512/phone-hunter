import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Mother from '../Mother/Mother';
import Uncle from '../Uncle/Uncle';

export const RingContext = createContext('Dianmond Ring')

const Grandfather = () => {
    const [house, setHouse] = useState(5);
    const chain = 'Gold';
    const ring = 'Diamond Ring';
    return (
        <RingContext.Provider value={ring}>
            <div className='border-2 border-red-400 rounded-md m-5 p-5'>
                <h2 className='text-5xl font-extrabold py-5 bg-green-600 rounded'>
                    Grand-Father
                    <br />
                    <span className='text-3xl mb-3'>
                        House: {house}
                        <br />
                        Chain: {chain}
                    </span>
                </h2>
                <section className='grid grid-cols-3 gap-3'>
                    <Mother house={house} chain={chain}></Mother>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandfather;