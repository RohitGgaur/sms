import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Studentprofile = ({ showModal, onClose, rollno }) => {
    const [data, setData] = useState(null); // Initialize as null
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (rollno && showModal) {
            const fetchData = async () => {
                setLoading(true);
                try {
                    console.log('Fetching data for rollno:', rollno);
                    const response = await axios.get(`http://localhost:8000/api/student/${rollno}`);
                    console.log('API Response:', response.data);
                    if (response.data) {
                        // If response.data is an object, wrap it in an array
                        setData(Array.isArray(response.data) ? response.data : [response.data]);
                    } else {
                        console.error('API did not return expected data:', response.data);
                        setError('Unexpected data format');
                    }
                } catch (error) {
                    console.error('Error fetching student data:', error);
                    setError('Failed to load student data');
                }
                setLoading(false);
            };

            fetchData();
        }
    }, [rollno, showModal]);

    if (!showModal) return null;

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    // Ensure data is always an array
    const studentData = data || [];

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
                            {studentData.length === 0 ? (
                                <p>No student data available</p>
                            ) : (
                                studentData.map((student) => (
                                    <div key={student.rollno} className="col mt-0">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{student.name}</h5>
                                                <div className="row">
                                                    <div className="col">student id:{student.id}</div>
                                                    <div className="col">Father name:{student.fathername}</div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col">course: {student.course}</div>
                                                    <div className="col">student branch: {student.branch}</div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col">Year: {student.grad}</div>
                                                    <div className="col">DOB: {student.dob}</div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col">Gender: {student.gender}</div>
                                                    <div className="col">Email: {student.email}</div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col">Address: {student.address}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
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
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Studentprofile;


