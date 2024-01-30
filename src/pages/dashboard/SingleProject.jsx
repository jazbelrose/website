
import React, { useState, useEffect } from 'react';
import teamData from './team.json';
import ProjectHeader from './components/SingleProject/ProjectHeader';
import BudgetComponent from './components/SingleProject/BudgetComponent';
import FinishLineComponent from './components/SingleProject/FinishLineComponent';
import UploadsComponent from './components/SingleProject/UploadsComponent';
import Timeline from './components/SingleProject/Timeline';
import DescriptionComponent from './components/SingleProject/DescriptionComponent';
import LocationComponent from './components/SingleProject/LocationComponent';






const SingleProject = ({ activeProject, userId, onProjectDeleted }) => {

  
    const parseStatusToNumber = (statusString) => {
        return statusString ? parseFloat(statusString.replace('%', '')) : 0;
    };


    return (


        <div className="active-project-details">


            <ProjectHeader

                activeProject={activeProject}
                parseStatusToNumber={parseStatusToNumber}
                userId={userId}
                onProjectDeleted={onProjectDeleted} />

            <div className='dashboard-layout'>


                <div className="column-1">


                    <BudgetComponent
                        activeProject={activeProject}
                       
                    />




                    <UploadsComponent
                       
                        activeProject={activeProject}
                    />




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





            <Timeline
                activeProject={activeProject}
                parseStatusToNumber={parseStatusToNumber}
            />





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

                    <FinishLineComponent activeProject={activeProject} />

                </div>





            </div>

            <div className='dashboard-layout'>


                <LocationComponent activeProject={activeProject} />

          

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



            </div>




            <DescriptionComponent activeProject={activeProject} />



        </div>
    );
};


export default SingleProject;