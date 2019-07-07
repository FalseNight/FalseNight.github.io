import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import InvestigationsImage from './images/investigations.png';
import ChoicesImage from './images/choices.jpg';
import IntroImage from './images/intro.jpg';
import FridgeImage from './images/fridge.jpg';

class RainfallActiveSocialSystem extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                    <h2>
                        <strong>Rainfall’s Active Social System<br/></strong>
                    </h2>
                    <h2>
                        <strong>Overview<br/></strong>
                    </h2>
                    <p>
                        Our goal for Rainfall is to be able to take the traditional, turn-based style visual novel events found in many games and incorporate opportunities into each scene that will allow for dynamic, player controlled methods of progression. By combining our various sub-systems like Investigations, Active Choice, and Lockon Acknowledge we aim to give the player a toolbox to explore a scene and reach its conclusion on their own terms. Things like gathering rumors will reveal new chat options, ignoring characters may change their reactions, and deciding how and where you interact with characters will affect how they view you. It's not just what you say, but what you do that decides the outcome.
                    </p>	
                    <h2>
                        <strong>Investigations<br/></strong>
                    </h2>
                    <p>
                        Every social interaction in the game, both story-required and optional, will trigger what we call an “Investigation”. Each “Investigation” can be thought of as being a running quest log that encapsulates the choices a player has made in an individual scene, or throughout a group of scenes or side-quest, depending on the Investigation and its scope. Each Investigation will have their own rewards as well, with some granting the player different abilities in combat while others will change how other characters perceive you, granting you access to different actions and dialogue you’ll be able to use within various scenes.
                    </p>
                    <BlogImage src={InvestigationsImage} alt="Rainfall Investigations" />	
                    <h2>
                        <strong>Active Choice<br/></strong>
                    </h2>
                    <p>
                    In trying to design the social portions of Rainfall, we primarily drew inspiration from two types of games: games which heavily incorporated the visual-novel style of storytelling and cutscenes like the Persona, Yakuza, and Trails series and the indie Puzzle-Adventure RPGs like Mad Father, OneShot, Detention, Yume Nikki, and other similar games. The Persona influences in particular are core to how we built the world, UI, and game mechanics of Rainfall's social half. However, one major factor in how we've decided to differentiate ourselves from Persona is the introduction of active, player-driven elements to the traditionally static social segments of the game. 
                    </p>
                    <p>
                    The origin of these active elements come from the puzzle sections of the aforementioned puzzle-adventure RPGs, where in order to move the plot forward the player has to acquire, combine and use items to interact with various objects and people allowing them to complete the various puzzles which gate their progress. While the games we are influenced by are not particularly complex with their puzzles, they use them as a pacing mechanism to both break up the story sections and to enhance the connection between the player and the characters they control. One issue we have with many of these games though is the lack of multiple solutions to any single puzzle. Oftentimes a room or set of rooms will be presented with a handful of items, all of which are needed to be utilized in a certain way to proceed. While this makes the puzzle more challenging, it can also serve as severe roadblock for players if they can’t figure out the solution. And as the complexity of the solution increases, the number of players affected dramatically rises as well. This rise in affected players often leads to a negative impression of the game as well, as singular complex solutions often lack the opportunities for player expression, and as a result are perceived as being obtuse and unfun to decipher.
                    </p>
                    <p>
                    In Rainfall, we aim to use Active Choice to marry these two game types together in an effort to eliminate some of the deficiencies we see in both genres and explore venues of untapped potential. Each scene in Rainfall can be broken down into three main parts: an introduction, an “Active Choice” component, and a conclusion. When a scene is first triggered, the intro phase starts which will either start a new investigation or trigger the next step in an existing investigation. This phase will be similar to a normal visual novel sequence, featuring characters talking in a turn-based fashion with some elements of choice present in the form of things like dialogue options which change depending on the results of previous investigations and the choices and the things you did in them. After a certain point in the dialogue, the active choice phase will begin, a free-roaming section wherein the player can interact with characters and the environment to reach one of the multiple endings for a scene. Depending on the order and types of interactions the player performs they will eventually trigger the conclusion phase where the current step of an investigation will be marked as completed and recorded alongside the information that will be persistent in other scenes, such as the way in which they did things or what ending they got. 
                    </p>
                    <p>
                    The ability for players to find and carry a unique “collection” of info with them through the entire game is a principle we call “Information Persistence” and is one of the fundamental tenets of our genre fusion efforts. Like how a player collects and leverages a stable of items in an Adventure game, the “Persistent Information” the player generates in Investigations will give them different options to interact with future scenes and determine how other characters treat Jin as the story progresses. While not everything the player collects will be altering the critical path of the game, it will give different experiences to each player depending on what info they’ve collected beforehand allowing a more personalized and memorable experience for them.
                    </p>	
                    <h3>
                        <strong>Example<br/></strong>
                    </h3>
                    <b>-Intro Phase-</b>				
                    <p>
    Jin enters Mari's Apartment. Mari turns to face Jin and starts talking to him.
                    </p>
                    <p>
                        Mari: Oh? Darkness-sama? What has you visiting so late?<br/>
                        Jin: I didn't really have anything to do<br/>
                        Jin: And this place sounded like fun<br/>
                        Mari: Darkness-sama...you shouldn't say that to a high schooler<br/>
                    </p>
                    <p>
                        Investigation “Another Boring Night with Mari” begins and presents four conclusions:<br/>
                        <ul>
                            <li>Leave Mari's Apartment</li>
                            <li>Be a nuisance to Mari</li>
                            <li>Get Mari to drink alcohol</li>
                            <li>Play a card game with Mari</li>
                        </ul>
                    </p>
                    <p>
    These conclusions can also be viewed at any time during the investigation by toggling Author Vision. This will show all four conclusions on the screen along with the current things you’ve done in a scene so far.
                    </p>
                    <BlogImage src={IntroImage} alt="Rainfall Scene Introduction" />
                    <b>-Active Choice Phase-</b>	
                    <p>
    Jin now has several objects and characters he can lock onto. The Fridge, Mari, Mari’s Nightstand, and the Front Door. Any of these can be interacted with in any order.
                    </p>
                    <p>
                        <b>1. Talk To Mari</b><br/>
                        Mari: Feel free to do almost whatever you want Darkness-sama<br/>
                    </p>
                    <p>
                        Show Active Choices<br/>
                        <ul>
                            <li>If Jin is holding a beer, you can give Mari a beer</li>
                            <ul>
                                <li>If this is chosen, this will trigger Conclusion 3</li>
                            </ul>
                            <li>If Jin is holding cards, you can ask Mari to play cards</li>
                            <ul>
                            <li>If this is chosen, this will trigger Conclusion 4</li>
                            </ul>                              
                            <li>Don’t do anything</li>
                        </ul>
                    </p>
                    <p>
                        <b>2. Interact With The Fridge</b><br/>
                        Jin: Do you have any alcohol?<br/>
                        Mari: YOU REALLY SHOULDN’T SAY THAT TO A HIGH SCHOOLER<br/>
                    </p>
                    <p>
                        Show Active Choices<br/>
                        <ul>
                            <li>Take the Alcohol Free Beer</li>
                            <ul>
                                <li>If this is chosen, Jin will now be holding a beer</li>
                                <li>This will also trigger a Doujin Text pop-up of “I should give this to Mari”</li>
                            </ul>
                            <li>Take all of the perishables out of the fridges</li>
                            <ul>
                                <li>If this is chosen, Jin will now have the Has Ruined Mari’s Food context for the rest of the scene</li>
                                <li>This will also trigger the following dialogue</li>
                                <ul>
                                    <li>Mari: Darkness-sama why are you doing this?!</li>
                                    <li>Jin: Just to annoy you</li>
                                </ul>
                            </ul>
                            <li>Don’t do anything</li>
                        </ul>
                    </p>
                    <BlogImage src={FridgeImage} alt="Rainfall Mari's Fridge" />	
                    <p>
                        <b>3. Interact With Mari’s Nightstand</b><br/>
                    </p>
                    <p>
                        Show Active Choices<br/>
                        <ul>
                            <li>Take the Cards</li>
                            <ul>
                                <li>If this is chosen, Jin will now be holding cards</li>
                                <li>This will also trigger a Doujin Text pop-up of “I should see if Mari wants to play cards”</li>
                            </ul>
                            <li>Mess up the nightstand</li>
                            <ul>
                                <li>If this is chosen, Jin will now have the Has Ruined Mari’s Nightstand context for the rest of the scene</li>
                                <li>This will also trigger the following dialogue</li>
                                <ul>
                                    <li>Mari: Darkness-sama stop messing up my room!</li>
                                </ul>
                            </ul>
                            <li>Don’t do anything</li>
                        </ul>
                    </p>
                    <b>-Conclusions Phase-</b>	
                    <p>
                        <b>Conclusion 1: Leave End</b><br/>
                        Interact With the Front Door<br/>
                        Mari: Wait what you're leaving already? You just got here!<br/>
                        <br/>
                        Jin leaves Mari’s apartment. This concludes the investigation “Another Boring Night with Mari”. Mari will remember that you ditched hanging out with her next time.
                    </p>
                    <p>
                        <b>Conclusion 2: Nuisance End</b><br/>
                        Triggered automatically after gaining both the Has Ruined Mari’s Food and Has Ruined Mari’s Nightstand contexts.<br/>
                        Mari: Darkness-sama you're being a huge pain!<br/>
                        Mari: Please leave!<br/>
                        <br/>
                        Jin leaves Mari’s apartment. This concludes the investigation “Another Boring Night with Mari”. Mari will remember that you were a nuisance and messed up her apartment.
                    </p>
                    <p>
                        <b>Conclusion 3: Beer End</b><br/>
                        Triggered automatically after giving Mari the alcohol-free beer from her fridge.<br/>
                        Jin: Here you go Mari, drink this it's delicious!<br/>
                        Mari: STOP SAYING THESE THINGS TO A HIGH SCHOOLER<br/>
                        <br/>
                        Jin and Mari open and cheers their beers and the scene fades to black. This concludes the investigation “Another Boring Night with Mari”. Mari will remember that Jin and her had a fun night pretending to get drunk together.
                    </p>
                    <BlogImage src={ChoicesImage} alt="Rainfall Active Choice" />
                    <p>
                        <b>Conclusion 4: Cards End</b><br/>
                        Triggered automatically after giving Mari the cards from her nightstand.<br/>
                        Jin: Anyways want to play cards or something?<br/>
                        Mari: Sure, though I don't think you've ever beaten me before!<br/>
                        <br/>
                        Jin and Mari sit down on the floor and begin gambling. This concludes the investigation “Another Boring Night with Mari”. Mari will remember that Jin and her had a fun night gambling even though she beat Jin every round.
                    </p>
                    <h2>
                        <strong>Conclusions<br/></strong>
                    </h2>
                    <p>
                        In Rainfall, we believe that the active choice component of a scene along with its many conclusions will be critical in allowing our game to transform traditionally static visual novel elements into more of an exploratory theatre piece, where the player is the driver behind what path the game will take. While the individual concepts aren’t unique or revolutionary, by designing every scene with this degree of flexibility we hope that players will approach a scene in a similar fashion to the kind of encounters one might find in tabletop role-playing games like Dungeons and Dragons. The player should feel compelled to explore the scene space and have a desire to experience Jin’s character through their own actions in meaningful ways. While selecting the option to give alcohol-free beer to Mari is a comical scene, small additions like actually grabbing a beer and delivering it to Mari will more effectively place the player in the role of Jin and increase how memorable the scene is and how much it enhances their experience by tying such actions to the expression of their player agency in the world of Rainfall and how they choose to pilot Jin through it.
                    </p>                   
                </BlogPost>
            </Page>
        );
    }
}

export default RainfallActiveSocialSystem;