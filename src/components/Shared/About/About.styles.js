import styled from 'styled-components';
import breakpoints from '../../../constants/breakpoints';
import { PageSection } from '../Page.styles';

export const AboutContainer = styled(PageSection)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfilePicture = styled.img`
    height: 300px;
    width: 424px;

    margin-right: 60px;

    border-radius: 360px;
    border: 4px solid rgba(0, 0, 0, 0.6);

    @media (max-width: ${breakpoints.sm}px){
        display: none;
    }
`;

export const AboutText = styled.p`
    font-size: 11px;
    line-height: 2em;
    text-transform: uppercase;
    color: #333;
`;

export const Title = styled.h1`
    font-size: 32px;
    line-height: 1.5em;
`;

export const Subtitle = styled.h2`
    font-size: 20px;
`;