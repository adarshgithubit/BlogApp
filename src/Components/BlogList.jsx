import React, { useState, useEffect } from 'react';

const BlogList = ({ blogs }) => {
    const [displayedBlogs, setDisplayedBlogs] = useState([]);

    useEffect(() => {
        setDisplayedBlogs([
          {
            title: 'Sampel Blog',
            date: '2024-09-01',
            description: 'If ChatGPT cuts off the response in the middle of its answer, type “continue” in the text box. You can also write “keep going” or “go on”. This will make ChatGPT pick up exactly where it left off and finish the response to your original prompt..',
            heading: 'Dummy Heading',
            subHeading: 'Dummy Sub Heading'
          }
        ]);
      }, []);

      useEffect(() => {
        if (blogs.length > 0) {
          setDisplayedBlogs((prevBlogs) => [...prevBlogs, ...blogs]);
        }
      }, [blogs]);

 
  return (
    <div className='container center'>
       <div className='child-container-size flex'>

      <div className='blogs-list'>




{displayedBlogs.length === 0 ? (
  <p>No blogs available. Add a new blog to see it here.</p>
) : (
  displayedBlogs.map((blog, index) => (
    <div key={index} className='blog-item'>
      <h3>{blog.title}</h3>
      <p>Date: {blog.date}</p>
      <h4>{blog.heading}</h4>
      <p><strong>Sub Heading:</strong> {blog.subHeading}</p>
      <p><strong>Description:</strong> {blog.description}</p>
    </div>
  ))
)}
</div>

<div class="container-about">
  
    <section class="about-section">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
    </section>


    <section class="archives-section">
        <h2>Archives</h2>
        <ul>
            <li><a href="#">January 2024</a></li>
            <li><a href="#">December 2023</a></li>
            <li><a href="#">November 2023</a></li>
          
        </ul>
    </section>


    <section class="elsewhere-section">
        <h2>Elsewhere</h2>
        <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
          
        </ul>
    </section>
</div>


      </div>
     
   
  
  </div>
  )
}

export default BlogList