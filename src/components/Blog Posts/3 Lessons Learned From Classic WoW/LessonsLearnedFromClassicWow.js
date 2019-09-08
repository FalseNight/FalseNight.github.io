import React, { Component } from 'react';

import { Page } from '../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import ShadowfangKeepImage from './images/sfk.jpg';
import ChickenImage from './images/chicken.jpg';
import RematchImage from './images/rematch.jpg';

class LessonsLearnedFromClassicWow extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>3 Lessons Learned From Classic WoW<br/></strong>
				</h2>
				<h2>
					<strong>1. Convenience can be detrimental<br/></strong>
				</h2>
				<p>
				As humans we seek out anything that will make our lives easier. Convenience is a gift that allows us to work less and do more. However, achieving convenience comes at a cost, to do something easier or with less work conversely means we no longer have to work or hard or struggle to achieve what we want. But it's in adversity that we make meaningful memories and grow as people. This double-edged sword needs to be balanced otherwise you’ll end up in a situation where you no longer need to do anything to succeed or on  the opposite side where despite what you do you will not succeed.
				</p>
				<p>
				In terms of World of Warcraft, we’ve gradually made our way to the side of too much convenience. Currently you can sit in the same city all day and end up inside of raids, dungeons, gain reputation, level up your professions, do side activities and games, and nearly every other facet of the game without ever seeing the world. While no system on its own is the cause of this nor necessarily detrimental its the combination of these things that has displaced the sense of achievement in the game.
				</p>
				<p>
				A good example of this is doing dungeons. In Classic WoW, if I want to run Shadowfang Keep for the first time as an Alliance character I have to do the following assuming I have never been outside of the Human Area starting zone:
				</p>
				<ul>
					<li>Find 4 other players on your server wanting to run the dungeon</li>
					<li>Everyone flies to Stormwind</li>
					<li>Everyone takes the Deeprun Tram to Ironforge</li>
					<li>Everyone leaves Ironforge to Dun Morough</li>
					<li>Everyone leaves Dun Morough to Loch Modan</li>
					<li>Everyone leaves Loch Modan to Wetlands</li>
					<li>Everyone leaves Wetlands to Arathi Highlands</li>
					<li>Everyone leaves Arathi Highlands to Hillsbrad Foothills</li>
					<li>Everyone leaves Hillsbrad Foothills to Silverpine Forest</li>
					<li>Head to Shadowfang Keep to the west</li>
				</ul>
				<p>
				By making this journey, I will have passed through 7 zones, unlocked 5 flight paths, and as a level 20-ish character will have been through zones ranging from levels 1 to 40. I will have ventured through enemy territory, especially in Hillsbrad Foothills and Silverpine Forest where I will have to fight the opposite faction just to make it to the dungeon. In the future, this journey will be less tedious with the different flightpaths unlocked but I feel like I accomplished something on my character and have earned the right to enter the dungeon. But more importantly along the way to the dungeon I have had to overcome other challenges with my party members not related to the dungeon such as having to fight those enemy players or going through higher level zones.
				</p>
				<p>
				Some dungeons even feature a pre-dungeon section. This is an area leading from the map to the dungeon often filled with elites of similar enemies you’ll find in the dungeon with some quests outside that also lead into the dungeon itself. Wailing Caverns has a massive cavern section, Blackfathom Deeps has an underground temple you need to travel through, and Blackrock Depths has a jumping puzzle you need to complete.
				</p>
				<BlogImage src={ShadowfangKeepImage} alt="Shadowfang Keep" />
				<p>
				Modern WoW has replaced this with a Looking For Group (LFG) tool that will teleport you and 4 random people to the inside of the dungeon. I will have missed out on picking up these crucial flightpaths for the future and have missed out on the player created storyline of getting to this area. However, in its place it has added in way more enemy mechanics. Bosses in Classic WoW tend to have only one or two main abilities and a single phase to go through. This holds true up until the end of the first raid tier as well. Modern WoW though especially in the last few expansions with the introduction of Mythic and Mythic+ has added in raid like encounters with multiphase boss fights and challenging mob packs into the dungeons themselves. This is an amazing change to the game and should be one of the main selling point of modern WoW unfortunately...
				</p>
				<h2>
					<strong>2. There must always be the opportunity for new rewards<br/></strong>
				</h2>
				<p>
				I ran into this same problem with one of my first large-scale games Last Hymn. While we had an interesting combat system and a cool world to explore, players universally avoided and dreaded entering combat since it only depleted their health and offered no rewards. Instead it took away from the main selling point of the game which was its atmosphere and environments.
				</p>	
				<p>
				Humans tend to act when they have something to gain or when they have something to lose. There is an opportunity cost to do anything and this is something everyone considers before taking action. So if a developer puts a quest in a game it needs to provide either a physical reward like gear, experience, money, items, etc. or a immaterial reward like opening up a new dungeon, questline, or having another player indebted to you. There are many rewards that something can give you but everything needs to have one. When I run The Deadmines for the first time, I have quests inside to grant me experience, gear upgrades to receive, and the experience of completing the dungeon for the first time. However, after the first run on my first character why else would I run the dungeon besides experience and the potential for gear? Eventually this too fades away and you’ll never go back here unless it is on an alternate character. 
				</p>
				<p>
				This holds true for questing zones as well. If a quest is for levels 20-25, if you are level 28 there is no reason to do the quest anymore if it only offers experience or gear and once you outlevel a zone there is no reason to ever return.
				</p>
				<BlogImage src={ChickenImage} alt="Chicken in Westfall" />
				<p>
				While in modern WoW a levelling zone may only be useful from 78-80, in Classic WoW many zones often covered a wide range of levels. Take Stranglethorn Vale for instance it offers quests from levels 30-50, has a major neutral town, and serves as a central port for both Horde and Alliance, and later on even had a raid present in the zone. Stranglethorn Vale was useful as a zone for over half the game. Higher level dungeons also shared this quality where a level 30-40 dungeon like Maraudon contained useful gear and items for max level players encouraging them to revisit older content. Many quests also encourage revisiting older areas too such as a level 20ish quest in the Redridge Mountains requiring players to farm Hops off of mobs in Westfall a lower level zone so they can obtain a brew to bring back to Redridge. Many quests in Classic WoW force a player to go across multiple zones for different items, deliveries, or mobs making it so you will always see other people in whatever zone you are in.
				</p>
				<p>
				This is one of the travesties of modern WoW. A zone like Felwood for instance is completely abandoned the moment you outlevel the content. There is no reason to ever go back there nor are there any quests that take you through that area again. This creates a lonely experience and an essentially useless zone. This is why I was ecstatic to see the Class Order Hall campaigns in Legion where each class went through many of the old world zones and raids to do quests. Shamans would lead a crusade back through the Firelands raid from multiple expansions ago, Priests would explore hidden areas underneath the Tirisfal Glades, and more. This was amazing content even if many classes shared the retreaded zones. It made the world feel more alive and lived in as well as made older zones relevant again.
				</p>
				<h2>
					<strong>3. Complexity should come from breadth not depth of choices<br/></strong>
				</h2>
				<p>
				recent trend in games has been on creating “emergent gameplay” which is where a bunch of simple mechanics combine together to form complex situations. Games like Breath of the Wild for instance offers the player a bunch of mechanics to use multiple types of bombs, time stop, magnesis, and more. While each move is very one-dimensional on its own, combining them together or being put in different scenearios force you to use the same move in many different ways. A breadth of tools over a breadth of situations creates the best environment for player-created scenarios to occur and for some of the most memorable experiences to happen.
				</p>
				<p>
				In Classic WoW for instance, many of my most memorable moments so far have not been part of the prescripted content created by Blizzard but instead moments that I and the other players made happen. 
				</p>
				<p>
				It’s moments like the run from Southshore to Scarlet Monastery where you have to fight through an army of enemy players to even enter the dungeon or dueling another player but debuffing them before the fight or getting a bunch of low levelled characters together to take on enemies 8+ levels more than you creating your own raid like encounter.
				</p>
				<BlogImage src={RematchImage} alt="Duel Outside Stormwind" />
				<p>
				The game provides the freedom to allow these things to happen and is more flexible in how players can complete the content than other games. This permeates from quest and dungeon design down to each individual ability. Take the mage class design for instance, excluding the balance of the class compared to others, a Frost Mage’s main rotation is purely just Frost Bolt then Frost Bolt and then Frost Bolt again and you repeat this until the enemy dies. This is obviously not thrilling combat design and I would agree that the main rotation of all classes in Classic WoW are as boring as this. This is one thing I much prefer in more recent expansions like Legion. However, where the classes feel truly interesting is in their situational moves. 
				</p>
				<p>
				Even though I only have a 1 button main rotation, I have several dozen situational abilities that I need to weave in constantly otherwise I’ll die while levelling. When I’m out of mana I have Evocate on a long cooldown to recover all my mana while standing still for a bit, my mana gems to recover a little mana instantly, and my wand so I can start regening mana during combat. All three fit similar purposes and during a series of combat encounters I’ll most likely use all of them and have to choose when one makes the most sense over the other. The depth of these individual abilities is so low but the combination of low depth abilities leads to complex decisions and fun choices. 
				</p>
				<p>
				Next imagine a scenario where my character is near death and I need to play defensively. Well I have Ice Block that prevents all damage but I can’t attack anymore, Frost Nova that roots enemies, Cone of Cold to heavily slow enemies, Blink to dash forward, and some more reactive abilities like Counterspell to cancel an enemies spellcast and Cold Snap to reset all of my frost abilities. So a quick combo that Frost Mages learn is to slow/root enemies and then blink away so you can have time to cast spells at enemies. The combo of Cone of Cold and Frost Nova means you can kite enemies for quite a while, especially when you use Cold Snap to repeat those two crowd control moves again. Having this way to crowd control enemies while also being very squishy means you have to balance distance between yourself and the enemy. You have to go into melee range to crowd control groups but that also means you will get hit by one or two stray melee strikes unless you use your one mobility move. Again all of these abilities are very basic but a player will have to combo these moves in very different manners depending on the scenario and what abilities are up at the time. So even though my main dps moveset is one move, in actual combat I can easily use several dozen abilities.
				</p>
                </BlogPost>
            </Page>
        );
    }
}

export default LessonsLearnedFromClassicWow;