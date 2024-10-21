import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [userType, setUserType] = useState('student'); // Default to student
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     console.log("h1");
      const response = await axios.post('http://localhost:8000/api/signinuser', {
        email,
        dob,
        userType,
      });

      
       const { rollno } = response.data.user;
      const { id } = response.data.user;
      console.log('Hey'+id)
      toast("Signin Successful!");
      setError(null);
      setEmail('');
      setDob('');
      console.log("h2");
      // Redirect to the appropriate profile based on the userType
      if (userType === 'teacher') {
        console.log("h3");
        console.log('Hey my Id is ' + id)
        navigate(`/Teacherprofile/${id}`) // Redirect to teacher profile
      } 
      
      if (userType === 'student') {
        console.log("h1");
       navigate(`/userprofile/${rollno}`); // Redirect to student profile
      }
    } 
    catch (err) {
      toast("Signin failed!"+err);
      setError("User not found or other error occurred.");
      console.error("Signin failed:", err.response ? err.response.data : err.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='d-flex align-items-center justify-content-center' style={{ minHeight: "20vh" }}>
        <div className="container-main" style={{ padding: "70px", borderRadius: "10px", height: "80vh", width: "80vh", marginTop: "10px", boxShadow: "0 0 15px green" }}>
          <div className="heading" style={{ textAlign: "center" }}>
            <h2>Sign In</h2>
          </div>
          <form className="form" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} onSubmit={handleSubmit}>
            <div className="form-group" style={{ width: "100%", maxWidth: "400px", marginBottom: "35px" }}>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                style={{ width: "100%" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group" style={{ width: "100%", maxWidth: "400px", marginBottom: "35px" }}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="DD/MM/YYYY"
                style={{ width: "100%" }}
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
              <div className="pass mt-2">
                <Link to="/find">forgot/upadte password</Link>
              </div>
            </div>

            <div className="row" style={{ width: "100%", maxWidth: "400px", marginBottom: "35px" }}>
              <div className="col form-group form-check">
                <input 
                  type="radio" 
                  className="form-check-input" 
                  name="userType" 
                  id="studentRadio" 
                  value="student"
                  checked={userType === 'student'}
                  onChange={(e) => setUserType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="studentRadio">Student</label>
              </div>
              <div className="col form-group form-check">
                <input 
                  type="radio" 
                  className="form-check-input" 
                  name="userType" 
                  id="teacherRadio" 
                  value="teacher"
                  checked={userType === 'teacher'}
                  onChange={(e) => setUserType(e.target.value)}
                />
                <label className="form-check-label" htmlFor="teacherRadio">Teacher</label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: "10px" }}>Submit</button>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default Signin;
