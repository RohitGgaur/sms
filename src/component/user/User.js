import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const User = () => {
  const [studentid, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [branch, setBranch] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/UserRegistration', {
        studentid,
        name,
        email,
        branch,
        password,
      });

      toast("Registration Successful!");
      setError(null);
      setSuccess("Registration Successful!");
      console.log(response.data);
      setStudentId('');
      setName('');
      setEmail('');
      setBranch('');
      setPassword('');
    } catch (err) {
      toast("Registration failed!");
      setError("User already exists or other error occurred.");
      setSuccess(null);
      console.error("Registration failed:", err.response ? err.response.data : err.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <form className="form-container" style={{ marginTop: "50px" }} onSubmit={handleSubmit}>
          <div className="form-group" style={{ display: "inline" }}>
            <label htmlFor="number">StudentId</label>
            <input
              type="text"
              className="form-control"
              id="name1"
              placeholder="Enter StudentId"
              style={{ width: "300px", padding: "10px", fontSize: "14px" }}
              value={studentid}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>
          <div className="form-group" style={{ display: "inline" }}>
            <label htmlFor="Name">Student Name</label>
            <input
              type="text"
              className="form-control"
              id="name1"
              placeholder="Enter Student name"
              style={{ width: "300px", padding: "10px", fontSize: "14px" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter email"
              style={{ width: "300px", padding: "10px", fontSize: "14px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="branch">Branch</label>
            <input
              type="text"
              className="form-control"
              id="branch"
              placeholder="Branch"
              style={{ maxWidth: "300px", padding: "10px", fontSize: "14px" }}
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              style={{ maxWidth: "300px", padding: "10px", fontSize: "14px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group form-check" style={{ marginTop: "10px", marginBottom: "10px" }}>
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>

          {success && <div style={{ color: "green", marginTop: "10px" }}>{success}</div>}
          {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
        </form>
      </div>
    </>
  );
};

export default User;
