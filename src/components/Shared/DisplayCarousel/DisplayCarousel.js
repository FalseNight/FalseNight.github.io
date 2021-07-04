import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'

import { DisplayCarouselContainer, TagsWrapper } from './DisplayCarousel.styles';
import TagsContainer from './TagsContainer/TagsContainer';
import ProjectsContainer from './ProjectsContainer';

import getAllTagsFromSet from '../../../utils/getAllTagsFromSet';

class DisplayCarousel extends PureComponent {
    constructor(props) {
        super(props);

        this.state = { activeLabels: [] }
    }

    onLabelClick = tag => {
        const activeLabels = tag;
        this.setState( { activeLabels } );
        this.forceUpdate();
    }

    clearSelectedLabels  = () => {
        this.setState( { activeLabels: [] } );
    }

    _addRemoveLabel = (tag, activeLabels) => {
        const index = activeLabels.indexOf(tag);
        if( index > -1 )
            activeLabels.splice(index, 1);
        else
            activeLabels.push(tag);
        return activeLabels;
    }

    render () {      
        const { projects, showTags } = this.props;
        const { activeLabels } = this.state;

        const tags = getAllTagsFromSet(projects);
        return (
            <DisplayCarouselContainer>
                {showTags && 
                    <TagsWrapper>
                        <TagsContainer tags={tags} activeLabels={activeLabels} onLabelClick={this.onLabelClick} />
                    </TagsWrapper>
                }
                <ProjectsContainer projects={projects} activeLabels={activeLabels} />
            </DisplayCarouselContainer>
        );
    }
}

DisplayCarousel.propTypes = {
    projects: PropTypes.array.isRequired,
    showTags: PropTypes.bool
};

export default withRouter(DisplayCarousel);