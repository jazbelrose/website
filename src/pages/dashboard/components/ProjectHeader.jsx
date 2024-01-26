import React from 'react';

const ProjectHeader = ({ activeProject, parseStatusToNumber }) => {
  const projectInitial = activeProject?.title ? activeProject.title.charAt(0) : '';

  return (
    <div>
      <div className='project-header'>
        <h2>{activeProject?.title || "Summary"}</h2>
      </div>

      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 75 1344 600">
        <g>
          <ellipse className="initial-ellipse" cx="283.58" cy="337.17" rx="135" ry="135" />
          <text className="initial" x="285" y="332.5" textAnchor="middle" dominantBaseline="central">
            {projectInitial.toUpperCase()}
          </text>
        </g>
        <text className="project-status" transform={`translate(${activeProject?.status !== '100%' ? 875 : 856.58} 375.21)`}>
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
    </div>
  );
};

export default ProjectHeader;
