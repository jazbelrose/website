import React, { useState, useEffect, } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import usersData from './users.json';
import { Container } from 'react-bootstrap';
import "./style.css";


export function Dashboard() {

  const [projectsViewState, setProjectsViewState] = useState('collapsed'); // 'collapsed' or 'show-all'

  const projects = usersData?.users?.[0]?.projects || [];
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);

  const [isNewProjectCollapsed, setIsNewProjectCollapsed] = useState(true);
  const [isMessageCenterCollapsed, setIsMessageCenterCollapsed] = useState(true);

  const selectProject = (project) => {
    setActiveProject(project);
    setProjectsViewState('single-project'); // New state to indicate single project view
  };

  const toggleAllProjectsView = () => {
    if (projectsViewState !== 'show-all') {
      setSelectedProjects([...projects]);
      setProjectsViewState('show-all');
    } else {
      setSelectedProjects([]);
      setProjectsViewState('collapsed');
    }
    setActiveProject(null); // Reset active project when toggling all projects view
  };

  const toggleNewProjectCollapse = () => setIsNewProjectCollapsed(!isNewProjectCollapsed);
  const toggleMessageCenterCollapse = () => setIsMessageCenterCollapsed(!isMessageCenterCollapsed);

  useEffect(() => {
    console.log('Projects View State:', projectsViewState);
  }, [projectsViewState]);



  return (

    <div id="page-top">
      <div id="wrapper">


        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" >
          <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">


          </a>

          <li className="nav-item active">
            <div className="sidebar-heading">
              <img
                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20id%3D%22a%22%20data-name%3D%22Layer%201%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024.41%2024.41%22%3E%0A%20%20%3Cg%20id%3D%22b%22%20data-name%3D%22dashboard-2%22%3E%0A%20%20%20%20%3Cpath%20id%3D%22c%22%20data-name%3D%22Path-7%22%20d%3D%22M9.41%2C0H1.78C.80%2C0%2C0%2C.80%2C0%2C1.78v4.58c0%2C.98.80%2C1.78%2C1.78%2C1.78h7.63c.98%2C0%2C1.78-.80%2C1.78-1.78V1.78c0-.98-.80-1.78-1.78-1.78Z%22%20style%3D%22fill%3A%20%23fff%3B%20stroke-width%3A%200px%3B%22%2F%3E%0A%20%20%20%20%3Cpath%20id%3D%22d%22%20data-name%3D%22Path-8%22%20d%3D%22M9.41%2C10.16H1.78c-.98%2C0-1.78.80-1.78%2C1.78v10.68c0%2C.98.80%2C1.78%2C1.78%2C1.78h7.63c.98%2C0%2C1.78-.80%2C1.78-1.78v-10.68c0-.98-.80-1.78-1.78-1.78Z%22%20style%3D%22fill%3A%20%23fff%3B%20stroke-width%3A%200px%3B%22%2F%3E%0A%20%20%20%20%3Cpath%20id%3D%22e%22%20data-name%3D%22Path-9%22%20d%3D%22M22.63%2C16.27h-7.63c-.98%2C0-1.78.80-1.78%2C1.78v4.58c0%2C.98.80%2C1.78%2C1.78%2C1.78h7.63c.98%2C0%2C1.78-.80%2C1.78-1.78v-4.58c0-.98-.80-1.78-1.78-1.78Z%22%20style%3D%22fill%3A%20%23fff%3B%20stroke-width%3A%200px%3B%22%2F%3E%0A%20%20%20%20%3Cpath%20id%3D%22f%22%20data-name%3D%22Path-10%22%20d%3D%22M22.63%2C0h-7.63c-.98%2C0-1.78.80-1.78%2C1.78v10.68c0%2C.98.80%2C1.78%2C1.78%2C1.78h7.63c.98%2C0%2C1.78-.80%2C1.78-1.78V1.78c0-.98-.80-1.78-1.78-1.78Z%22%20style%3D%22fill%3A%20%23fff%3B%20stroke-width%3A%200px%3B%22%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                alt="Custom Icon"
                className="custom-icon"
                width="25"
                height="25"
                style={{ padding: '5px', marginBottom: '3px', marginRight: '10px' }}
              />
              <span>Dashboard</span>
            </div>
          </li>



          <hr className="sidebar-divider" />

          <div className="sidebar-heading">Project Navigation</div>


          {/* All Projects */}
          <li className="nav-item">
            <a className="nav-link collapsed" onClick={toggleAllProjectsView}>
              <i className="fas fa-fw fa-user icon-with-padding"></i>
              <span>All Projects</span>
            </a>
            <div className={`collapse ${projectsViewState === 'show-all' ? 'show' : ''}`} id="collapseYourProjects">
              <div className="py-2 collapse-inner rounded">
                <h6 className="collapse-header">Projects:</h6>
                {projects.map((project) => (
                  <div
                    key={project.projectId}
                    className={`collapse-item ${activeProject && activeProject.projectId === project.projectId ? 'active' : ''}`}
                    onClick={() => selectProject(project)}
                  >
                    {project.title}
                  </div>
                ))
                }

              </div>
            </div>
          </li>



          {/* Start a new project */}
          <li className="nav-item">
            <a className="nav-link collapsed" onClick={toggleNewProjectCollapse}>
              <i className="fas fa-fw fa-plus icon-with-padding"></i>
              <span>Start a new project</span>
            </a>

            <div className={`collapse ${isNewProjectCollapsed ? '' : 'show'}`} id="collapseNewProject">
              <div className=" py-2 collapse-inner rounded">
                <h6 className="collapse-header">Design:</h6>
                <a className="collapse-item" href="buttons.html">Questionnaire</a>
              </div>
            </div>
          </li>





          <hr className="sidebar-divider" />



          {/* Help Center */}

          <div className="message-center">

            <div className="sidebar-heading">Help center</div>


            <li className="nav-item">
              <a className="nav-link collapsed" onClick={toggleMessageCenterCollapse}>
                <i className="fas fa-fw fa-comment"></i>
                <span>Messages</span>
              </a>
              <div className={`collapse ${isMessageCenterCollapsed ? '' : 'show'}`} id="collapseMessageCenter">
                <div className=" py-2 collapse-inner rounded">
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




        {/* Right Sidebar */}
        <div className={`sidebar-right ${projectsViewState === 'single-project' ? 'full-width' : ''}`}>

          {projectsViewState === 'show-all' && selectedProjects.map(project => (
            <div key={project.projectId} className="project-container" onClick={() => selectProject(project)}>
              <img src={project.thumbnails[0]} alt={`Thumbnail of ${project.title}`} className="project-thumbnail" />
              <h6 className="project-title">{project.title}</h6>
            </div>
          ))}

          {projectsViewState === 'single-project' && activeProject && (
            <div className="active-project-details">
              <div className='project-header'>
                <h2>Summary</h2>
              </div>
              <div className='dashboard-layout'>
                {/* Column 1 */}
                <div className="column-1">

                  <div className="dashboard-item budget">
                    <span>Budget</span>

                    <span>
                      ${activeProject.budget && activeProject.budget.total ? activeProject.budget.total : 'Not available'}

                    </span>
                    <span>{activeProject.budget && activeProject.budget.date}</span>
                  </div>


                  <div className="dashboard-item uploads">
                    <span>Uploads</span>
                    <span>></span>
                  </div>

                  <div className="dashboard-item downloads">
                    <span>Downloads</span>
                    <span>></span>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="column-2">
                  <div className="dashboard-item view-gallery">
                    <span>View Gallery</span>
                    <span>></span>
                  </div>

                  <div className="dashboard-item view-invoices">
                    <div className="top-row">
                      <span>View Invoices</span>
                      <span>></span>
                    </div>
                    <div className="bottom-row">
                      <span>{activeProject.invoiceDate}</span>
                    </div>
                  </div>




                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}