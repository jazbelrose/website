import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Container } from 'react-bootstrap';
import "./style.css";


export function Dashboard() {



  const [isNewProjectCollapsed, setIsNewProjectCollapsed] = useState(true);
  const [isYourProjectsCollapsed, setIsYourProjectsCollapsed] = useState(true);
  const [isUploadsCollapsed, setIsUploadsCollapsed] = useState(true);
  const [isMessageCenterCollapsed, setIsMessageCenterCollapsed] = useState(true);

  const toggleNewProjectCollapse = () => setIsNewProjectCollapsed(!isNewProjectCollapsed);
  const toggleYourProjectsCollapse = () => setIsYourProjectsCollapsed(!isYourProjectsCollapsed);
  const toggleUploadsCollapse = () => setIsUploadsCollapsed(!isUploadsCollapsed);
  const toggleMessageCenterCollapse = () => setIsMessageCenterCollapsed(!isMessageCenterCollapsed);

  return (

    <div id="page-top">
      <div id="wrapper">
        <div className="sidebar-container">

          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" >
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">


            </a>

            <li className="nav-item active">


              <div className="sidebar-heading">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </div>
            </li>
            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Interface</div>



            {/* Start a new project */}
            <li className="nav-item">
              <a className="nav-link collapsed" onClick={toggleNewProjectCollapse}>
                <i className="fas fa-fw fa-plus"></i>
                <span>Start a new project</span>
              </a>

              <div className={`collapse ${isNewProjectCollapsed ? '' : 'show'}`} id="collapseNewProject">
                <div className="bg-black py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Design:</h6>
                  <a className="collapse-item" href="buttons.html">Questionnaire</a>
                </div>
              </div>
            </li>




            {/* Your Projects */}
            <li className="nav-item">
              <a className="nav-link collapsed" onClick={toggleYourProjectsCollapse}>
                <i className="fas fa-fw fa-user"></i>
                <span>Your Projects</span>
              </a>
              <div className={`collapse ${isYourProjectsCollapsed ? '' : 'show'}`} id="collapseYourProjects">
                <div className="bg-black py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Overview:</h6>
                  <a className="collapse-item" href="buttons.html">2021</a>
                  <a className="collapse-item" href="cards.html">2022</a>
                  <a className="collapse-item" href="cards.html">2023</a>
                </div>
              </div>
            </li>




            {/* Uploads */}
            <li className="nav-item">
              <a className="nav-link collapsed" onClick={toggleUploadsCollapse}>
                <i className="fas fa-fw fa-upload"></i>
                <span>Uploads</span>
              </a>
              <div className={`collapse ${isUploadsCollapsed ? '' : 'show'}`} id="collapseUploads">
                <div className="bg-black py-2 collapse-inner rounded">
                  <a className="collapse-item" href="utilities-color.html">All</a>
                  <a className="collapse-item" href="utilities-border.html">By project</a>
                </div>
              </div>
            </li>




            <hr className="sidebar-divider" />



            {/* Message Center */}

            <div className="message-center">

              <div className="sidebar-heading">Message center</div>


              <li className="nav-item">
                <a className="nav-link collapsed" onClick={toggleMessageCenterCollapse}>
                  <i className="fas fa-fw fa-comment"></i>
                  <span>Messages</span>
                </a>
                <div className={`collapse ${isMessageCenterCollapsed ? '' : 'show'}`} id="collapseMessageCenter">
                  <div className="bg-black py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Login Screens:</h6>
                    <a className="collapse-item" href="login.html">Login</a>
                    <a className="collapse-item" href="register.html">Register</a>
                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                    <div className="collapse-divider"></div>
                    <h6 className="collapse-header">Other Pages:</h6>
                    <a className="collapse-item" href="404.html">404 Page</a>
                    <a className="collapse-item" href="blank.html">Blank Page</a>
                  </div>
                </div>
              </li>
            </div>


            


          </ul>



        </div>





      </div>
    </div>

  );
}


