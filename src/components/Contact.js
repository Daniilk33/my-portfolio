/* 
  File Name: Contact.js
  Student Name: Daniil Konishchev
  Student ID: 300735304
  Date: September 29, 2024
*/


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate(); // Used to redirect to Home after form submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle the form data here (e.g., send to backend)

    // Redirect to home page after submission
    navigate('/');
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      {/* Contact Information Panel */}
      <div className="contact-info-panel">
        <p><strong>Email:</strong> daniil.konishchev@gmail.com</p>
        <p><strong>Phone:</strong> 647-309-5136</p>
        <p><strong>Address:</strong> 900 Steeles Avenue West,Toronto</p>
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
