import React from 'react';
import Preloader from "../../components/preloader";
import SVGThumbnail from './components/SVGThumbnail';
import "./style.css";

const AllProjects = ({ projects, onSelectProject, isLoading }) => {
    
    if (isLoading) {
        return <Preloader />;
    }

    return (
        <div className='all-projects-container'>
            {projects.map(project => (
                <div key={project.projectId} className="project-container" onClick={() => onSelectProject(project)}>
    {project.thumbnails && project.thumbnails.length > 0 ?
        <img src={project.thumbnails[0]} alt={`Thumbnail of ${project.title}`} className="project-thumbnail" /> :
        <SVGThumbnail initial={project.title.charAt(0).toUpperCase()} className="project-thumbnail" />
    }
    <h6 className="project-title">{project.title}</h6>
</div>
            ))}
        </div>
    );
};

export default AllProjects;
