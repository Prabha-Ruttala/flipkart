import React from 'react'

import logo1 from '../images/p1.jpeg';
import logo2 from '../images/p2.jpeg';
import logo3 from '../images/p3.jpeg';
import logo4 from '../images/p4.jpeg';
import logo5 from '../images/p5.jpeg';
import logo6 from '../images/p6.jpeg';
import logo7 from '../images/p7.jpeg';
import logo8 from '../images/p8.jpeg';
import logo9 from '../images/p9.jpeg';
import logo10 from '../images/p10.jpeg';
 function Secondrow(){
    return(
    <>
       <div className='row'>
        <div className='fliprowt'>
            <div className='col-md-1'>
                <div className='text-center' >
                    <img src={logo1} width='50' height='50'/>
                    <p>Top Offers</p>

                </div>
            </div>
            <div className='col-md-1'>
                <div className='text-center' >
                    <img src={logo2} width='50' height='50'/>
                    <p>Mobiles & Tablets</p>

                </div>
            </div>
            <div className='col-md-1'>
                <div className='text-center' >
                    <img src={logo3} width='50' height='50'/>
                    <p>Electronics</p>

                </div>
            </div>
            <div className='col-md-1'>
                <div className='text-center' >
                    <img src={logo4} width='50' height='50'/>
                    <p>Tvs & Appliances</p>

                </div>
            </div>
            <div className='col-md-1'>
                <div className='text-center' >
                    <img src={logo5} width='50' height='50'/>
                    <p>Fashion</p>

                </div>
            </div>
            <div className='col-md-1'>
                <div className='text-center' >
                    <img src={logo6} width='50' height='50'/>
                    <p>Beauty</p>

                </div>
            </div>
            <div className='col-md-1'>
                <div className='text-center' >
                    <img src={logo7} width='50' height='50'/>
                    <p>Home & kitchen</p>

                </div>
            </div>
            <div className='col-md-1'>
                <div className='text-center' >
                    <img src={logo8} width='50' height='50'/>
                    <p>Furniture</p>

                </div>
            </div>
            <div className='col-md-1'>
                <div className='text-center' >
                    <img src={logo9} width='50' height='50'/>
                    <p>Flights</p>

                </div>
            </div>
            <div className='col-md-1'>
                <div className='text-center' >
                    <img src={logo10} width='50' height='50'/>
                    <p>Grocery</p>

                </div>
            </div>
          </div> 
       </div>
              
                
       
    </>
    );
}
export default Secondrow;