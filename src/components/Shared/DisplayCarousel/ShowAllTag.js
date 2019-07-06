import React from 'react';

import "./label.css"

const ShowAllTag = ( {selected, onClick = event => event } ) => {

    let className = "label common-label "
    if(selected)
        className += "common-label-selected";

    return (
        <label className={className +" clickable"} onClick={ ev => onClick([]) }>Show All</label >    
    );
}

export default ShowAllTag;