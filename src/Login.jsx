import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function Login() {
  return (

        
    <>
    <div className="min-h-screen min-w-full bng flex items-center justify-center sm:flex hidden">

  <div className="grid items-center justify-center h-[450px] w-[250px] bnn">

    <div>
    <Link to='/Lan'>
    <div className="h-7 w-[200px] bg-white rounded-sm mt-28">
    <span class="material-symbols-outlined ml-4 relative ml">
house
</span>
    <h1 className="mt-[-33px] ml-10 text-[20px] ml ">Back To Home</h1>  
    </div>
    </Link>
    </div>
    <div>
    <Link to='/Reg'>
    <div className="h-7 w-[200px] mll mt-[-140px] rounded-sm">
    
    <h1 className=" font-semibold text-white text-[20px] text-[15px]  text-center ">Register</h1>  
    </div>
    </Link>
    </div>
  </div>


  <div className="h-[450px] w-[350px] bg-white bnn1 flex justify-center">
    <form className="" action="">
      <h1 className="log text-center font-bold">Login to your account</h1>
      <h1 className="text-center mt-2">Don't have an account? <Link to='/Reg'><bold className='bol underline'>Sign Up for Free!</bold></Link></h1>
      <input className="h-12 w-[280px] mt-5" type="email" placeholder="Email address"/>
      <hr/>
      
      <input className="h-12 w-[280px] "  type="password" placeholder="Password" />
      <hr/>
      <br/>
      <input className="mt-4" type="checkbox" />
      <h1 className="mt-[-25px] ml-6">Remember me</h1>
      <Link to='/Lan'>
      <button className="w-[280px] h-12 btt font-semibold">Login Now</button>
      </Link>
      
    </form>
  </div>
</div>


{/* smaller screen */}

<div className='flex sm:hidden min-h-screen min-w-full bng1 flex items-center justify-center gap-4'>
<div className="grid items-center justify-center mt-20 h-[120px] w-[500px] bnn">

<div>
<Link to='/Lan'>
<div className="h-7 w-[200px] bg-white rounded-sm mt-14">
<span class="material-symbols-outlined ml-4 relative ml">
house
</span>
<h1 className="mt-[-32px] ml-10 text-[20px] ml ">Back To Home</h1>  
</div>
</Link>
</div>
<div>
<Link to='/Reg'>
<div className="h-7 w-[200px] mll mt-[-80px] rounded-sm">

<h1 className=" font-semibold text-white text-[20px] text-[15px]  text-center ">Register</h1>  
</div>
</Link>
</div>
</div>


<div className="h-[400px] mb-20 w-[500px] bg-white bnn1 mt-[-18px] flex justify-center">
<form className="" action="">
  <h1 className="log text-center font-bold">Login to your account</h1>
  <h1 className="text-center mt-2">Don't have an account? <Link to='/Reg'><bold className='bol underline'>Sign Up for Free!</bold></Link></h1>
  <input className="h-12 w-[280px] mt-5" type="email" placeholder="Email address"/>
  <hr/>
  
  <input className="h-12 w-[280px] "  type="password" placeholder="Password" />
  <hr/>
  <br/>
  <input className="mt-4" type="checkbox" />
  <h1 className="mt-[-25px] ml-6">Remember me</h1>
  <Link to='/Lan'>
  <button className="w-[280px] h-12 btt font-semibold">Login Now</button>
  </Link>
  
</form>
</div>

</div>



    
    </>
  )
} 

