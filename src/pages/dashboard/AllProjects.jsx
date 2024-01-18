import React from 'react';
import Preloader from "../../components/preloader";

const AllProjects = ({ projects, onSelectProject, isLoading }) => {
    
    if (isLoading) {
        return <Preloader />;
    }

    // Once loading is complete, display the projects
    return (
        <div className='all-projects-container'>
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
