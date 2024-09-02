import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-column">
        <h3>About Us</h3>
        <p>We provide high-quality content on various topics to keep you informed and engaged.</p>
      </div>
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
     
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer