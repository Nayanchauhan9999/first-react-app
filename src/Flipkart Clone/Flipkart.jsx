import React from 'react'
import Navbar from './Navbar'
import "./flipkart.css"
import Categories from './Categories'
import Carousel from './Carousel'
import BottomBar from './BottomBar'
import ProductCategory from './ProductCategory'

function Flipkart() {
  return (
    <>
        <Navbar/>
        <Categories/>
        <Carousel/>
        <ProductCategory/>

        <BottomBar/>
    </>
  )
}

export default Flipkart