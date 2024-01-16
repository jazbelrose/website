import React, { useState, useEffect, } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import usersData from './users.json';
import teamData from './team.json';
import { ReactComponent as Snap } from "../../assets/svg/snap.svg";
import Map from "../../components/map";
import Headermain from '../../components/header';
import "./style.css";
import { useAuth } from "../../app/contexts/AuthContext";






export const Dashboard = () => {


  
 
 
  const { user } = useAuth();
  const userName = user ? `${user.firstName} ` : 'Guest';
  const [userData, setUserData] = useState(null);

  const [projectsViewState, setProjectsViewState] = useState('welcome'); // Initialize to 'welcome'

  const showWelcomeScreen = () => {
    setProjectsViewState('welcome');
    setIsNewProjectView(false); // Add this line
  };

  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isNewProjectCollapsed, setIsNewProjectCollapsed] = useState(true);
  const [isMessageCenterCollapsed, setIsMessageCenterCollapsed] = useState(true);

  const [isNewProjectView, setIsNewProjectView] = useState(false);

  const toggleNewProjectView = () => {
    setIsNewProjectView(!isNewProjectView);
    if (!isNewProjectView) {
      setProjectsViewState('new-project'); // Set to a new state like 'new-project'
    }
  };
  const selectProject = (project) => {
    setActiveProject(project);
    setProgress(parseInt(project.milestone, 10));
    setProjectsViewState('single-project');
    setIsNewProjectView(false);
  };

  const getMilestoneClass = (milestone, type) => {
    return progress >= milestone ? type : `${type}-incomplete`;
  };

  const projectInitial = activeProject?.title ? activeProject.title.charAt(0) : '';


  const toggleAllProjectsView = () => {
    if (projectsViewState !== 'show-all') {
      setSelectedProjects([...projects]);
      setProjectsViewState('show-all');
      setIsNewProjectView(false); // Reset new project view
      setActiveProject(null); // Reset active project
    } else {
      setSelectedProjects([]);
      setProjectsViewState('collapsed');
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


  const parseStatusToNumber = (statusString) => {
    const number = parseFloat(statusString.replace('%', ''));
    return number;
  };


  const activeProjectLocation = activeProject ? activeProject.location : null;


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

    <div id="page-top">
      <div id="wrapper">


        <ul className="navbar-nav" id="accordionSidebar" >

          <li className="nav-item-dashboard active" onClick={showWelcomeScreen}>
            <div className="sidebar-heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24.41 24.41"
                className="custom-icon"
                style={{ padding: '5px', marginBottom: '3px', marginRight: '10px', width: '25', height: '25' }}
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
        <div className={`sidebar-right ${projectsViewState === 'single-project' || isNewProjectView ? 'full-width' : ''}`}>
          {projectsViewState === 'welcome' && (
            <div className="welcome-screen">
              <div className="welcome-screen">
                <h1>Welcome to Your Dashboard!</h1>
                <p>Hello, and thank you for choosing ourplatform! We're excited to have you on board and look forward to helping you manage your projects efficiently.</p>

                <h2>Getting Started</h2>
                <p>Here's a quick guide to get you up and running:</p>
                <ul>
                  <li><strong>View Projects:</strong> Access all your projects in one place by clicking on 'All Projects'.</li>
                  <li><strong>Create New Project:</strong> Ready to start something new? Click 'Start a new project' and jump right in!</li>
                  <li><strong>Team Collaboration:</strong> Easily collaborate with your team members and track project progress.</li>
                </ul>

                <h2>Need Assistance?</h2>
                <p>Our Help Center is always available for your questions, or you can reach out to us directly through the Messages section.</p>

                <p>Let's make great things happen together!</p>

                {/* Optionally, you can add a "Get Started" button or similar call-to-action */}
                <button className="btn btn-primary">Explore Dashboard</button>
              </div>


            </div>
          )}


          {projectsViewState === 'show-all' && selectedProjects.map(project => (

            <div key={project.projectId} className="project-container" onClick={() => selectProject(project)}>
              <img src={project.thumbnails[0]} alt={`Thumbnail of ${project.title}`} className="project-thumbnail" />
              <h6 className="project-title">{project.title}</h6>
            </div>

          ))}


          {/*  Single Project*/}


          {projectsViewState === 'single-project' && activeProject && (
            <div className="active-project-details">
              <div className='project-header'>
                <h2>Summary</h2>
              </div>


              {/*  Title & Status*/}


              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 25 1344 674.33">




                {/* Initial inside Ellipse */}

                <g>
                  <g id="Ellipse" data-name="Ellipse">
                    <ellipse className="initial-ellipse" cx="283.58" cy="337.17" rx="135" ry="135" />
                  </g>

                  <g id="project-initial">
                    <text className="initial" x="285" y="332.5" textAnchor="middle" dominantBaseline="central">
                      {projectInitial.toUpperCase()}
                    </text>
                  </g>


                </g>

                {/* Project Title*/}


                <g id="project-title" transform="translate(283.58, 520)"> {/* Adjust Y coordinate for title positioning */}
                  {activeProject?.title.split(' ').map((word, index) => (
                    <text key={index} className="project-title" x="0" y={index * 30} textAnchor="middle">
                      <tspan>{word}</tspan>
                    </text>
                  ))}
                </g>

                {/* Status*/}


                <text className="project-status"
                  transform={`translate(${activeProject?.status !== '100%' ? 875 : 856.58} 375.21)`}>
                  <tspan x="0" y="0">{activeProject?.status || '0%'}</tspan>
                </text>

                {activeProject && (
                  <ellipse
                    cx="975"
                    cy="337.17"
                    rx="160"
                    ry="160"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="15"
                  >
                    <animate
                      attributeName="stroke-dasharray"
                      from="0, 1004"
                      to={`${parseStatusToNumber(activeProject.status) / 100 * 1002}, 1004`}
                      dur="1s"
                      begin="0s"
                      fill="freeze"
                    />
                  </ellipse>
                )}

              </svg>






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


              {/* Timeline */}
              <div className="timeline-container">

                <svg id="Timeline" data-name="Timeline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1344 674.33">

                  <g id="contour">
                    <path className="contour" d="M40,1.51h1264c21.26,0,38.5,17.3,38.5,38.63v594.06c0,21.34-17.24,38.63-38.5,38.63H40c-21.26,0-38.5-17.3-38.5-38.63V40.14C1.5,18.8,18.74,1.51,40,1.51Z" />
                  </g>
                  <g id="Milestones_" data-name="Milestones ">
                    <text className="milestones" transform="translate(75 110.33)"><tspan x="0" y="0">Milestones</tspan></text>
                  </g>
                  <path id="bubble_1" className={`bubbles ${getMilestoneClass(10, 'bubbles')}`} d="M295.88,379.43v10h-78.88c-2.47,21.45-20.7,38.11-42.82,38.11-23.81,0-43.11-19.3-43.11-43.11s18.23-42.02,41.11-43.06v-118.28h4v118.28c21.21.96,38.42,17.26,40.82,38.06h78.88Z" />
                  <path id="bubble_2" className={`bubbles ${getMilestoneClass(20, 'bubbles')}`} d="M455.65,379.43v10h-76.29c-2.39,20.7-19.44,36.94-40.51,38.04v121.62h-4v-121.59c-23.03-.88-41.42-19.83-41.42-43.07s19.3-43.11,43.11-43.11c22.12,0,40.35,16.66,42.82,38.11h76.29Z" />
                  <path id="bubble_3" className={`bubbles ${getMilestoneClass(40, 'bubbles')}`} d="M617.88,379.43v10h-78.88c-2.47,21.45-20.7,38.11-42.82,38.11-23.81,0-43.11-19.3-43.11-43.11s18.23-42.02,41.11-43.06v-118.28h4v118.28c21.21.96,38.42,17.26,40.82,38.06h78.88Z" />
                  <path id="bubble_4" className={`bubbles ${getMilestoneClass(60, 'bubbles')}`} d="M775.65,379.43v10h-76.29c-2.39,20.7-19.44,36.94-40.51,38.04v121.62h-4v-121.59c-23.03-.88-41.42-19.83-41.42-43.07s19.3-43.11,43.11-43.11c22.12,0,40.35,16.66,42.82,38.11h76.29Z" />
                  <path id="bubble_5" className={`bubbles ${getMilestoneClass(80, 'bubbles')}`} d="M938.88,379.43v10h-78.88c-2.47,21.45-20.7,38.11-42.82,38.11-23.81,0-43.11-19.3-43.11-43.11s18.23-42.02,41.11-43.06v-118.28h4v118.28c21.21.96,38.42,17.26,40.82,38.06h78.88Z" />
                  <path id="bubble_6" className={`bubbles ${getMilestoneClass(90, 'bubbles')}`} d="M1098.31,379.43v10h-76.29c-2.39,20.7-19.44,36.94-40.51,38.04v121.62h-4v-121.59c-23.03-.88-41.42-19.83-41.42-43.07s19.3-43.11,43.11-43.11c22.12,0,40.35,16.66,42.82,38.11h76.29Z" />
                  <path id="bubble_7" className={`bubbles ${getMilestoneClass(100, 'bubbles')}`} d="M1181.84,383.87c0,1.69-.10,3.36-.29,5-2.47,21.45-20.70,38.11-42.82,38.11-23.81,0-43.11-19.30-43.11-43.11s18.23-42.02,41.11-43.06v-118.28h4v118.28c21.21.96,38.42,17.26,40.82,38.06.19,1.64.29,3.31.29,5Z" />

                  <g id="Project_Initiation" data-name="Project Initiation" >
                    <text className={`status ${getMilestoneClass(10, 'status')}`} transform="translate(130.18 174.35)"><tspan x="0" y="0">Project</tspan><tspan x="0" y="31.09">Initiation</tspan></text>
                  </g>
                  <g id="Concept_Approval_" data-name="Concept Approval " >
                    <text className={`status ${getMilestoneClass(20, 'status')}`} transform="translate(284.73 582.8)"><tspan x="0" y="0">Concept</tspan><tspan x="-2.07" y="31.09">Approval</tspan></text>
                  </g>
                  <g id="First_Draft_Completion" data-name="First Draft Completion">
                    <text className={`status ${getMilestoneClass(40, 'status')}`} transform="translate(449.29 174.35)"><tspan x="0" y="0">First Draft</tspan><tspan x="-12.95" y="31">Completion</tspan></text>
                  </g>

                  <g id="Review_and_Feedback" data-name="Review and Feedback" >
                    <text className={`status ${getMilestoneClass(60, 'status')}`} transform="translate(594.08 582.8)"><tspan x="0" y="0">Review and</tspan><tspan x="8.6" y="31.09">Feedback</tspan></text>
                  </g>
                  <g id="Revisions_and_Modifications" data-name="Revisions and Modifications" >
                    <text className={`status ${getMilestoneClass(80, 'status')}`} transform="translate(741.65 174.35)"><tspan x="0" y="0">Revisions and</tspan><tspan x="1.57" y="31.09">Modifications</tspan></text>
                  </g>

                  <g id="Final_Review_and_Approval" data-name="Final Review and Approval" >
                    <text className={`status ${getMilestoneClass(90, 'status')}`} transform="translate(918.89 582.8)"><tspan x="0" y="0">Final Review</tspan><tspan x="-7.77" y="31.09">and Approval</tspan></text>
                  </g>
                  <g id="Project_Closure_and_Delivery" data-name="Project Closure and Delivery" >
                    <text className={`status ${getMilestoneClass(100, 'status')}`} transform="translate(1060.66 174.35)"><tspan x="0" y="0">Project Closure</tspan><tspan x="13.72" y="31.09">and Delivery</tspan></text>
                  </g>

                  <text className={`percentage ${getMilestoneClass(10, 'percentage')}`} transform="translate(151.21 393.94)"><tspan >10%</tspan></text>
                  <text className={`percentage ${getMilestoneClass(10, 'percentage')}`} transform="translate(314.27 393.94)"><tspan >20%</tspan></text>
                  <text className={`percentage ${getMilestoneClass(10, 'percentage')}`} transform="translate(470.99 393.94)"><tspan >40%</tspan></text>
                  <text className={`percentage ${getMilestoneClass(10, 'percentage')}`} transform="translate(633.38 393.94)"><tspan >60%</tspan></text>
                  <text className={`percentage ${getMilestoneClass(10, 'percentage')}`} transform="translate(792.77 393.94)"><tspan >80%</tspan></text>
                  <text className={`percentage ${getMilestoneClass(10, 'percentage')}`} transform="translate(957.16 393.94)"><tspan >90%</tspan></text>
                  <text className={`percentage ${getMilestoneClass(10, 'percentage')}`} transform="translate(1109.98 393.94)"><tspan >100%</tspan></text>
                </svg>
              </div>



              <div className='dashboard-layout'>


                {/* Column 3 */}

                <div className="column-3">
                  <div className="dashboard-item project-team">
                    <span className="project-team-title">Project Team</span>
                    <div className="team-members-container">
                      {teamData.members.map((member, index) => (
                        <div key={index} className="team-member">
                          <img src={member.thumbnail[0]} alt={member.name} className="team-member-thumbnail" />
                          <div className="team-member-info">
                            <span className="team-member-name">{member.name}</span>
                            <span className="team-member-role">{member.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>


                {/* Column 4 */}
                <div className="column-4">
                  <div className="dashboard-item finish-line">
                    <span>Finish line</span>
                    <span>{activeProject?.finishline || 'Date not available'}</span>
                  </div>
                </div>




              </div>

              <div className='dashboard-layout'>


                {/* Column 5 - Location */}
                <div className="column-5">
                  <div className="dashboard-item location">

                    {activeProjectLocation && <Map
                      location={{ lat: activeProject.location.lat, lng: activeProject.location.lng }}
                      address={activeProject.address}
                    />}
                  </div>
                </div>


                {/* Column 6 */}

                <div className="column-6">

                  <div className="dashboard-item floorplan">
                    <span>Floorplan</span>
                    <span>></span>


                  </div>


                  <div className="dashboard-item links">
                    <span>Links</span>
                    <span>></span>
                  </div>


                </div>



                {/* Column 7*/}

              </div>
              <div className="column-7">
                <div className="dashboard-item notes
                ">
                  <span>Notes</span>

                </div>


              </div>





            </div>
          )}


          {/*  New Project*/}

          {isNewProjectView && (
            <div className="active-project-details">
              <div className='new-project-header'>
                <h2>New Project</h2>
              </div>


              {/*  Greetings  */}


              <div className="column-0">



                <div className="dashboard-item greetings">

                  <div className="greetings-text">
                    <span className="greeting-line">Hello <span className="username"> {userName} </span> !</span>
                    <span className="greeting-line">Let’s get a new project started!</span>
                    <span className="greeting-line">Upload floorplans, create your design notes, drop links... Upload files, inspiration images and just submit!</span>

                  </div>

                  <div className="snap-container">
                    <Snap />
                  </div>
                </div>



                <div className="dashboard-item project-name
                ">
                  <span>Project Name</span>
                  <span>+</span>

                </div>


              </div>







              <div className='dashboard-layout'>






                {/* Column 1 */}

                <div className="new-project-col1">



                  <div className="dashboard-item new-project-budget">
                    <span>Budget</span>
                    <span>+</span>
                  </div>

                  <div className="dashboard-item new-project-finish-line">
                    <span>Finish Line</span>
                    <span>+</span>
                  </div>
                </div>




                {/* Column 2 */}

                <div className="new-project-col2">

                  <div className="dashboard-item new-project-uploads">
                    <span>Upload your files</span>
                    <span>+</span>
                  </div>


                </div>





              </div>





              <div className='dashboard-layout'>


                {/* Column-3 - Location */}
                <div className="column-5">
                  <div className="dashboard-item location">
                    {isNewProjectView &&
                      <Map
                        location={{ lat: 34.0522, lng: -118.2437 }} // Coordinates for Los Angeles
                        address="Los Angeles, CA"
                      />
                    }
                    {activeProjectLocation &&
                      <Map
                        location={{ lat: activeProject.location.lat, lng: activeProject.location.lng }}
                        address={activeProject.address}
                      />
                    }
                  </div>
                </div>


                {/* Column 4 */}
                <div className="column-4">
                  <div className="dashboard-item new-project-floor-plan">
                    <span>Floor Plan</span>
                    <span>+</span>

                  </div>
                </div>




              </div>

              <div className='dashboard-layout'>






                {/* Column 7*/}

              </div>
              <div className="column-7">
                <div className="dashboard-item notes
                ">
                  <span>Notes</span>
                  <span>+</span>

                </div>


              </div>





            </div>
          )}



        </div>
      </div>
    </div>
  );
}
