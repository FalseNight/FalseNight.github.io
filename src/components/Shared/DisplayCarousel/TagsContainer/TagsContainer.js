import React from 'react';

import Label from '../Label';
import ShowAllTag from '../ShowAllTag';
import { TagsContainerWrapper } from './TagsContainer.styles';

const TagsContainer = ( {tags, activeLabels, onLabelClick} ) => {     
    
    const parseToArray = tags => {
        const labelsArray = [];

        for (let tag of tags)
            labelsArray.push(tag);
        return labelsArray
    }

    const labelsArray = parseToArray(tags);

    return (
        <TagsContainerWrapper className="text-unselectable">
            <ShowAllTag selected={ activeLabels.length === 0 } onClick={ onLabelClick } />
            { labelsArray.map( tag =>
                <Label isCommon="true" key={ tag }  label={ tag } selected={ activeLabels.includes(tag) } onClick={ onLabelClick } /> 
            )}
        </TagsContainerWrapper>
    );
}

export default TagsContainer;