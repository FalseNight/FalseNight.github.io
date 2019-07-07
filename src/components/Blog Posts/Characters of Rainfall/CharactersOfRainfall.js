import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import AkaneImage from './images/akane.png';

class CharactersOfRainfall extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
			<strong>Player - Jin Akiyama<br/></strong>
	        </h2>
		<p>
			Desire: “There’s always tomorrow”
			<br /><br />
			Personality: The protagonist of the story, who dropped out of college to focus on being a novelist. Desperate to stay afloat in a crowded marketplace, he makes a half-hearted attempt at a series of light novels, and much to his own dismay, they find dramatic success for the little effort put in. His easygoing attitude to work gives way to a carefree life until he is suddenly pulled into the battle royale.
		</p>
        <BlogImage src={AkaneImage} alt="Rainfall Akane" />
		<h2>
			<strong>Akane Fujiwara<br/></strong>
	        </h2>
		<p>
			Desire: “I want meaning to my struggle”
			<br /><br />
			Personality: Akane is the kind of person born once in a generation. She reaches the impossible effortlessly with a divine grace and not a soul to stand by her. The sole exception to this solitude is Jin, with whom she has forged a deep bond in a short time despite how odd the pair seems at a distance. Despite this, social success is still as common to her as all other victories, flipping between cordial persuasion and sharp-tongued mischief as it pleases her. The only vice she has is a love of wine and liquor and all other wonders of alcohol that never seem to topple the queen of victory.
		</p>
		<h2>
			<strong>Reiji Takeshita<br/></strong>
	        </h2>
		<p>
			Desire: “I can always be better”
			<br /><br />
			Personality: Instilled with a ceaseless drive for more, Reiji is a man in a perpetual climb of self-improvement. Never reaching satisfaction he has become obsessed with reaching an image of himself always just outside of his reach. Born into mediocrity, Reiji has built himself solely out of the power of his blood, sweat and tears. He even cast aside his name and visage to transform an average delinquent into the perfect image of corporate high-society. He functions as Jin’s manager and has leveraged his “trash writing” into the next-step of his journey.
		</p>
		<h2>
			<strong>Marisa “Mari” Yamashiro<br/></strong>
	        </h2>
		<p>
			Desire: “I don’t want my life to be boring”
			<br /><br />
			Personality: Mari is a high school student that lives on her own and works various part-time jobs to support her lifestyle. Though she tends to barely make ends meet due to her clumsiness and personality repeatedly getting her reduced wages or fired from her jobs. However despite her failings she holds the keen sense, or dumb luck, of a legendary gambler funneling the majority of her winnings into cosplay as her “chuuni” persona. Still a kind girl despite air-headed delusions, she is a massive fan of Jin’s light novels, referring to him as the “Darkness-Sama” of “You’ll have to believe me when I say I’m a Demon Lord” his first and most famous work as a light novelist.
		</p>
                </BlogPost>
            </Page>
        );
    }
}

export default CharactersOfRainfall;