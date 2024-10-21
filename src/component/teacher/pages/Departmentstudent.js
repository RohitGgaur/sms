import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Departmentstudent = () => {
    const { id } = useParams(); // Get teacher ID from URL parameters
    const [students, setStudents] = useState([]);
    const [error, setError] = useState('');
    console.log("Fetching students for teacher ID:", id);
    // Function to fetch students based on the teacher's department
    const fetchStudentsByDepartment = async (id) => {
        try {
          
            const response = await axios.get(`http://localhost:8000/api/students?id=${id}`);
            setStudents(response.data.students);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
            setError('Failed to load students.'); // Set an error message if the request fails
            setStudents([]); // Clear students if there's an error
        }
    };

    useEffect(() => {
        if (id) {
            fetchStudentsByDepartment(id); // Fetch students when the component mounts
        }
    }, [id]); // Only run this effect when the ID changes

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Students in Department</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if any */}
            <table class="table table-striped table-hover mt-3">
                <thead>
                    <tr >
                        <th style={{ color:"black"}}>Roll No</th>
                        <th style={{ color:"black"}}>Name</th>
                        <th style={{ color:"black"}}>Father's Name</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student) => (
                            <tr key={student._id}>
                                <td style={{ color:"green"}}>{student.rollno}</td> {/* Adjust based on your Student schema */}
                                <td style={{ color:"green"}} >{student.name}</td>
                                <td style={{ color:"green"}}>{student.fathername}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" style={{ textAlign: 'center' }}>No students found</td>
                        </tr>
                    )}
                </tbody>
            </table>
         
        </div>
    );
};

export default Departmentstudent;
