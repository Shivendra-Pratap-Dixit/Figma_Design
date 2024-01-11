import React, { useEffect, useState } from 'react'
import shopbg from "../Images/shopbg.svg"
import axios from 'axios';
const Shop = () => {
  const [product,setProduct]=useState([]);
  async function fetchData(){
try {
  let res=await axios.get("https://fakestoreapi.com/products")
  let data=await res.data
  setProduct(data)
} catch (error) {
  throw new error()
}
  }
  useEffect(()=>{
fetchData()
  },[])
  console.log(product)
  return (
    <div>
      <div className='flex flex-col justify-center items-center' style={{width:"100%", height:"43.28vh",backgroundImage:`url(${shopbg})`}}>
<h2 className='text-black font-semibold text-4xl'>Shop</h2>
<p>Home > Shop </p>
      </div>
      <div className='' style={{display:'grid',gridTemplateColumns:"repeat(4,1fr)"}}>
{Array.isArray(product) && product?.map((item)=>(
  <div className="flex flex-col justify-center items-center shadow-md m-4 p-5" key={item.id}>
    <img className='h-full w-1/2' src={item.image} alt='furniro'/>
    <h2 className='text-center font-semibold text-lg'>{item.title}</h2>
    {/* <h3>{item.description}</h3> */}
    <h1>Rp {item.price.toFixed(2)}</h1>
  </div>
))}
      </div>
    </div>
  )
}

export default Shop