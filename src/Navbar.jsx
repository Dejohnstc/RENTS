import React from 'react'
import Img1 from './images/reel3.jpg'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Navbar() {
    const [showDiv, setShowdiv]= useState(true) 

    function Hide() {
        setShowdiv(true)
    };

    function Show() {
        setShowdiv(false)
    };
    return (
        <>
<div className='lg:flex hidden'>

     <div className='h-20 w-full bg-slate-200 '>
        <div>
            <ul className='kll'>
                <li className=''>
                    <a href="https://www.zillow.com/homes/for_rent/" className='m-4 mkk kp hover:underline'>Home</a>
                    <a className='m-4 mkk kp hover:underline'href="https://www.zillow.com/rental-manager/?source=topnav&itc=postbutton_sitenav">Prices</a>
                    <a className='m-4 mkk kp hover:underline'href="https://www.zillow.com/professionals/real-estate-agent-reviews/san-francisco-ca/">Agents</a>
                    <a className='m-4 mkk  kp hover:underline'href="">Advertise</a>
                </li>
            </ul>
        </div>

        <div>
            <h1 className=' hh1'>DeBarrys Rentals</h1>
        </div>

        <div className='float-right'>
        <ul className='kl'  >
                <li>
                    <a className='m-4 mk kp hover:underline' href="">About</a>
                    <a className='m-2 mk kp hover:underline' href="https://zillow.zendesk.com/hc/en-us/">Help</a>
                    <Link to={'/Log'}>
                    <a className='m-4 mk kp hover:underline' href="">Sign in</a>
                    </Link>
                    
                </li>
            </ul>
        </div>

        <div className='float-right div1 '>
            <a href="https://surveyheart.com/form/64c7ff14fbcfb165e7de2f6d"><button className='bt1 '>Apply here</button></a>
        </div>
       </div>
      
     </div>

     {/* smaller screen */}
       
       <div className='h-20 w-full bg-slate-200 lg:hidden fixed z-50'>
       <div className='flex justify-center lg:hidden'>
            <h1 className=' nn font-bold'>DeBarrys Rentals</h1>
        </div>
       
       <div className={showDiv? 'block hhg' : 'hidden'}>
<button  onClick={Show}><span class="material-symbols-outlined ft1">
menu
</span></button>


</div>

<div className={showDiv ? 'hidden' : 'block'}>
        <button className={showDiv ? 'hidden' : 'block'}onClick={Hide}><span class="material-symbols-outlined ic mt-[-80vh] bv ">
close
</span></button>
<div className=' flex justify-center z-50 float-left  kay'>
         <ul className=''>
             <li className='text-white buy' >
             <a href="https://www.zillow.com/homes/for_rent/" className='m-4 '>Home</a>
             <br/>
                     <a className='m-4 'href="https://www.zillow.com/rental-manager/?source=topnav&itc=postbutton_sitenav">Prices</a>
                     <br/>
                     <a className='m-4 'href="https://www.zillow.com/professionals/real-estate-agent-reviews/san-francisco-ca/">Agents</a>
                     <br/>
                     <a className='m-4 'href="">Advertise</a>
                     <br/>
                     <a className='m-4 ' href="">About</a>
                     <br/>
                     <a className='m-4 ' href="https://zillow.zendesk.com/hc/en-us/">Help</a>
                     <br/>
                     <Link to={'/Log'}>
                     <a className='m-4 ' href="">Sign in</a> 
                     </Link>
                     
             </li>
         </ul>
         </div>

        </div>
       </div>
       
       

       <div>
        
        <img className='z-5 w-full h-[450px]' src={Img1} alt="" />
        <h1 className='text-center gt'>Home. Rent. Agent Finder. Tour</h1>
        
        
       </div>

       <div className='fixed z-50'>
       <a className='' href=" https://surveyheart.com/form/64c7ff14fbcfb165e7de2f6d
       "><button className='kuy sm:hidden font-semibold  ml-[80vw]'>Apply Here</button></a>
       </div>
      
    
       
       
     

      
       

       
       
        
        
        </>
      )
}
 
