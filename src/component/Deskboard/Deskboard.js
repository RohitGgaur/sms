import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams, Link } from 'react-router-dom';
import "../../assets/css/styles.min.css"
import logo from "../../assets/images/logos/logopng.png"
import rupee from "../../assets/images/backgrounds/rupee.png"
import user2 from "../../assets/images/profile/user-2.jpg"
import user3 from "../../assets/images/profile/user-3.jpg"

import { Icon } from '@iconify/react';

const Deskboard = () => {
  
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);
  const [data,setData]=useState({});
  const { id } = useParams();
  console.log(id);
 useEffect(()=>{
  const fetchData=async()=>{
    try{
      let response=await axios.get(`http://localhost:8000/api/Admin/${id}`,data);
      console.log('API Response:', response.data);
      if (response.data) {
        // If response.data is an object, wrap it in an array
        setData(response.data);
    } else {
        console.error('API did not return expected data:', response.data);
        
    }
    }
    catch (error) {
      console.error('Error fetching admin data:', error);
   
  }
  
  };
 })
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/registration-count');
        setCount(response.data.count);
      } catch (err) {
        console.error('Failed to fetch registration count:', err);
      }
    };

    fetchCount();
  }, []);
  useEffect(() => {
    const fetchSum = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/registration-sum');
        setSum(response.data.sum);
      } catch (err) {
        console.error('Failed to fetch registration count:', err);
      }
    };
    fetchSum();
  }, []);

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

                <img src={logo} alt="" style={{ height: "100px", width: "100px" }} />
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
                  <Icon
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
                    <Icon icon="solar:widget-add-line-duotone" />
                    <span className="hide-menu">Dashboard</span>
                  </a>
                </li>
                <li>
                  <span className="sidebar-divider lg" />
                </li>
                <li className="nav-small-cap">
                  <Icon
                    icon="solar:menu-dots-linear"
                    className="nav-small-cap-icon fs-4"
                  />
                  <span className="hide-menu">UI COMPONENTS</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./ui-buttons.html"
                    aria-expanded="false"
                  >
                    <Icon icon="solar:layers-minimalistic-bold-duotone" />
                    <span className="hide-menu">Buttons</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./ui-alerts.html"
                    aria-expanded="false"
                  >
                    <Icon icon="solar:danger-circle-line-duotone" />
                    <span className="hide-menu">Alerts</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./ui-card.html"
                    aria-expanded="false"
                  >
                    <Icon icon="solar:bookmark-square-minimalistic-line-duotone" />
                    <span className="hide-menu">Card</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./ui-forms.html"
                    aria-expanded="false"
                  >
                    <Icon icon="solar:file-text-line-duotone" />
                    <span className="hide-menu">Forms</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./ui-typography.html"
                    aria-expanded="false"
                  >
                    <Icon icon="solar:text-field-focus-line-duotone" />
                    <span className="hide-menu">Typography</span>
                  </a>
                </li>
                <li>
                  <span className="sidebar-divider lg" />
                </li>
                <li className="nav-small-cap">
                  <iconify-icon
                    icon="solar:menu-dots-linear"
                    className="nav-small-cap-icon fs-4"
                  />
                  <span className="hide-menu">AUTH</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./authentication-login.html"
                    aria-expanded="false"
                  >
                    <Icon icon="solar:login-3-line-duotone" />
                    <span className="hide-menu">Login</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./authentication-register.html"
                    aria-expanded="false"
                  >
                    <Icon icon="solar:user-plus-rounded-line-duotone" />
                    <span className="hide-menu">Register</span>
                  </a>
                </li>
                <li>
                  <span className="sidebar-divider lg" />
                </li>
                <li className="nav-small-cap">
                  <iconify-icon
                    icon="solar:menu-dots-linear"
                    className="nav-small-cap-icon fs-4"
                  />
                  <span className="hide-menu">EXTRA</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./icon-tabler.html"
                    aria-expanded="false"
                  >
                    <Icon icon="solar:sticker-smile-circle-2-line-duotone" />
                    <span className="hide-menu">Icons</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="./sample-page.html"
                    aria-expanded="false"
                  >
                    <Icon icon="solar:planet-3-line-duotone" />
                    <span className="hide-menu">Sample Page</span>
                  </a>
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
                    src={rupee}
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
                  <a className="nav-link">
                    {/* <iconify-icon icon="solar:bell-linear" className="fs-6" />  */}
                    <Icon icon="solar:bell-linear" className="fs-6" />

                    <div className="notification" />
                    {data.name}
                  </a>
                </li>
              </ul>
              <div
                className="navbar-collapse justify-content-end px-0"
                id="navbarNav"
              >
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                  <a
                    href="https://adminmart.com/product/matdash-free-bootstrap-5-admin-dashboard-template/"
                    target="_blank"
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
                        <Link
                          to="/path"// Update this to the desired route
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-user fs-6" />
                          <p className="mb-0 fs-3">My Profile</p>
                        </Link>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-mail fs-6" />
                          <p className="mb-0 fs-3">My Account</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-list-check fs-6" />
                          <p className="mb-0 fs-3">My Task</p>
                        </a>
                        <a
                          href="/"
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
                <div className="col-lg-4">
                  <div className="card overflow-hidden hover-img">
                    <div className="position-relative">

                      <div
                        style={{ height: 60, background: "#CFFBF8" }}
                        className="card-img-top"
                        alt="matdash-img"
                      />

                      <span className="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">
                        {count} Registered
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
                      <Link to="/TeacherReg" className="text-decoration-none text-dark">
                        <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm mt-3">
                          Teacher
                        </span>
                        <span className="d-block my-4 fs-5 text-dark fw-semibold link-primary">
                          Register new teacher here!
                        </span>
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
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
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
                        {sum} Registered
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
                      <Link to="/StudentReg" className="text-decoration-none text-dark">
                        <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm mt-3">
                          Student
                        </span>
                        <a className="d-block my-4 fs-5 text-dark fw-semibold link-primary">
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
                      </Link>
                    </div>

                  </div>
                </div>
                <div className="col-lg-4">
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
                </div>
              </div>
              {/* second row */}
              <div className="row">

                <div className="col-lg-2" style={{ borderRadius: "6px", backgroundColor: "rgb(0, 128, 255)", padding: '40px', marginRight: "60px", marginLeft: "60px", boxShadow: "0 0 15px green" }}>
                  <span style={{ fontSize: "25px", fontWeight: "50px" }}>
                    <Link to={`/branch/CSE`} style={{ color: "white", textDecoration: "none" }}>CSE</Link>
                  </span>
                </div>
                <div className="col-lg-2" style={{ borderRadius: "6px", backgroundColor: "pink", padding: '40px', marginRight: "60px", boxShadow: "0 0 15px green" }}> <span style={{ fontSize: "25px", color: "white", fontWeight: "50px" }}><Link to={`/branch/IT`} style={{ color: "white", textDecoration: "none" }}>IT</Link></span></div>
                <div className="col-lg-2" style={{ borderRadius: "6px", backgroundColor: "yellow", padding: '40px', marginRight: "60px", boxShadow: "0 0 15px green" }}> <span style={{ fontSize: "25px", color: "white", fontWeight: "50px" }}><Link to={`/branch/ECE`} style={{ color: "white", textDecoration: "none" }}>ECE</Link></span></div>
                <div className="col-lg-2" style={{ borderRadius: "6px", backgroundColor: "	rgb(0, 255, 128)", padding: '40px', marginRight: "60px", boxShadow: "0 0 15px green" }}> <span style={{ fontSize: "25px", color: "white", fontWeight: "50px" }}><Link to={`/branch/IT`} style={{ color: "white", textDecoration: "none" }}>EE</Link></span></div>
              </div>
              <div className="row mt-5">

                <div className="col-lg-2" style={{ borderRadius: "6px", backgroundColor: "rgb(0, 128, 255)", padding: '40px', marginRight: "60px", marginLeft: "60px", boxShadow: "0 0 15px green" }}> <span style={{ fontSize: "25px", color: "white", fontWeight: "50px" }}><Link to={`/branch/ECE(IOT)`} style={{ color: "white", textDecoration: "none" }}>ECE(IOT)</Link></span></div>
                <div className="col-lg-2" style={{ borderRadius: "6px", backgroundColor: "pink", padding: '40px', marginRight: "60px", boxShadow: "0 0 15px green" }}> <span style={{ fontSize: "25px", color: "white", fontWeight: "50px" }}><Link to={`/branch/ME`} style={{ color: "white", textDecoration: "none" }}>ME</Link></span></div>
                <div className="col-lg-2" style={{ borderRadius: "6px", backgroundColor: "yellow", padding: '40px', marginRight: "60px", boxShadow: "0 0 15px green" }}> <span style={{ fontSize: "25px", color: "white", fontWeight: "50px" }}><Link to={`/branch/CE`} style={{ color: "white", textDecoration: "none" }}>CE</Link></span></div>
                <div className="col-lg-2" style={{ borderRadius: "6px", backgroundColor: "	rgb(0, 255, 128)", padding: '40px', marginRight: "60px", boxShadow: "0 0 15px green" }}> <span style={{ fontSize: "25px", color: "white", fontWeight: "50px" }}><Link to={`/branch/Che`} style={{ color: "white", textDecoration: "none" }}>Che</Link></span></div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-3" style={{ borderRadius: "6px", backgroundColor: "rgb(0, 128, 255)", padding: '40px', marginRight: "60px", marginLeft: "60px", boxShadow: "0 0 15px green" }}> <span style={{ fontSize: "25px", color: "white", fontWeight: "50px" }}><Link to={`/branch/IT`} style={{ color: "white", textDecoration: "none" }}>BBA</Link></span></div>
                <div className="col-lg-3" style={{ borderRadius: "6px", backgroundColor: "pink", padding: '40px', marginRight: "280px", boxShadow: "0 0 15px green" }}> <span style={{ fontSize: "25px", color: "white", fontWeight: "50px" }}><Link to={`/branch/MBA`} style={{ color: "white", textDecoration: "none" }}>MBA</Link></span></div>

              </div>
              <div className="py-6 px-6 text-center">
                <p className="mb-0 fs-4">
                  Design and Developed by Rohit Gaur
                  <a
                    href="https://google.com"
                    target="_blank"
                    className="pe-1 text-primary text-decoration-underline"
                  >
                    google.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Deskboard