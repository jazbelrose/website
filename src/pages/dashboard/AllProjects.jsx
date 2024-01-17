import React from 'react';


const AllProjects = ({ projects, onSelectProject }) => {
    return (
        <div>
            {projects.map(project => (
                <div key={project.projectId} className="project-container" onClick={() => onSelectProject(project)}>
                    <img src={project.thumbnails[0]} alt={`Thumbnail of ${project.title}`} className="project-thumbnail" />
                    <h6 className="project-title">{project.title}</h6>
                </div>
            ))}
        </div>
    );
};

export default AllProjects;
