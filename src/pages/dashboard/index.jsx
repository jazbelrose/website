import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ReactComponent as Snap } from "../../assets/svg/snap.svg";
import "./style.css";
import { useAuth } from "../../app/contexts/AuthContext";
import WelcomeScreen from './Welcome';
import NewProject from './NewProject';
import AllProjects from './AllProjects';
import SingleProject from './SingleProject';




export const Dashboard = () => {


  const { user } = useAuth();
  const userName = user ? `${user.firstName} ` : 'Guest';
  const [userData, setUserData] = useState(null);
  const [projectsViewState, setProjectsViewState] = useState('welcome');
  const [isNewProjectView, setIsNewProjectView] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [isNewProjectCollapsed, setIsNewProjectCollapsed] = useState(true);
  const [isMessageCenterCollapsed, setIsMessageCenterCollapsed] = useState(true);
  const allProjectsToggleRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);




  const toggleNewProjectView = () => {
    setIsNewProjectView(!isNewProjectView);
    if (!isNewProjectView) { setProjectsViewState('new-project'); }
  };

  const selectProject = (project) => {
    setActiveProject(project);
    setProjectsViewState('single-project');
  };

  const showWelcomeScreen = () => {
    setProjectsViewState('welcome');
    setIsNewProjectView(false);
    setActiveProject(null);
    setSelectedProjects([]); // Reset the selected projects
  };



  const toggleAllProjectsView = () => {
    if (projectsViewState === 'show-all') {
      showWelcomeScreen();

      if (allProjectsToggleRef.current) {
        allProjectsToggleRef.current.blur();
      }
    } else {
      setSelectedProjects([...projects]);
      setProjectsViewState('show-all');
      setIsNewProjectView(false);
      setActiveProject(null);
    }
  };


  const toggleNewProjectCollapse = () => {
    setIsNewProjectCollapsed(!isNewProjectCollapsed);
    if (!isNewProjectView) {
      toggleNewProjectView();
      setProjectsViewState('collapsed');
      setActiveProject(null); // Reset active project
    }
  };

  const toggleMessageCenterCollapse = () => setIsMessageCenterCollapsed(!isMessageCenterCollapsed);




  // Fetch User Data

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://rvnpu2j92m.execute-api.us-west-1.amazonaws.com/default/userProfiles?userId=${user.userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data.Items[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [user.userId]); // Corrected dependency array

  // Fetch Project Details
  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);

      try {
        if (userData && userData.projects) {
          const projectsData = await Promise.all(userData.projects.map(async (projectId) => {
            const response = await fetch(`https://gui4kdsekj.execute-api.us-west-1.amazonaws.com/default/Projects?projectId=${projectId}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch project data for projectId: ${projectId}`);
            }
            return await response.json();
          }));

          setProjects(projectsData.map(data => data.Items[0]));
        }
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
      setIsLoading(false);
    };

    if (userData && userData.projects) {
      fetchProjects();
    }
  }, [userData]); // Dependency on userData



  useEffect(() => {
    console.log('Projects View State:', projectsViewState);
  }, [projectsViewState]);

  useEffect(() => {

    if (activeProject || isNewProjectView) {
      const rightSidebar = document.querySelector('.sidebar-right');
      if (rightSidebar) {
        rightSidebar.scrollTop = 0;
      }
    }
  }, [activeProject, isNewProjectView]);



  console.log(user); // Add this inside your component to log the user object
  useEffect(() => {
    console.log('User updated:', user);
  }, [user]);




  return (



    /* Left Side Navigation */


    <div id="page-top">
      <div id="wrapper">


        <ul className="navbar-nav" id="accordionSidebar" >

          <li className={`nav-item-dashboard ${projectsViewState === 'welcome' ? 'active' : ''}`} onClick={showWelcomeScreen}>
            <div className="sidebar-heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24.41 24.41"
                className="custom-icon"
                style={{ padding: '5px', marginBottom: '3px', width: '25', height: '25' }}
              >
                <g id="dashboard-2">
                  <path id="Path-7" d="M9.41,0H1.78C.80,0,0,.80,0,1.78v4.58c0,.98.80,1.78,1.78,1.78h7.63c.98,0,1.78-.80,1.78-1.78V1.78c0-.98-.80-1.78-1.78-1.78Z" fill="#fff" />
                  <path id="Path-8" d="M9.41,10.16H1.78c-.98,0-1.78.80-1.78,1.78v10.68c0,.98.80,1.78,1.78,1.78h7.63c.98,0,1.78-.80,1.78-1.78v-10.68c0-.98-.80-1.78-1.78-1.78Z" fill="#fff" />
                  <path id="Path-9" d="M22.63,16.27h-7.63c-.98,0-1.78.80-1.78,1.78v4.58c0,.98.80,1.78,1.78,1.78h7.63c.98,0,1.78-.80,1.78-1.78v-4.58c0-.98-.80-1.78-1.78-1.78Z" fill="#fff" />
                  <path id="Path-10" d="M22.63,0h-7.63c-.98,0-1.78.80-1.78,1.78v10.68c0,.98.80,1.78,1.78,1.78h7.63c.98,0,1.78-.80,1.78-1.78V1.78c0-.98-.80-1.78-1.78-1.78Z" fill="#fff" />
                </g>
              </svg>
              <span>Dashboard</span>

            </div>
          </li>




          <hr className="sidebar-divider" />

          <div className="sidebar-heading">Project Navigation</div>
   {/* Start a new project */}
   <li className="nav-item">
            <a className="nav-link collapsed" onClick={toggleNewProjectView}>
              <i className="fas fa-fw fa-plus icon-with-padding"></i>
              <span>Start a new project</span>
            </a>
          </li>


          {/* All Projects */}

          <li className={`nav-item ${projectsViewState === 'show-all' ? 'active' : ''}`}>
            <a className="nav-link collapsed" onClick={toggleAllProjectsView} ref={allProjectsToggleRef}>
              <i className="fas fa-fw fa-user icon-with-padding"></i>
              <span>All Projects</span>
            </a>
            <div className={`collapse ${projectsViewState === 'show-all' ? 'show' : ''}`} id="collapseYourProjects">
              <div className="py-2 collapse-inner rounded">

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

       
          <hr className="sidebar-divider" />



          {/* Help Center */}

          <div className="message-center">

            <div className="sidebar-heading">Help center</div>


            <li className="nav-item">
              <a className="nav-link collapsed" onClick={toggleMessageCenterCollapse}>
                <i className="fas fa-fw fa-comment"></i>
                <span>Messages</span>
              </a>
            </li>
          </div>

        </ul>




        {/* Right Sidebar */}


        <div className={`sidebar-right ${projectsViewState === 'single-project' || projectsViewState === 'new-project' || projectsViewState === 'welcome' || projectsViewState === 'show-all' ? 'full-width' : ''}`}>
          {projectsViewState === 'welcome' && <WelcomeScreen userName={userName} />}
          {projectsViewState === 'new-project' && <NewProject userName={userName} isNewProjectView={isNewProjectView} />}
          {projectsViewState === 'show-all' && <AllProjects projects={selectedProjects} onSelectProject={selectProject} isLoading={isLoading} />}
          {projectsViewState === 'single-project' && activeProject && <SingleProject activeProject={activeProject} />}
          {/* ... other views ... */}
        </div>
      </div>
    </div>
  );
}



