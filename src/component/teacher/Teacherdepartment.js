import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import"./department.css"
import Teacherdatashow from './pages/Teacherdatashow';
import Teacherupdate from './pages/Teacherupdate';
const Teacherdepartment = () => {
    const [teachers, setTeachers] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');
    const { department } = useParams();
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false); // State for update modal
    const [selectedid, setSelectedId] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        const fetchteacher = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/teacher-department/${department}`, {
                    params: { grad: selectedYear } 
                });
                console.log('Student data fetched:', response.data);
                console.log('Data type:', typeof response.data);
                console.log('First item in data:', response.data[0]); 
                console.log('Student data fetched:', response.data); 
                setTeachers(response.data);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

         fetchteacher();
    }, []); 

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleOpenModal = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedId(null);
    };

    const handleUpdateModal = (id) => {
        setSelectedId(id);
        setShowUpdateModal(true); // Open the update modal
    };

    const handleCloseUpdateModal = () => {
        setShowUpdateModal(false);
        setSelectedId(null);
    };
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/teacher-delete/${id}`);
            setTeachers(teachers.filter(teacher => teacher.id !== id));
            alert("teacher deleted successfully!");
        } catch (error) {
            console.error('Error deleting teacher:', error);
            alert("Failed to delete teacher.");
        }
    };

    const handleUpdate = async (teacher) => {
        try {
            await axios.put(`http://localhost:8000/api/teacher-update/${teacher.id}`, teacher);
            alert('teacher information updated successfully!');
            navigate(-1);
        } catch (error) {
            setError('Failed to update teacher data');
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
                    <div className="col-12">
                        <table className="table table-bordered" style={{ border: "2px solid black" }}>
                            <thead>
                                <tr>
                                    <th scope="col">Faculty id</th>
                                    <th scope="col">Faculty Name</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Experience</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teachers.map((teacher) => (
                                    <tr key={teacher.id}>
                                        <th scope="row">{teacher.id}</th>
                                        <td>{teacher.id}</td>
                                        <td>{teacher.name}</td>
                                        <td>{teacher.fathername}</td>
                                        <td>
                                        <Link to="#" onClick={() => handleOpenModal(teacher.id)}>
                                                <button type="button" className="btn btn-primary mx-2 mt-2">
                                                    <i className="far fa-eye" />
                                                </button>
                                            </Link>
                                            <Link to="#" onClick={() => handleUpdateModal(teacher.id)}>
                                                <button type="button" className="btn btn-success mx-2 mt-2">
                                                    <i className="fas fa-edit" />
                                                </button>
                                            </Link>
                                            <button
                                                type="button"
                                                className="btn btn-danger mx-2 mt-2"
                                                onClick={() => handleDelete(teacher.id)}
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
                <Teacherdatashow
                    showModal={showModal}
                    onClose={handleCloseModal}
                    id={selectedid} // Pass the selected rollno
                />
            )}
             {showUpdateModal && (
                <Teacherupdate
                    showModal={showUpdateModal}
                    onClose={handleCloseUpdateModal}
                    id={selectedid}
                />
            )}
   </>
  )
}

export default Teacherdepartment