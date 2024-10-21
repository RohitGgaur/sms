import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TeacherUpdatefull = ({ onClose }) => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Log the id to ensure it's correct
  console.log(id);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:8000/api/teacher/${id}`);
          console.log(response.data);  // Check what data is being returned
          if (response.data) {
            setData(response.data);
          } else {
            setError('Unexpected data format');
          }
        } catch (error) {
          setError('Failed to load student data');
        }
        setLoading(false);
      };
      fetchData();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent form from refreshing
    try {
      const response = await axios.put(`http://localhost:8000/api/teacher-update/${id}`, data);
      console.log('Student updated:', response.data);
      toast.success('Student updated successfully');
      onClose();
    } catch (error) {
      setError('Failed to update student data');
      toast.error('Failed to update student data');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
       <div className="card">
            <ToastContainer /> {/* Add ToastContainer for notifications */}
            <div className="card-body" style={{ marginTop: "30px" }}>
                <h2 className="title" style={{ textAlign: "center" }}>{data.name}</h2>
                <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
                    <div className="row mt-3">
                        <div className="col mx-5">Faculty ID: {data.id}</div>

                        <div className="col mx-5">Father's Name: {data.fathername}</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col mx-5">Course: {data.course}</div>
                        <div className="col mx-5">Department: {data.department}</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col mx-5">Position: {data.position}</div>
                        <div className="col mx-5">DOB: {data.dob}</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col mx-5">Gender: {data.gender}</div>
                    </div>
            {/* Editable fields */}
            <div className="row mt-4">
              <div className="col mx-5">
                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={data.email || ''}
                    onChange={handleChange}
                    style={{
                      width: '10rem',
                      height: '30px',
                      border: '1px solid black',
                      borderRadius: '5px',
                    }}
                  />
                </label>
              </div>
              <div className="col mx-5">
                <label>
                  Address:
                  <input
                    type="text"
                    name="address"
                    value={data.address || ''}
                    onChange={handleChange}
                    style={{
                      width: '20rem',
                      height: '30px',
                      border: '1px solid black',
                      borderRadius: '5px',
                    }}
                  />
                </label>
              </div>
            </div>

          

            <div className="row mt-4">
              <div className="col mx-5">
                <label>
                  Phone:
                  <input
                    type="text"
                    name="phone"
                    value={data.phone || ''}
                    onChange={handleChange}
                    style={{
                      width: '10rem',
                      height: '30px',
                      border: '1px solid black',
                      borderRadius: '5px',
                    }}
                  />
                </label>
              </div>
              <div className="col mx-5">
                <label>
                  Research Paper:
                  <input
                    type="text"
                    name="fatherphone"
                    value={data.researchpaper || ''}
                    onChange={handleChange}
                    style={{
                      width: '10rem',
                      height: '30px',
                      border: '1px solid black',
                      borderRadius: '5px',
                    }}
                  />
                </label>
              </div>
            </div>

           

            <div className="row mt-4">
              <div className="col mx-5">
                <label>
                  Pincode:
                  <input
                    type="text"
                    name="pincode"
                    value={data.pincode || ''}
                    onChange={handleChange}
                    style={{
                      width: '10rem',
                      height: '30px',
                      border: '1px solid black',
                      borderRadius: '5px',
                    }}
                  />
                </label>
              </div>
              <div className="col mx-5">
                <label>
                  Experience:
                  <input
                    type="text"
                    name="experience"
                    value={data.experince || ''}
                    onChange={handleChange}
                    style={{
                      width: '10rem',
                      height: '30px',
                      border: '1px solid black',
                      borderRadius: '5px',
                    }}
                  />
                </label>
              </div>
            </div>
            <div className="row mt-4">
            <div className="col mx-5">
                <label>
                  Position:
                  <input
                    type="text"
                    name="experience"
                    value={data.position || ''}
                    onChange={handleChange}
                    style={{
                      width: '10rem',
                      height: '30px',
                      border: '1px solid black',
                      borderRadius: '5px',
                    }}
                  />
                </label>
              </div>

            </div>

            {/* Submit button */}
            <div className="row mt-5 d-flex justify-content-center">
                        <div className="col-auto d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Update Student</button>
                        </div>
                    </div>
          </form>

          {/* Error handling */}
          {error && <div className="text-danger mt-3">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default TeacherUpdatefull;
