import styled from 'styled-components';
import { PageSection } from '../../Shared/Page.styles';

export const FooterContainer = styled(PageSection)`
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: 16px;

    font-size: 11px;
    line-height: 2em;
    text-transform: uppercase;
    color: #333;
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-flow: wrap;
`;