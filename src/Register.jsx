import React from "react";
import {Link, Outlet} from 'react-router-dom'


export default function Register() {
  
  return (
    <>
    
    
    <div className="min-h-screen min-w-full bng flex items-center justify-center sm:flex hidden">

  <div className="grid items-center justify-center h-[450px] w-[250px] bnn">

    <div>
    
    <div className="h-7 w-[200px] bg-white rounded-sm mt-28">
    <Link to={'/Lan'}>
    <span class="material-symbols-outlined ml-4 relative ml">
house
</span>
    <h1 className="mt-[-33px] ml-10 text-[20px] ml ">Back To Home</h1>  
    </Link>
    </div>
    
    </div>
    <div>
    <div className="h-7 w-[200px] mll mt-[-140px] rounded-sm">
    
    <Link to={'/log'}>
    <h1 className=" font-semibold text-white text-[20px] text-[15px]  text-center ">Login</h1>  
    </Link>
    </div>
    </div>
  </div>


  <div className="h-[450px] w-[350px] bg-white bnn1 flex justify-center">
    <form className="yu " action="">
      <h1 className="log text-center font-bold">Sign Up for Free!</h1>
      
      <input className="h-12 w-[280px] mt-5" type="text" placeholder="First Name"/>
      <hr/>
      <input className="h-12 w-[280px] mt-5" type="text" placeholder="Last Name"/>
      <hr/>
      <input className="h-12 w-[280px] mt-5" type="email" placeholder="Email address"/>
      <hr/>
      <input className="h-12 w-[280px] mt-5" type="Number" placeholder="Mobile Number"/>
      <hr/>
    
      <hr/>
      <input className="h-12 w-[280px] mt-5" type="password" placeholder="Password"/>
      <hr/>
      <input className="h-12 w-[280px] mt-5" type="password" placeholder="Confrim Password"/>
      <hr/>
    
      <br/>
      <input className="mt-4" type="checkbox" />
      <h1 className="mt-[-20px] ml-6 text-slate-400 text-[10px]">i agree to the <bold className='sar hover:underline hover:font-bold'>privacy_policy</bold>and <bold className='sar  hover:underline hover:font-bold'>terms of service</bold></h1>

      <Link to={'/Log'}>
      <button className="bg-green-600 font-semibold h-[40px] w-[80px] mt-6 mb-2 ml-[80px] rounded-lg text-white ">Sign up
      </button>
      </Link>

      <Link to={'/Log'}>
      <h1 className="font-semibold text-center sar mb-3 hover:underline hover:font-normal">Already have an Accoount?</h1>
      </Link>
      
      
    </form>
  </div>
</div>


{/* smaller side */}

<div className="min-h-screen min-w-full bng1 flex items-center justify-center sm:hidden ">
<div className="grid items-center justify-center h-[150px] w-[500px] bnn">

    <div>
    
    <div className="h-7 w-[200px] bg-white rounded-sm mt-20">
    <Link to={'/Lan'}>
    <span class="material-symbols-outlined ml-4 relative ml">
house
</span>
    <h1 className="mt-[-33px] ml-10 text-[20px] ml ">Back To Home</h1>  
    </Link>
    </div>
    
    </div>
    <div>
    <div className="h-7 w-[200px] mll mt-[-100px] rounded-sm">
    
    <Link to={'/log'}>
    <h1 className=" font-semibold text-white text-[20px] text-[15px]  text-center ">Login</h1>  
    </Link>
    </div>
    </div>
  </div>


  <div className="h-[400px] w-[500px] bg-white bnn1 flex justify-center">
    <form className="yu " action="">
      <h1 className="log text-center font-bold">Sign Up for Free!</h1>
      
      <input className="h-12 w-[280px] mt-5" type="text" placeholder="First Name"/>
      <hr/>
      <input className="h-12 w-[280px] mt-5" type="text" placeholder="Last Name"/>
      <hr/>
      <input className="h-12 w-[280px] mt-5" type="email" placeholder="Email address"/>
      <hr/>
      <input className="h-12 w-[280px] mt-5" type="Number" placeholder="Mobile Number"/>
      <hr/>
    
      <hr/>
      <input className="h-12 w-[280px] mt-5" type="password" placeholder="Password"/>
      <hr/>
      <input className="h-12 w-[280px] mt-5" type="password" placeholder="Confrim Password"/>
      <hr/>
    
      <br/>
      <input className="mt-4" type="checkbox" />
      <h1 className="mt-[-20px] ml-6 text-slate-400 text-[10px]">i agree to the <bold className='sar hover:underline hover:font-bold'>privacy_policy</bold>and <bold className='sar  hover:underline hover:font-bold'>terms of service</bold></h1>

      <Link to={'/Log'}>
      <button className="bg-green-600 font-semibold h-[40px] w-[80px] mt-6 mb-2 ml-[150px] rounded-lg text-white ">Sign up
      </button>
      </Link>

      <Link to={'/Log'}>
      <h1 className="font-semibold text-center sar mb-3 hover:underline hover:font-normal">Already have an Accoount?</h1>
      </Link>
      
      
    </form>
  </div>
</div>
    </>
  )
} 