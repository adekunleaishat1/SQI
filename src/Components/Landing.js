import './Landing.css'
import React from 'react'
const Landing = () => {
  return (
    <div>
       <div className='contain'>
          <div className='img'>
            <img className='im' src="https://edu.sqi.ng/wp-content/uploads/2019/01/co.jpg"></img>
          </div>
          <div style={{width:"700px"}} className='d-flex justify-content-between align-items-center'>
            <div className='drop'>
              <b className='but'>About</b>
            </div>
            <div><b className=' but'>Programme</b></div>
            <div><b className=' but'>Admissions</b></div>
            <div> <b className=' but'>E-portal</b></div>
            <div> <b className=' but'>SQI Scholarship</b></div>
            <div><b className=' but'>News</b></div>
          </div>
       </div>
       <div className='downn'>
            <button className='butts'><b>National Innovation Diploma</b></button>
            <button className='butts'><b>Professional Diploma Programme</b> </button>
            <button className='butts'><b>Execution Professional Certificate Programme</b> </button> 
        </div>
        <div className='down'>
            <button className='butt'><b>Our story</b> </button>
            <button className='butt'><b>Our team</b></button>  
        </div>
        <div className='down'>
            <button className='butt'><b>Our story</b> </button>
            <button className='butt'><b>Our team</b></button>  
        </div>
    </div>
  )
}

export default Landing