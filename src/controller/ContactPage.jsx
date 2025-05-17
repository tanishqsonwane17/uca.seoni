import React from 'react';
import academyLogo from '../assets/univarsal.png'; // adjust the path based on your folder structure

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <div className="bg-white shadow p-6 flex items-center justify-between">
        <img src={academyLogo} alt="Universal Computer Academy" className="h-24 w-auto" />
        <div className="text-right">
          <h1 className="text-2xl font-bold text-blue-800">Universal Computer Academy</h1>
          <p className="text-sm text-gray-600">मान्यता प्राप्त: माखनलाल चतुर्वेदी राष्ट्रीय पत्रकारिता विश्वविद्यालय</p>
        </div>
      </div>

      {/* About Info */}
      <div className="max-w-4xl mx-auto p-6 mt-4 bg-white rounded-lg shadow-md">
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
      <div className="max-w-4xl mx-auto p-6 mt-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p><strong>📍 Address:</strong> Block III, Near Main Square, Your City</p>
            <p><strong>📞 Phone:</strong> +91-9876543210</p>
            <p><strong>📧 Email:</strong> info@universalacademy.com</p>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-2 border rounded"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
