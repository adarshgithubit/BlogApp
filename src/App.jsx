import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/layout/Navbar'
import Banner from './Components/Banner'
import Card from './Components/Card'
import Footer from './Components/layout/Footer'
import BlogList from './Components/BlogList'

function App() {
  const [blogs, setBlogs] = useState([]);

  // Function to handle adding a new blog
  const handleBlogSubmit = (newBlog) => {
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
  };


  return (
   <>

<Navbar onBlogSubmit={handleBlogSubmit} />  {/* Pass handleBlogSubmit to Navbar */}
      <Banner />
      <Card />
      <BlogList blogs={blogs} />  {/* Render the blogs in BlogList */}
      <Footer />
   
   </>
  )
}

export default App
