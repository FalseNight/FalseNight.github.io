import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import DeckBuildingImage from './images/Deck Building.jpg';
import ShimakazeImage from './images/shimakaze.jpg';
import CardsImage from './images/cards.jpg';

class AnAdmiralsPride extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
                    <strong>An Admiral's Pride: Game Design Lessons from KanColle Arcade<br/></strong>
                </h2>
                <p>
                A trend in Japanese arcades over the last several years has been the emergence of taking popular franchises like Kemono Friends, Fate Grand/Order, and others and turning them into collectible card games (CCGs) with either action rpg, tactical rpg, or rhythm game elements. However, while many of these share common features and each have their own dedicated fanbases, it's the KanColle arcade game in particular that has defied my expectations and captured my heart.
                </p>
                <p>
                KanColle otherwise known as Kantai Collection was originally a Japanese-only desktop strategy RPG where you collect various kanmusu (literally ship girls) and send them on missions to destroy the enemy faction known as Abyssals. At the most abstracted level you level up, upgrade your units and their weapons, and form various teams to beat certain encounters. While the game hasn’t permeated in the west as much as other franchises like the aforementioned Fate/Grand Order, largely due to the difficulty in playing the game like requiring a VPN to even play on the Japanese Servers, the characters and franchise itself are well-known to those beyond just a niche otaku audience. I have played the game before, though it has easily been five years since the last time I had booted up the VPN necessary to play the game, and while I enjoy the designs of some of the characters, watched the anime, and managed to win a few of the figures from some previous trips to Tokyo, I didn’t really have any interest in playing the Arcade CCG.
                </p>
                <BlogImage src={ShimakazeImage} alt="KanColle Shimakaze" />
                <p>
                But over the last month, while in Tokyo, and having exhausted all of the available content in the Fate Grand/Order Arcade game, I decided to put in 100 Yen and play a round of KanColle Arcade. The game itself is fairly simple. 100 Yen or a bit less than $1 will buy you 300 GP along with some supplies and on your first playthrough will also reward you with your first card from a select list of starting units. Unlike most other games though, each machine is equipped with a printer which will print out each card you buy in game. You then take this printed card and use it to play the arcade game. Once you have your cards scanned in and you assemble a team, you can then spend your GP to go on missions. Completing these missions unlocks further missions and gives you the opportunity to pay an additional 100 Yen for another card, which you can then add to your deck of cards, and then continue the cycle again. 
                </p>
                <p>
                Fate Grand/Order and nearly all of the other arcade games follow this pattern of play but where FGO had a variety of anti-consumer practices and largely butchered its own progression system, KanColle innovates in its card acquisition and its deck-building elements.
                </p>
                <h2>
                    <strong>Card Acquisition<br/></strong>
                </h2>
                <p>
                Using FGO as an example, there are three ways to acquire cards in the game:  use a summon ticket to perform a summon and then spend 100 Yen if you like the card, finish a mission and spend 100 Yen, or spend resources and 1000 Yen to acquire 10 random cards. While I have no issues with any of these methods, the first is obviously way more friendly to the player given that you only have to spend money if you actually want the card you randomly rolled. The latter two methods would also be acceptable except for one key problem. If you have no need for the card, it provides literally no value to you. You can choose to scrap it for summoning resources but these are handed out so frequently that you are never in need of them as a player. So most players have dozens of useless cards. 
                </p>
                <BlogImage src={CardsImage} alt="KanColle Cards" />
                <p>
                KanColle solves this issue by providing a use for every single card acquired in the game. Whenever you earn a card in KanColle you are given the option to print out the card or scrap it for a blueprint of that same character. Once you have scrapped enough of the same character and have a printed out copy of one already, you can then spend those blue prints to print out the Kai version of that card. The Kai version has different artwork and is stronger than the base card. You can also spend 4 or 8 blueprints of your choice of different characters to randomly earn a Kai version of a card as well. This makes it so even a duplicate or useless card will end up helping you in levelling up your deck overall.
                </p>
                <p>
                KanColle’s progression system also encourages you to frequently print out cards and do new rolls in the game. When you start the game for the first time, your random pulls at the end of a round are limited to a small set of the games fastest but weakest units the Destroyer class. As you complete more and harder missions, the pool of ships expands into Cruisers, Battleships, Carriers, and more. Each of these both introduce new mechanics to the main game as well as increase your team’s strength as you unlock stronger and stronger units. While you may start the first 4 missions with one team by the time you are doing the later missions you’ll be using a completely different team. During my playthroughs I would generally replace one of my team of 6 every 3 or so missions as I got a stronger unit or found unit that fit my composition better.
                </p>
                <h2>
                    <strong>Deck Building Elements<br/></strong>
                </h2>
                <p>
                While it is a CCG first and foremost, KanColle Arcade incorporates a stronger flavor of deck-building elements then other arcade CCGs. To me the distinction between a CCG like Magic the Gathering and a deck-building game like Dominion is whether the core gameplay loop deals with constructing a deck or if constructing a deck is purely a prerequisite for playing the game. There is quite a considerable gray area between the two and deciding if a game is a deck-builder or not is an often contentious topic.  Hearthstone for instance is not a deck-building game in its standard mode. You construct a deck or can use a deck list from online and given that you have the cards you can then play that deck without much thinking about the deck’s construction itself. You can queue into 100s of games of playing that deck and that deck only. You may customize a couple of the cards depending on the meta or frequency of opponent’s or swap to a different deck list entirely but this is purely a prerequisite for playing a pvp match.
                </p>
                <BlogImage src={DeckBuildingImage} alt="KanColle Deck Building" />
                <p>
                KanColle has stronger deck-building influences that either occur naturally or are forced on the player by the game. An example of natural deck-building is printing out a new card and deciding if they fit within your current team is either an upgrade or sidegrade. Then you have to decide which equipment cards to provide them and which position in the team they’ll be. Positioning in KanColle is important as it determines how fast your team moves, if your flagship is defeated you fail the mission, and certain positions are more prone to being hit then others. An example of forced deck-building is when you are not allowed to start certain missions unless you have certain team compositions like all Destroyers, having at least 2 Aircraft Carriers, or not having more than 1 of the same type of ship. This means you can’t level up just six units and use them across all missions. You have to level up other ships in classes outside of your comfort team composition.
                </p>
                <p>
                Using FGO as a comparison again, it tries to naturally force different team comps by having some cards stronger and weaker versus other types of cards but because it's more of an action game, and the game’s low difficulty in missions, there is never a need to swap to an advantageous class unless you are trying to farm faster. By never forcing you to change to a different character either, once you have the three units that make up your team solidified you never change your team composition. This then completely invalidates the need for the game to be a CCG since you never need to collect another card again. At this point, it could have just been a traditional action arcade game.
                </p>
                </BlogPost>
            </Page>
        );
    }
}

export default AnAdmiralsPride;