import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./Studentbranch.css";
import Studentprofile from "../user/pages/Studentprofile";
import Studentupdate from "../user/pages/Studentupdate"; // Import Studentupdate
const Studentbranch = () => {
    const [students, setStudents] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');
    const { branch, department } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false); // State for update modal
    const [selectedRollno, setSelectedRollno] = useState(null);
    const [teachers, setTeachers] = useState([]);
    const [error, setError] = useState('');
    // const { } = useParams();
    const navigate = useNavigate();
    console.log('Department:', department);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/student-branch/${branch}`, {
                    params: { grad: selectedYear }
                });
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };
        if (branch) {
            fetchStudents();
    
        }
     
    }, []);


    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleOpenModal = (rollno) => {
        setSelectedRollno(rollno);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedRollno(null);
    };

    const handleUpdateModal = (rollno) => {
        setSelectedRollno(rollno);
        setShowUpdateModal(true); // Open the update modal
    };

    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false);
        setSelectedRollno(null);
    };

    const handleDelete = async (rollno) => {
        try {
            await axios.delete(`http://localhost:8000/api/delete/${rollno}`);
            setStudents(students.filter(student => student.rollno !== rollno));
            alert("Student deleted successfully!");
        } catch (error) {
            console.error('Error deleting student:', error);
            alert("Failed to delete student.");
        }
    };

    const handleUpdate = async (student) => {
        try {
            await axios.put(`http://localhost:8000/api/student-update/${student.rollno}`, student);
            alert('Student information updated successfully!');
            navigate(-1);
        } catch (error) {
            setError('Failed to update student data');
        }
    };
    return (
        <>
            <div className="container1">
                <div className="filter-container" style={{ display: "flex", alignItems: "center" }}>
                    <i className="fas fa-filter" style={{ marginLeft: "18px" }}></i>
                    <select
                        className="form-control form-control-sm"
                        style={{ width: "470px", marginLeft: "20px" }}
                        value={selectedYear}
                        onChange={handleYearChange}
                    >
                        <option value="">Filter by Year</option>
                        <option value="2019-2023">2019-2023</option>
                        <option value="2020-2024">2020-2024</option>
                        <option value="2021-2025">2021-2025</option>
                        <option value="2022-2026">2022-2026</option>
                        <option value="2023-2027">2023-2027</option>
                    </select>
                </div>

                <div className="row" style={{ marginTop: "70px" }}>
                    <div className="col-3">
                        <div className="row">
                            <div
                                className="col-sm-3"
                                style={{
                                    width: "200px",  // Set a fixed width
                                    borderRadius: "6px",
                                    backgroundColor: "rgb(0, 128, 255)",
                                    padding: '20px',
                                    marginLeft: "30px",
                                    boxShadow: "0 0 15px green",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "60px"
                                }}
                            >
                                <span style={{ fontSize: "25px", fontWeight: "bold", textAlign: "center" }}>
                                    <Link to={`/books/${branch}`} style={{ color: "white", textDecoration: "none" }}>books</Link>
                                </span>
                            </div>
                        </div>
                        <div className="row1 mt-5">
                            <div
                                className="col-sm-3"
                                style={{
                                    width: "200px",  // Set the same fixed width
                                    borderRadius: "6px",
                                    backgroundColor: "rgb(0, 128, 255)",
                                    padding: '20px',
                                    marginLeft: "20px",
                                    boxShadow: "0 0 15px green",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "60px"
                                }}
                            >
                                <span style={{ fontSize: "25px", fontWeight: "bold", textAlign: "center" }}>
                                    <Link to="/path" style={{ color: "white", textDecoration: "none" }}>Notes</Link>
                                </span>
                            </div>
                        </div>
                        <div className="row1 mt-5">
                            <div
                                className="col-sm-3"
                                style={{
                                    width: "200px",  // Set the same fixed width
                                    borderRadius: "6px",
                                    backgroundColor: "rgb(0, 128, 255)",
                                    padding: '20px',
                                    marginLeft: "20px",
                                    boxShadow: "0 0 15px green",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "60px"
                                }}
                            >
                                <span style={{ fontSize: "25px", fontWeight: "bold", textAlign: "center" }}>
                                    <Link to={`/department/${branch}`} style={{ color: "white", textDecoration: "none" }}>
                                        Faculty
                                    </Link>

                                </span>
                            </div>
                        </div>
                        <div className="row1 mt-5">
                            <div
                                className="col-sm-3"
                                style={{
                                    width: "200px",  // Set the same fixed width
                                    borderRadius: "6px",
                                    backgroundColor: "rgb(0, 128, 255)",
                                    padding: '20px',
                                    marginLeft: "20px",
                                    boxShadow: "0 0 15px green",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "60px"
                                }}
                            >
                                <span style={{ fontSize: "25px", fontWeight: "bold", textAlign: "center" }}>
                                    <Link to="/path" style={{ color: "white", textDecoration: "none" }}>Attendance</Link>
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="col-3">
                        <table className="table table-bordered" style={{ border: "2px solid black" }}>
                            <thead>
                                <tr>
                                    <th scope="col">Roll no</th>
                                    <th scope="col">Student Name</th>
                                    <th scope="col">Fathername</th>
                                    <th scope="col">CGPA</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => (
                                    <tr key={student.rollno}>
                                        <th scope="row">{student.rollno}</th>
                                        <td>{student.name}</td>
                                        <td>{student.fathername}</td>
                                        <td>{student.cgpa}</td>
                                        <td>
                                            <Link to="#" onClick={() => handleOpenModal(student.rollno)}>
                                                <button type="button" className="btn btn-primary mx-2 mt-2">
                                                    <i className="far fa-eye" />
                                                </button>
                                            </Link>
                                            <Link to="#" onClick={() => handleUpdateModal(student.rollno)}>
                                                <button type="button" className="btn btn-success mx-2 mt-2">
                                                    <i className="fas fa-edit" />
                                                </button>
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-danger mx-2 mt-2"
                                                onClick={() => handleDelete(student.rollno)}
                                            >
                                                <i className="far fa-trash-alt" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {showModal && (
                <Studentprofile
                    showModal={showModal}
                    onClose={handleCloseModal}
                    rollno={selectedRollno} // Pass the selected rollno
                />
            )}
            {showUpdateModal && (
                <Studentupdate
                    showModal={showUpdateModal}
                    onClose={handleCloseUpdateModal}
                    rollno={selectedRollno}
                />
            )}
        </>
    );
}

export default Studentbranch;
