import React from 'react'
import {BsFillArrowRightCircleFill} from "react-icons/bs"

const ProductCategory = () => {
   
  return (
    <>
        <div className="container-fluid mt-2">
            <div className="category-name-banner">
                <p className='display-6 fs-6'>Category Name</p>
                <BsFillArrowRightCircleFill className='text-primary'/>
            </div>
            <div className="view-all">view All</div>

        </div>
    </>
  )
}

export default ProductCategory