import React, { useState } from 'react';

const AddBlogForm = ({ onClose, onBlogSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    heading: '',
    subHeading: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the blog data using the onBlogSubmit function passed as a prop
    onBlogSubmit(formData);

    // Clear form after submission
    setFormData({
      title: '',
      date: '',
      description: '',
      heading: '',
      subHeading: '',
    });

    onClose();
  };
    
  return (
    <div className="blogform-container">
    <form className="blogform" onSubmit={handleSubmit}>
      <h2>Add New Blog</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="heading">Heading</label>
        <input
          type="text"
          id="heading"
          name="heading"
          value={formData.heading}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="subHeading">Sub Heading</label>
        <input
          type="text"
          id="subHeading"
          name="subHeading"
          value={formData.subHeading}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="submit-button">Submit</button>
      <button type="button" className="close-button" onClick={onClose}>Close</button>
    </form>
  </div>
  )
}

export default AddBlogForm