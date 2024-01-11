import React from 'react'
import logo from "../Images/Meubel House_Logos-05.svg"
import profile from "../Images/Vectorprof.svg";
import searchicon from "../Images/Vectorsearch.svg";
import likeicon from "../Images/Vectorlike.svg";
import carticon from "../Images/Vectorcart.svg";

const Navbar = () => {
  return (
    <div className='items-center'>
        <header className='flex bg-white justify-between py-3 px-4'>
            <div id='logo'>
                <a href="/" className='flex justify-center items-center'>
                <img className='h-6' src={logo} alt=''/>
                <h1 className='font-montserrat text-2xl font-bold leading-10'>Furniro</h1>
                </a>
                
            </div>
            <div id='mid' className='flex justify-around items-center w-1/3  ml-10'>
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
            <div id='right' className='flex justify-around items-center  w-1/4'>
                <a href="/login"><img src={profile} alt="login"/></a>
                <a href="/login"><img src={searchicon} alt="search"/></a>
                <a href="/login"><img src={likeicon} alt="likes"/></a>
                <a href="/login"><img src={carticon} alt="cart"/></a>
            </div>
        </header>
    </div>
  )
}

export default Navbar