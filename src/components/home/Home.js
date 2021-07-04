import React, { Component } from 'react';
import { withRouter } from 'react-router'

import { Flourish, HomeContent } from './Home.styles';
import { Page } from '../Shared/Page.styles';
import Header from "../Shared/Header/Header";
import About from "../Shared/About/About";
import DisplayCarousel from '../Shared/DisplayCarousel/DisplayCarousel';
import { PageSection } from '../Shared/Page.styles';
import blogPosts from '../../constants/blogPosts';

import FlourishImage from '../../assets/textures/flourish.png';

class Home extends Component {
    render = () => {      
        return (
            <Page>
                <Header />
                <HomeContent>
                    <Flourish src={FlourishImage} />
                    <About />
                    <PageSection>
                        <DisplayCarousel projects={blogPosts} showTags={true} />
                    </PageSection>
                </HomeContent>
            </Page>
        );
    }
}

export default withRouter(Home);