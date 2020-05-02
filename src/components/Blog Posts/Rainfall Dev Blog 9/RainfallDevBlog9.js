import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import DoujinTextGif from './images/doujintext.gif';
import NewAkaneImage from './images/newakane.png';
import KritaImage from './images/krita.png';

class RainfallDevBlog9 extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>Dev Blog #9: January - April 2020<br/></strong>
				</h2>
				<h2>
					<strong>Overview<br/></strong>
				</h2>
				<p>
                Our main focus for the start of this year was producing our first demo of the game by fully animating and implementing the first scene in our game. With this lesson, in addition with some other structural improvements around improving our base systems of Lockon Acknowledge, Doujin Text, and the story itself we feel confident that we can start iterating on the next scenes given the effort it took to produce a single scene.
                </p>
				<h2>
					<strong>Major Milestones<br/></strong>
				</h2>
                <h3>
                Dialogue Text and Doujin Text Rework<br/>
				</h3>
                <BlogImage src={DoujinTextGif} alt="Rainfall Doujin Text" />
				<p>
                Ignoring the fact that the gif recorder I used dulled the colors of the NPCs, we reworked how we represented dialogue in our game both to add more flavor and increased visual clarity. Previously Doujin Text, the white manga-styled boxes that popped up, were used as a representation of Jin’s thoughts and popped up on screen and moved with the camera. However, what we noticed is that we as developers were missing them when they popped up since they automatically appeared and disappeared and were shown in places that the player was not naturally looking at. Our fix was to move the Doujin Text to be more tied into Lockon Acknowledge as well as integrating it into the world space instead. Now Doujin Text will appear relative to the object Jin is locked on to which is a natural point for the player to look at anyways. This will also remain in world space until Jin moves his lockon off of the object. Besides the visual clarity aspect it also looks cooler with different NPCs and other objects being able to walk in front of or behind it.
                </p>
                <p>
                    In our previous cycle at the end of the year we introduced new visual novel dialogue boxes to capture the flavor profile of each character which have transformed the feeling of our dialogue heavy scenes. However, we decided to further improve the way we can display it by adding in a new text parsing system. Using Text Mesh Pro along with introducing a series of tags like &lt;whisper&gt;, &lt;yell&gt;, and &lt;pause&gt; we’re able to have text print in different font sizes and cadences to better represent the feeling of the conversation. Our ellipses are all followed by appropriate pauses now rather than having a single constant speed of printing characters. We also added a very simple text print sound that is different based off of each character to further provide a heavier flavor profile to who is speaking.
                </p>
				<h3>
                Jin and Akane’s Rework<br/>
				</h3>
				<p>
                After coming up with the rest of our cast we reexamined the look of our two main characters on both their sprite and visual novel bust. We previously reworked Jin’s bust in the latter part of last year and wanted to apply the same changes to his sprite. It had been three years since we produced the original version and while it had maintained itself very well over time it now looked very stiff and too young compared to the older version of Jin portrayed in his visual novel form and to be perfectly honest he looked like a loser. So we wanted to both up the age as well as giving him more swagger in his step and appearance.
                </p>
                <BlogImage src={NewAkaneImage} alt="Rainfall New Akane" />
                <p>
                Akane was an example of our older process of character designs and while there were factors we enjoyed with her many of her unique factors were taken over by our other characters: Emi with the asymmetric shoulder design or Shion with the sweater material and higher degree of sexuality. She also felt pretty bland on her own so we reexamined how we wanted her to feel and came up with a brand new design. While we still wanted to retain the Older Sister styled vibe she maintained before, we wanted to lean more heavily into the literary girl archetype coupled to provide her both with that sense of wisdom and intelligence along with having that more playful side to her. We gave her a reader archetype to naturally mesh well and conflict with Jin’s writer archetype as well.
                </p>	
                <h3>
                First Fully Animated Scene<br/>
				</h3>
				<p>
                Our first scene in the game got a full rework introducing four different active segments as well as fully animating our first large scale animation of the collapse of the Industrial Hole zone in the game. We used this first scene as a microcosm of what animating the rest of the game would be like and took away many learnings of how we can simplify the process from both a tools and in game implementation standpoint. After the implementation we did a playtest and took away some critical learnings.
                </p>
                <BlogImage src={KritaImage} alt="Rainfall Krita Workflow" />
				<h2>
					<strong>Playtest #1 Lessons<br/></strong>
				</h2>	
                <ul>
                    <li>General Thoughts</li>
                    <ul>
                        <li>The scene specific animations feel really good with screenshake and doujin text. The game feels like it is an action visual novel or the game equivalent of a manga/doujin/webtoon which is the feeling we want</li>
                        <li>Lockon Acknowledge and the dynamic scenes feel great and the amount of freedom the player has in deciding how a scene is played through is striking a nice balance between constrained and free allowing for the player to make decisions and effect the scene without causing a burden on us to produce many different variations of a scene.</li>
                        <li>Dialogue System with the bubbles/busts/dynamic print text feels good</li>
                        <li>Need to add more animations to the coffee shop and other idle screens like we did to Jin and the rest of the city. A city without movement feels dystopian and sterile compared to the warmth and life we want to come across.</li>
                        <li>Adding in character specific dialogue bubbles feels really good in both breaking up the scene as well as providing a more obvious way to show that a different person is speaking beyond a name change</li>
                        <li>Add in some more Cinematic Camera elements to allow for dynamically positioning the camera for use in scene specific animations like the city collapsing</li>
                        <li>Need to have more of a focus on showing controls and how to go through lockon acknowledge for a player not familiar with the systems</li>
                    </ul>
                    <li>Remaining Questions</li>
                    <ul>
                        <li>How should we handle active segments? Should we allow Jin to leave the Coffee Shop if there is an active segment being held there? If so how do we handle this?</li>
                        <li>How many lockons can we add to a single screen or area before it's too much/annoying to cycle through?</li>
                        <li>What should we do to Jin’s apartment to make it feel unique?</li>
                        <li>How do we handle SMS in our game?</li>
                        <li>Should we have money/what is the purpose of it/how do you earn it?</li>
                        <li>Do we do a minimap or a map screen? If not how do we show where these landmarks are to go to?</li>
                        <li>How do we feel about the insights screen? Is there a better way to show information being updated?</li>
                    </ul>
                </ul>
				<h2>
					<strong>What's Next?<br/></strong>
				</h2>
				<p>
                Given the success and questions remaining of our first play test, we’d like to figure out what is the max amount of information we can present to the player in a scene without it being overwhelming. Our example of this will be to redesign Jin’s apartment to be more flavorful to him as well as introduce a ton of lockon elements and figure out what is the max limit before the system becomes cumbersome.
                </p>
                <p>
                We’re also going to work further on our animation pipeline by designing the battle form of Jin and another character and create a demo fight scene and see what the level of effort to produce is as it will affect both combat and the scenes we can produce.
                </p>
                <p>
                Lastly we’ll be taking a look at the information hierarchy of our game and see how we can handle showing milestones, waypoints, and updates to these without being intrusive but still noticeable to the player.
                </p>
                </BlogPost>
            </Page>
        );
    }
}

export default RainfallDevBlog9;