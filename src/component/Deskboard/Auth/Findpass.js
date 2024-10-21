import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Findpass = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [userType, setUserType] = useState('student'); // Default to student

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the email or phone number and user type to the backend to initiate the password reset process
      const response = await axios.post('http://localhost:8000/api/forgot-password', {
        emailOrPhone,
        userType,
      });

      toast("Password reset link sent!");
      setEmailOrPhone('');
    } catch (err) {
      toast("Failed to send reset link!");
      console.error("Error:", err.response ? err.response.data : err.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='box d-flex align-items-center justify-content-center' style={{height:"90vh" }}>
        <div className="container-main" style={{ padding: "50px", borderRadius: "10px", boxShadow: "0 0 15px green",height:"60vh",width:"80vh" }}>
          <h2>Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="emailOrPhone">Email or Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="emailOrPhone"
                placeholder="Enter your registered email or phone number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="userType">User Type</label>
              <select
                className="form-control"
                id="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: "20px" }}>Send Reset Link</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Findpass;
