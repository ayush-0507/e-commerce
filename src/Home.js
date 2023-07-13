import React from 'react'
import img1 from './images/amazon.jpg'
import './Home.css';
import Product from "./Product"

function Home() {
  return (
    <div className='home'>
      <img className='home__image'
       src={img1} alt=""/>
        
      <div className='home__row'>

      <Product 
      id="12321341"
      title="The Lean Startup: How Constant Innvoation Creates Radically Successful Businesses Paperback"
      price={500.00}
      rating={5}
      image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
      />

      <Product 
      id="12321342"
      title="SOLETHREADS Rise Casual Sneaker Lightweight Lace-up Shoes for Men"
      price={1499.00}
      rating={5}
      image="https://m.media-amazon.com/images/I/81goWe90ByL._UY695_.jpg"
      />

      </div>

      <div className='home__row'>
        
      <Product 
      id="12321343"
      title="Apple iPhone 14 (128 GB) - Blue"
      price={69000.00}
      rating={4}
      image="https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg"
      />

      <Product 
      id="12321344"
      title="Echo Dot (4th Gen, White) combo with Amazon Smart Plug"
      price={5499.00}
      rating={5}
      image="https://m.media-amazon.com/images/I/61Yl8A4sKTL._SL1000_.jpg"
      />

      <Product 
      id="12321345"
      title="Allen Solly Men Polo"
      price={679.00}
      rating={5}
      image="https://m.media-amazon.com/images/I/71eUwDk8z+L._UL1500_.jpg"
      />


      </div>
      
      <div className='home__row'>
      <Product 
      id="12321346"
      title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X74K (Black)"
      price={57900.00}
      rating={5}
      image="https://m.media-amazon.com/images/I/81wxS8abrgL._SL1500_.jpg"
      />

      </div>

      
    </div>
  )
}

export default Home
