import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../assets/css/styles.min.css"
import user1 from "../../assets/images/profile/user-1.jpg"
import user2 from "../../assets/images/profile/user-2.jpg"
import user3 from "../../assets/images/profile/user-3.jpg"
import { Icon } from '@iconify/react';
import { useParams, Link } from 'react-router-dom';

const Teacherprofile = ({ name }) => {
    const { id } = useParams();
    const [data, setData] = useState({}); // Initialize as null
    const [greeting, setGreeting] = useState('Good Morning');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour >= 0 && currentHour < 12) {
            setGreeting('Good Morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Evening');
        }
    }, []);
    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                setLoading(true);
                try {
                    console.log('Fetching data for id:', id);

                    const response = await axios.get(`http://localhost:8000/api/teacher/${id}`, data);
                    console.log('API Response:', response.data);
                    if (response.data) {
                        // If response.data is an object, wrap it in an array
                        setData(response.data);
                    } else {
                        console.error('API did not return expected data:', response.data);
                        setError('Unexpected data format');
                    }
                } catch (error) {
                    console.error('Error fetching teacher data:', error);
                    setError('Failed to load teacher data');
                }
                setLoading(false);
            };

            fetchData();
        }
    }, [id]);
    return (
        <>
            <div
                className="page-wrapper"
                id="main-wrapper"
                data-layout="vertical"
                data-navbarbg="skin6"
                data-sidebartype="full"
                data-sidebar-position="fixed"
                data-header-position="fixed"
            >
                {/* Sidebar Start */}
                <aside className="left-sidebar">
                    {/* Sidebar scroll*/}
                    <div>
                        <div className="brand-logo d-flex align-items-center justify-content-between">
                            <a href="./index.html" className="text-nowrap logo-img">
                                <img src="../assets/images/logos/logo.svg" alt="" />
                            </a>
                            <div
                                className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                                id="sidebarCollapse"
                            >
                                <i className="ti ti-x fs-8" />
                            </div>
                        </div>
                        {/* Sidebar navigation*/}
                        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                            <ul id="sidebarnav">
                                <li className="nav-small-cap">
                                    <iconify-icon
                                        icon="solar:menu-dots-linear"
                                        className="nav-small-cap-icon fs-4"
                                    />
                                    <span className="hide-menu">Home</span>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                        className="sidebar-link"
                                        href="./index.html"
                                        aria-expanded="false"
                                    >
                                        <iconify-icon icon="solar:widget-add-line-duotone" />
                                        <span className="hide-menu">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <span className="sidebar-divider lg" />
                                </li>
                                <li className="nav-small-cap" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <Icon icon="noto:student-light-skin-tone" />
                                    <span className="hide-menu">Faculty</span>
                                </li>
                                <li className="sidebar-item">
                                    <Link className="sidebar-link" to={`/Teacherdetails/${id}`} >
                                        <Icon icon="pajamas:profile" />
                                        <span className="hide-menu">Profile</span>
                                    </Link>
                                </li>

                                <li className="sidebar-item">
                                    <a
                                        className="sidebar-link"
                                        href={`/Department-student/${id}`}
                                        aria-expanded="false"
                                    >
                                        <Icon icon="material-symbols:engineering-outline"></Icon>
                                        <span className="hide-menu">Department</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <Link
                                        className="sidebar-link"
                                        to={`/Teacher-update/${id}`}
                                        aria-expanded="false"
                                    >
                                        <Icon icon="icon-park-solid:flash-payment" style={{ width: "20", height: "20", color: "#000" }} />
                                        <span className="hide-menu">Update</span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                        className="sidebar-link"
                                        href="./ui-forms.html"
                                        aria-expanded="false"
                                    >
                                        <Icon icon="fluent-mdl2:publish-course" style={{ width: "24", height: "24", color: "black" }}></Icon>
                                        <span className="hide-menu">Course Selection</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <Link className="sidebar-link" to={`/Service/${id}`} aria-expanded="false">
                                        <Icon icon="medical-icon:i-interpreter-services" style={{ width: "24", height: "24", color: "black" }} />
                                        <span className="hide-menu">Service</span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                        className="sidebar-link"
                                        href=""
                                        aria-expanded="false"
                                    >
                                        <Icon icon="ep:upload-filled" style={{ width: "24", height: "24", color: "black" }}></Icon>
                                        <span className="hide-menu">Upload Document</span>
                                    </a>
                                </li>
                                <li>
                                    <span className="sidebar-divider lg" />
                                </li>
                                <li className="nav-small-cap">
                                    <Icon icon="quill:paper" style={{ width: "24", height: "24", color: "black" }}></Icon>
                                    <span className="hide-menu">Examination</span>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                        className="sidebar-link"
                                        href="./authentication-login.html"
                                        aria-expanded="false"
                                    >
                                        <Icon icon="ep:upload-filled" style={{ width: "24", height: "24", color: "black" }}></Icon>
                                        <span className="hide-menu">Upload Papers</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a
                                        className="sidebar-link"
                                        href="./authentication-register.html"
                                        aria-expanded="false"
                                    >
                                        <Icon icon="bi:ticket-detailed" style={{ width: "24", height: "24", color: "black" }}></Icon>
                                        <span className="hide-menu">Examination Card</span>
                                    </a>
                                </li>
                                <li>
                                    <span className="sidebar-divider lg" />
                                </li>


                            </ul>
                            <div className="unlimited-access d-flex align-items-center hide-menu bg-primary-subtle position-relative mb-7 mt-4 p-3 rounded">
                                <div className="me-2 flex-shrink-0">
                                    <h6 className="fw-semibold fs-4 mb-6 text-dark w-75">
                                        Upgrade to pro
                                    </h6>
                                    <a
                                        href="https://adminmart.com/product/matdash-bootstrap-5-admin-dashboard-template/"
                                        target="_blank"
                                        className="btn btn-primary fs-2 fw-semibold lh-sm"
                                    >
                                        Buy Pro
                                    </a>
                                </div>
                                <div className="unlimited-access-img">
                                    <img
                                        src="../assets/images/backgrounds/rupee.png"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </nav>
                        {/* End Sidebar navigation */}
                    </div>
                    {/* End Sidebar scroll*/}
                </aside>
                {/*  Sidebar End */}
                {/*  Main wrapper */}
                <div className="body-wrapper">
                    {/*  Header Start */}
                    <header className="app-header">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <ul className="navbar-nav">
                                <p style={{ marginTop: "20px", color: "black", fontSize: "35px" }}>Dashboard</p>
                                <li className="nav-item d-block d-xl-none">
                                    <a
                                        className="nav-link sidebartoggler "
                                        id="headerCollapse"
                                        href="javascript:void(0)"
                                    >
                                        <i className="ti ti-menu-2" />
                                    </a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link " href="javascript:void(0)">
                                        <iconify-icon icon="solar:bell-linear" className="fs-6" />
                                        <div className="notification bg-primary rounded-circle" />
                                    </a>
                                </li>
                            </ul>
                            <div
                                className="navbar-collapse justify-content-end px-0"
                                id="navbarNav"
                            >
                                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                                    <a
                                        href={`/Idcards/${id}`}
                                        className="btn btn-primary"
                                    >
                                        Download Free
                                    </a>
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link "
                                            href="javascript:void(0)"
                                            id="drop2"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img
                                                src={data.image}
                                                alt=""
                                                width={35}
                                                height={35}
                                                className="rounded-circle"
                                            />
                                        </a>
                                        <div
                                            className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                                            aria-labelledby="drop2"
                                        >
                                            <div className="message-body">
                                                <a
                                                    href={`/Teacherdetails/${id}`}
                                                    className="d-flex align-items-center gap-2 dropdown-item"
                                                >
                                                    <i className="ti ti-user fs-6" />
                                                    <p className="mb-0 fs-3">My Profile</p>
                                                </a>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="d-flex align-items-center gap-2 dropdown-item"
                                                >
                                                    <i className="ti ti-mail fs-6" />
                                                    <p className="mb-0 fs-3">My Account</p>
                                                </a>

                                                <a
                                                    href="/siginin"
                                                    className="btn btn-outline-primary mx-3 mt-2 d-block"
                                                >
                                                    Logout
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    {/*  Header End */}
                    <div className="body-wrapper-inner">
                        <div className="container-fluid">
                            <div className="row" style={{ display: 'flex', justifyContent: 'flex-start', gap: "0" }}>
                                <h1>{`${greeting},${data.name}`}</h1>
                                <div className="card mt-3" style={{ backgroundColor: "blueviolet", color: "white", height: "90px" }}>
                                    <div className="col" style={{ fontWeight: "bold", fontSize: "20px" }}>
                                        Announcement:
                                    </div>
                                    <div className="col2">
                                        <Link style={{ color: "white", textDecoration: "underline", fontSize: "15px" }}>See All Information</Link>
                                    </div>
                                </div>
                                <div className="card1" style={{ background: "white", width: "340px", height: "140px", fontSize: "14px", fontWeight: "bold" }}>
                                    <p style={{ color: "black", marginTop: "10px" }}>Faculty:</p>
                                    <p style={{ color: "black", marginTop: "10px" }}>B.Tech.{data.department} : Bachelor of Technology({data.department})</p>
                                    <button style={{ border: "1px  solid black", padding: "3px", marginTop: "20px" }}>Click Here</button>
                                </div>
                                <div className="card1 mx-4" style={{ background: "white", width: "340px", height: "140px", fontSize: "14px", fontWeight: "bold" }}>
                                    <p style={{ color: "black", marginTop: "40px" }}>Position-{data.position}</p>
                                    <button style={{ border: "1px  solid black", padding: "3px", marginTop: "24px" }}>Click Here</button>
                                </div>
                                {/* <div className="col-lg-4">
                                    <div className="card overflow-hidden hover-img">
                                        <div className="position-relative">
                                            <a href="javascript:void(0)">
                                                <div
                                                    style={{ height: 60, background: "#CFFBF8" }}
                                                    className="card-img-top"
                                                    alt="matdash-img"
                                                />
                                            </a>
                                            <span className="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">
                                                23 Registered
                                            </span>
                                            <img
                                                src={user3}
                                                alt="matdash-img"
                                                className="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9"
                                                width={40}
                                                height={40}
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                data-bs-title="Georgeanna Ramero"
                                            />
                                        </div>
                                        <div className="card-body p-4">
                                            <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">
                                                Teacher
                                            </span>
                                            <a
                                                className="d-block my-4 fs-5 text-dark fw-semibold link-primary"
                                                href=""
                                            >
                                                Register new teachere here!
                                            </a>
                                            <div className="d-flex align-items-center gap-4">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="ti ti-eye text-dark fs-5" />
                                                    9,125
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="ti ti-message-2 text-dark fs-5" />3
                                                </div>
                                                <div className="d-flex align-items-center fs-2 ms-auto">
                                                    <i className="ti ti-point text-dark" />
                                                    Mon, Dec 19
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-4">
                                    <div className="card overflow-hidden hover-img">
                                        <div className="position-relative">
                                            <a href="javascript:void(0)">
                                                <div
                                                    style={{ height: 60, background: "#D8F4E2" }}
                                                    className="card-img-top"
                                                    alt="matdash-img"
                                                />
                                            </a>
                                            <span className="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">
                                                46 Registered
                                            </span>
                                            <img
                                                src={user2}
                                                alt="matdash-img"
                                                className="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9"
                                                width={40}
                                                height={40}
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                data-bs-title="Georgeanna Ramero"
                                            />
                                        </div>
                                        <div className="card-body p-4">
                                            <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">
                                                Student
                                            </span>
                                            <a
                                                className="d-block my-4 fs-5 text-dark fw-semibold link-primary"
                                                href=""
                                            >
                                                Register new student here!
                                            </a>
                                            <div className="d-flex align-items-center gap-4">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="ti ti-eye text-dark fs-5" />
                                                    4,150
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="ti ti-message-2 text-dark fs-5" />
                                                    38
                                                </div>
                                                <div className="d-flex align-items-center fs-2 ms-auto">
                                                    <i className="ti ti-point text-dark" />
                                                    Sun, Dec 18
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="col-lg-4">
                                    <div className="card overflow-hidden hover-img">
                                        <div className="position-relative">
                                            <a href="javascript:void(0)">
                                                <div
                                                    style={{ height: 60, background: "#FFE0E9" }}
                                                    className="card-img-top"
                                                    alt="matdash-img"
                                                />
                                            </a>
                                            <span className="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">
                                                0 Registered
                                            </span>
                                            <img
                                                src={user1}
                                                alt="matdash-img"
                                                className="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9"
                                                width={40}
                                                height={40}
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                data-bs-title="Georgeanna Ramero"
                                            />
                                        </div>
                                        <div className="card-body p-4">
                                            <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">
                                                Staffs
                                            </span>
                                            <a
                                                className="d-block my-4 fs-5 text-dark fw-semibold link-primary"
                                                href=""
                                            >
                                                Register new staff here!
                                            </a>
                                             <div className="d-flex align-items-center gap-4">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="ti ti-eye text-dark fs-5" />
                                                    9,480
                                                </div>
                                                <div className="d-flex align-items-center gap-2">
                                                    <i className="ti ti-message-2 text-dark fs-5" />
                                                    12
                                                </div>
                                                <div className="d-flex align-items-center fs-2 ms-auto">
                                                    <i className="ti ti-point text-dark" />
                                                    Sat, Dec 17
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div> */}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            {/* solar icons */}


        </>
    );
};


export default Teacherprofile