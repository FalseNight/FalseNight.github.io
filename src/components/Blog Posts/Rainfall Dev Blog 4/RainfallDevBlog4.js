import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import CombatIntroImage from './images/combat-intro.png';
import CombatImage from './images/combat.png';
import DungeonImage from './images/dungeon.png';

class RainfallDevBlog4 extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>Rainfall Dev Blog #4: July 2018 - September 2018<br/></strong>
				</h2>
				<h2>
					<strong>Overview<br/></strong>
				</h2>
				<p>
				In order to achieve a higher standard of quality for the game, it had become apparent that it was time to reevaluate the nature of the game’s combat system. To this end, we spent the last few months exploring alternative combat systems outside of the action paradigm in which the game currently exists and overhauling the game’s combat. 
				</p>
				<p>
				Our criteria for the project was to achieve two key metrics: return-on-investment (the value we receive in player enjoyment versus the time we put in) and innovation (whether the player can walk away from the experience and say it was worth it to experience the combat). Using these two as our KPIs we would rate our current combat sections low on both fronts.
				</p>
				<p>
				Currently our combat sections of the game are strictly limited to the dungeon sections, in which you move around the dungeon and defeat enemies using a basic hack and slash system. There exists a “Chuuni Bar” that fills up as you deal damage and when full, allows the player to utilize a super move with various effects. This Chuuni Move can then be changed with an assortment of acquired abilities, some from the main campaign and others from the relationships you can form.
				</p>
				<p>
				All dungeons are capped off with a boss fight which should be the defining moment of the dungeon and feature multi-phase encounters that require you to learn the boss’s attack patterns.
				</p>
				<h2>
					<strong>Problems With Our Action System<br/></strong>
				</h2>
				<p>
				While our current combat works and is serviceable as a system, in the end it is only serviceable in ideal circumstances, and quite boring in most cases. The most basic action of attacking enemies is not satisfying and therefore cannot fulfill its role as a building block for the rest of the combat system. This is the result of a failure in fundamentals, from the animation timings, the flash and spectacle, the knock-back, and the failure to execute on various other basic action mechanics as well. We believe that the act of pressing the X button once and hitting an enemy should be fun by itself. While we could polish aspects like the flash and spectacle in a reasonable amount of time using elements like particle systems and visual effects, the rest of the underlying system would still be too flawed to reach an acceptable level of quality. This is purely due to our own current abilities as both artists and programmers. 
				</p>
				<BlogImage src={DungeonImage} alt="Dungeon" />		
				<p>
				Even though a mediocre combat system may not be inherently bad, the time investment needed to achieve just "mediocre" in this system is ultimately not worth it. The primary reason for this lies in the number of enemy animations needed to complete a single enemy, specifically the attack animations. Every attack must be replicated in all four directions, tripling the workload for enemy attacks assuming one mirrors the left and right facing directions. Therefore unless the attack is incredibly simple, the amount of additional overhead created becomes unreasonable. The end result is iterating on the same animation over and over to reach an acceptable level of quality requiring a significant time investment that is not feasible for the scope of our game.
				</p>
				<p>
				The other problem lies in the dungeon setup itself. Dungeons are currently designed to be rushed through given that we have no RPG levelling mechanics in our game. This makes fighting enemies feel like a chore since there is no actual incentive or reward for the player to do so. Only the bosses that are required to beat a dungeon have a reward to them in that they finish the dungeon. This betrays one of our core philosophies where we want the player to explore the combat space and have fun doing so instead of feeling inconvenienced. Our social side also doesn’t influence the combat side besides unlocking more Chuuni Moves for the player to select from.
				</p>
				<h2>
					<strong>Solution<br/></strong>
				</h2>
				<p>
				Our solution has been to transition over to a hybrid Action-Card System. Drawing heavy inspirations from Hearthstone’s Adventure Mode, Slay the Spire, Kingdom Hearts: Chain of Memories, and Mega Man Battle Network we want to merge the dungeon crawling aspects of our previous design while simultaneously incorporating our active social system into the dungeon. This creates an abstraction of action combat that fits into smaller and more rewarding turn-based card game encounters.
				</p>
				<p>
				By switching to a card-game style system we can still maintain the level of strategy we wanted for enemy encounters while also introduce new and synergistic macro elements. Our new system takes the idea of Slay the Spire, where you have a base deck that you build up with various cards over time, and takes it further by removing the roguelike elements to increase the focus on the deckbuilding part of the game while also making it properly work with our longer and persistent campaign.
				</p>
				<BlogImage src={CombatIntroImage} alt="Combat Intro" />
				<p>
				The player starts out the game with a base deck of cards and by defeating enemies and clearing the dungeons they can earn cards from the combat side while in the social side of the game they can earn cards through the Otaku Goods shop, progressing in relationships, or completing side content. This ties the social side into the combat side further and gives a reason for the player to perform well and seek to explore both sides of the game fully.
				</p>
				<p>
				The deck itself will be limited in size so as you collect more cards you will have to choose which cards and playstyle you want to incorporate into your deck. One of our new core philosophies of this system is that we want the player to have to change their deck throughout the game to counter bosses and dungeons. To this end we will be introducing more gimmicks into dungeons and enemies themselves. This takes the form of dungeon specific cards that all revolve around a gimmick that the player will be rewarded for crafting a deck to counter. For example, one dungeon may feature a “Time Bomb” mechanic where after playing 5 cards you will take a certain amount of damage which also applies to the enemies. This would reward playing higher cost and more impactful cards instead of a deck of 0 cost cards and card draw.
				</p>
				<p>
				We also want the dungeons to be a mix of combat and social scenes. The dungeon should exist as a way to further characterize the boss you are fighting and scenes should exist to showcase that. We also want there to be secondary gimmicks in terms of introducing puzzles inside the dungeon as well to help break up the combat sections even more instead of having 45 straight minutes of combat. The dungeon should be explored by the player and not rushed through.
				</p>
				<h2>
					<strong>Moment to Moment Combat<br/></strong>
				</h2>
				<BlogImage src={CombatImage} alt="Combat" />
				<p>
				Inside of our dungeon we still want to maintain an action style when it comes to approaching enemies and the dungeon crawling itself. From our old action system we still retain the projectiles, dungeon traps, and ability to take damage outside of the card game combat. We also still allow the player to dash throughout the dungeon. The transition to combat begins when either an enemy successfully hits the player or the player attacks an enemy, after which they transition to the turn-based combat. Both the player and the enemy have their own deck of cards and will draw a full hand at the end of their turn. The enemy’s hand is hidden from the player but the Omens in the top right will reveal the outcome of the cards being played on the next enemy turn. We are still experimenting with the level of abstractness we want behind the Omens mechanic. Current questions include: Should we show their hand, should we reveal only the effects, or should it be a middle ground and show the effects and the numbers associated with those effects As of right now, we’ve opted to show just the effects.
				</p>
				<p>
					Combat ends when either the player or enemy dies with damage and the deck’s current state remaining persistent afterwards. This means that using a card that can only be used once per dungeon will remove it from your deck until you exit the dungeon thereby also making the damage you take outside of combat more impactful.
				</p>
				<h2>
					<strong>Other Additions<br/></strong>
				</h2>
				<p>
				In the last few months we also focused on finishing the Visual Novel Upgrades to the portraits and added in many more scenes to fill out the rest of Mari’s Arc specifically in the lead up to Mari’s Dungeon. We also upgraded to Unity 2018 and replaced more of the placeholder art around the city.
				</p>				
				<h2>
					<strong>What's Next?<br/></strong>
				</h2>
				<p>
				Our next goal is to work on Mari’s Dungeon and use it as the testing ground for our new combat system. We’ll be detailing our process of constructing a dungeon in our next post as well as going over our ideas on dungeon design. We’ll also be working on some UI enhancements and other scenes that will take place in Mari’s dungeon.
				</p>
                </BlogPost>
            </Page>
        );
    }
}

export default RainfallDevBlog4;