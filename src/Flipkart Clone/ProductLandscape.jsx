import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../Store/Slices/cartSlice";
import { removeWishlist } from "../Store/Slices/wishlistSlice";

const ProductLandscape = ({
  title,
  image,
  description,
  price,
  id,
  removetitle,
  visibility,
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const discount = (price) => {
    const randomDiscount = Math.floor(Math.random() * 40) + 1;
    return (
      Math.trunc(price * quantity / (1 - randomDiscount / 100)) +
      " " +
      randomDiscount +
      "% Discount"
    );
  };
  const handleRemove = (id) => {
    if (removetitle === "Remove From Wishlist") {
      dispatch(removeWishlist(id));
    } else if (removetitle === "Remove From Cart") {
      dispatch(removeCart(id));
    }
  };
  const increaseQuantity =()=>{
    setQuantity(quantity + 1)
  }
  const decreaseQuantity =()=>{
    setQuantity(quantity - 1)
  }
  const cartArray = useSelector(state=>state.cart)
  const x = cartArray.map(value=>value.price * quantity)
  console.log(x)
  return (
    <>
      <div className="container-fluid ps-0 pe-0 mt-2 border rounded overflow-hidden">
        <div className="d-flex">
          <div className="image-container-flipkart me-2">
            <img src={image} alt="" width="100%" height="100%" />
          </div>
          <div className="p-1">
            <div className="title-container-flipkart fs-6 display-6 text-primary">
              <strong>{title}</strong>
            </div>
            <div className="description-container-flipkart">{description}</div>
            <div className="product-price-flipkart text-success d-flex">
              <p>$ {price * quantity} /-</p>
              <del>
                <em className="ms-3 "> $ {discount(price)} </em>
              </del>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2 mb-2 align-items-center">
          <div className="remove-btn-flipkart ms-2">
            <button
              className="btn btn-sm btn-danger"
              onClick={() => {
                handleRemove(id);
              }}
            >
              {removetitle}
            </button>
          </div>
          <div className="d-flex align-items-center" style={{ visibility }}>
            <button type="button" className="btn btn-primary btn-sm" onClick={decreaseQuantity} disabled={quantity<=1? true : false}>
              -
            </button>
            <h4 className="mb-0 ms-2 me-2">{quantity}</h4>
            <button type="button" className="btn btn-primary btn-sm" onClick={increaseQuantity} disabled={quantity>=5? true : false}>
              +
            </button>
          </div>
          <p className="me-2 text-success" style={{ visibility }}>
            {Math.trunc(Math.random() * 4) + 1} Offers Applied!
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductLandscape;
