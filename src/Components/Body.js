import './Body.css'
import React from 'react'

const Body = () => {
  return (
    <div>
      <div className='con'>
        <div className='textcon'>
          <div className='inertext'>
            <h1 className='study'><b>Study to become a global talent</b></h1>
            <h2 className='learn'><b>Learn new tech skills using world-class curriculum and top industry experts.</b></h2>
            <button className='now'><b>Start Now</b></button>
          </div> 
        </div>
        <div className='imgcon'>
           <img className='imgv' src='https://i0.wp.com/edu.sqi.ng/wp-content/uploads/2023/03/sqimodel.png?w=578&ssl=1'></img> 
        </div>
      </div>  
    </div>
  )
}

export default Body