import React from 'react';

import profilePic from "../../../assets/images/profile.png";
import { AboutContainer, ProfilePicture, AboutText, Title, Subtitle } from './About.styles';

const About = () => {
    return (
        <AboutContainer>        
            <ProfilePicture alt="Profile Picture" src={profilePic} />
            <AboutText>
                <Title>Tyler Pinho</Title>
                <Subtitle>senior software engineer</Subtitle>
                Fullstack software engineer moonlighting as a hobbyist game developer<br/>
                Currently working on Rainfall, a social-action RPG<br/>
                <a href='/rainfall'>Check out our project</a>
            </AboutText>                
        </AboutContainer>
    );
}

export default About;