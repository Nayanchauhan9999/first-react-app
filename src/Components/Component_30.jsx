import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

let image1 = "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
let image2 = "https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
let image3 = "https://images.unsplash.com/photo-1566709603547-638aba3dbbc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
let image4 = "https://images.unsplash.com/photo-1566793474285-2decf0fc182a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
let image5 = "https://images.unsplash.com/photo-1593259037198-c720f4420d7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
let image6 = "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=975&q=80"
const imageList = [image1,image2,image3,image4,image5,image6]
function Slider() {
  let [state, setState] = useState(0)
  const prevImage =()=>{
    const newIndex = state - 1
    setState(newIndex<0? imageList.length- 1 : newIndex)
  }
  const nextImage =()=>{
    const newIndex = state + 1
    setState(newIndex> imageList.length-1? 0 : newIndex)
    }
  return (
    <div className='m-5 ' style={{position:"relative", boxSizing : "border-box"}}>
      <ArrowBackIosIcon color="primary" onClick={prevImage} sx={{fontSize:"50px"}} className='arrow-left'/>
      <ArrowForwardIosIcon color="primary" onClick={nextImage} sx={{fontSize:"50px"}} className='arrow-right'/>
      <div className='image-div d-flex' style={{width:"100%",boxSizing : "border-box",height:"60vh"}}>
      <img src={imageList[state]} width="100%" height="100%" alt="" />
      </div>
      <p>image no : {state+1} </p>
    </div>
  )
}

export default Slider