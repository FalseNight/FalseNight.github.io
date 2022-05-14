import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import ComparisonImage from './images/comparison.png';
import HorizonImage from './images/horizon.png';
import InfluenceImage from './images/influence obtained.png';
import ModalImage from './images/modal.png';
import SchoolImage from './images/school.png';
import UndergroundImage from './images/underground.png';

class RainfallDevBlog15 extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>Dev Blog #15: Jan - April 2022<br/></strong>
				</h2>
				<h2>
					<strong>Overview<br/></strong>
				</h2>
				<p>
                We finished up the entire Michio/Tutorial Arc and have now gotten started on adding in the new systems and area redesigns necessary to be able to create the scenes for Mari’s Arc. Now that we are populating the game with both main and optional content we needed to update areas that have been mostly untouched for several years.
                </p>
                <p>
                Scene progress has only started to pick back up again recently with more of the areas of done and base systems completed. We’ve outlined 27 scenes remaining that we want to get in as part of Mari’s Arc leading up to her dungeon encounter and boss fight. These are our optimistic goals of what we want to try and get done as our next milestone including the music, sound effects, and polish of the scenes up until that point. I don’t believe any of it will be truly finalized given our past record to revamp areas as we become better but it should allow us to put out a very large demo and get feedback on the first 25% of the game’s content. 
                </p>
                <p>Scene Progress: 12/205 (5.85% Done)</p>
				<h2>
					<strong>Major Milestones<br/></strong>
				</h2>
                <h3>
                School Area Refactor<br/>
				</h3>
                <BlogImage src={SchoolImage} alt="Rainfall School" />
                <p>
                We didn’t change too much with the school area besides replacing the gate, fountain, and condensing the area as it filled too large without much content inside of it. The previous gate felt too much like a High School Fantasy Anime’s version of an entrance gate rather than being something that felt like it was in place with the rest of the city design. We instead wanted to keep the grandeur of the buildings but tone it down to give it the feeling of just a rich area’s high school instead of the fantasy feeling. We still need to update the white stone path, decide on a name for the school, and add in some other features but it feels much more in line with the rest of the town.
                </p>
                <h3>
                Underground Refactor<br/>
				</h3>
                <BlogImage src={UndergroundImage} alt="Rainfall Underground" />
                <p>
                Our Underground area has been one of our favorite additions to the game but it always felt unfinished to us both in terms of content and in flavor with it just feeling like a poor area versus a seedy underbelly. We tried to bring out both with adding in a gambling area run by the Yakuza group underneath Sanae, having the trains be something that runs above the player, introducing waterways, and providing better segregation between the factions that make up the underground giving them their own distinct sub-areas.
                </p>
                <BlogImage src={HorizonImage} alt="Rainfall Horizon" />
                <p>
                The upper area of the underground is owned by the Horizon group and the NPCs making up the area will be the sukebans underneath Ichiko and the hosts/hostesses themselves. We reworked the Horizon building because it was way too bulky without adding much flavor to the area. The previous building felt like a circus attraction whereas the goal for the new building is to be multi-tiered and feel like a jazz-bar lounge vs the high energy circus feeling of the first.
                </p>
                <p>
                The lower area is owned by the Yakuza group and houses the gym, Gekkou, and the gambling parlor while the middle area of the underground is a neutral territory composed of the hospital and Internet Cafe/tech area. We still need to add more doodads to the area and break up more of the ground textures but this is the current state of our in progress revamp.
                </p>
                <h3>
                Mega Club Refactor<br/>
				</h3>
                <BlogImage src={ComparisonImage} alt="Rainfall Mega Club Comparison" />
                <p>
                Mega Club is our arcade and the third area we made in the game several years ago. Because of this it has clearly aged terribly. Its only with Mari’s arc though that we are actually populating the area with main scene content and optional lockons/events for obtaining state points and influences. We’ve currently built it out as a single story in the overall multi-level entertainment center and trying to reflect the feeling of the Sega Clubs in Japan but under our style. All of the machines are currently using their older versions but we plan to make updates to those too to better fit the area.
                </p>
                <p>
                We haven’t added in the Death Crown minigame yet but the intent is for Jin to be able to raise his stats optionally once a day here or at other minigames throughout the city. We’ve built two minigames so far that need some more sprites made for them which we will showcase in the next update most likely.
                </p>
                <h3>
                Item Modals<br/>
				</h3>
                <BlogImage src={InfluenceImage} alt="Rainfall Influence" />
                <p>
                Tying into the influence systems we talked about two updates ago, we wanted to have a consistent UI method to showcase when the player obtains key items whether those are in a story context or when the player receives influences that they can slot into their builds. We haven’t finalized the influence variant of this screen but we are making use of it in scenes.
                </p>
                <BlogImage src={ModalImage} alt="Rainfall Item Modal" />
                <p>
                These more detailed looks at items are providing us the ability to showcase complex or tiny actions that could be easily missed by the player if they happened as tiny animations in the world. We also think the pop up also brings the feature of better highlighting that this is key info that affects the current or future scenes too. Because the resolution of them is big but blocked out we’re able to produce these pretty fast and are experimenting with other uses of them in the game.
                </p>
				<h2>
					<strong>What's Next?<br/></strong>
				</h2>
				<p>
                Our next major milestone will be after we complete all of the other 27 scenes leading up to the next major boss fight and dungeon sequence. We’ll be planning to release a public demo after we complete this too which will give us valuable feedback on if any of the concepts or ideas that we like in the game resonate with a wider audience. This demo is going to also include most of the minigames for the game, a variety of influences/build options, and enough optional content to give us confidence in our core themes.
                </p>
                <p>
                We might do a mini-update on the music beforehand as well as the minigames we are including too but the main focus is going to be on scene work and updating areas with the sprites and animations they need to fully flesh out our scenes.
                </p>
                </BlogPost>
            </Page>
        );
    }
}

export default RainfallDevBlog15;