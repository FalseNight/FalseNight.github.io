import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import EquipImage from './images/equip.png';
import StatsImage from './images/stats.png';
import CombatImage from './images/combat.png';

class RainfallDevBlog13 extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>Dev Blog #13: Aug - Oct 2021<br/></strong>
				</h2>
				<h2>
					<strong>Overview<br/></strong>
				</h2>
				<p>
                The last few months have seen several of our major systems become more fleshed out and see them integrated into the main game. The driving force behind a lot of this has been the decision to shift our combat system back into an action combat system heavily inspired by Kingdom Hearts, Final Fantasy VII Remake, and Bloodborne. We’ve been able to take the Persona approach to our world design and have the upgrades and progression systems of the combat system require engagement with and exploration of the rpg overworld. Inside of our vertical slice we now have examples of progressing each of the main systems: optional storylines yielding , mini-games rewarding combat stat points, and unlocking new abilities via story events, etc.
                </p>
                <p>Scene Progress: 10/205 (4.87% Done)</p>
				<h2>
					<strong>Major Milestones<br/></strong>
				</h2>
                <h3>
                Combat System<br/>
				</h3>
                <p>
                In mid 2016, we toyed around with the idea of moving away from a top down beat em up styled combat to instead move towards more of a card battle system similar to Slay the Spire. This was heavily driven by something we covered in the <a href='/rainfall-dev-blog-4'>fourth dev log</a>:
                </p>
				<p>
                We’ve been playing around with both upgrading and making our UI more consistent across the different parts of our game. In the last update we talked about the Author Vision System and have taken those design principles to the phone and main menu screens as well. The major goals were to provide the phone with more screen space to be able to more effectively use for gameplay mechanics, cut out useless information, and lastly we wanted to provide an animated, dynamic component to the screen that could embody the thematic elements we’ve used across Jin already. We settled on this pared down design that takes greater advantage of the real estate we’ve taken up. The inclusion of the keychain in particular has been useful in providing us a guaranteed dynamic element in every frame so that even still scenes like being in Jin’s Apartment still have movement to them outside of text being printed. It's also allowing us to pull more of the chain element into the screen as well as being able to be used on other UI elements now. Besides the black, blue, and white color scheme we’ve given Jin chains, pen/ink, and a phone motif that is now incorporated throughout combat and the rpg side of the game.
                </p>
                <p>
                “The most basic action of attacking enemies is not satisfying and therefore cannot fulfill its role as a building block for the rest of the combat system. This is the result of a failure in fundamentals, from the animation timings, the flash and spectacle, the knock-back, and the failure to execute on various other basic action mechanics as well. We believe that the act of pressing the X button once and hitting an enemy should be fun by itself. While we could polish aspects like the flash and spectacle in a reasonable amount of time using elements like particle systems and visual effects, the rest of the underlying system would still be too flawed to reach an acceptable level of quality. This is purely due to our own current abilities as both artists and programmers.”
                </p>
                <p>
                Fundamentally our game and our team has changed quite a bit over the last few years in terms of our goals and direction of the game. It's one of the largest reasons most of our time is spent iterating over and over on the same principles. As we’ve become better artists, designers, etc we’ve found ways to dramatically improve concepts we liked but that were just worse than another less desirable route. Combat has been something we’ve intentionally delayed to implement fully until we got the rpg side of the game fully scaffolded. As developers we are not the best coders or combat designers or artists to make an exceptional combat system at least not currently. But we do think we can make our game greater than the sum of its parts by focusing on more of the ludonarrative aspects of our game and deeply tie combat into story allowing both to bounce off of and enhance one another. We’ll cover the moment to moment gameplay in the next post but I do want to cover some of the progression systems and tie-ins into the rpg gameplay.
                </p>
                <BlogImage src={CombatImage} alt="Rainfall Combat" />
                <h3>
                Stat System<br/>
				</h3>
                <p>
                With our stats we wanted them to be streamlined to only have a couple of stats to manage but make each individual point have a larger effect on gameplay. We settled on having just four main stats: Vitality (Health), Lethality (Attack), Tenacity (Defense), and Gnosis (ATB) that we would then carry throughout the entire game. All of our consumables, side missions, and equipables would all in some way play with these stats further allowing for players to make their own builds and to have another resource the player is training while within the rpg side of the game.
                </p>
                <BlogImage src={StatsImage} alt="Rainfall Stats Menu" />
                <p>
                In order to gain points in each of the four main stats the player may daily choose to spend time at specific areas of the game in between main story quests whenever they want. Lethality can be raised at Gold Star Gym, Tenacity at Mega Club, Vitality at the Underground Hospital, and Gnosis can be upgraded via publicity events at Book Down. Once a week you can also place a donation at the shrine for a random stat increase. You can also receive stat points through other storylines and choices throughout the game too. Every day only a subset of these locations are available for you to pick from though so the player will be forced at a minimum to focus on two stats. Our goal is to encourage the player to want to invest in all stats though and one mechanic to encourage that is besides a stat point granting an immediate benefit to health, attack, etc we also want breakpoints to give additional effects to encourage investment into the stat. An example of this is below:
                </p>
                <p>
                Vitality
                    <ul>
                    <li>1 point in Vitality gives 1 additional health point</li>
                    <li>10 Points - Gain a shield that blocks the first attack in combat</li>
                    <li>20 Points - Recharge the shield every 60 seconds</li>
                    </ul>
                </p>
                <h3>
                Influences<br/>
				</h3>
                <p>
                Mainly inspired by the AP system in Kingdom Hearts 3, the charms of Hollow Knight, and the chips of Nier: Automata, we wanted to have a system that allowed a player to craft a custom build and be able to provide a dramatic shift in their play style. We also wanted something that we could hand out to the player as a reward for certain actions, dialogue options, and completion of mini-games or questlines. Influences are either passive effects that change how core systems work or augment/replace existing abilities. Two examples of this are the Fox Fire Charm which replaces an ability and is obtainable from main story content while on the other end there are the Boxing Gloves which augment a core system and are only received from optional mini-games.
                </p>
                <BlogImage src={EquipImage} alt="Rainfall Equip Menu" />
                <p>
                Fox Fire Charm
                    <ul>
                    <li>A good-luck charm given to Jin by The Hood to commemorate their alliance and victory over Michio. Like The Hood, it’ll teleport back to Jin even if thrown away.</li>
                    <li>Equip: Change Jin’s Alternate Fire into a Dagger Teleport. On the first cast, Jin will throw a dagger projectile. He can choose to recast it to then teleport to that location and cancel the projectile instead.</li>
                    <li>Location: Story based, given after Jin beats Michio</li>
                    <li>Cost: 10 AP</li>
                    </ul>
                </p>
                <p>
                Rookie’s Boxing Gloves
                    <ul>
                    <li>The gloves used by Jin to complete his training regimen at Gold Star Boxing Gym. While they technically belong to the gym, they allowed Jin to keep them as a memento of his training and the time he spent with everyone at Gold Star.</li>
                    <li>Equip: Stops any passive charging of the Chunni Gauge and triples the charge created by attacking enemies</li>
                    <li>Location: Gold Star Boxing Gym, given after Jin clears the hardest difficulty of the boxing minigame at the Gym</li>
                    <li>Cost: 15 AP</li>
                    </ul>
                </p>
                <p>
                The player will receive AP from completing every fight in the game and by providing both the upgrades and the system to equip them scaling off of both combat encounters themselves but also the rpg world it’l mean that even during large breaks in between combat encounters there's still progression being made constantly on both the player’s power scale but also the options they have at their disposal.
                </p>
                <h3>
                Consumables and Food Buffs<br/>
				</h3>
                <p>
                Final Fantasy VII Remake’s consumable system, while not perfect, is very close to being the ideal for us where consumables are both expected of the player to buy and the game strongly encourages usage of the consumables. One of the frequent problems in most games is that while potions may end up being used the vast majority of consumables are being saved and hoarded by the player until “they need it” leading to the player ending the game with many impactful items never being used. FFVIIR solved this by making them handing out a steady stream of heavily discounted consumables and having them nearly always accessible to the player. They also solved the second main problem of consumables which is either they end up too strong like in Breath of the Wild where a player can pause the game and gorge themselves on 10 food items to go back to full and give themselves maximum buffs or they end up too weak and it become a bother to engage with it. FFVIIR chose a middle ground where they allowed the player to gorge on them out of combat but while within an encounter you had to spend the ATB resource to be able to use an item leading to them being something you had to engage in combat to use.
                </p>
                <p>
                In our system, we allow players to buy as many consumables as they want but have also tied in usage of them in combat to requiring spending our version of an ATB meter. We also took inspiration from Monster Hunter and Valheim by making consumables a two part item where every item has an on use effect thats execute immediately and then a “consume” buff which will be applied to the player as long as it remains within the food buffs queue which stores the three most recent unique consume effects of the player. Our desire is the player will not only use a single or small subset of the consumables but instead want to have a wide pool of consumables to choose from depending on the current scenario as well as provide an interesting choice for what consumable to use in the moment.  
                </p>
                <p>
                Here are some examples of the base consumables in our game:
                </p>
                <p>
                Tuna Onigiri
                    <ul>
                    <li>Use: Restore 10 health to Jin.</li>
                    <li>Consume: Restore 1 health per second.</li>
                    <li>Location: Wave</li>
                    <li>Cost: 200 Yen</li>
                    </ul>
                </p>
                <p>
                Cod Roe Onigiri
                    <ul>
                    <li>Use: Restore 5 health to Jin.</li>
                    <li>Consume: Increase Attack by 15%.</li>
                    <li>Location: Wave</li>
                    <li>Cost: 200 Yen</li>
                    </ul>
                </p>
                <p>
                Knockout Zero Lemon
                    <ul>
                    <li>Use: Remove all buffs.</li>
                    <li>Consume: Increase Attack by 20%.</li>
                    <li>Location: Lili's Izakaya</li>
                    <li>Cost: 150 Yen</li>
                    </ul>
                </p>
				<h2>
					<strong>What's Next?<br/></strong>
				</h2>
				<p>
                With the rest of the year we’re going to be adding in more of the cross-system functionality to the rest of the combat/rpg scenes and adding in a set of starting customization options that are unlockable to give a sense of builds we can have and find where to start awarding them around the city. On the combat side of things we’re going to add a Behavior Tree System to the game for AI management and finish the first boss fight in our game to cap off the demo.
                </p>
                <p>
                This is also the time where we’re going to start working on music and sound effects more and trying to get a small set of three tracks made to better set the mood of the game and to add some more polish to the demo versus just using an already known soundtrack. We’re going to contract this work in the beginning too so we’ll be experiencing that process for the first time too.
                </p>
                </BlogPost>
            </Page>
        );
    }
}

export default RainfallDevBlog13;