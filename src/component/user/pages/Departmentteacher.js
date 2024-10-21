import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Departmentteacher = () => {
    const { rollno } = useParams(); // Get student roll number from URL parameters
    const [teachers, setTeachers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true); // To handle loading state

    console.log("Fetching teachers for student roll number:", rollno);

    // Function to fetch teachers based on the student's branch
    const fetchTeacherBybranch = async (rollno) => {
        try {
            const response = await axios.get(`http://localhost:8000/api/teachers?rollno=${rollno}`); // Use student's roll number
            setTeachers(response.data.teachers);
            setLoading(false);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching teachers:', error);
            setError('Failed to load teachers.'); // Set error message if fetching fails
            setTeachers([]); // Clear the teachers list on error
            setLoading(false); // Stop loading
        }
    };

    useEffect(() => {
        if (rollno) {
            fetchTeacherBybranch(rollno); // Fetch teachers when the component mounts
        }
    }, [rollno]); // Only run this effect when the rollno changes

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Teachers in Branch</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if any */}
            {loading ? ( // Display loading message until data is fetched
                <p style={{ textAlign: 'center' }}>Loading...</p>
            ) : (
                <table className="table table-striped table-hover mt-3">
                    <thead>
                        <tr>
                            <th style={{ color: "black" }}>Name</th>
                            <th style={{ color: "black" }}>Position</th>
                            <th style={{ color: "black" }}>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.length > 0 ? (
                            teachers.map((teacher) => (
                                <tr key={teacher._id}>
                                    <td style={{ color: "green" }}>{teacher.name}</td>
                                    <td style={{ color: "green" }}>{teacher.position}</td>
                                    <td style={{ color: "green" }}>{teacher.email}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" style={{ textAlign: 'center' }}>No teachers found for this branch</td> {/* Updated message */}
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Departmentteacher;
