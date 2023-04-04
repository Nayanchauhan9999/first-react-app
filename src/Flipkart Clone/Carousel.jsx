import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function Carousel() {
    let [state, setState] = useState(0)
    const prevImage =()=>{
        let newImage = state - 1
        setState(newImage<0? bannerImage.length-1 : newImage)
    }
    const nextImage =()=>{
        let newImage = state + 1
        setState(newImage>bannerImage.length-1? 0 : newImage)
    }
// let int = setInterval(() => {
//     let newState = state + 1
//     setState(newState>bannerImage.length-1? 0 : newState)
//   }, 5000);
  return (
    <div className='carousel-main-div'>
    <div className='arrow-back' onClick={prevImage} >
    <ArrowBackIosIcon className='backword-icon'/>
    </div>
    <div className='arrow-forward'>
        <ArrowForwardIosIcon className='forward-icon' onClick={nextImage}/>
    </div>
    <div className='carousel-image-div'>
    <img src={bannerImage[state]} alt="" height="100%" width="100%"/>
    </div>
    </div>
  )
}
const bannerImage = ["https://img.freepik.com/free-psd/fashion-sale-banner-template_23-2148935598.jpg?w=740&t=st=1677500930~exp=1677501530~hmac=c0eaeeaab5fdf2add976986ee251ef5806969990e9da7c2fb68be495ac03ce30","https://img.freepik.com/free-psd/special-sales-banner-template_23-2148975924.jpg?w=740&t=st=1677502954~exp=1677503554~hmac=cbe5726bd07afaaa8aea13d54dd00e0aaf5bbd20eeacf47893d3df26a57ad9c6","https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=900&t=st=1677502988~exp=1677503588~hmac=5f5e82f8fbf5961a2ba27d22ad911d7ba82d259ad9a1782adcd3e5717a9a9e24","https://img.freepik.com/premium-vector/fashion-sale-banner-social-media-design_7605-625.jpg?w=740","https://img.freepik.com/premium-photo/3d-rendering-shopping-cart-laptop_172660-170.jpg?w=826"]
export default Carousel