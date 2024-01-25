import React from 'react'
import Img1 from './images/image22.WEBP'
import Img2 from './images/image24.WEBP'
import Img3 from './images/image23.WEBP'

export default function Page2() {
  return (
    <div>

        <div className='flex flex:row w-full justify-center mx-auto gap-5 mt-20 sm:flex hidden'>
            <div className='flex flex:row  w-[30vw] h-[90vh] ggg'><div>
            <img src={Img1} alt="" className='h-[50vh] tr'/>
            </div>
            <div>
                <h1 className='text-center bb font-bold'>Buy a home</h1>
                <h1 className='text-center'>Find your place with an immersive photo<br/> experience and the most listings, including<br/> things you won’t find anywhere else.</h1>
                <div className='flex justify-center mt-5'>
                <button className='bt4'>Browse homes</button>
            </div>
            </div>
            </div>
            <div className='flex flex:row  w-[30vw] h-[90vh] ggg'><div>
            <img src={Img2} alt="" className='h-[50vh] tr' />
            </div>
            <div>
                <h1 className='text-center bb font-bold'>Sell a home</h1>
                <h1 className='text-center'>No matter what path you take to sell your<br/> home, we can help you navigate a successful <br/>sale.</h1>
                <div className='flex justify-center mt-5'>
                <button className='bt5'>See your options</button>
            </div>
            </div>
            </div>
            <div className='flex flex:row  w-[30vw] h-[90vh] ggg'>
                <div>
            <img src={Img3} alt="" className='h-[50vh] w-full tr' /></div>
            <div>
            <h1 className='text-center bb font-bold'>Rent a home</h1>
            <h1 className='text-center'>We’re creating a seamless online experience <br/>- from shopping on the largest rental<br/> network, to applying, to paying rent.</h1>
            <div className='flex justify-center mt-5'>
                <button className='bt6'>Find rentals</button>
            </div>
            </div>
        </div>
       
        </div>





<div className='flex flex:row w-full justify-center mx-auto gap-5 mt-20 sm:hidden'>
<div className='flex flex:row  w-[90vw] gggg'>
<div className='flex flex:col'>
<div>
            <img src={Img1} alt="" className='h-[50vh] w-[45vw] tr'/>
            </div>
</div>
<div className='flex flex:col'>
<div className='h-[50vh] w-[40vw] tr mt-10'>
                <h1 className='text-center bb font-bold'>Buy a home</h1>
                <h1 className='text-center'>Find your place with an immersive photo<br/> experience and the most listings, including<br/> things you won’t find anywhere else.</h1>
                <div className='flex justify-center mt-5'>
                <button className='bt4'>Browse homes</button>
            </div>
            </div>
</div>

</div>
{/* <div className='flex flex:row  w-[70vw] h-[90vh] ggg'>
    </div> */}
</div>

<div className='flex flex:row w-full justify-center mx-auto gap-5 mt-20 sm:hidden'>


<div className='flex flex:row  w-[90vw] h-[50vh] gggg'><div>
            <img src={Img2} alt="" className='h-[50vh] tr' />
            </div>
            <div className='mt-10 mr-5'>
                <h1 className='text-center bb font-bold'>Sell a home</h1>
                <h1 className='text-center'>No matter what path you take to sell your<br/> home, we can help you navigate a successful <br/>sale.</h1>
                <div className='flex justify-center mt-5'>
                <button className='bt5'>See your options</button>
            </div>
            </div>
            </div>
</div>

<div className='flex flex:row w-full justify-center mx-auto gap-5 mt-20 sm:hidden'>
<div className='flex flex:row  w-[90vw] h-[60vh] gggg'>
                <div>
            <img src={Img3} alt="" className='h-[50vh] w-full tr' /></div>
            <div className='mt-10 mr-5'>
            <h1 className='text-center bb font-bold'>Rent a home</h1>
            <h1 className='text-center'>We’re creating a seamless online experience <br/>- from shopping on the largest rental<br/> network, to applying, to paying rent.</h1>
            <div className='flex justify-center mt-5'>
                <button className='bt6'>Find rentals</button>
            </div>
            </div>
        </div>
       
</div>

        
           
           
        



    </div>
  )
}
