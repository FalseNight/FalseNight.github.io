import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";
import Footer from '../../Shared/Footer/Footer';

import FinalBustsImage from './images/final busts.png';
import FinalImplementationImage from './images/final implementation.png';
import InitialBustsImage from './images/initial busts.png';
import InitialImplementationImage from './images/initial implementation.png';
import InspirationMapImage from './images/inspiration map.png';
import RoughDraftsImage from './images/rough drafts.png';

class HowWeDesignRainfallCharacters extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>How We Design Rainfall Characters<br/></strong>
				</h2>
				<p>
As a whole, the characters in our game tend to form along two central ideas. Either they exist to satisfy a story requirement, or are created to showcase a certain archetype. In the first scenario, we start with their personality and how they interact with other characters, this is how characters like Yumeko and Akane were created. Both of them were designed with the idea that they were foils to other characters, Yumeko to Mari and Akane to Jin. Their role in the story was cemented first and then we developed their looks based off of that role. For the second scenario however, the image of the character is more what drives their role in the story. The prototype of this method was Mari, who was designed around the "Chuunibyou" archetype, our goal was to create our own unique spin on this common idea inspired by by popular characters such as Megumin character from Konosuba.
				</p>
				<p>
To this end, when designing characters for Rainfall, we decided to take a unique approach to our method by using a process we call a "Let’s Draw". As the name implies, it's a communal drawing session where we start on the same blank canvas and draw the character together, similar to an artistic version of pair-programming. We believe that by using this method we've been able to accomplish several key objectives for our character design: rapid iteration across multiple design concepts, minimize the delay between design and feedback, and much stronger and cohesive designs as a result of multiple viewpoints on the same character.
				</p>
				<p>
				Regardless of their origins though, the overall process follows the same methodology starting first with...
				</p>
				<h2>
					<strong>Pre-Production<br/></strong>
				</h2>
				<p>
In the pre-production step, we come up with a list of images that inspire us in some way for a character in terms of looks or personality. For the purposes of this article we’ll be looking at our most recent character Emi, a socially reclusive and famous game developer known in universe for creating a series of games known as "Death Crown". The pitch for her character was a "distorted and exaggerated embodiment of your typical online shitposter" with speech patterns full of strange and obscure references to nerd culture topics like anime and games, and an overall disdain for people, while still maintaining a very analytical and thoughtful mind when it comes to topics which actually interest her. It’s with these very basic traits we created our image map of inspirations which looked like this:
				</p>
				<BlogImage src={InspirationMapImage} alt="Rainfall Emi Inspiration Map" />
				<h2>
					<strong>Let’s Draw<br/></strong>
				</h2>
				<p>
From there we went into the "Let's Draw" session starting with one person in control of the drawing and streaming their progress to the other. We start with discussing the image references while working on the initial construction of the character’s body, as the focus here is not on producing a final image but creating a rough black and white sketch where we try to capture the overall feeling and aesthetic of a character. We start with the posing of the character as our first decision. Each of our character’s visual novel styled busts are designed with a different pose in mind both to differentiate each character from each other and to heighten certain aspects of their archetype and/or personality. For Emi, we wanted to give her a pose that highlighted the NEET-esque, socially awkward nerd angle. We went with a slight hunch and a defensive posture that tried to reflect her personality via body language. This pose stuck around for the remainder of her development, and from there we focused on the face using Emma Stone and Maho from Stein’s;Gate Zero as our primary reference images. With these two in mind we decided to give her hair that would be messy and unkempt while still being visually pleasing. We really liked the concept that while in her work life she is very dedicated and puts all of her effort into it, this causes her to neglect anything else outside work. The best example of this is her hair which is meant to resemble a dye job she did herself but then never maintained, leading to uneven coloring and visible roots.
				</p>
				<BlogImage src={RoughDraftsImage} alt="Rainfall Emi Rough Drafts" />
				<p>
After producing the initial rough sketch, we experiment with colorings and try several variations on the same general character design. Some changes may be small like trying out a few different types of glasses while others can be more drastic like changing the posing, different hair styles, and looking at other outfits. If the character doesn’t immediately pop out at us during these rough sketches then the character isn’t worth refining into an actual bust and must keep going through iterations. While polish can do a lot of work to elevate many designs, it ultimately can not make up for mediocrity or blandness, and will not result in a character that lives up to their full potential and is worth remembering to the player. More than anything the designs must be memorable, a memorable design is the foundation of a player's investment in a character and should encourage them to want to see the character again and again across many scenes. As such it is critical that this trait be refined in the initial stages, even if it means scrapping the design and starting again.
				</p>
				<h2>
					<strong>Initial Implementation<br/></strong>
				</h2>
				<BlogImage src={InitialImplementationImage} alt="Rainfall Emi Initial Implementation" />
				<p>
After creating the rough sketch with some tentative colors, we immediately add the bust to the game to test out how the new character looks in different environments and with different characters. We then go back and refactor the rough draft based off of this to ensure the new character is consistent in style and tone with the rest of the game while also improving the meaning and quality of the design. For example, we decided to switch the dye job on Emi from platinum blonde to pink so as to not overlap with Mari’s look too much. But we then also reincorporated the black and white elements into the design on her shirt in order to tie some of her design back to Jin’s.
				</p>
				<h2>
					<strong>Initial Bust and Refactor<br/></strong>
				</h2>
				<p>
Once we are satisfied with the rough draft within the game, we then do a final pass of the bust using the rough draft's line work and colors as a reference.
				</p>	
				<BlogImage src={InitialBustsImage}alt="Rainfall Emi Initial Busts" />			
				<p>
Pictured above are the first three versions of Emi’s final design. The image on the left was the very first attempt at a final pass taking a very literal approach to her rough draft sketch. This first attempt highlights that while certain elements may look appealing on the rough draft, they don’t always transition over to the final design very well. For example, the posing, spats, and the colors themselves were elements changed over the course of production to better capture Emi’s feel. The spats left the leggings exposed too much leaving her with a boring lower half. The arm’s positioning and the way the cloth laid on the forearms took away from the pajama-like clothes we wanted her to have. The goal was for her outfit to appear to be comfy and baggy, likely stretched out due to repeated wear and tear and an unwillingness to buy new clothes. In the third image you can see these changes come to fruition with her lower half having huge changes to give her a slightly more punk appearance and sacrificing a bit of the pajama design while still retaining the comfy feel.
				</p>
				<p>
				Still not fully satisfied though we attempted a few more variations.
				</p>
				<BlogImage src={FinalBustsImage} alt="Rainfall Emi Final Busts" />	
				<p>
Here we remade the glasses and gave her eyebags to transition more towards the workaholic game developer she is and move away from the punk rock persona. We also experimented briefly with giving her baggy, cloth pajama bottoms which while fit her archetype more, but was decidedly less visually appealing than the shorts and ripped leggings. These leggings also provided better “banding” where a pattern can be seen by examining the horizontal black areas throughout her body: leggings, shorts, arms, collar, glasses, hair. This was a more cohesive design and was what we settled on as her final look.
				</p>
				<h2>
					<strong>Final Implementation<br/></strong>
				</h2>
				<p>
With the bust complete we reimplement the character into the game and test out some example scenes, dialogue, and make sure her character still fits in with the other characters.
				</p>	
				<BlogImage src={FinalImplementationImage} alt="Rainfall Emi Final Implementation" />			
				<p>
Once we are fully satisfied with the design, we mark the character's look as complete and start work on producing other assets which relate to the character, such as that character’s RPG sprites and their animations.
				</p>              
                </BlogPost>
                <Footer />
            </Page>
        );
    }
}

export default HowWeDesignRainfallCharacters;