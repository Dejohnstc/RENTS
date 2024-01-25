import React from 'react'
import Img1 from './images/debarry2.jpg'
import Img2 from './images/debarry6.jpeg'
import Img3 from './images/debarry7.jpeg'

export default function Page1() {
  return (
    <>
    <div className='flex flex:row mt-60 gap-5 justify-center mx auto md:flex hidden'>
      <div className='flex flex:col h-60 w-60  mr-10'>
      <div className=''>

<h1 className='text-center sui mt-2'>Get home recommendations</h1>
<h1 className='text-center mt-6 gt2'>Sign up for a more personalized experience</h1>
<div className='flex justify-center'>
<button className='bt3'>Sign in</button>
</div>
</div>
      </div>
      <div className='flex flex:col h-60 w-60 bg-slate-300'><img src={Img1} alt="" className='ht' /></div>
      <div className='flex flex:col h-60 w-60 bg-slate-300'><img src={Img2} alt="" className='ht'/></div>
      <div className='flex flex:col h-60 w-60 bg-slate-300'><img src={Img3} alt=""className='ht' /></div>
    </div>

    <div className='md:hidden  mt-[300px] flex mx-auto justify-center '>
<div className='flex flex:row gap-7 w-full'>

<div className='flex flex:col h-60 w-72  justify-center mx-auto'>
  <div className=''>

  <h1 className='text-center sui mt-2'>Get home recommendations</h1>
  <h1 className='text-center mt-6 gt2'>Sign up for a more personalized experience</h1>
 <div className='flex justify-center'>
 <button className='bt3'>Sign in</button>
 </div>
  </div>
  
</div>
      <div className='flex flex:col h-60 w-72 bg-slate-300'><img src={Img1} alt="" /></div>
</div>
    </div>


    <div className='md:hidden  mt-[30px] flex mx-auto justify-center '>
<div className='flex flex:row gap-7 w-full mx-auto justify-center'>
<div className='flex flex:col h-60 w-72 bg-slate-300'>
  <img src={Img2} alt="" />
</div>
      <div className='flex flex:col h-60 w-72 bg-slate-300'><img src={Img3} alt="" /></div>
</div>
    </div>
    
    
    </>
  )
}
