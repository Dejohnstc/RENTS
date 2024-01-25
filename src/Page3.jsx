import React from 'react'
import Img1 from './images/newlogo.JPG'
import Img2 from './images/facebook.PNG'
import Img3 from './images/instagram.JPEG'
import Img4 from './images/tiktok.PNG'
import Img5 from './images/image25.jpg'


export default function Page3() {
  return (
    <div>
        <div className='w-full bg-slate-200 mt-20  mb-20'>
            <h1 className='font-bold ml-8  tp'>About DeBarrys's Rentals's Recommendations</h1>
            <h1 className='ml-8 mt-10 '>Recommendations are based on your location and search activity, such as the homes you’ve viewed and saved and the filters you’ve used. We use this information to bring similar homes to your attention, so you don’t miss out.</h1>
            
           
        </div>
        <div>
        <h1 className='text-center text-[12px]'>
            Zillow Group is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our<br/> web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation,<br/> please let us know.
            </h1>
            <br/>
            <br/>

            <h1 className='text-center text-[12px]'>
            For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® logo are controlled by The Canadian Real Estate Association (CREA) and <br/>identify real estate professionals who are members of CREA. The trademarks MLS®, Multiple Listing Service® and the associated logos are owned by CREA <br/>and identify the quality of services provided by real estate professionals who are members of CREA. Used under license.
            </h1>
        </div>

        <div className='mt-10 flex justify-center mx-auto mb-10 '>
        <img src={Img1} alt="" className='h-[40px] w-[80px] mr-10'/>
        <h1 className='mr-5 italic text-[14px] mt-2'>Follow us:</h1>
        <img src={Img2} alt="" className='h-[30px] w-[40px] mr-5' />
        <img src={Img3} alt="" className='h-[30px] w-[40px] mr-5' />
        <img src={Img4} alt="" className='h-[30px] w-[40px]' />
        <h1 className='text-[14px] ml-5 mt-2 text-slate-400 italic sm:flex hidden'>© 2010-2024</h1>

        <span class="material-symbols-outlined text-[40px] ml-6 mt-[-5px]">
house
</span>

        </div>

        <div className='w-full mt-20'>
<img src={Img5} alt="" className='h-[120px] w-full ' />
</div>
    </div>
  )
}
