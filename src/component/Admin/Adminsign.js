import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Adminsignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();  // Move useNavigate inside the component

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/signin', {
        email,
        password,
      });
  
      toast("Signin Successful!");
      setError(null);
      console.log(response.data);
      setEmail('');
      setPassword('');

      // Redirect to the Dash page after successful sign-in
      navigate('/Dash');  
    } catch (err) {
      toast("Signin failed!");
      setError("User already exists or other error occurred."); 
      console.error("Signin failed:",  err.response ? err.response.data : err.message);
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
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                style={{ width: "100%" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group form-check" style={{ marginBottom: "10px" }}>
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <div className="user">
              <Link to="/">Sign up</Link>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: "10px" }}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Adminsignin;




