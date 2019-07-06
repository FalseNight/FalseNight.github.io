import React from 'react';

import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Project from "./Project/Project"

import "./projectsContainer.css"

const ProjectsContainer = ( { projects, activeLabels } ) => { 
    
    projects = projects.sort( (a, b) => a.highlight < b.highlight );

    const filterActiveProjects = project => {
        if(activeLabels.length === 0)
            return true;

        return isProjectActive(project, activeLabels);
    }

    const isProjectActive = (project, activeLabels) => {
        for(let i=0; i<project.tags.length; i++) {
            const tag = project.tags[i];
            if( activeLabels.indexOf(tag) > -1 )
                return true;
        }

        return false;
    }

    return (        
        <TransitionGroup className="projects-container">                          
                { projects.filter( filterActiveProjects ).map( project => 

                    <CSSTransition
                        key={project.title}
                        classNames='project-fade'
                        timeout={{ enter: 300, exit: 300 }} >

                            <Project key={project.title} project={project} />

                    </CSSTransition>
                ) }
        </TransitionGroup>
    );
}

export default ProjectsContainer;