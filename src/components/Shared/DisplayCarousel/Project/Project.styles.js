import styled from 'styled-components';
import breakpoints from '../../../../constants/breakpoints';

export const ProjectContainer = styled.div`
    height: 256px;

    position: relative;

    border-radius: 4px;
    overflow: hidden;

    box-shadow: 0 3px 6px rgba(0,0,0,0.32), 0 3px 4px rgba(0,0,0,0.34);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 12px 28px rgba(0,0,0,0.25), 0 8px 10px rgba(0,0,0,0.22);
    }

    grid-column-end: span 2;
    @media (max-width: ${breakpoints.sm}px){
        grid-column-end: span 1;
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;

    display: block;
    object-fit: cover;
`;

export const InformationBar = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 20%;
    z-index: 1;

    background-color: rgba(0, 0, 0, 0.50);
    color: white;

    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    position: absolute;
    left: 0px;
    bottom: 0px;   

    padding-left: 16px;
    padding-right: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LabelWrapper = styled.div`
    white-space: nowrap;
`;
