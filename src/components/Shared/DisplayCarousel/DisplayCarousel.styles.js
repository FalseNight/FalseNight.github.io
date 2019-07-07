import styled from 'styled-components';
import { PageSection } from '../../Shared/Page.styles';

export const DisplayCarouselContainer = styled(PageSection)`
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 32px;
`;

export const TagsWrapper = styled.div`
    justify-self: start;
`;
