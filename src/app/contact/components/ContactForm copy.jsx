'use client';

import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isError, setIsError] = useState(null);
  const handleInputChange = (e) => {    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (isSuccess === true) {
      setIsSuccess(false);
    }
    if (isError === true) {
      setIsError(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
      setSubmitting(true);

      // send email
      const response = await fetch('/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const { success, error } = await response.json();

      if (success) {
        setIsSuccess(true);
        //alert('Your inquiry has been submitted!');
      } else if (error) {
        console.error(error);
        setIsError(true);
        //alert('Error while submitting your inquiry: ', error);
      }
      setSubmitting(false);
      e.target.reset();
  }

  return (
    <section className='contact-form-section'>
      <form onSubmit={handleSubmit}>
        {isSuccess === true && <div>Your inquiry has been submitted!</div>}
        {isError === true && <div>Error while submitting your inquiry</div>}
        <div className="form-control">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id='firstName' name='firstName'  placeholder='Enter first name...' onChange={handleInputChange} />
        </div>
        <div className="form-control">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id='lastName' name='lastName'   placeholder='Enter last name...' onChange={handleInputChange} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" id='email' name='email'   placeholder='Enter email...' onChange={handleInputChange} />
        </div>
        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea id='message'   name="message" cols="10" rows="10" placeholder='Enter message...' onChange={handleInputChange}></textarea>
        </div>
        <button className='btn' type='submit'>Send Message</button>
      </form>
    </section>
  )
}

export default ContactForm