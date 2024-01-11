import React from 'react';
import bgb from "../Images/background1.svg"
import dining from "../Images/image 101.svg"
import living from "../Images/image 100.svg"
import bed from "../Images/image 106.svg"
import { Link } from 'react-router-dom';
const Home = () => {
 

  return (
    <>
    <div className='flex justify-around items-center' style={{width:"100%", height:"100vh",backgroundImage:`url(${bgb})`}}>
      <div></div>
      <div className='bg-orange-50 w-1/3 ml-96 '>
        <div className='p-6'>
        <p className='text-gray-800 text-lg font-semibold'>New Arrival</p>
        <h1 className='text-yellow-600 text-4xl font-semibold'>Discover Our <br />New Collection</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque perspiciatis doloremque facere doloribus. Excepturi.</p>
        <Link to="/shop"><button className='bg-yellow-600 px-5 py-3 mt-4 text-white'>Buy Now</button></Link>
        </div>
      </div>
    </div>
    <div>
      <div className='my-4 mb-5'>
        <h2 className='text-gray-800 font-bold text-3xl text-center'>Browse The Range</h2>
        <p className='text-gray-500 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className='flex justify-center items-center gap-6'>
          <div ><img className='rounded-lg' src={bed} alt='dining'/><h2 className='text-center font-semibold text-medium my-4'>Dining</h2></div>
          <div><img className='rounded-lg' src={living} alt='dining'/><h2 className='text-center font-semibold text-medium my-4'>Living</h2></div>
          <div><img className='rounded-lg' src={dining} alt='dining'/><h2 className='text-center font-semibold text-medium my-4'>Bedroom</h2></div>
      </div>
    </div>
    </>
  );
};

export default Home;