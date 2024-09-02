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

    console.log ("gsggsgs",blogs)
  return (
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
  )
}

export default BlogList