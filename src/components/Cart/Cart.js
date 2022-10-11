import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please Add Item</p>
    }

    return (
        <div className={`h-screen sticky top-0 ${cart.length === 0 ? 'bg-red-600' : 'bg-green-400'}`} >
            <h2>Order Summary</h2>
            <h4 className={cart.length === 0 ? `text-white` : `text-cyan-500`}>Total Item Added: {cart.length}</h4>
            {
                cart.map(tshirt =>
                    <p
                        key={tshirt.id}
                        className="flex w-full justify-between px-6 my-3"
                    >{tshirt.name}
                        <button
                            className='bg-red-900 py-1 px-3 rounded-md'
                            onClick={() => handleRemoveItem(tshirt)}
                        >X</button>
                    </p>
                )
            }
            {
                message
            }
            {
                cart.length === 5 ?
                    <p>You can add more 2 items maxx</p>
                    : <p>We have only 7 Items</p>
            }
            {
                cart.length === 3 && <h5>Good</h5>
            }
            {
                cart.length === 7 || <h5>All Item not added</h5>
            }
        </div >
    );
};

export default Cart;