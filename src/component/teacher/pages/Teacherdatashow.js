import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Teacherdatashow = ({ showModal, onClose, id }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (id && showModal) {
            const fetchData = async () => {
                setLoading(true);
                try {
                    console.log('Fetching data for id:', id);
                    const response = await axios.get(`http://localhost:8000/api/teacher/${id}`);
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
    }, [id, showModal]);

    if (!showModal) return null;

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    // Ensure data is always an array
    const teacherData = data || [];

    return (
        <div className="modal show" tabIndex={-1} style={{ display: "block" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Faculty Profile</h5>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={onClose}
                        />
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            {teacherData.length === 0 ? (
                                <p>No student data available</p>
                            ) : (
                                teacherData.map((student) => (
                                    <div key={student.id} className="col mt-0">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{student.name}</h5>
                                                <div className="row">
                                                    <div className="col">student id: {student.id}</div>
                                                    <div className="col">Father name: {student.fathername}</div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col">course: {student.course}</div>
                                                    <div className="col">student branch: {student.department}</div>
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

export default Teacherdatashow;
