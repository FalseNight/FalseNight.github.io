import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';

export const Page = styled.div`
    height: 100%;
    width: 100%;

    overflow-y: auto;
    overflow-x: hidden;

    margin: 0;
    padding: 0;
`;

export const PageSection = styled.div`
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 320px;
    padding-right: 320px;

    @media (max-width: ${breakpoints.lg}px){
        padding-top: 32px;
        padding-bottom: 32px;
        padding-left: 192px;
        padding-right: 192px;
    }

    @media (max-width: ${breakpoints.md}px){
        padding-top: 32px;
        padding-bottom: 32px;
        padding-left: 64px;
        padding-right: 64px;
    }

    @media (max-width: ${breakpoints.sm}px){
        padding-top: 32px;
        padding-bottom: 32px;
        padding-left: 24px;
        padding-right: 24px;
    }

    @media (max-width: ${breakpoints.xs}px){
        padding-top: 24px;
        padding-bottom: 24px;
        padding-left: 16px;
        padding-right: 16px;
    }  
`;
