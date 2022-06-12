import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage, YoutubeVideo } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import HoodImage from './images/hood.png';
import HoloShieldGif from './images/Holoshield.gif';
import BehaviorImage from './images/behavior.png';
import MichioImage from './images/michio.png';

class RainfallDevBlog14 extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>Dev Blog #14: Nov - Dec 2021<br/></strong>
				</h2>
				<h2>
					<strong>Overview<br/></strong>
				</h2>
				<p>
                Our first major boss fight of the game is now finished along with all of the supporting systems to modularly create the “Trainer Fights” in future scenes as well. Using a mix of store assets/tutorials we’ve created a library of visual effects for common projectiles, magic circles, lasers, and other attack sequences that will allow us to construct new fights with ease. While we haven’t gone through the effort of a UI overhaul with these new systems, that will come in a future update, we do have each of the mechanics fleshed out enough for us to start iterating on the core systems going forward.
                </p>
                <p>Scene Progress: 10/205 (4.87% Done)</p>
				<h2>
					<strong>Major Milestones<br/></strong>
				</h2>
                <h3>
                Behavior Tree AI<br/>
				</h3>
                <YoutubeVideo src="https://www.youtube.com/embed/X7VwAGvAOIw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                <p>
                While we have some very basic forms of AI in our game up until now, the goal for our combat was to be able to create re-usable, modular components that we could use to construct a fight encounter. In particular we were wanting this for the non-boss fights in our game since we could and will be justifying a high degree of custom content for each boss but for the in-between fights we needed something that could be fastly constructed so we could easily iterate on designs of encounters and better balance out the difficulty curve of our game since every fight is essentially required in the main-line quest.
                </p>
                <BlogImage src={BehaviorImage} alt="Rainfall Behavior Trees" />
                <p>
                Behavior trees are something we’ve used before in our college AI classes so it was easy enough to transition it over to our game’s design especially with the guidance of the above video and its package. While we likely won’t use this outside of combat it will give us the largest flexibility in rapid prototyping fights, abilities, and defining combos for characters. For Michio’s fight we’ve created a basic library of ai components that will need to be expanded with each subsequent encounter we implement. It's basically guaranteed we’ll need to rehash the fights, particularly boss fights, multiple times and this system will allow us to move around components, adjust weighting of combos, and tweak numbers without needing to modify larger component scripts since everything is being developed generically as workflow.
                </p>
                <h3>
                Design Library<br/>
				</h3>
                <p>
                In addition to the behavior trees, we also introduced the concept of our design library for fights as well. Similar to wanting our AI to be modularly built we wanted the same for each of our visual fight components as well. While we will be giving every fight some form of unique spells, animations, etc. we wanted to lower the burden on ourselves by instead defining most of our supernatural elements as highly configurable shaders and particle systems.
                </p>
                <p>
                In our game we’ve broken down our modular suite into shield effects (every person has a unique shield effect), danmaku (any bullet or fired projectile including beams), and spells (e.g. Lightning Storms, spell circles, aoe damage).
                </p>
                <BlogImage src={HoloShieldGif} alt="Holo Shield" />
                <p>
                For our shields we’re using a modified version of the <a href='https://github.com/AdultLink/HoloShield'>HoloShield from AdultLink</a> which gives us a very, very good baseline for being able to take a single system and define a custom set of attributes for each character. Our goal is for every main character to have a different set of theming for all of their stuff built off of a generic template, this includes their color theming, their own unique JoJo-styled aura effect, their own shield type, their own dialogue box, and obviously their own god.  This shield system, when overly simplified, is just one large shader with many subshaders inside of it so we’ll be continually building on this base to offer more features too to really make each shield effect as unique and custom to the character as possible.
                </p>
                <BlogImage src={MichioImage} alt="Rainfall Michio Combat" />
                <p>
                For our spells and danmaku we’ve been consuming a ton of Gabriel Aguiar Prod’s content. He makes very good tutorials for shaders and particle systems in addition to providing the assets on the Unity Asset Store. We’ve taken a bunch of his tutorials and then stylized the effects for our characters. I highly recommend the channel and assets even just for getting an understanding of how to construct these effects even if you don’t use them exactly as is.
                </p>
                <YoutubeVideo src="https://www.youtube.com/embed/Afh5zY6zxLs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                <h3>
                Chuuni Bar and Tactical Menu<br/>
				</h3>
                <p>
                One major benefit of the modularity of our design library allows for us to take any attack that we design for enemies to be given to Jin as well with minimal effort besides recoloring and stylization of the base effect to better fit Jin. This naturally led to Jin emerging as more of a Blue Mage styled character which was already the trend given the AP system for equipping abilities and the inspirations earned throughout the game. It was also our goal from the beginning, and across multiple combat systems, to have Jin be able to acquire the moves and techniques from his defeated foes but we’ll be able to take that even further in two ways: by being able to utilize the design library of created assets and the Tactical Menu.
                </p>
                <p>
                Clearly stolen/inspired by Final Fantasy VII Remake’s system of the same name our goal is to also provide a bar that the player builds up in combat via inflicting or taking damage and allow the player to pause time and execute some sort of super move from the library of collected techniques from defeated boss’s and influences scattered throughout the game. This will also serve as the healing system too where consumables can only be used by spending this same resource used for damage. While FFVIIR’s system was great for many reasons the ability to simultaneously grant the player the ability to use “infinite” consumables while also having it be relatively balanced since it takes away from your damage potential is probably one of the best combat decisions in that game. Healing in games has been an issue since the pen and paper days but when you look at Breath of the Wild for instance where Link can both bring an entire fridge of consumables and also pause time to gobble them down that kind of healing feels boring to me when compared to the various Souls Series healing systems, FFVIIR, and other systems that incorporate healing into combat as a main mechanic without it co-opting the entire difficulty curve of the game.
                </p>
                <h3>
                Hood Revamp<br/>
				</h3>
                <p>
                The Hood, The Hooded Character, Tiny, The Mascot, Partner, and a multitude of other names have been used to describe our amnesiac god that becomes Jin’s partner in the battle royale. When we first conceived of him the goal was to style them after Teddy and Morgana from Persona where they would exist as a comical mascot character to break up the mostly human cast of characters.
                </p>
                <BlogImage src={HoodImage} alt="Rainfall Hood Bust Progression" />
                <p>
                The first image is our first design sketch of what we’d possibly want to style them after and also where the name Hood comes from. It’s not a good design for a variety of reasons which is where we got our second iteration where we kept some of the animal motif along with the shrine aesthetic but pulled it closer to modern attire. We wanted to obscure as much of their face as possible since at the time the goal was to have them be a nameless, androgynous entity styled after more shota-like characters. While this is the design we’ve used for nearly 5 years it is no longer the direction we want to go with the character. We decided to do a revamp of their design to remove most of the animal elements to make it easier to believe this character is walking around the city as Jin’s partner and to better fit in with the more conspicuous gods also roaming the city. We did like the fox mask aesthetic though and decided to keep it along with the concept of an androgynous shota character but we tried to mimic more of Jin’s aesthetic with the blue and black colors along with Jin’s symbol adorning his pants. While the identity of the god will remain a mystery until later in the game the rest of his design is now much closer to his identity then the nameless god before.
                </p>
				<h2>
					<strong>What's Next?<br/></strong>
				</h2>
                <p>
                Our overarching goal for next year is to finish up everything in the game up until the boss encounter of Mari’s Arc including the majority of the side content, OST, and polish of the animations and areas that populate the game. This will also mark our first public demo that we’ll put out to gather some feedback on core mechanics, story, and seeing which of design tenets resonate with others.
                </p>
                <p>
                With Michio’s boss fight done, we’ll be taking a look at a few of our older areas that feel dated and giving them a fresh coat of paint now that we have scenes taking place in these locations as part of Mari’s Arc. We’ll be starting with the School Grounds, Underground, and Mega Club interior areas but have a backlog of changes and POCs we’d like to play with for other areas too. Scene progress has stalled a bit due to working on the raw assets and mechanics for the game but we should start freeing up after this next update and start churning out content for the game.
                </p>
                </BlogPost>
            </Page>
        );
    }
}

export default RainfallDevBlog14;