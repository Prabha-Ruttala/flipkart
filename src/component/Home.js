import React from 'react'
import logo from './imag1.png'
export default function Home()
{
    return(
        <div className='container-fluid  name'>
            <div className='row'>
                 <div className='col-md-2 '>
                     <img src={logo} width='50' height='50'/>
                     <span>YouTube</span>
                    <div className='col-md-8 name1'>
                       <i class="fa-brands fa-chromecast"></i>
                       <i class="fa-regular fa-bell"></i>
                       <i class="fa-solid fa-magnifying-glass"></i>
                       <i class="fa-regular fa-user"></i>
                    </div>
                </div>
                </div>
            </div>
      
    )
}
