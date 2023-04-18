import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillSuitHeartFill } from "react-icons/bs";
import Button from "@mui/material/Button";
import { addCart } from "../Store/Slices/cartSlice";
import { addWishlist } from "../Store/Slices/wishlistSlice";

const ProductCategory = () => {
  const [prdt, setPrdt] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    const allPrdt = async () => {
      // const response = await axios.get(
      //   "https://api.escuelajs.co/api/v1/products"
      // );
      // const data = response.data;

      // const response = await axios.get("https://fakestoreapi.com/products")
      // const data  = response.data
      // setPrdt(data);

      const response = await axios.get("https://dummyjson.com/products")
      const data = response.data.products
      setPrdt(data)
    };
    allPrdt();
  }, []);
  const userInput = useSelector((state) => {
    return state.searchBar;
  });

  const filteredData =
    prdt &&
    prdt.filter((value) => {
      return (
        value.title.toLowerCase().startsWith(userInput.toLowerCase(), 0) ||
        value.title.toLowerCase().endsWith(userInput.toLowerCase()) ||
        value.price.toString().startsWith(userInput, 0) ||
        value.price.toString().endsWith(userInput) ||
        value.category
          .toLowerCase()
          .startsWith(userInput.toLowerCase(), 0) ||
        value.category.toLowerCase().endsWith(userInput.toLowerCase())
      );
    });
    const addtoWishlist = (value)=>{
        dispatch(addWishlist(value))
    }
  return (
    <>
      <div className="container-fluid ps-0 pe-0 mt-2">
        <h2 className="display-5 text-center bg-dark text-light">
          &#9824; Our Products &#9824;
        </h2>
        <div className="mt-1 container-fluid product-main-div-flipkart bg-light mb-5">
          {!filteredData ? (
            <div className="spinner-grow text-success" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            filteredData.map((value, index) => {
              return (
                <div
                  key={index}
                  className="d-flex flex-column product-div-flipkart align-items-center justify-content-between p-2 border m-2"
                >
                  <div className="product-image-flipkart">
                    <img src={value.thumbnail} alt="" />
                    <BsFillSuitHeartFill
                      className="addtowishlist-icon-flipkart"
                      onClick={() =>addtoWishlist(value)}
                      value={index}
                    />
                  </div>
                  <div className="product-name-flipkart text-center display-6 fs-6">
                    {value.title}
                  </div>
                  <div className="d-flex align-items-center justify-content-around w-100">
                    <Button variant="contained" size="small" color="success">
                      $ {value.price}
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() =>{dispatch(addCart(value))}}
                    >
                      Add Cart
                    </Button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
