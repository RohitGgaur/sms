import React, { useState } from 'react'
import "./Studentform.css"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const StudentReg = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fathername, setFathername] = useState('');
  const [fatherphone, setFatherphone] = useState('');
  const [mothername, setMothername] = useState('');
  const [mdob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [collage, setCollage] = useState('');
  const [currcgpa, setCurrcgpa] = useState('');
  const [high, setHigh] = useState('');
  const [inter, setInter] = useState('');
  const [course, setCourse] = useState('');
  const [rollno, setRollno] = useState('');
  const [grad, setGrad] = useState('');
  const [gradcom, setGradcom] = useState('');
  const [branch, setBranch] = useState('');
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
  const convertToTimestamp = (dateString) => {
    return new Date(dateString).getTime(); 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate email
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }


    const dob = String(convertToTimestamp(mdob));
   
    console.log(dob);
    const urlData = await uploadImage();
    if (!urlData || !urlData.url) {
      console.error('Image upload failed');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8000/api/studentdetail', {
        id, name, email, phone, dob, fathername, mothername, gender, 
        fatherphone, branch, address, course, rollno, city, pincode, collage, 
        currcgpa, high, inter, gradcom, grad, image: urlData.url
      });
  
      toast.success("Registration Successful!");
      setError(null);
      // Clear form
      setId(''); setName(''); setEmail(''); setPhone(''); setDob('');
      setFathername(''); setMothername(''); setGender(''); setFatherphone('');
      setBranch(''); setAddress(''); setCourse(''); setRollno(''); setCity('');
      setPincode(''); setCollage(''); setCurrcgpa(''); setHigh(''); setInter('');
      setGradcom(''); setGrad(''); setImgprev(null); // Clear image preview
    } catch (err) {
      toast.error("Registration failed!");
      setError("User already exists or other error occurred.");
      console.error("Registration failed:", err.response ? err.response.data : err.message);
    }
  };
  return (
    <>
      <ToastContainer />
      <form className="student-form"onSubmit={handleSubmit} >
        <h2 className="main-heading">Student Information</h2>

        <div className="section">
          <h3 className="section-heading">Personal Information</h3>
          <div className="row">
            <div className="col">
              <label htmlFor="firstName">Student Id</label>
              <input type="text" id="Studentid" className="form-control" placeholder='Enter Student Id' style={{ width: "300px" }} value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="lastName">Student Name</label>
              <input type="text" id="Name" className="form-control" placeholder='Enter Student Name' style={{ width: "300px" }} value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="fathername">Father Name</label>
              <input type="text" id="Name" className="form-control" placeholder='Enter father name' style={{ width: "300px" }} value={fathername} onChange={(e) => setFathername(e.target.value)} />
            </div>
          </div>
          {/* 2 */}
          <div className="row mt-4">
            <div className="col">
              <label htmlFor="motherName">Mother Name</label>
              <input type="text" id="motherName" className="form-control" placeholder='Enter mother Name' style={{ width: "300px" }} value={mothername} onChange={(e) => setMothername(e.target.value)} />
            </div>
            <div className="col">
              {/* <label htmlFor="Dob">Mother Name</label>
            <input type="text" id="motherName" className="form-control" placeholder='Enter mother Name'style={{width:"300px"}} /> */}
              <label for="date" style={{ marginTop: "13px" }}>Enter DOB (YYYY-MM-DD):</label>
              <input type="date" name="date" id="date" pattern="\d{4}-\d{2}-\d{2}" style={{ width: "300px", height: "45px", border: "1px solid aqua", borderRadius: "4px" }} value={mdob} onChange={(e) => setDob(e.target.value)} />

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
            <div className="col">
              <label htmlFor="phone">Father Phone Number</label>
              <input type="text" id="phone" className="form-control" placeholder='Enter phone No.' style={{ width: "300px" }} value={fatherphone} onChange={(e) => setFatherphone(e.target.value)} />
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
              <label htmlFor="cgpa"> Current CGPA</label>
              <input type="text" id="cgpa" className="form-control" placeholder='Enter CGPA' style={{ width: "300px" }} value={currcgpa} onChange={(e) => setCurrcgpa(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="pincode">Year Of Graduation</label>
              <input type="text" id="phone" className="form-control" placeholder='Graduation Year' style={{ width: "300px" }} value={grad} onChange={(e) => setGrad(e.target.value)} />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <label htmlFor="highschool">High School</label>
              <input type="text" id="highschool" className="form-control" placeholder='Enter Percentage/CGPA' style={{ width: "300px" }} value={high} onChange={(e) => setHigh(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="inter">Intermediate</label>
              <input type="text" id="inter" className="form-control" placeholder='Enter Percentage/CGPA' style={{ width: "300px" }} value={inter} onChange={(e) => setInter(e.target.value)} />
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
              <label htmlFor="rollno">Roll No</label>
              <input type="text" id="Rollno" className="form-control" placeholder='Enter Roll No.' style={{ width: "300px" }} value={rollno}
                onChange={(e) => setRollno(e.target.value)} />
            </div>
            <div className="col">
              <label htmlFor="grad">Graduation Complete</label>
              <input type="text" id="grad" className="form-control" placeholder='Enter Graduation Year' style={{ width: "300px" }} value={gradcom}
                onChange={(e) => setGradcom(e.target.value)} />
            </div>
            <div className="col">
              <label for="exampleFormControlSelect1">Select Branch</label>
              <select className="form-control" id="exampleFormControlSelect1" style={{ width: "300px" }} value={branch}
                onChange={(e) => setBranch(e.target.value)}>
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

export default StudentReg;
