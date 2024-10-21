import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Studentprofile = ({ showModal, onClose, rollno }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (rollno && showModal) {
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
    }, [rollno, showModal]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/api/student-update/${rollno}`, data);
            console.log('Student updated:', response.data);
            onClose(); // Close the modal after saving
        } catch (error) {
            setError('Failed to update student data');
        }
    };

    if (!showModal) return null;

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="modal show" tabIndex={-1} style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Student Profile</h5>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={onClose}
                        />
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col mt-0">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <div className="row">
                                            <div className="col">Student ID: {data.id}</div>
                                            <div className="col">Father's Name: {data.fathername}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col">Course: {data.course}</div>
                                            <div className="col">Branch: {data.branch}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col">Year: {data.grad}</div>
                                            <div className="col">DOB: {data.dob}</div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col">Gender: {data.gender}</div>
                                            <div className="row mt-4">
                                                <div className="col">
                                                    <label>Email:
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={data.email || ''}
                                                            onChange={handleChange}
                                                            style={{ width: "10rem", height: "30px", border: "1px solid black", borderRadius: "5px" }} />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col">
                                                <label>Address:
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        value={data.address || ''}
                                                        onChange={handleChange}
                                                        style={{ width: "30rem", height: "30px", border: "1px solid black", borderRadius: "5px" }} />
                                                </label>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col">
                                                    <label>Phone:
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            value={data.phone || ''}
                                                            onChange={handleChange}
                                                            style={{ width: "10rem", height: "30px", border: "1px solid black", borderRadius: "5px" }} />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col">
                                                    <label>fatherPhone:
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            value={data.fatherphone || ''}
                                                            onChange={handleChange}
                                                            style={{ width: "10rem", height: "30px", border: "1px solid black", borderRadius: "5px" }} />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col">
                                                    <label>Pincode:
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            value={data.pincode || ''}
                                                            onChange={handleChange}
                                                            style={{ width: "10rem", height: "30px", border: "1px solid black", borderRadius: "5px" }} />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Studentprofile;
