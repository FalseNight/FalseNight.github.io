import React from 'react';

import Label from "../Label";
import { ProjectContainer, ProjectImage, InformationBar } from './Project.styles';

const goToProject = project => {
    // eslint-disable-next-line
    location.href=project.route;
}

const Project = ({ project }) => {    
    return (
        <ProjectContainer className={"clickable text-unselectable highlight-card"} onClick={ ev => goToProject(project) }>
            <ProjectImage alt={project.title} src={`${project.thumbnail}`} />
            <InformationBar>
                <div>{project.title}</div>
                <div>
                    { project.tags.map( tag => <Label minimalStyle="true" key={tag} label={tag} /> ) }
                </div>
            </InformationBar>
        </ProjectContainer>
    );
}

export default Project;