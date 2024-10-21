import React from 'react'

const Uialert = () => {
  return (
  <>
  <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Matdash Free</title>
  <link
    rel="shortcut icon"
    type="image/png"
    href="../assets/images/logos/favicon.png"
  />
  <link rel="stylesheet" href="../assets/css/styles.min.css" />
  {/*  Body Wrapper */}
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
            <li className="nav-small-cap">
              <iconify-icon
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
                <iconify-icon icon="solar:layers-minimalistic-bold-duotone" />
                <span className="hide-menu">Buttons</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./ui-alerts.html"
                aria-expanded="false"
              >
                <iconify-icon icon="solar:danger-circle-line-duotone" />
                <span className="hide-menu">Alerts</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./ui-card.html"
                aria-expanded="false"
              >
                <iconify-icon icon="solar:bookmark-square-minimalistic-line-duotone" />
                <span className="hide-menu">Card</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./ui-forms.html"
                aria-expanded="false"
              >
                <iconify-icon icon="solar:file-text-line-duotone" />
                <span className="hide-menu">Forms</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./ui-typography.html"
                aria-expanded="false"
              >
                <iconify-icon icon="solar:text-field-focus-line-duotone" />
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
                <iconify-icon icon="solar:login-3-line-duotone" />
                <span className="hide-menu">Login</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./authentication-register.html"
                aria-expanded="false"
              >
                <iconify-icon icon="solar:user-plus-rounded-line-duotone" />
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
                <iconify-icon icon="solar:sticker-smile-circle-2-line-duotone" />
                <span className="hide-menu">Icons</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./sample-page.html"
                aria-expanded="false"
              >
                <iconify-icon icon="solar:planet-3-line-duotone" />
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
                    src="../assets/images/profile/user-1.jpg"
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
                      href="javascript:void(0)"
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
                      href="javascript:void(0)"
                      className="d-flex align-items-center gap-2 dropdown-item"
                    >
                      <i className="ti ti-list-check fs-6" />
                      <p className="mb-0 fs-3">My Task</p>
                    </a>
                    <a
                      href="./authentication-login.html"
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
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fw-semibold mb-4">Alerts</h5>
              <div className="card mb-0">
                <div className="card-body p-4">
                  <div className="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                  </div>
                  <div className="alert alert-secondary" role="alert">
                    A simple secondary alert—check it out!
                  </div>
                  <div className="alert alert-success" role="alert">
                    A simple success alert—check it out!
                  </div>
                  <div className="alert alert-danger" role="alert">
                    A simple danger alert—check it out!
                  </div>
                  <div className="alert alert-warning" role="alert">
                    A simple warning alert—check it out!
                  </div>
                  <div className="alert alert-info" role="alert">
                    A simple info alert—check it out!
                  </div>
                  <div className="alert alert-light" role="alert">
                    A simple light alert—check it out!
                  </div>
                  <div className="alert alert-dark" role="alert">
                    A simple dark alert—check it out!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* solar icons */}
</>

  </>
  )
}

export default Uialert