import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import AlleyImage from './images/alley.png';
import ApartmentImage from './images/apartment.png';
import BookdownImage from './images/bookdown.png';
import BookdownInsideImage from './images/bookdowninside.png';
import ChuuniImage from './images/chuuni.png';
import CoffeeShopImage from './images/coffeeshop.png';
import KaraokeImage from './images/karaoke.png';
import MCRoomImage from './images/mcroom.png';
import MegaClubImage from './images/megaclub.png';
import MetatronImage from './images/metatron.png';
import SchoolImage from './images/school.png';
import SchoolRiverImage from './images/schoolriver.png';
import ScreenplayImage from './images/screenplay.png';
import TutorialDungeonImage from './images/tutorialdungeon.png';
import TrainPlazaImage from './images/trainplaza.png';

class RainfallDevBlog1 extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>
                <h2>
					<strong>Rainfall Dev Blog #1: Jan 2017 - Feb 2018<br/></strong>
				</h2>
				<p>
					From January 2017 until February 2018, our primary goal for “Rainfall ~ Do You Still Like This World?” was to produce a vertical slice of the game. This would not only encompass MVP versions of all of the major features, but also the first iteration of a complete game-play loop as well. Everything that we worked on in this time can be broken down into three main aspects:
				</p>
				<h2>
					<strong>Locations<br/></strong>
				</h2>
				<p>
					Our game, at its essence, is primarily based on our shared experience travelling through the nighttime streets of Tokyo. The feeling of comfiness of the city lights and coffee shops, the smoke and laughs of the izakayas, hanging out at the park, and spending time with friends in the arcades. We want to capture the everyday life in both its fun and mundane moments.
				</p>
				<BlogImage src={MCRoomImage} alt="Inside Apartment" />
				<BlogImage src={ApartmentImage} alt="Outside of Apartment" />
				<p>
					Iriya is the central hub of the game containing the Player’s Apartment and a variety of other areas.  It’s designed to be chaotic with five main areas meant to contrast against one another. The area composed of the Player’s Apartment and the Park is mostly isolated with few pedestrians walking about, and is not meant to be a place for leisure. This is done to invoke the feeling like it’s in a back alley people pass through during the day, populated only by the locals at night.
				</p>
				<BlogImage src={CoffeeShopImage} alt="Coffee Shop" />
				<BlogImage src={BookdownInsideImage} alt="Inside Book Down" />
				<p>
					The area directly east of the apartment is a congested side street filled with a crowd moving in both directions. The trees from the park, overflow onto the railings of the area's boundaries. In the background, buildings emerge out of the forest and tower over the area forming an imposing city skyline.
				</p>
				<BlogImage src={MegaClubImage} alt="Inside Mega Club" />
				<BlogImage src={KaraokeImage} alt="Karaoke" />
				<BlogImage src={AlleyImage} alt="Alleyway" />
				<BlogImage src={TrainPlazaImage} alt="Train Plaza" />
				<p>
					The north side of the map is a metropolitan based area. Large, open spaces littered with skyscrapers and people wandering about. There’s alleyways with small shops hidden behind larger structures, and all of the buildings are explorable with people and events to interact with.
				</p>
				<BlogImage src={SchoolImage} alt="School" />
				<BlogImage src={SchoolRiverImage} alt="School Riverside" />
				<p>
					The school area is designed to be a prestigious high school for the arts, and serves a dual purpose as a preparatory academy for an associated college. As such it is designed to blend the architecture of both a real life prestigious high school and that of those found in anime. The school has a slight prison influence as well, with glass walls lining the campus paired with a river to match it's run of the perimeter.
				</p>
				<h2>
					<strong>Lockon Acknowledge and the Calendar System<br/></strong>
				</h2>
				<p>
					The game uses an Active Social System, where social interaction and dialogue evolve from turn-based to real-time events. Our goal is to create a system which provides contextual, dynamic opportunities to interact with NPCs and the environment. Gathering rumors reveals new chat options, ignoring characters may change their reactions, and deciding how and where you interact with characters will affect how they view you. It's not just what you say, but what you do that decides the outcome.
				</p>
				<BlogImage src={BookdownImage} alt="Book Down Lockon" />
				<p>
					The first component of this system is known as Lockon Acknowledge. In our game an eye symbol signifying the player's gaze floats above points of interest and interactable objects. An unfocused eye represents passing interest in something which may trigger a fleeting thought or nothing at all. However, when you focus on an object you enter a hard lock state that represents attentive focus. Once in this state you can leave it by focusing on another object, walking away, or have your attention forced away, etc.  
					<br/><br/>
					By shifting these states of focus NPCs will react differently depending on the context of the situation. For example, If someone is talking to you about an important topic and you decide to focus your attention elsewhere, they will become annoyed with you and respond differently. Even the absence of choice in conversation may also trigger events. Such as if you are talking to a waitress about what to order and remain silent. She may become uneasy with your behavior and awkwardly retreat from the table.
				</p>
				<BlogImage src={ScreenplayImage} alt="Screenplay Code" />
				<p>
					To support this, a node-based scene system known as our Screenplay is used to build up a knowledge base of events for a situation in order to dynamically generate how a scene could play out based off of your actions similar to a Choose Your Own Adventure Novel.
					<br/><br/>
					All of these events are then placed within the game’s calendar system. The player engages with different events in each of the game’s major time chunks: Morning, Afternoon, and Night. Each section for each day is filled with a varying mixtures of main storyline and optional events, and how the player spends their time will change based on what is available to them in that particular day. Some NPCs will only be available at Night, the school is only open during Morning and Afternoon, and your friend may not want to grab lunch on Monday Mornings, etc. 
				</p>
				<h2>
					<strong>Combat<br/></strong>
				</h2>
				<p>
					The third core component of our game is fast-paced, dungeon-crawling action combat. Our character embodies the character ideals of the rogue archetype. Game-play is a high speed affair where the player will be expected to navigate through danger by weaving together many strikes and dashes to simultaneously avoid damage, clear projectiles, and defeat their enemies. The dash in our game is short and fast but offers no invincibility frames, and functions as tool for getting out of a bad situation or to offer better positioning for their own offense.
				</p>
				<BlogImage src={ChuuniImage} alt="Chuuni Move" />
				<p>
					Your attacks in combat will fill the bar for your “Chuuni Move” a powerful attack that offers brief invincibility and an intensely destructive area of effect blast to clear the area of projectiles and enemies.
				</p>
				<BlogImage src={TutorialDungeonImage} alt="Tutorial Dungeon" />
				<p>
					The first dungeon of our game takes place in a tutorial section designed to be a distortion of Iriya reimagined as a ruined temple. The overgrown foliage which dominates the crumbling buildings lies beneath the new city built on top of it. Each area of the city is connected by above-ground trains that journey through different parts of the destroyed world. All of the humans are gone and turned to stone. Only enemies roam the streets.
				</p>
				<BlogImage src={MetatronImage} alt="Tutorial Dungeon Boss Fight" />
				<p>
					Each dungeon is also capped off with a boss encounter with some having mini-bosses throughout. The dungeon itself is themed after the boss’s perception of the world and influences of the boss’s design can be found in the enemies and environment.
				</p>
				<h2>
					<strong>What's Next?<br/></strong>
				</h2>
				<p>
					Our next major milestone, is to fill in all of the events that make up the Tutorial Arc as well as the entirety of our first major arc, which will introduce and center around the first major player of the battle royale Mari.
					<br/><br/>
					This will also include fleshing out some of the other free time activities as well, giving them a visual and gameplay upgrade over the current placeholders. 
					<br/><br/>
					New areas will also include the Ramen Shop, the Hospital, a Gambling Parlor, Mari’s Apartment, and an expansion of Iriya.
				</p>
                </BlogPost>
            </Page>
        );
    }
}

export default RainfallDevBlog1;