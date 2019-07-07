import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import Rainfall3Image from '../../../assets/images/portfolio/rainfall3.png';
import Rainfall6Image from '../../../assets/images/portfolio/rainfall6.png';
import Rainfall7Image from '../../../assets/images/portfolio/rainfall7.png';
import Rainfall8Image from '../../../assets/images/portfolio/rainfall8.png';
import blogPosts from '../../../constants/blogPosts';

class Rainfall extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>Rainfall ~ Do You Still Like This World?<br/></strong>
				</h2>
				<BlogImage src={Rainfall8Image} alt="Rainfall" />
				<h2>
					<strong>Overview<br/></strong>
	            </h2>
	            <p>
		        Jin Akiyama is a college dropout turned light novel author. Sustained by his constant stream of pandering, unoriginal work, Jin enjoys a carefree life casually drifting through each day. Pursuing his ever-shifting whims, a conflict to forcibly reshape the future unfolds around him. Fantasy and reality blur in a battle royale of desire for a single truth: Do you still like this world?
				<br /><br />
				Taking place over the course of a year, you must make decisions on how and where to spend the time in your day. Fish and deepen the bonds between an apathetic author and a lonely old man. Stumble into a foot-race between the police and a strange eccentric girl after an intense night of drinking. Investigate rumors to unravel the identities of those imbued with the powers of gods. You must write fate and take the actions that will forge the future you desire.
				<br /><br />
				The game uses an Active Social System, where social interaction and dialogue evolve from turn-based to real-time events. Static paths have been replaced by dynamic opportunities. Gathering rumors reveals new chat options, ignoring characters may change their reactions, and deciding how and where you interact with characters will affect how they view you. It's not just what you say, but what you do that decides the outcome.
	            </p>
				<h2>
					<strong>Development Blog Posts<br/></strong>
				</h2>
                    {
                        blogPosts.filter((blogPost) => blogPost.tags.includes('rainfall')).map( (blogPost) => 
                            <React.Fragment><a href={blogPost.route}>{blogPost.title}</a><br/></React.Fragment>
                        )
                    }					
				<h2>
					<strong>Screenshots<br/></strong>
                </h2>
					<BlogImage src={Rainfall3Image} alt="Rainfall" />
					<BlogImage src={Rainfall6Image} alt="Rainfall" />
					<BlogImage src={Rainfall7Image} alt="Rainfall" />	            
                </BlogPost>
            </Page>
        );
    }
}

export default Rainfall;