import React from 'react';

function Project({project}) {
  return (
    <div>
        <img
            src={require(`../../assets/${project.thumbnail}`)}
            alt={project.name}
            className="img-thumbnail mx-1"
        />
        <ul className="project-details mx-1">
            <li><strong>Name:</strong> {project.name}</li>
            <li><strong>Website:</strong> <a href={project.website} rel="noreferrer" target="_blank">{project.website}</a></li>
            <li><strong>Description:</strong> {project.description}</li>
            <li><strong>Github Link:</strong> {project.isPrivate ? (
                `🔒 Private Repo` ) : (
                <a href={project.githubUrl} rel="noreferrer" target="_blank">{project.githubUrl}</a>
            )}
            </li>
        </ul>
    </div>
  );
}

export default Project;