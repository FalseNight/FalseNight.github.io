import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage, YoutubeVideo } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import LastHymnImage from '../../../assets/images/portfolio/lasthymn.jpg';
import LastHymnDownload from '../../../assets/downloads/LastHymn.rar';

class LastHymn extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
		            <strong>Last Hymn<br/></strong>
	            </h2>
	            <BlogImage src={LastHymnImage} alt="Last Hymn" />
                <h2>
		            <strong>Overview<br/></strong>
	            </h2>
	            <p>
		            <em>Last Hymn</em> is a 2D RPG with Rhythm Battle Components built in. Developed in Unity as part of my Honors Senior Thesis, the game generates Rhythm Game Patterns similar to Dance Dance Revolution based off of a song input. This allows for unique enemy encounters and with the ability to customize attacks an infinite amount of battle content. The game takes place over the course of one-day that is repeated over and over as you try to solve the mystery of and prevent your own death.
		            <br />
	            </p>
                <YoutubeVideo src="https://www.youtube.com/embed/5zz0NZ14A-w" frameborder="0" allowfullscreen /><br/><br/>
	            <h2>
		            <strong>Project Downloads</strong><br/>
	            </h2>
                <p>
	                <a href={LastHymnDownload}>Download Last Hymn</a><br/>
                </p>  
                </BlogPost>
            </Page>
        );
    }
}

export default LastHymn;