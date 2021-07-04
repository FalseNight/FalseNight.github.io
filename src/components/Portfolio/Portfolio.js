import React, { Component } from 'react';
import { withRouter } from 'react-router'

import { Flourish, PortfolioContent } from './Portfolio.styles';
import { Page } from '../Shared/Page.styles';
import Header from "../Shared/Header/Header";
import About from "../Shared/About/About";
import DisplayCarousel from '../Shared/DisplayCarousel/DisplayCarousel';
import { PageSection } from '../Shared/Page.styles';
import portfolio from '../../constants/portfolio';

import FlourishImage from '../../assets/textures/flourish.png';

class Portfolio extends Component {
    render = () => {      
        return (
            <Page>
                <Header />
                <PortfolioContent>
                    <Flourish src={FlourishImage} />
                    <About />
                    <PageSection>
                        <DisplayCarousel projects={portfolio}/>
                    </PageSection>
                </PortfolioContent>
            </Page>
        );
    }
}

export default withRouter(Portfolio);