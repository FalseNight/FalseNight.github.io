import React from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import { HeaderContainer, HeaderLink } from './Header.styles';

const Header = (props, currentScroll) => {
    return (
        <HeaderContainer className={classNames({ 'isElevated': currentScroll !== 0 })}>
            <HeaderLink key='home' onClick={ev => { props.history.push('/');} }>{'home'}</HeaderLink>
            <HeaderLink key='portfolio' onClick={ev => { props.history.push('/portfolio');} }>{'portfolio'}</HeaderLink>           
        </HeaderContainer>
    );  
}

export default withRouter(Header);