import React, { useState } from 'react';
import './EnrollForm.css'; // Make sure to create this CSS file or use Tailwind

const courseDetails = {
  DCA: "Diploma in Computer Applications: 1 year, ₹14,000, includes basics of IT, MS Office, Internet.",
  BCA: "Bachelor of Computer Applications: 3 years, ₹45,000/year, includes programming, DBMS, Web Dev.",
  PGDCA: "Post Graduate Diploma in Computer Applications: 1 year, ₹14,000, includes advanced programming, software dev."
};

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'DCA',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  return (
    <div className="enroll-container">
      <h2 className="form-title">Course Enrollment Form</h2>
      {submitted ? (
        <div className="thank-you-message">
          <h3>🎉 Thank You for Enrolling!</h3>
          <p>We’ll contact you soon with further details.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="enroll-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Select Course</label>
            <select name="course" value={formData.course} onChange={handleChange}>
              <option value="DCA">DCA</option>
              <option value="BCA">BCA</option>
              <option value="PGDCA">PGDCA</option>
            </select>
          </div>

          <div className="course-description">
            <strong>Course Info:</strong>
            <p>{courseDetails[formData.course]}</p>
          </div>

          <button type="submit" className="submit-btn">Enroll Now</button>
        </form>
      )}
    </div>
  );
};

export default EnrollForm;
