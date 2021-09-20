import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import ModalImage from './images/modal.png';
import GabImage from './images/gab.png';
import PhoneImage from './images/phone.png';

class RainfallDevBlog12 extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>Dev Blog #12: June - July 2021<br/></strong>
				</h2>
				<h2>
					<strong>Overview<br/></strong>
				</h2>
				<p>
                June and July have been very busy on the UI/UX side of things with us attempting to revamp most of our UI elements to provide a more consistent and useful experience now that we’ve finalized the vertical slice of our game.
                </p>
                <p>
                As we’re going through finalizing the scenes in the game, we’re also taking the opportunity to look at all of our characters and make any last minute adjustments to them before finalizing their look as we add in custom animations for each.
                </p>
                <p>Scene Progress: 10/205 (4.87% Done)</p>
				<h2>
					<strong>Major Milestones<br/></strong>
				</h2>
                <h3>
                Gab Menu and Partner System<br/>
				</h3>
                <BlogImage src={GabImage} alt="Rainfall Gab" />
                <p>
                Because so many of our scenes require the player to contextually be following someone or to have someone follow them, we’ve decided to include a partner system in the game allowing for one or multiple people to follow behind the player and to provide commentary while the player is going around the city.
                </p>
                <p>
                Inspired by the conversations in the latest of God War, musous, and other games recently, we wanted to add in a way for conversations to take place with your partner without interrupting the gameplay flow or distracting the players. To this end we’ve added in a new type of pop up where conversations can happen while the player is moving around the world and between scenes. The conversations will serve to either guide the player towards the next story beat or to serve as some light-hearted banter to reduce the downtime when travelling between locations while fleshing out Jin and his friends more.
                </p>	
                <h3>
                Phone HUD Overhaul<br/>
				</h3>
                <BlogImage src={PhoneImage} alt="Rainfall Phone UI" />
				<p>
                We’ve been playing around with both upgrading and making our UI more consistent across the different parts of our game. In the last update we talked about the Author Vision System and have taken those design principles to the phone and main menu screens as well. The major goals were to provide the phone with more screen space to be able to more effectively use for gameplay mechanics, cut out useless information, and lastly we wanted to provide an animated, dynamic component to the screen that could embody the thematic elements we’ve used across Jin already. We settled on this pared down design that takes greater advantage of the real estate we’ve taken up. The inclusion of the keychain in particular has been useful in providing us a guaranteed dynamic element in every frame so that even still scenes like being in Jin’s Apartment still have movement to them outside of text being printed. It's also allowing us to pull more of the chain element into the screen as well as being able to be used on other UI elements now. Besides the black, blue, and white color scheme we’ve given Jin chains, pen/ink, and a phone motif that is now incorporated throughout combat and the rpg side of the game.
                </p>
                <h3>
                Tutorials<br/>
				</h3>
                <BlogImage src={ModalImage} alt="Rainfall Tutorial Modal" />
                <p>
                The simplest solution is often the right one. I used to prefer tutorials naturally integrated into the game play with a goal to eliminate anything that could remove the player from the gameplay experience. However, even though tutorial modals have a bad connotation associated with them, I’ve reversed my previous stand and  found that as both a player and as a developer that I’d rather have my instructions be as explicit and clear as possible to avoid missing out on major mechanics. Particularly in our game where we need the player to understand very quickly that their choices matter and that “choice” is something that extends beyond selecting an option and encapsulates both your actions and inactions as well. Without being explicit a portion of the playerbase wouldn’t understand our core gameplay loop until later into the game after they’ve unknowingly missed out on opportunities.
                </p>
                <p>
                Because of this we’ve opted into explicitly telling the player what they need to know via these pop-up modals that will explain a mechanic as a player discovers them in the game. We’ve also opted to include a new boss prior to Mari that we’ve added into the intro arc of the game to teach the player the main pillars of our combat system.
                </p>
				<h2>
					<strong>What's Next?<br/></strong>
				</h2>
				<p>
                For the next couple of months we want to revamp the Cellphone Menu and add in all of the UI functionality for the combat side of the game. Up until now we’ve experimented with a few different combat systems but have finally found one that has meshed well with our goals and desires for the game which we’ll outline in the next update.
                </p>
                <p>
                We’ll be fleshing out many of the locations in the city and adding in both functionality and shops to the locations to support the rpg and the combat side of the game. We’ll also have the tutorial boss fight added into the game so we can test out the full vertical slice.
                </p>
                </BlogPost>
            </Page>
        );
    }
}

export default RainfallDevBlog12;