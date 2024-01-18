

import React, { useState, } from 'react';
import teamData from './team.json';
import Map from "../../components/map";



const SingleProject = ({ activeProject }) => {

    const isSmallScreen = window.innerWidth <= 768;
    const activeProjectLocation = activeProject ? activeProject.location : null;
    const projectInitial = activeProject?.title ? activeProject.title.charAt(0) : '';
    const parseStatusToNumber = (statusString) => {
        const number = parseFloat(statusString.replace('%', ''));
        return number;
    };


    const progress = activeProject ? parseStatusToNumber(activeProject.milestone) : 0;

    const getMilestoneClass = (milestone, type) => {
        return progress >= milestone ? type : `${type}-incomplete`;
    };




    return (




        <div className="active-project-details">
            <div className='project-header'>
                <h2>{activeProject?.title || "Summary"}</h2> {/* Default to "Summary" if title is not available */}
            </div>

            {/*  Title & Status*/}


            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 75 1344 600">




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

                    <g id="Project_Initiation" data-name="Project Initiation">
                        <text
                            className={`status ${getMilestoneClass(10, 'status')}`}
                            transform={`translate(${isSmallScreen ? '110.18' : '130.18'} 174.35)`}>
                            <tspan x="0" y="0">Project</tspan>
                            <tspan x="0" y="31.09">Initiation</tspan>
                        </text>
                    </g>
                    <g id="Concept_Approval_" data-name="Concept Approval ">
                        <text
                            className={`status ${getMilestoneClass(20, 'status')}`}
                            transform={`translate(${isSmallScreen ? '264.73' : '284.73'} 582.8)`}>
                            <tspan x="0" y="0">Concept</tspan>
                            <tspan x="-2.07" y="31.09">Approval</tspan>
                        </text>
                    </g>

                    <g id="First_Draft_Completion" data-name="First Draft Completion">
                        <text
                            className={`status ${getMilestoneClass(40, 'status')}`}
                            transform={`translate(${isSmallScreen ? '429.29' : '449.29'} 174.35)`}>
                            <tspan x="0" y="0">First Draft</tspan>
                            <tspan x="-12.95" y="31">Completion</tspan>
                        </text>
                    </g>

                    <g id="Review_and_Feedback" data-name="Review and Feedback">
                        <text
                            className={`status ${getMilestoneClass(60, 'status')}`}
                            transform={`translate(${isSmallScreen ? '574.08' : '594.08'} 582.8)`}>
                            <tspan x="0" y="0">Review and</tspan>
                            <tspan x="8.6" y="31.09">Feedback</tspan>
                        </text>
                    </g>

                    <g id="Revisions_and_Modifications" data-name="Revisions and Modifications">
                        <text
                            className={`status ${getMilestoneClass(80, 'status')}`}
                            transform={`translate(${isSmallScreen ? '721.65' : '741.65'} 174.35)`}>
                            <tspan x="0" y="0">Revisions and</tspan>
                            <tspan x="1.57" y="31.09">Modifications</tspan>
                        </text>
                    </g>

                    <g id="Final_Review_and_Approval" data-name="Final Review and Approval">
                        <text
                            className={`status ${getMilestoneClass(90, 'status')}`}
                            transform={`translate(${isSmallScreen ? '900.89' : '918.89'} 582.8)`}>
                            <tspan x="0" y="0">Final Review</tspan>
                            <tspan x="-7.77" y="31.09">and Approval</tspan>
                        </text>
                    </g>

                    <g id="Project_Closure_and_Delivery" data-name="Project Closure and Delivery">
                        <text
                            className={`status ${getMilestoneClass(100, 'status')}`}
                            transform={`translate(${isSmallScreen ? '1040.66' : '1060.66'} 174.35)`}>
                            <tspan x="0" y="0">Project Closure</tspan>
                            <tspan x="13.72" y="31.09">and Delivery</tspan>
                        </text>
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
    );
};
export default SingleProject;