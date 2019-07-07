import styled from 'styled-components';
import { PageSection } from '../Page.styles';
import breakpoints from '../../../constants/breakpoints';

export const BlogPostContainer = styled(PageSection)`
    display: grid;
    grid-template-columns: auto;
    background-color: rgba(0, 0, 0, 0.08);
    padding-top: 88px;
    font-size: 16px;

    @media (max-width: ${breakpoints.lg}px){
        padding-top: 88px;
    }

    @media (max-width: ${breakpoints.md}px){
        padding-top: 88px;
    }

    @media (max-width: ${breakpoints.sm}px){
        padding-top: 56px;
    }

    @media (max-width: ${breakpoints.xs}px){
        padding-top: 56px;
    }  
`;

export const BlogCard = styled.div`
    background-color: white;       
    border-radius: 4px;
    border-color: transparent;
    overflow: hidden;
    box-shadow: 0 3px 6px rgba(0,0,0,0.32), 0 3px 4px rgba(0,0,0,0.34);
`;

export const BlogPostContent = styled.div`
    padding: 32px;
`;

export const BackButton = styled.div`
    display: flex;
    justify-content: start;
    padding: 16px;
    justify-self: start;

    margin-top: 8px;
    margin-bottom: 8px;
    padding-left: 8px;
    padding-right: 8px;

    border-radius: 4px;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 200ms ease-in-out;

    &:hover {
        background: rgba(0, 0, 243, 0.2);
        transition: all 200ms ease-in;
    }
`;

export const BackButtonIcon = styled.i`
    margin-right: 8px;
    font-size: 16px;
`;

export const BlogImage = styled.img`
    max-width: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${breakpoints.lg}px){
        max-width: 60%;
    }
`;

export const YoutubeVideo = styled.iframe`
    width: 100%;
    height: 300px;
    display: flex;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${breakpoints.sm}px){
        width: 60%;
        height: 400px;
    }
`;
