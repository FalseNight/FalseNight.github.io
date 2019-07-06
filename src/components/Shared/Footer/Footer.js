import React, { Component } from 'react';

import ContactItem from "./ContactItem"
import { FooterContainer, SocialMediaWrapper } from './Footer.styles';
import socials from '../../../constants/socials';

class Footer extends Component {
    render () {
        return (
            <FooterContainer>
                <div>
                    Feel free to send me an email or reach out on social media
                </div>
                <SocialMediaWrapper>
                    { socials.map( social => <ContactItem key={social.name} icon={social.icon} text={social.text} url={social.url} />) }
                </SocialMediaWrapper>
            </FooterContainer>
        );
    }
}

export default Footer;