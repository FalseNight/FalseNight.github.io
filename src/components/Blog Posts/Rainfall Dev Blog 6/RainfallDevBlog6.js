import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import CityAtNightImage from './images/City at Night.png';
import GoalImage from './images/Goal.png';
import LilithImage from './images/lilith.png';
import NewMapImage from './images/New Map.png';
import PlayableMariImage from './images/Playable Mari.png';
import TitleScreenImage from './images/Title Screen.png';

class RainfallDevBlog6 extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>Rainfall Dev Blog #6: January 2019<br/></strong>
				</h2>
				<h2>
					<strong>Overview<br/></strong>
				</h2>
				<p>
				As we head into the new year, we’ve officially started work on the third story arc in our game. While not all of the details have been ironed out these initial planning stages have revealed a need to restructure many of the game's maps to accommodate our goals for the new arc as well as laying the foundation for a new group of characters.
				</p>
				<p>
				Most of this month featured planning and setting the groundwork for the next arc which gave us some downtime to add in some small, but impactful, quality of life and polish changes to the game that have been missing for awhile.
				</p>	
				<h2>
					<strong>Restructure of the City<br/></strong>
				</h2>
				<p>
				After spending the first two arcs experimenting with having the school and city portions of the game separated, we finally decided to incorporate the school back into the city layout. The two maps felt too disjointed and led to the school having a poor sense of place in relation to the rest of the game. Being in a separate map also limited our scene design since we couldn’t have a scene start at Jin’s Apartment and end at the school without either teleporting the player or having multiple scene transitions. Neither of these two options felt good though so up until now we kept scenes at the school entirely separate from the city.
				</p>
				<BlogImage src={NewMapImage} alt="New Map" />		
				<p>
				This reincorporation of the city allowed us to also have optional scenes occur at the school at night. Normally the school was locked down at night and as a result, featured nothing you could do besides visit the Noodle Shop or Izakaya. Adding it back to the city allowed us to still have NPCs walk to the school area and allow us to have optional scenes take place in this area without it feeling weird thematically that you were hanging out at school at night.
				</p>
				<BlogImage src={CityAtNightImage} alt="City at Night" />		
				<p>
				The other improvement to the city and each of its submaps was the incorporation of dynamic lighting from Mari’s Dungeon into all of the different objects that cast light. Up until now there was only a singular ambient light for a scene with alpha transparencies placed over the sprites to give off a light effect. We’ve since updated the game to utilize multiple different light sources and the end-result has made the game look much better from a technical and artistic standpoint.
				</p>	
				<h2>
					<strong>Planning of Arc 3<br/></strong>
				</h2>
				<BlogImage src={LilithImage} alt="Lilith" />	
				<p>
				While the third arc is still in its planning stages, we’ve made progress on the character designs of key figures in the main and supporting cast of this arc. Three of the characters have had their designs fully fleshed out so far, a pair that we are temporarily calling Male Idol and Lilith, pictured above, and a female shut-in game developer named Emi. We’ll go over these characters more in depth in a separate post but all three of these characters will be implemented in the Tutorial and Mari’s Arc retroactively as we continue refining the game's overall story and narrative. Lilith, for example, will be putting on street performances at night several times a week. Male Idol will be working at the Karaoke Store, and Emi is the creator of Death Crown, the game that Reiji and the Hooded Figure are obsessed with and will play a bigger role in the overall narrative of the game.
				</p>
				<h2>
					<strong>Random Features and Enhancements<br/></strong>
				</h2>				
				<p>
				One of our greatest fears in planning scenes for the game, is that we either have to teleport the player to the next scene or the player will be lost in knowing where to go next or if they are in the middle of a freetime chunk. As a first defense against this we added in a goal bar that appears whenever you enter a scene or on the cellphone pause menu. These will be customized depending on the current story chunk you are on or if you can do whatever you want as part of a freetime period.
				</p>	
				<BlogImage src={GoalImage} alt="Goal" />	
				<p>
				We have also added in the ability to switch the current playable character. Up until now Jin has been the only person you control but adding the ability to control Mari, Akane, Reiji, and others allows for us to write different kinds of scenes that we had been limited in up until this point. Since the game is told through a limited third person perspective, with Jin as the lens, it’d be somewhat strange to have random third person omniscient scenes. But by introducing the ability to play as multiple characters, depending on the scene you are in, you can now still have the Doujin Texts and Lockon Acknowledge Systems reflect the characters thoughts.
				</p>
				<BlogImage src={PlayableMariImage} alt="Playable Mari" />	
				<p>
				Finally, for the longest time we were missing a title screen. So we quickly added in a placeholder while we work towards the goal of creating our playable demo.
				</p>	
				<BlogImage src={TitleScreenImage} alt="Title Screen" />	
				<h2>
					<strong>What's Next?<br/></strong>
				</h2>
				<p>
				We still have more planning to do as a major component of the third arc is adding in an entirely new area to the game featuring several sub maps. In the meantime, we’ll be continuing to flesh out the designs of our new characters with a new blog post going over each of them in more depth.
				</p>
				<p>
				There’s also going to be another handful of quality of life features and bug fixes we’ll be adding in to prepare for our demo. We’ll be swapping out all of our text components for Text Mesh Pro and redoing our dialogue to accommodate it. More optional lockon acknowledge events will be added throughout the city in addition to creating some of our first optional scenes.
				</p>
                </BlogPost>
            </Page>
        );
    }
}

export default RainfallDevBlog6;