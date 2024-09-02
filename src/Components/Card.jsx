import React from 'react'
import dummyImg from "../assets/dummy.jpeg"

const Card = () => {
  return (
   <>
   <div className='container center mt'>
    <div className='child-container-size spacebetween'>
      <div className='card-container'>
         <div className='card-content'>
            <p className='text-color margin '>World</p>
            <h3 className='margin'>Featured Post</h3>
            <p className='margin date-text'>Nov 12</p>

            <p className='margin'>This is wider card with supporting text
            This is wider card with supporting text
            </p>
         </div>
         <div className='image-content ml'>
            <img src={dummyImg}/>
         </div>
      </div>

      <div className='card-container'>
         <div className='card-content'>
            <p className='text-color margin '>Technology</p>
            <h3 className='margin'>Featured Post</h3>
            <p className='margin date-text'>Nov 12</p>

            <p className='margin'>This is wider card with supporting text
            This is wider card with supporting text
            </p>
         </div>
         <div className='image-content ml'>
            <img src={dummyImg}/>
         </div>
      </div>
    </div>

   </div>
   </>
  )
}

export default Card