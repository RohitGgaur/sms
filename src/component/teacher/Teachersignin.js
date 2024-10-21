import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Teachersignin = () => {
 const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/teachersignin', {
        id,
        password,
      });
  
      toast("Signin Successful!");
      setError(null);
      console.log(response.data);
      setId('');
      setPassword('');
    } catch (err) {
      toast("Signin failed!");
      setError("User already exists or other error occurred."); 
      console.error("Signin failed:",  err.response.data);
    }
  };
  return (
   <>
    <ToastContainer />
      <div className="container">
  <h2 className="title" >Login</h2>
  <form  className="form-container"  onSubmit={handleSubmit} >
    <div className="input-box email">
      <input type="text" id="text-input" required="" placeholder="Faculty Id" value={id}
              onChange={(e) => setId(e.target.value)} />
      <img
        src="https://cdn-icons-png.flaticon.com/512/6325/6325109.png"
        alt="user-image"
        width="25px"
      />
    </div>
    <div className="input-box password">
      <input
        type="password"
        id="password-input"
        required=""
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/2489/2489659.png"
        alt="lock-image"
        width="22px"
      />
    </div>
    <div className="remember-forgot">
      <div className="remember">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>
      <div className="forgot">
        <a href="#">forgot Password ?</a>
      </div>
    </div>
    <div className="button">
      <button type="submit">Login</button>
    </div>
    <div className="register">
      <p>
        Don't you have an account ?<a href="#">Register</a>
      </p>
    </div>
  </form>
</div>

   </>
  )
}

export default Teachersignin