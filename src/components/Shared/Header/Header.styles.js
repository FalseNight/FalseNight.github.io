import styled from 'styled-components';
import breakpoints from '../../../constants/breakpoints';

export const HeaderContainer = styled.div`
    position: fixed;
    height: 88px;
    width: 100%;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 700;
    line-height: 1em;
    color: #333;

    -webkit-transition: all 300ms ease-in-out;
    -ms-transition: all 300ms ease-in-out;
    -moz-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;

    @media (max-width: ${breakpoints.sm}px){
        height: 56px;
    }

    &.isElevated {
        background-color: white;
        box-shadow: 0 3px 6px rgba(0,0,0,0.10);
    }
`;

export const HeaderLink = styled.p`
    border-radius: 4px;
    margin: 8px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 8px;
    padding-right: 8px;
    cursor: pointer;

    &:focus {
        outline:none;
    }

    &:hover {
        background: rgba(0, 0, 243, 0.2);
    }
`;
