import React from 'react'

const CartAndWishlist = ({heading}) => {
  return (
    <div className='container mt-3' >
        <h1 className='display-6 text-center bg-dark text-light p-2'> {heading} </h1>
        <div className="product">
          <div className="product-image">
            <img src="https://rukminim1.flixcart.com/image/224/224/xif0q/mobile/i/8/5/-original-imagmmmhmjpfvbry.jpeg?q=90" alt="product-img" />
          </div>
          <div className="product-ditails">
            <p>MOTOROLA e13 (Aurora Green, 64 GB)</p>
            <p>₹7,749 <span>50% Off</span></p>
          </div>
        </div>
    </div>
  )
}

export default CartAndWishlist