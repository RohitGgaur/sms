import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./teacher.css";

const Teacher = () => {  // Component name starts with an uppercase letter
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [fathername, setFathername] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [dob, setDob] = useState('');
  const [pincode, setPincode] = useState('');
  const [collage, setCollage] = useState('');
  const [grad, setGrad] = useState('');
  const [course, setCourse] = useState('');
  const [higheredu, setHigheredu] = useState('');
  const [researchpaper, setResearchpaper] = useState('');
  const [position, setPosition] = useState('');
  const [experince, setExperince] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [profileimg,setProfileimg]=useState(null);
  const [imgprev,setImgprev]=useState(null);
  const [imageload,setImageload]=useState('false');
  const imageChange=(e)=>{
    const file=e.target.files[0];
    setImgprev(URL.createObjectURL(file));
    setProfileimg(file);
  }
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const uploadImage = async () => {
    const data = new FormData();
    data.append('file', profileimg);
    data.append('upload_preset', 'cyqenmkg'); // Ensure this is correct
  
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
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
   
    try {
      const response = await axios.post('http://localhost:8000/api/teacherdetail', {
        id,name, email, phone,dob,city,course,gender,grad,pincode,collage, fathername,department,address,researchpaper,higheredu,position,experince,image: urlData.url
      });

      toast("Registration Successful!");
      setError(null);
      setSuccess("Registration Successful!"); // Added success message
      console.log(response.data);
  setId('');
  setName('');
  setEmail('');
  setPhone('');
  setCollage('');
  setDob('');
  setFathername('');
  setGender('');
  setDepartment('');
  setAddress('');
  setCourse('');
  setResearchpaper('');
  setCity('');
  setPincode('');
  setCollage('');
  setExperince('');
  setHigheredu('');
  setPosition('');
  setGrad('');
      
    } catch (err) {
      toast("Registration failed!");
      setError("User already exists or other error occurred.");
      console.error("Registration failed:", err.response ? err.response.data : err.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="student-form"onSubmit={handleSubmit} >
        <h2 className="main-heading">Falcuty Information</h2>

        <div className="section">
          <h3 className="section-heading">Personal Information</h3>
          <div className="row">
            <div className="col">
              <label htmlFor="firstName">Faculty Id</label>
              <input type="text" id="teacherid" className="form-control" placeholder='Enter Faculty Id' style={{ width: "300px" }} value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="lastName">Faculty Name</label>
              <input type="text" id="Name" className="form-control" placeholder='Enter Faculty Name' style={{ width: "300px" }} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="fathername">Father Name</label>
              <input type="text" id="Name" className="form-control" placeholder='Enter father name' style={{ width: "300px" }} value={fathername} onChange={(e) => setFathername(e.target.value)} />
            </div>
          </div>
          {/* 2 */}
          <div className="row mt-4">
          <div className="col">
  <div style={{ display: "flex", flexDirection: "column", marginTop: "17px" }}>
    <label htmlFor="date">Enter DOB (YYYY-MM-DD):</label>
    <input
      type="date"
      name="date"
      id="date"
      pattern="\d{4}-\d{2}-\d{2}"
      style={{
        width: "300px",
        height: "45px",
        border: "1px solid aqua",
        borderRadius: "4px",
        marginTop: "10px" // Adjust this margin as needed
      }}
      value={dob}
      onChange={(e) => setDob(e.target.value)}
    />
  </div>
</div>

            <div className="col">
              <label htmlFor="lastName" style={{ width: "300px", padding: "15px" }}>Select Gender</label>
              <div>
                <label style={{ marginRight: "15px" }}>
                  <input type="radio" value="Male" name="gender" checked={gender === 'Male'}
                    onChange={(e) => setGender(e.target.value)} /> Male
                </label>
                <label style={{ marginRight: "15px" }}>
                  <input type="radio" value="Female" name="gender" checked={gender === 'Female'}
                    onChange={(e) => setGender(e.target.value)} /> Female
                </label>
                <label>
                  <input type="radio" value="Other" name="gender" checked={gender === 'Other'}
                    onChange={(e) => setGender(e.target.value)} /> Other
                </label>
              </div>
            </div>

          </div>
        </div>

        <div className="section">
          <h3 className="section-heading">Contact Information</h3>
          <div className="row">
            <div className="col">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-control" placeholder='Enter Email Id' style={{ width: "300px" }} value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" className="form-control" placeholder='Enter phone No.' style={{ width: "300px" }} value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
        </div>

        <div className="section">
          <h3 className="section-heading">Address Information</h3>
          <div className="row">
            <div className="col">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" className="form-control" placeholder='Enter Permanent Address' style={{ width: "300px" }} value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="city">City</label>
              <input type="text" id="city" className="form-control" placeholder='Enter City' style={{ width: "300px" }} value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="pincode">pin Code</label>
              <input type="text" id="phone" className="form-control" placeholder='Pin Code' style={{ width: "300px" }} value={pincode} onChange={(e) => setPincode(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="section">
          <h3 className="section-heading">Education Information</h3>
          <div className="row">
            <div className="col">
              <label htmlFor="address">Collage Name</label>
              <input type="text" id="address" className="form-control" placeholder='Enter Collage Name' style={{ width: "300px" }} value={collage} onChange={(e) => setCollage(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="rp"> Research Paper</label>
              <input type="text" id="rp" className="form-control" placeholder='Enter No. of Research Paper' style={{ width: "300px" }} value={researchpaper} onChange={(e) => setResearchpaper(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="ldcy">Last Degree Complete Year</label>
              <input type="text" id="ldcy" className="form-control" placeholder='Enter Year' style={{ width: "300px" }} value={grad} onChange={(e) => setGrad(e.target.value)} />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <label htmlFor="high">Higher Education</label>
              <input type="text" id="high" className="form-control" placeholder='Enter Higher Education' style={{ width: "300px" }} value={higheredu} onChange={(e) => setHigheredu(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="inter">Current Position</label>
              <input type="text" id="inter" className="form-control" placeholder='Enter Position in collage' style={{ width: "300px" }} value={position} onChange={(e) => setPosition(e.target.value)} />
            </div>
            <div className="col">
              <label for="exampleFormControlSelect1">Select Course</label>
              <select className="form-control" id="exampleFormControlSelect1" style={{ width: "300px" }} value={course}
                onChange={(e) => setCourse(e.target.value)}>
                <option>Select</option>
                <option>B.Tech</option>
                <option>M.Tech</option>
                <option>BBA</option>
                <option>B.Pharma</option>
                <option>MBA</option>
              </select>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <label htmlFor="experince">Experince</label>
              <input type="text" id="Rollno" className="form-control" placeholder='Enter Experince' style={{ width: "300px" }} value={experince}
                onChange={(e) => setExperince(e.target.value)} />
            </div>
          
            <div className="col">
              <label for="exampleFormControlSelect1">Select Department</label>
              <select className="form-control" id="exampleFormControlSelect1" style={{ width: "300px" }} value={department}
                onChange={(e) => setDepartment(e.target.value)}>
                <option>Select</option>
                <option>CSE</option>
                <option>IT</option>
                <option>ECE</option>
                <option>EE</option>
                <option>ME</option>
                <option>CE</option>
                <option>CHe</option>
              </select>
            </div>
          </div>
          <div className="row mt-5">
          <div class=" col form-group mt-3">
            <label class="mr-2">Upload your Photo:</label>
            <br />
            <input onChange={imageChange} type="file" name="file"/>
          </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginTop: "10px" }}>Submit</button>
      </form>

    </>
  );
};

export default Teacher;  // Updated export to match the new component name
