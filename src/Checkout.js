import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import img1 from './images/ad1.jpg';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './subtotal';


function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src={img1} alt='' />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Your Shopping Basket</h2>
            {basket?.map(item => (
              <CheckoutProduct
                key={item.id} // Add a unique key prop for each item in the map loop
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className='checkout__right'>
          {/* <h1>Subtotal</h1> */}
          <Subtotal/>
        </div>
      )}
    </div>
  );
}

export default Checkout;
