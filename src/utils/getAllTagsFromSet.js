const getAllTagsFromSet = set => {
    const tags = new Set();
    set.forEach( item => item.tags.forEach( tag => tags.add(tag) ) );
    return tags;
}

export default getAllTagsFromSet;