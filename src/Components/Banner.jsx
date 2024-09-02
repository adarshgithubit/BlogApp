import React, { useState, useEffect } from 'react';

const Banner = () => {
    const images = [
        'image1.jpg',  // Replace with your image paths
        'image2.jpg',
        'image3.jpg',
      ];

      const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //   useEffect(() => {
    //     const interval = setInterval(() => {
    //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 3000); // Change image every 3 seconds
    
    //     return () => clearInterval(interval);
    //   }, [images.length]);



  return (
 <>
  <div className="container center">
      <div
        className="child-container-size child-container"
       
      >
        <div className="content">
          <h2>Title of loger featured Blog post</h2>
          <p>
          The rise of remote work has transformed the modern workplace,<br/> offering flexibility and reducing commuting time. <br/>
          However, it also presents challenges, such as maintaining work-life balance <br/>
          </p>
          
        </div>
      </div>
    </div>
 
 </>
  )
}

export default Banner