import React from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {IoNotificationsCircleOutline} from "react-icons/io5"
import {CgProfile} from "react-icons/cg"
import {AiOutlineHeart} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
const BottomBar = () => {
  return (
    <>
        <div className="container-fluid bottombar-main-div-flipkart text-center bg-light border-top">
            <div className="home-flipkart-bottombar">
                 <AiOutlineHome />
                 <p className='bottombar-menu-name-flipkart'>Home</p>
            </div>
            <div className="Notification-flipkart-bottombar">
                <IoNotificationsCircleOutline/>
                <p className='bottombar-menu-name-flipkart'>Notification</p>
            </div>
            <div className="profile-flipkart-bottombar">
                <CgProfile/>
                <p className='bottombar-menu-name-flipkart'>Profile</p>
            </div>
            <div className="wishlist-flipkart-bottombar">
            <AiOutlineHeart/>
                <p className='bottombar-menu-name-flipkart'>Wishlist</p>
            </div>
            <div className="cart-flipkart-bottombar">
                <AiOutlineShoppingCart/>
                <p className='bottombar-menu-name-flipkart'>Cart</p>
            </div>
        </div>
    </>
  )
}

export default BottomBar