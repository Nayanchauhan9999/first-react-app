import React from 'react'

const categoryItems = [{image:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",name:"Grocery"},{image:"https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",name:"Mobiles"},{image:"https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",name:"Fashion"},{image:"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",name:"Electronics"},{image:"https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",name:"Home"},{image:"https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",name:"Appliances"},{image:"https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",name:"Travel"},{image:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",name:"Top Offers"},{image:"https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",name:"Beauty,Toys & More"},{image:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",name:"Two Wheelers"}]
function Categories() {
  return (
    <div className='d-flex justify-content-between cat-div' style={{overflow:"auto",boxSizing:"border-box"}}>
        {categoryItems.map((value,index)=>{
            return (
                    <div key={index} style={{padding:"10px",cursor:"pointer"}} className="d-flex align-items-center flex-column">
                    <img src={value.image} alt="" className='cat-image-flipkart'/>
                    <h6 className='text-center cat-name'> {value.name} </h6>
                    </div>
            )
        })}
    </div>
  )
}

export default Categories