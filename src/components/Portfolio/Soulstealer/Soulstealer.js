import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import SoulstealerImage from '../../../assets/images/portfolio/soulstealer.jpg';
import SoulstealerDownload from '../../../assets/downloads/Soulstealer.rar';

class Soulstealer extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
		            <strong>Soulstealer<br/></strong>
	            </h2>
	            <BlogImage src={SoulstealerImage} alt="Soulstealer" />
                <h2>
		            <strong>Overview</strong><br/>
	            </h2>
	            <p>
		            You are a soul cast in the depths of Hades along with the other lost sinners. In order to escape you must make a suitable offering to the Gods. But as a simple soul you are weak and fragile. Use your powers of soul possession to take over the other enemies wandering around the depths of Hades and use their abilities to collect the 3 offerings required to escape.  A game developed for the Ludum Dare 32 Game Jam where I served as Project Lead, Programmer, and Level Designer.
		            <br />
	            </p>
	            <h2>
		            <strong>Project Downloads</strong><br/>
	            </h2>
                <p>
	                <a href={SoulstealerDownload}>Download Soulstealer</a><br/>
                </p>
                </BlogPost>
            </Page>
        );
    }
}

export default Soulstealer;