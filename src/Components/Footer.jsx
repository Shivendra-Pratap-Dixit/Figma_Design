import React from 'react'

const Footer = () => {
  return (
    <div className='p-10'>
        <div className='flex justify-between'>
            <div>
                <h1 className='mb-6 font-semibold text-lg'>Furniro</h1>
                <p className='text-gray-400'>400 University Drive Suite 200 Coral <br />Gables,<br/>FL 33134 USA</p>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='text-gray-400'>Links</h1>
                <a href='/home'><h3>Home</h3></a>
                <a href='/shop'><h3>Shop</h3></a>
                <a href='/about'><h3>About</h3></a>
                <a href='/contact'><h3>Contact</h3></a>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='text-gray-400'>Help</h1>
                <a href='/home'><h3>Payment Options</h3></a>
                <a href='/home'><h3>Returns</h3></a>
                <a href='/home'><h3>Privacy Policies</h3></a>
            </div>
            <div>
                <h1 className='text-gray-400 mb-5'>Newsletter</h1>
                <input className='underline' type='text' placeholder='Enter Your Email'/>
                <button className='underline'>Subscribe</button>
            </div>
        </div>
        <p>2024 furniro.All rights reserved</p>
    </div>
  )
}

export default Footer