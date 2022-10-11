import React from 'react';

const Tshirts = ({ tshirt, handleOrderNow }) => {
    const { picture, name, price } = tshirt;
    return (
        <div className='border rounded-md text-left p-5 relative'>
            <img className='w-1/2' src={picture} alt="" />
            <div className='mt-5 mb-10'>
                <h5>{name}</h5>
                <p>Price: ${price}</p>
                <button
                    onClick={() => handleOrderNow(tshirt)}
                    className='py-2 px-5 bg-green-400 rounded-bl-md rounded-br-md pointer w-full absolute bottom-0 left-0'
                >Order Now</button>
            </div>
        </div>
    );
};

export default Tshirts;