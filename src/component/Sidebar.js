import React from 'react'
import logo  from './imag1.png'
import {Link} from 'react-router-dom'

function Sidebar(){
  return (
    <>
    <div className='col-md-2 ' >
            <div className='text-center bg-info'>
                <img src={logo} width='100' height='90'/>
                <span>YouTube</span>
            </div>
            <br></br>
            <div className='Sidebar'> 
                <ul>
                   <Link to="Home"><li> <i class='fa-solid fa-house'></i>  Home</li></Link>
                   <br></br>
                    <Link to="Shorts"><li><i class='fa-solid fa-bolt'></i> Shorts</li></Link>
                    <br></br>
                    <li><i class='fa-solid fa-money-bill-wheat'></i>     Subscriptions</li>
                    <br></br>
                </ul>
                <hr></hr>
                <ul>
                <li> <i class='fa-solid fa-photo-film'></i>   Library</li>
                <br></br>
                <li> <i class='fa-solid fa-clock-rotate-left'></i>   History</li>
                <br></br>
                <li> <i class='fa-solid fa-bookmark'></i>   Your videos</li>
                <br></br>
                <li> <i class='fa-solid fa-clock'></i>   Watch later</li>
                <br></br>
                <li> <i class='fa-solid fa-thumbs-up'></i>   Liked videos</li> 
                <br></br>
                </ul>
                <hr></hr>
           </div>  
        </div>
    </>
  )
}


export default Sidebar;