import React, { useState } from 'react';
import academyLogo from '../assets/univarsal.png';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThankYou(true); // show the message
    setFormData({ name: '', email: '', message: '' }); // clear form

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-4 sm:px-6">
      {/* Header */}
      <div className="bg-white shadow p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <img src={academyLogo} alt="Universal Computer Academy" className="h-20 w-auto mx-auto sm:mx-0" />
        <div className="text-center sm:text-right">
          <h1 className="text-2xl font-bold text-blue-800">Universal Computer Academy</h1>
          <p className="text-sm text-gray-600">मान्यता प्राप्त: माखनलाल चतुर्वेदी राष्ट्रीय पत्रकारिता विश्वविद्यालय</p>
        </div>
      </div>

      {/* About Info */}
      <div className="max-w-4xl mx-auto p-6 mt-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">About Us</h2>
        <p className="mb-4">
          Universal Computer Academy, established in 1996, is affiliated with Makhanlal Chaturvedi National University of Journalism and Communication. 
          We provide quality computer education and training in various fields including software development, IT fundamentals, and more.
        </p>
        <p className="mb-4">
          Our mission is to empower students with the right skills and knowledge to succeed in the digital world.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto p-6 mt-6 bg-white rounded-lg shadow-md mb-10">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Contact Us</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-2">
            <p><strong>📍 Address:</strong> Barapather Seoni, MP, UCA Academy</p>
            <p><strong>📞 Phone:</strong> +91-9876543210</p>
            <p><strong>📧 Email:</strong> info@universalacademy.com</p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {/* Thank You Message */}
            {showThankYou && (
              <p className="text-green-600 text-sm mt-2 text-center">
                ✅ Thank you! Your message has been received.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
