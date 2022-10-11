import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleOrderNow = tshirt => {
        const exists = cart.find(ts => tshirt.id === ts.id);
        if (exists) {
            alert('Item already added')
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const handleRemoveItem = tshirt => {
        const remainIng = cart.filter(ts => ts.id !== tshirt.id);
        setCart(remainIng);
    }
    return (
        <div className='home-container grid grid-cols-6'>
            <div className="tshirts-container grid grid-cols-3 gap-3 m-5 col-span-4">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt.id}
                        tshirt={tshirt}
                        handleOrderNow={handleOrderNow}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container col-span-2">
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;