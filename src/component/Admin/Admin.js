import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from "../../assets/images/background.jpg";

const Admin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [profileimg,setProfileimg]=useState(null); 
  const [imgprev,setImgprev]=useState(null);
  const [imageload,setImageload]=useState('false');
  const navigate = useNavigate();  // Initialize useNavigate
  const imageChange=(e)=>{
    const file=e.target.files[0];
    setImgprev(URL.createObjectURL(file));
    setProfileimg(file);
  }
  const uploadImage = async () => {
    const data = new FormData();
    data.append('file', profileimg);
    data.append('upload_preset', 'eq2in9eu'); // Ensure this is correct
    try {
      let response = await fetch('https://api.cloudinary.com/v1_1/dw89rwftg/image/upload', {
        method: 'POST',
        body: data,
      });
  
      if (!response.ok) {
        throw new Error('Image upload failed');
      }
  
      let urlData = await response.json();
      console.log(urlData);
      return urlData;
    } catch (error) {
      console.log('Image upload error:', error);
      return null;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlData = await uploadImage();
    if (!urlData || !urlData.url) {
      console.error('Image upload failed');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/api/Registration', {
        name,
        email,
        phone,
        password,
        image: urlData.url
      });

      toast("Registration Successful!");
      setError(null);
      console.log(response.data);

      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
      setImgprev(null);

      // Redirect to the desired page after successful registration
      navigate('/Dash');  // Replace with your desired route
    } catch (err) {
      toast("Registration failed!");
      setError("User already exists or other error occurred.");
      console.error("Registration failed:", err.response ? err.response.data : err.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh", position: "relative" }}>
        {/* Background Image with Opacity */}
        <img
          src={img}
          alt="Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1", // Behind the form
            opacity: 0.5 // Adjust opacity here
          }}
        />

        {/* Form Container */}
        <div
          className="container-main"
          style={{
            padding: "20px",
            borderRadius: "10px",
            height: "97vh",
            width: "100vh",
            marginTop: "5px",
            boxShadow: "0 0 5px green",
            zIndex: "1", // Form is on top of the background
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Optional: background with slight transparency
            position: "relative" // Ensure the form is positioned over the background
          }}
        >
          <div className="heading" style={{ textAlign: "center" }}>
            <h2>Sign up</h2>
          </div>

          {/* Form */}
          <form
            className="form"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
            onSubmit={handleSubmit}
          >
            <div className="form-group" style={{ width: "100%", maxWidth: "400px", marginBottom: "10px" }}>
              <label htmlFor="name">Admin name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Admin Name"
                style={{ width: "100%" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group" style={{ width: "100%", maxWidth: "400px", marginBottom: "10px" }}>
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

            <div className="form-group" style={{ width: "100%", maxWidth: "400px", marginBottom: "20px" }}>
              <label htmlFor="phone">Phone</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="Enter Mobile No."
                style={{ width: "100%" }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="form-group" style={{ width: "100%", maxWidth: "400px", marginBottom: "10px" }}>
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
            <div class="mb-5"style={{ width: "100%", maxWidth: "400px", marginBottom: "10px" }}>
              <label for="formFile" class="form-label">Upload your image</label>
              <input onChange={imageChange} class="form-control" type="file" id="formFile" />
            </div>
            <div className="user">
              <Link to="/Adminsign">Already Registered? Sign In</Link>
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: "2px" }}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
