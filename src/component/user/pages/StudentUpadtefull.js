import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StudentUpdateFull = ({ onClose }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { rollno } = useParams();

    useEffect(() => {
        if (rollno) {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const response = await axios.get(`http://localhost:8000/api/student/${rollno}`);
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
    }, [rollno]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8000/api/student-update/${rollno}`, data);
            console.log('Student updated:', response.data);

            // Notify success with Toastify
            toast.success('Student data updated successfully!');
            onClose(); // Optionally close the form or give feedback after success
        } catch (error) {
            console.error('Error updating student data:', error);
            setError('Failed to update student data'); // Set error state if there's an issue
        }
    };

    return (
        <div className="card">
            <ToastContainer /> {/* Add ToastContainer for notifications */}
            <div className="card-body" style={{ marginTop: "30px" }}>
                <h2 className="title" style={{ textAlign: "center" }}>{data.name}</h2>
                <form onSubmit={handleSubmit} style={{ marginTop: "30px" }}>
                    <div className="row mt-3">
                        <div className="col mx-5">Student ID: {data.id}</div>

                        <div className="col mx-5">Father's Name: {data.fathername}</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col mx-5">Course: {data.course}</div>
                        <div className="col mx-5">Branch: {data.branch}</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col mx-5">Year: {data.grad}</div>
                        <div className="col mx-5">DOB: {data.dob}</div>
                    </div>
                    <div className="row mt-3">
                        <div className="col mx-5">Gender: {data.gender}</div>
                    </div>

                    {/* Editable fields */}
                    <div className="row mt-4">
                        <div className="col mx-5">
                            <label>Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email || ''}
                                    onChange={handleChange}
                                    style={{ width: "10rem", height: "30px", border: "1px solid black", borderRadius: "5px" }}
                                />
                            </label>
                        </div>
                        <div className="col">
                            <label>Address:
                                <input
                                    type="text"
                                    name="address"
                                    value={data.address || ''}
                                    onChange={handleChange}
                                    style={{ width: "15rem", height: "30px", border: "1px solid black", borderRadius: "5px" }}
                                />
                            </label>
                        </div>

                    </div>


                    <div className="row mt-4">
                        <div className="col mx-5">
                            <label>Phone:
                                <input
                                    type="text"
                                    name="phone"
                                    value={data.phone || ''}
                                    onChange={handleChange}
                                    style={{ width: "10rem", height: "30px", border: "1px solid black", borderRadius: "5px" }}
                                />
                            </label>
                        </div>
                        <div className="col mx-5">
                            <label>Father's Phone:
                                <input
                                    type="text"
                                    name="fatherphone"
                                    value={data.fatherphone || ''}
                                    onChange={handleChange}
                                    style={{ width: "10rem", height: "30px", border: "1px solid black", borderRadius: "5px" }}
                                />
                            </label>
                        </div>
                    </div>



                    <div className="row mt-3">
                        <div className="col mx-5">
                            <label>Pincode:
                                <input
                                    type="text"
                                    name="pincode"
                                    value={data.pincode || ''}
                                    onChange={handleChange}
                                    style={{ width: "10rem", height: "30px", border: "1px solid black", borderRadius: "5px" }}
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
    );
};

export default StudentUpdateFull;
