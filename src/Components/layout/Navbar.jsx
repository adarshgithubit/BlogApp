import React, { useState,useEffect } from 'react';

import { IoIosSearch } from "react-icons/io";
import SignUpForm from '../SignUpForm';
import SignInForm from '../SignIn';
import AddBlogForm from '../AddBlogForm';


const Navbar = ({onBlogSubmit}) => {
  const [showSignup, setShowSignup] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showAddBlog, setShowAddBlog] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setIsRegistered(true);
    }
  }, []);

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowSignin(false);
    setShowAddBlog(false);
  };

  const handleSigninClick = () => {
    setShowSignin(true);
    setShowSignup(false);
    setShowAddBlog(false);
  };

  const handleSignupComplete = () => {
    setIsRegistered(true);
    setShowSignup(false);
  };

  const handleSigninComplete = () => {
    setIsSignedIn(true);
    setShowSignin(false);
  };

  const handleAddBlogClick = () => {
    setShowAddBlog(true);
  };

  const handleAddBlogClose = () => {
    setShowAddBlog(false);
  };


  return (
   <>
<div className='container center coloum'>

<div className='nav-content spacebetween-nav child-container-size'>

    <p>Subscribe</p>

<h2>Large</h2>

<div className='icon-box center'>
<IoIosSearch   className='search-icon'/>

 {!isRegistered ? (
              <button className='button sign-up-button' onClick={handleSignupClick}>
                <span>Sign Up</span>
              </button>
            ) : !isSignedIn ? (
              <button className='button sign-in-button' onClick={handleSigninClick}>
                <span>Sign In</span>
              </button>
            ) : (
              <button className='button add-blog-button' onClick={handleAddBlogClick}>
                <span>Add Blog</span>
              </button>
            )}

  
</div>
</div>

<div className='child-container-size list-container'>
<ul className='list-box spacebetween-nav'>
  <li>World</li>
  <li>U.S</li>
  <li>Technology</li>
  <li>Design</li>
  <li>Business</li>
  <li>Politics</li>
  <li>Openion</li>

</ul>

</div> 

</div>







{showSignup && (
        <SignUpForm
          onClose={() => setShowSignup(false)}
          onSignupComplete={handleSignupComplete}
        />
      )}
      {showSignin && (
        <SignInForm
          onClose={() => setShowSignin(false)}
          onSigninComplete={handleSigninComplete}
        />
      )}
      {showAddBlog && (
        <AddBlogForm
          onClose={handleAddBlogClose}
          onBlogSubmit={onBlogSubmit} // Pass the onBlogSubmit function here
        />
      )}


   
   </>

  )
}

export default Navbar














