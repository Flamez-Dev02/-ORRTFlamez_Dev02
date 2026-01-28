import React, { useState } from 'react';
import './inbox.css'; // Import the CSS file

const InboxContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Email validation
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email.trim());
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'Please enter your name.';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Please enter your email.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (formData.message.trim() === '') {
      newErrors.message = 'Please enter your message.';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Here you would typically send data to a backend
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setSubmitted(true);
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="inbox-wrapper">
      <div className="container" role="main" aria-label="Contact information and contact form">
        
        {/* Contact Info Section */}
        <section className="contact-info" aria-labelledby="contact-info-title">
          <h2 id="contact-info-title">Get in Touch</h2>
          <p>
            <strong>Phone:</strong>
            <a href="tel:+2348060766384">+234 8060 766 3384</a>
          </p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:dannydeveloper0@gmail.com">dannydeveloper0@gmail.com</a>
          </p>
          <p>
            <strong>Location:</strong> Lead City University, Ibadan Oyo State
          </p>
          <p>
            <strong>Instagram:</strong> @daniel_flamez02
          </p>
          <p>
            <strong>WhatsApp:</strong>
            <a href="https://wa.me/2348060766384">+234 806 076 3384</a>
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form" aria-labelledby="contact-form-title">
          <h2 id="contact-form-title">Send a Message</h2>
          
          {submitted && (
            <div className="success-message" role="alert">
              ✓ Message sent successfully!
            </div>
          )}

          <form id="contactForm" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                aria-required="true"
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-required="true"
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                aria-required="true"
                className={errors.message ? 'input-error' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button type="submit" aria-label="Send Message" className="submit-btn">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default InboxContact;
