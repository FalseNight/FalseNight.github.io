import React, { Component } from 'react';
import { withRouter } from 'react-router'

import { Flourish, HomeContent } from './Home.styles';
import { Page } from '../Shared/Page.styles';
import Header from "../Shared/Header/Header";
import About from "../Shared/About/About";
import DisplayCarousel from '../Shared/DisplayCarousel/DisplayCarousel';

import blogPosts from '../../constants/blogPosts';
import Footer from '../Shared/Footer/Footer';

import FlourishImage from '../../assets/textures/flourish.png';

class Home extends Component {
    render = () => {      
        return (
            <Page>
                <Header />
                <HomeContent>
                    <Flourish src={FlourishImage} />
                    <About />
                    <DisplayCarousel projects={blogPosts}/>
                    <Footer />
                </HomeContent>
            </Page>
        );
    }
}

export default withRouter(Home);