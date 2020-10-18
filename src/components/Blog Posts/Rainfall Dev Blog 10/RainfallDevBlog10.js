import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import CombatIdleGif from './images/combat idle.gif';
import NewAkaneImage from './images/akane.png';
import JinApartment from './images/jin apartment.png';
import EmiApartment from './images/emi apartment.png';
import SanaeImage from './images/sanae.png';

class RainfallDevBlog10 extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>Dev Blog #10: May - August 2020<br/></strong>
				</h2>
				<h2>
					<strong>Overview<br/></strong>
				</h2>
				<p>
                These last few months have been very busy as we’ve been finishing up the scene planning for the rest of the game, the majority of our time has been spent on writing out all of the plot threads in the game, deciding where to place different scenes, and re-examining our existing locations, cast, and scenes to make sure that everything is tightly interconnected and is still something we want to keep around. Some of our locations and characters had to be revamped since they were either vastly out of date compared to our current standards or needed to be rebuilt from the ground up. While we haven’t finished this exercise, since we’ve detoured back into the combat system, we should hopefully have it completely finished in the next update.
                </p>
				<h2>
					<strong>Major Milestones<br/></strong>
				</h2>
                <h3>
                Akane’s Revamp<br/>
				</h3>
                <p>Akane is one character that we took a long re-examination of and decided her style and storyline no longer fit the kind of story that we wanted to tell. The major theme of our game that each character tackles and challenges differently is the idea of “why should I live”. All of the characters in our game are strongly motivated to achieve their dreams and give in to their strongest desires. Reiji, at the highest level, wants to be able to keep progressing. Mutsuki wants to push herself to her limits, Toro wants to find value in his life, Touya wants to protect the city and cause it to thrive. Every character is what we’ve been calling a “failed genius”, someone who is so close to greatness or may have achieved greatness but is significantly hindered by and achieved this level of greatness through their desire. For instance, while Mutsuki wants to push herself to her limits and rise to the top she does so at the detriment of her own health and pushes herself past the brink. For many of the characters, over the course of the game they must fail at their desire and thus have to re-examine it in some way before continuing down the path in a healthier way or diverging from it entirely.
                </p>
                <p>Now when it came to Akane, previously her ambitions and personality all revolved around being too good at everything and thus seeking defeat and failure even if the methods were self-destructive. This came through in her personality being that high mighty older sister styled character to Jin which more often than not meant she’d be pulling Jin into situations that would cause him burden or would be admonishing Jin. It really didn’t feel like she and him were very close friends. Storywise she was also very boring to play with and her desires were very one note and pretty disconnected from a general audience which doesn’t work well for one of the primary protagonists of the story. So we redesigned her and her place in the story.
                </p>
                <BlogImage src={NewAkaneImage} alt="Rainfall New Akane" />
                <p>Akane retains some similar traits in both her look and personality with her instead dealing with her inability to find happiness and personal contentment despite numerous achievements and defining herself outside of her achievements. She is still this genius level character that has reached what nearly every character would consider as success but the way she challenges the core question is “what do you do when after achieving your desire you don’t feel fulfilled.” Akane has become aimless and does things based off of her whims, oftentimes pulling Jin and others into her antics. Akane is also becoming a supernatural character involved in the battle royale having the powers of the Reader to contrast with Jin’s Writer powers. She uses her Reader powers to investigate different timelines and futures to be able to serve as a partner to Jin in the competition. She also uses her powers to see how she can be happy however her efforts don’t turn anything up during the course of the game.
                </p>
				<h3>
                Jin’s Battle Form<br/>
				</h3>
				<p>One of the most important elements of each of our major characters that we’ve neglected up until now has been their “Battle Form”. Everyone involved in the battle royale has a god that supports them, their own unique powers, and their own way of manifesting that power. While we make mention of it throughout the game we haven’t designed these outfit changes so we’ve changed that by working on Jin’s first.
                </p>
                <BlogImage src={CombatIdleGif} alt="Rainfall Jin Combat Idle" />
                <p>The main tenet of our battle forms is to transform but not recreate our characters. We want to have these shifts maintain as many elements of their normal street outfits as possible while still giving them weapons, auras, and additional features. For Jin we’ve always had the rogue theming with dual daggers as his main weapon but we wanted to augment it further and incorporate the Hooded Figure more into his design to make him feel like more of a partner than just another character. So we took the Hooded Figure and had him transform into more of a spirit type form that follows Jin and augments his attacks. We also gave Jin an ink motif with his daggers and aura leaking ink on to the ground. The spirit and all other attacks will also throw ink as part of their movements dying the combat area in blue and black.
                </p>
                <p>
                The second tenet of our design is to make each character into a combo of two RPG base classes (e.g. hunter, rogue, warrior, mage, etc.). For Jin we took this rogue-warlock vibe along with the ink that constantly leaks out of his dagger and aura to make him into a Spirit Ink Rogue. His playstyle features him being hyper agile with dashes, jumping in for quick hits and teleports while dodging between enemy attacks while at the same time having support from the Hooded Figure who as a spirit can transform into a variety of forms for different purposes.
                </p>	
                <h3>
                Revamped Apartments<br/>
				</h3>
                <BlogImage src={JinApartment} alt="Rainfall Jin Apartment" />
				<p>
                After the Coffee Shop, Jin’s Apartment was one of the first areas added into our game and it’s age really showed. It’s level design, utility, and just overall design were both lackluster and had too much open space without proper purpose. So we took a look not just at Jin’s Apartment but also the whole complex and remade the entrance and added in Emi’s Room as a hallway neighbor to Jin.
                </p>
                <BlogImage src={EmiApartment} alt="Rainfall Emi Apartment" />
                <p>
                While we haven’t fully solved some of the utility problems, aesthetically each of these locations feels more unique and solves for story issues we had with having to reuse the same areas multiple times. For Jin his apartment previously was laid out in such a way that events only occurred in a single way with people entering his front door and then everyone sitting on the couch for a scene. The introduction of the balcony element is going to allow for scenes out there as well as being a way that Akane accesses your apartment by climbing from her balcony next door to yours. The couch area has also been reworked to be more friendly for the views we have in game and showcasing a large television now that we can show both television shows and video games on.
                </p>
				<h2>
					<strong>Sanae<br/></strong>
				</h2>	
                <p>
                Even though in the previous update I said we had our final cast of characters, I lied. Sanae was always a concept of a character for the last year or so but I honestly thought we’d cut her going into full production of the scenes. However, we found we were missing a couple key elements that Sanae filled really well. Namely, while we had a couple characters with ties to Jin’s workplace they were all peers and he had no person above him in terms of power/authority. Besides being unrealistic, it gave the impression Jin was so senior he could do whatever he wanted and in later scenes where Jin runs into contention with the organization it remained a faceless entity. We also had some issues around the fact that Akane had no strong ties to other characters besides Jin. While thematically that could work, it did mean that Akane had a lack of presence in scenes and didn’t really develop or have history with others. So introducing Sanae as an explicit former love interest gave her both a history and provided Akane with other people she was friends with outside of Jin’s group.
                </p>
                <BlogImage src={SanaeImage} alt="Rainfall Sanae" />
				<h2>
					<strong>What's Next?<br/></strong>
				</h2>
				<p>
                Over the course of September and October, we’re going to be finishing our detailed documentation of every scene in the game allowing for us to start executing on it in November with an ambitious goal of finishing through Mari’s Arc by end of year. We’d also like to do that re-examination of our information hierarchy. We went through some initial concept sketches of how we can further improve the Author Vision Menu as well as further integrating it into the moment to moment gameplay, though it still needs to be played around with some more so we can find the right balance between useful without being something the player has to be overly dependent on.
                </p>
                <p>
                We’re also re-examining the combat system again and working on finalizing the design of it in terms of story, its integration into the social mechanics, and the macro/micro decision making the player will go through. This also includes going through a similar exercise to Jin with creating the battle forms of all of the characters in our game with ties to the supernatural side.    
                </p>
                </BlogPost>
            </Page>
        );
    }
}

export default RainfallDevBlog10;