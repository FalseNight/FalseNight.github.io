import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import BustsImage from './images/busts.png';
import CityImage from './images/city.png';
import HeightChartImage from './images/Height Chart.png';
import InsightsImage from './images/insights.png';
import UndergroundImage from './images/underground.png';
import ChoicesImage from './images/choices.jpg';

class Rainfall2019 extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>Rainfall: 2019 Year In Review<br/></strong>
				</h2>
				<h2>
					<strong>Overview<br/></strong>
				</h2>
				<p>
				Some fun stats of what we accomplished in 2019:
                </p>
                <ul>
                    <li>237 pages of dialogue written</li>
                    <li>11 new characters added</li>
                    <li>110 master branch commits</li>
                    <li>5 blog posts posted about the game</li>
                    <li>9 locations added and revamped city</li>
                </ul>		
                <p>
                Rainfall has undergone significant changes in 2019, we’ve put a lot of effort into trying to map out the rest of the story as well as trying to figure out what are the character motivations and purposes of Jin and the surrounding cast. While this did require us to redo parts of the Tutorial Arc and Mari’s Arc it has allowed us to make a more cohesive and more impactful story as well as better flesh out what it is we want to do with the game.
                </p>
                <p>
Going into 2020, now that we have our full cast of characters decided, most of our locations mapped out, and have completed our Active Social System,  we want to be able to solidify the game all the way up until the end of Arc 4 leaving us with the final arc as well as polishing the rest of the game. Originally we wanted to produce a demo of the game in 2019 but have opted to delay that until 2020 so we can put our best foot forward with both the combat and social sides of the game.
                </p>
                <p>
                With that in mind these are some of our major accomplishments in 2019.
                </p>
				<h2>
					<strong>Major Milestones<br/></strong>
				</h2>
                <h3>
                Full Cast of Characters<br/>
				</h3>
                <BlogImage src={HeightChartImage} alt="Rainfall Height Chart" />	
				<p>
                We started out the year having only eight characters created and by the end of the year we have well over 19 along with proper character arcs for each. This is our, hopefully, final cast of main and secondary characters.There are still other tertiary characters that haven’t been designed yet but this will form the recurring cast of characters that make up the bulk of Rainfall’s scenes. With the inclusion of these new characters we also worked on introducing many of them sooner in the story which does require rearranging the story scenes a bit to provide better consistency and to allow for a more natural character progression.
				</p>
                <BlogImage src={BustsImage} alt="Rainfall New Busts" />	
				<p>
                Another major gain over the course of the year has been the design of our character’s Visual Novel styled busts. Jin received a fresh coat of paint recently along with parts of our UI to replace our previous dialogue bubbles. One goal of the new UI is to customize it based off of who is currently talking as well as give us a more unique visual style than what we had previously.
				</p>
				<h3>
                Active Social System<br/>
				</h3>
                <BlogImage src={ChoicesImage} alt="Rainfall Choices" />	
				<p>
                As outlined in our <a href={'/rainfall-active-social-system'}>previous article</a>, our goal for Rainfall is to be able to take the traditional, turn-based style visual novel events found in many games and incorporate opportunities into each scene that will allow for dynamic, player controlled methods of progression.
                </p>
                <p>
                By combining our various sub-systems like Investigations, Active Choice, and Lockon Acknowledge we aim to give the player a toolbox to explore and interact with a scene and reach its conclusion on their own terms. Things like gathering rumors will reveal new chat options, ignoring characters may change their reactions, and deciding how and where you interact with characters will affect how they view you. It's not just what you say, but what you do that decides the outcome.
                </p>
                <p>
                This year we successfully defined our Active Social System’s toolkit and added those systems into the game. We’ve also incorporated a lot more exploration and investigative elements reminiscent of a detective novel or classic CRPGs. One of the concerns or pitfalls of having an open social system is how do we avoid the trappings of old Adventure Games where a player needs to either interact with everything or have the godly sensibilities to know exactly where to look or what to do in order to end a scene. Our solution to that has been the insights screen known as Author Vision.
                </p>
                <BlogImage src={InsightsImage} alt="Rainfall Insights" />
                <p>
                Author Vision is a way for a player to go through all the investigations they’ve started and get a sense of the ways that they can progress it without giving away the secrets of solving it. This will also allow a player to tackle investigations and scenes in an order that isn’t predetermined. A player can have many ongoing things they want to do and no two players playthroughs will likely be the same in terms of order of the scenes or in the ways they can end a scene. Our game instead of feeling like a visual novel with active segments now feels more like an active investigation game that has visual novel segments.
                </p>	
                <h3>
                Lighting and Level Design Improvements<br/>
				</h3>
				<p>
                At the end of 2018, we experimented with adding dynamic lighting into our game by writing our own lighting system. While the initial implementation was fairly rough we’ve gotten better in both the ways we add lighting as well as designing environments and objects that are better suited for lighting.
                </p>
                <BlogImage src={CityImage} alt="Rainfall City" />
                <p>
                We also took these learnings to revamp older areas that weren’t designed for it or were out of date. The park in the city for instance hadn’t been touched in any significant way since early 2018 which compelled us to not only give it a unique flavor but also figure out ways to better connect it to the rest of the map. This is one of the reasons we opted to add in the view to the Underground here as well as it providing a greater level of scale to the map. There are still a bunch of changes we want to make to the City such as reworking Mari’s apartment to have a better flavor as well as further adjusting the train station area which we’ll make in mid 2020.
                </p>
                <BlogImage src={UndergroundImage} alt="Rainfall Underground" />
                <p>
                We added in a new sector to our game in 2019 in the form of the Underground which came with 6 new locations inside of it as well as moving the hospital down into this area. This new area is one of the main reasons we had to backport scenes so we could introduce the characters involved in Horizon as well as making the area a place you frequent throughout the game rather than being introduced an hour or more into the game.
                </p>
                </BlogPost>
            </Page>
        );
    }
}

export default Rainfall2019;