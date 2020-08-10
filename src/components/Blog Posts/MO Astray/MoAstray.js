import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage, YoutubeVideo } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import MoImage from './images/mo.jpg';
import IntroImage from './images/intro.png';
import JumpImage from './images/jump.png';
import ScanImage from './images/scan.jpg';

class MoAstray extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>MO: Astray - Almost a Masterpiece<br/></strong>
				</h2>
                <BlogImage src={MoImage} alt="MO Astray" />
				<p>
                    <b>Steam Link:</b> <a href='https://store.steampowered.com/app/1104660/MOAstray/'>https://store.steampowered.com/app/1104660/MOAstray/</a>
                </p>
				<p>
                    Criminally underrated doesn’t even begin to describe MO: Astray. Normally good games, even with poor marketing, will end up developing a niche circle and still be talked about online. This holds true for cult classics like Witch’s House or Yume Nikki as well as “more mainstream” games like Recettear: An Item Shop's Tale. But it’s rare to see a game that is so well-crafted and experiments with its visual, story, and game mechanics so much yet I’ve never seen talked about online.
                </p>
                <p>
                    I only stumbled on MO: Astray via a youtube video showcasing the intro sequence of the game which gave me such Tensei shitara Slime Datta Ken (That Time I Got Reincarnated as a Slime) vibes that I bought immediately.
                </p>
                <BlogImage src={IntroImage} alt="MO Astray Intro" />
                <p>
                    Now in the modern age of indie games making a platformer, and an action-puzzle-platformer at that, is not something unique or special. Every year there are hundreds of these released with many of them being decent to great in terms of raw platforming mechanics. It’s a very saturated market and even adjacent genres like the metroidvania with Hollow Knight or Ori take players away from these more traditional platformers. MO likely falls into this same trapping even though I would describe the main appeals of this game not truly being in its platforming.
                </p>
				<h2>
					<strong>Audio/Visuals<br/></strong>
				</h2>
				<p>
                    MO is just a beautiful game. Every aspect of its world is incredibly animated across its many different environments. There have been many beautiful pixel art games over the last decade but MO is a deviation above its peers. In particular, its color usage, post-processing effects, and particles are incredibly impressive. The game utilizes these color-coded environments that take up the entire color wheel so that each chapter’s location looks visibly distinct from the last chapter’s environment. I’ve found that color coded environments, even in a linear game like MO, make the individual locations way more memorable and make sure the player doesn’t suffer from color fatigue of seeing the same color palette for hours on end. The usage of this recurring monochromatic with red accent environment, as these between chapter environment breaks, also helps to cut off the previous environments color palette before transitioning to something completely different only a screen away. It being the only real recurring environment cements its importance in the players mind in addition to it being where the player receives ability upgrades and story tidbits.
                </p>
                <p>
                    Readability of the player and the environment is a problem in a lot of these modern pixel-art games with the amount of animated background and foreground elements there are. MO’s color palette choices though with having each of the important elements being this very distinctive, saturated color in contrast with the environment allows for objectives and the player character to always be identifiable despite complex moving environments.
                </p>
				<h2>
					<strong>Gameplay<br/></strong>
				</h2>
				<BlogImage src={JumpImage} alt="MO Astray Jump" />
				<p>
                    Perhaps the most divisive element of MO has to be its control scheme. The game makes a pretty big effort to strongly encourage playing with a controller while still allowing the user to use a keyboard and mouse setup. However, after trying the controller initially I found the game near unplayable until I swapped to the keyboard setup. MO has an interesting control scheme where the jump button is tied to the mouse click and you can control your jump to be short or long similar to Ori’s midair dash mechanic. It's been a slight trend recently to have these keyboard and mouse driven platformers and I found the control it gave me allowed for more difficult platforming segments to be included without increasing the overall difficulty. Over the course of the story MO obtains a double jump ability and the ability to stick to the wall and ceiling which are both standard mechanics but when combined with MO’s attack and boss fights the platforming becomes much more interesting. The game utilizes a unique attack structure where MO can only attack by latching on to an enemy’s head and then using the jump mechanic to rip off their armor, body parts, etc. This forces the player to always enter melee range of an enemy in order to attack causing the player to work on timings of attacks and be more aggressive in their lines of attack. You can’t beat encounters by playing defensively without needlessly extending the length of an encounter and making it more difficult.
                </p>
                <YoutubeVideo src="https://www.youtube.com/embed/RbXBCdXjAPg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                <p>
                    However, it's the boss fights that are the best individual sections of gameplay. MO has made excellent usage of the Mario Styled Bossfight, where a boss swaps between periods of invulnerability that must either be waited out or a mechanic must be performed before entering the damage phase with both phases altering back and forth until their defeat. While the first couple bosses are okay, it's around the midpoint of the game that bosses start having enough mechanics and abilities to make for interesting combat. The fights are chaotic in nature embracing bullet hell-esque mechanics focused on dodging a set of easily read attacks and platforming in the fight focused on positioning yourself in a way to not box yourself into a corner as most attacks are focused on making large sections of the combat arena unusable. If you don’t care about spoilers I would just watch the above video and skip to any of the last three bosses to get a sense of how the peak of its combat plays out. You also have enough of MO’s abilities unlocked at this point that combat becomes fast paced with you constantly making use of the double jump dashes to be able to precisely and swiftly maneuver around.
                </p>
                <BlogImage src={ScanImage} alt="MO Astray Scan" />
                <p>
                    Metroid Prime’s Scan Visor has always been one of my favorite mechanics ever introduced and it hasn’t been particularly used outside of those games or experimented on further. MO doesn’t particularly innovate on the scan mechanic itself but just the base system alone is a huge boon to the game and very synergistic with the other mechanics. By being a slime MO has the ability to latch on to the heads of enemies both alive and dead and can read either their thoughts or see their last moments alive. Every enemy comes with a small biography including their name, a description, and sometimes a small cutscene. While almost an entirely optional mechanic, similar to Metroid Prime, I found myself wanting to scan everyone I could just to see what they had to say. These are also the sections of the story that I enjoyed the most.
                </p>
				<h2>
					<strong>Story<br/></strong>
				</h2>
				<p>
                    Storywise is where I found MO the weakest, while the overall idea of the story is serviceable and the way that the story is presented as a mix of end of chapter comics and through the scan visor was an interesting way of mixing explicit and implicit storytelling, the story is only memorable because of the environments and boss fights and not because of the actual writing. While not a major detriment, it is the least memorable portion of the game and frankly boring whenever it does appear. The below average story was elevated by the gameplay instead of having a story that coexisted with the gameplay or had either side enhanced by the other. As mentioned previously, I really enjoyed the scan visor story sections revealing certain characters deaths and how the world itself fell into its current state. I also really liked the flashback segments despite how disjointed the storytelling was. However, I do agree with the criticism that the comics, while a cool idea, didn’t really pan out well. It felt like I did sections of gameplay and then at the end of the chapter they shove in all of the story instead of integrating it more heavily into the gameplay via the scan visor or other means. Being taken out of the game to read through these comics felt more like a chore taking away from the cool parts of the game. Some people have called out the short play time of 7-ish hours as an issue but for me it felt just right. The game didn’t overstay its welcome at all and plays out its mechanics and story as much as it could without getting repetitive. Though I think if a more interesting or compelling narrative was introduced and interwoven into the game it could have easily justified a longer run time just so I could see more boss fights and puzzles.
                </p>
				<h2>
					<strong>Overall Rating: Light to Strong 8/10<br/></strong>
				</h2>             
                </BlogPost>
            </Page>
        );
    }
}

export default MoAstray;