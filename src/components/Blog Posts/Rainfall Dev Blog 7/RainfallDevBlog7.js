import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import MadameImage from './images/madame.png';
import MaleIdolImage from './images/male-idol.png';

class RainfallDevBlog7 extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>Rainfall Dev Blog #7: Feb - May 2019<br/></strong>
				</h2>
				<h2>
					<strong>Overview<br/></strong>
				</h2>
				<p>
The past four months have been primarily dedicated to laying the groundwork for the last three arcs of the game. We've taken it upon ourselves to write out every single scene remaining in Arcs 3, 4, and 5 and have also made the decision to rewrite large groups of scenes in Arc 1 and 2 as well. In conjunction with this effort, we've also taken this opportunity to introduce a new cast of characters that will be prevalent throughout the whole story in order to support new changes in the overall structure of the island.
				</p>	
				<h2>
					<strong>The Underground<br/></strong>
				</h2>
				<p>
This major restructuring refers to the Underground section of the city, an idea that's long been considered but is only finally entering production with our latest initiatives. A major part of the island's character and allure is the ever-present and foolhardy desire for progress and development in the face of constant adversity and failure. The artificial island that houses our story was never meant to exist, and only continues to persist due to the extreme desires of the corporations, criminal organizations, and the people who inhabit it and continue building on the failures of the past in a ceaseless pursuit of their own ideals. The constant cycle of creation and destruction that's a part of everyday life on the island manifests in the construction and raw metal exposed in the landscape, an aspect we have since quadrupled with the creation of the Underground.
				</p>
				<BlogImage src={MaleIdolImage} alt="Rainfall Male Idol in Underground" />	
				<p>
Our new Underground section of the city will be featured from the very beginning of the game and represents the previous layer of the city that lurks beneath the newer projects like Jin's apartment. Decades ago crime syndicates across the Pacific banded together in order to create their own oasis, a sanctuary for all their worldly and not-so-legal needs away from the prying eyes of the public. However such a place could not maintain it's privacy forever, and soon corporations and the masses began to penetrate the island's shores for both legitimate and unsavory purposes. The changes in their sanctuary caused a rift among the groups who founded the island. Some were ecstatic, with new capital and fresh blood the island was a flourishing center of growth and development. But others saw this as frivolous, an unneeded corruption of their personal space and safe haven. Now heavily splintered, the Underground continues to stand though, and continues to indulge the darker desires of its residents regardless of where the sun shines on their home.
				</p>
				<p>
While somewhat neglected compared to the topside, the Underground betrays its name somewhat as it's yet to be completely sealed off from the surface. Large holes dot the city's landscape and provide a wondrous view into the deeper parts of the city down below, some of which is large enough to peek out onto the surface past the cavernous ceilings. We've begun the preliminary work on constructing the new tile-sets that will model these features and expect those to be finished within a few months as the set will not only need to flesh out these ideas but the city will also need to be changed to accommodate this as well, as Acts 3 and 4 will rely heavily on the Underground.
				</p>	
				<h2>
					<strong>New Characters<br/></strong>
				</h2>	
				<p>
In order to truly bring the Underground to life, we've created a whole new cast of characters to populate and enrich its flavor. This new cast will not only help build up the Underground but will provide previous minor characters the opportunity to be fleshed out into more major players in the story.
				</p>
				<h3>
					Touya Yoshinori - The Young Boss<br/>
				</h3>	
				<p>
The leader of a group that's quickly making its way up the ranks in the Underground. Based out of the dual purpose Host and Hostess Club known as Horizon, their status as an organized crime syndicate belies their leader's noble intentions. While not unfamiliar with the less savory aspects of the Underground, the Young Boss truly has nothing but the best intentions for not just the Underground but the City as a whole. Ultimately all his actions are for the sake of the City and seeing it prosper in the future. He stands as one of many foils to Jin. Within him lies a strong ambition, a drive to pushes him to always give 110%, and a close circle of friends willing to lay their lives down on the line for him and his vision, all things Jin lacks at the start of the game.
				</p>
				<h3>
					Ichiko Isshiki - The Madame<br/>
				</h3>	
				<p>
The woman tasked with leading the hostesses in Horizon. She's third in the chain of command and a strict taskmaster. Don't let her tough love fool you though, she's very protective of all her hostesses and acts as both their guardian and the mother they never had. She is primarily inspired by the sukeban archetype and leverages her girls as a vast intelligence gathering network, keeping tabs on movements in the Underground and ensuring their organization is never caught too off-guard.
				</p>
				<BlogImage src={MadameImage} alt="Rainfall Madame in Underground" />	
				<h3>
					Isshin Sendou - The Doctor<br/>
				</h3>	
				<p>
While the battle between the factions in the Underground rages on, there exist a few places that have been agreed upon as neutral territory. The most well known of all these being The Doctor's clinic. Frequently by all members of the public, gang related or not, The Doctor is always willing to provide his services in order to feed his ever growing God Complex, continuously honing and refining his skills not so much to save others but his own sense of self-satisfaction and superiority.
				</p>
				<h3>
					Shion Sawako - The Hostess<br/>
				</h3>	
				<p>
A starving artist stuck between a rock and a hard place. Relatively new to Horizon, her good looks are tempered by somewhat "sour" disposition. A girl who masks her problems with the image of a fast and furious lifestyle filled with glitz, glamour, fun and a devil may care attitude that does a horribly poor job of keeping up the facade to anyone paying attention. Unable to pursue her true passions she listlessly heads to the grind each day desperately trying to keep the spark within her alive until the day she can rekindle her true calling again. Her attempts to keep the fire going have been relatively unsuccessful though the same can't be said for the string of misfortunes that befall her once Jin begins his stint at the Club.
				</p>
				<h3>
					Mutsuki Morisato - The Editor<br/>
				</h3>	
				<p>
The counterpart to Reiji at the Publishing Firm. While average in many aspects, her obsession with competition is backed by an insane work ethic which puts her at nearly double or triple the hours as any of her coworkers Reiji included. While Reiji views her as his main rival the company, Mutsuki holds an intense admiration of Reiji's drive and goals, and harbors romantic feelings for him that she sometimes consults Jin on, a strictly platonic affair of course, no ulterior motives here.
				</p>
				<h2>
					<strong>Other Random Improvements<br/></strong>
				</h2>				
				<p>
We’ve replaced all of our text components in the game in favor of Text Mesh Pro and remade our dialogue system to accommodate it. More optional lockon acknowledge events have been added throughout the city as well as more context specific dialogue that will be propagated throughout the rest of the game. This has also set the stage for us to start working on the Investigations System and consolidate it with the concepts of Relationships, Stats, and Optional Questlines.
				</p>	
				<h2>
					<strong>What's Next?<br/></strong>
				</h2>
				<p>
We’re still finishing up writing up Arc 5 scenes which will then be followed by rewriting our tutorial section of the game in Arc 1 to both be a better experience and more thematically consistent with the rest of the game. We’ll also be finishing up the initial Underground section and making the appropriate changes to the City to show off the Underground.
				</p>
                </BlogPost>
            </Page>
        );
    }
}

export default RainfallDevBlog7;