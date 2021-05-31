import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import PostProcessingImage from './images/progress on post processing.png';
import StartImage from './images/start.png';
import TestScreenImage from './images/test screen.png';
import EndImage from './images/end.png';

class RainfallDevBlog11 extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>Dev Blog #11: September 2020 - May 2021<br/></strong>
				</h2>
				<h2>
					<strong>Overview<br/></strong>
				</h2>
				<p>
                It’s been awhile since the last update, mostly due to the fact that we’ve been incredibly focused on the writing of the game. The game is now fully written and we’ve started on adding in each scene into the game.  We’ve also started to finalize most of the main game’s core mechanics and tools at the same time so that we can properly start adding in new scenes.
                </p>
				<h2>
					<strong>Major Milestones<br/></strong>
				</h2>
                <h3>
                First Full Draft of the Game<br/>
				</h3>
                <p>
                We’ve finally finished our first full draft of the game with every scene and interaction laid out at a high level. One new feature at the bottom of the Overview sections will be our amount of scenes completed out of total to give a sense of how fast we’re progressing towards the final game. We expect it to start out slow as we add in new animations and code to support base features but should ramp up pretty fast. We’ve finished our first demo as well of the first two days of the game and are starting on a proper full demo incorporating up until the first boss soon.
                </p>
                <p>
                Scene Progress: 4/205    
                </p>
				<h3>
                New Lighting System<br/>
				</h3>
                <BlogImage src={PostProcessingImage} alt="Rainfall Post Processing" />
                <p>
                Up until now our game has relied on two kinds of lights only: a scene-wide light to mimic the time of day and point lights for things like windows, lampposts, and other light emitters. We’ve recently revamped our system from the ground up to use the new Unity Universal Render Pipeline (URP) and the 2D Light System that comes with it. We’re also now using post processing effects that come with the pipeline to add in new environmental effects and better blend our sprites together yielding the progression shots you see above.
                </p>
                <p>
                An additional benefit of the URP has been that we've been able to massively change our particle effect pipeline to bring in effects like programmatic tree leaves moving in the wind, water reflections on our lakes, and a mist-like effect for the morning and night. This has added a massive amount of passive animations to our game, giving it a more alive feel and massively changing the feeling of the city.
                </p>	
                <h3>
                Author Vision 2.0<br/>
				</h3>
                <BlogImage src={StartImage} alt="Rainfall Author Vision 1.0" />
				<p>
                Up until now, we’ve had the above toggleable screen known as the Author Vision Screen present in our game to showcase the next possible steps inside of a current scene or time chunk. However, as we’ve laid out the game in our story we have a large amount of storylines and tasks that are interwoven together and affect one another. Because of this, it quickly became apparent as we played through the first few scenes that our current information screen was insufficient for the player's needs.
                </p>
                <BlogImage src={TestScreenImage} alt="Rainfall Test Author Vision" />
                <p>
                We began the rework by changing the purpose of the screen from being “to show the different future ways a scene could end” to being “to show the past, present, and future choices for each of the current running storylines a player could affect”. This change in scope meant we needed a way for a player to easily access not only the current scene’s information but every other set of information/tasks remaining to be done by the player. We’ve also wanted to add in a way to capture what is the story so far for each questline to remind the player the purpose of the information and choices made for players to more easily hop back into the game after a break or into questlines they haven’t touched in a while.
                </p>
                <BlogImage src={EndImage} alt="Rainfall Author Vision 2.0" />
                <p>
                Our final revamped version in game looks very similar to the concept just with adding in further writing elements and various special effects both vfx and sfx. We also added it into the Screenplay system to alert the player whenever they acquire new info, make a choice that affects a quest line, or has discovered a new quest line. This has further solved a lot of the issues we’ve had with giving the player direction on where to go next and what they can have as actions available to them.
                </p>
				<h2>
					<strong>What's Next?<br/></strong>
				</h2>
				<p>
                Over the course of September and October, we’re going to be finishing our detailed documentation of every scene in the game allowing for us to start executing on it in November with an ambitious goal of finishing through Mari’s Arc by end of year. We’d also like to do that re-examination of our information hierarchy. We went through some initial concept sketches of how we can further improve the Author Vision Menu as well as further integrating it into the moment to moment gameplay, though it still needs to be played around with some more so we can find the right balance between useful without being something the player has to be overly dependent on.
                </p>
                <p>
                We’re also re-examining the combat system again and working on finalizing the design of it in terms of story, its integration into the social mechanics, and the macro/micro decision making the player will go through. This also includes going through a similar exercise to Jin with creating the battle forms of all of the characters in our game with ties to the supernatural side.    
                </p>
                </BlogPost>
            </Page>
        );
    }
}

export default RainfallDevBlog11;