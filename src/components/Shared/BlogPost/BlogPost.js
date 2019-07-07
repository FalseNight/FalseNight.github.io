import React from 'react';
import { withRouter } from 'react-router-dom';
import { BlogPostContainer, BlogCard, BlogPostContent, BackButton, BackButtonIcon, Flourish } from './BlogPost.styles';
import FlourishImage from '../../../assets/textures/flourish.png';

const BlogPost = (props) => {
    return (
        <BlogPostContainer>
            <Flourish src={FlourishImage} />
            <BackButton className="clickable text-unselectable" onClick={props.history.goBack}> 
                <BackButtonIcon className="fa fa-arrow-left" aria-hidden="true" /><span>Back</span>
            </BackButton>
            <BlogCard>
                <BlogPostContent>
                    {props.children}
                </BlogPostContent>
            </BlogCard>
        </BlogPostContainer>
    );
}

export default withRouter(BlogPost);