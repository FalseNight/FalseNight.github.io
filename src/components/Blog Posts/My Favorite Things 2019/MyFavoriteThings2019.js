import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage, YoutubeVideo } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import ArifuretaImage from './images/arifureta.jpg';
import DetentionImage from './images/detention.png';
import DiscoElysiumImage from './images/discoelysium.jpg';
import KimetsuImage from './images/kny.png';
import MoImage from './images/mo.jpg';
import SlimeImage from './images/slime.jpg';
import VioletImage from './images/violet.png';
import KancolleImage from './images/kancolle.jpg';
import AutoChessImage from './images/autochess.jpg';

class MyFavoriteThings2019 extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>My Favorite Things 2019<br/></strong>
				</h2>
				<p>
                Below is a list of my favorite things that either came out this year or that I experienced this year that I feel worth calling out. This doesn’t include everything but just what I found most important in defining this year for me.
                </p>
				<h2>
					<strong>Video Games<br/></strong>
				</h2>
                <h3>Disco Elysium</h3>
                    <BlogImage src={DiscoElysiumImage} alt="Disco Elysium" />	
                    <p>Disco Elysium is my favorite game of the year and a strong argument could be made for game of the decade. I haven’t played many CRPGs, but this game is able to take so many of my favorite concepts and realize them near flawlessly. Its stat and thought system has a player keeping a variety of clothing items to improve different rolls in the game as well as influence the type of character you are. Unlike other games, looking at modern Fallout games for instance, where the stats and traits you take on don’t really influence the game. In Disco Elysium, if my character acquires the traits to become a racist I now unlike new dialogue options and ways to approach a situation in both a positive and negative way. The moment that really cemented Disco Elysium for me was picking up a broken mug in the trash and being very very interested in it. I then spent hours asking people around town about mugs and showing them my own broken mug. Characters had mixed reactions to it and always had unique dialogue but finally hours later, after breaking into someone’s house, I found they too had a mug collection and even though I didn’t achieve anything by doing this I felt accomplished by finding the possible owner of my thrown out racist mug. This moment shouldn’t have given me so much joy but it felt like I made my own quest to do something, even though obviously this was all programmed in like this. The entire game does a great job of what I call “masquerading the main quest”. As a detective, you understand  that you need to solve the murder at hand but you also need to recover your badge/gun and figure out who you are and why you don’t remember anything. The game doesn’t specify which or if all of these are part of the main quest and you can progress or fail at many of these endeavors depending on the actions and choices you make throughout the game. At no point does the game call out explicitly what is the main quest and many seemingly side objective tasks actually are the triggers to progress the story. This causes me to engage more with the side content in the hope it assists with getting more information to progress the main story. Very few games currently create interesting side content but Disco Elysium interweaves it so well with the main story it can oftentimes be hard to differentiate between the quality of the two.
                    </p>
                <h3>MO: Astray</h3>
                    <BlogImage src={MoImage} alt="MO: Astray" />
                    <p>
                    Criminally underrated doesn’t even begin to describe MO: Astray. Normally good games, even with poor marketing, will end up developing a niche circle and still be talked about online. This holds true for cult classics like Witch’s House or Yume Nikki as well as “more mainstream” games like Recettear: An Item Shop's Tale. But it’s rare to see a game that is so well-crafted and experiments with its visual, story, and game mechanics so much yet I’ve never seen talked about online.
                    </p>
                    <p>A full review of this I wrote can be found <a href='./mo-astray'>here.</a></p>
				<h3>Detention</h3>
                    <BlogImage src={DetentionImage} alt="Detention" />
                    <p>
                    The RPG Maker Horror Adventure game is a subgenre I’ve loved for a decade now. As someone that tends to be more interested in narratively driven experiences over mechanically driven ones, this subgenre is one where the game’s base mechanics are nearly identical between them. While the puzzles and way of interaction can vary, at the end of the day Mad Father, ib, Yume Nikki, OneShot, and even Detention are at the end of the day the same base mechanics and play nearly identically. However, their distinction comes from how well they integrate that mechanic into the story and the types of stories they tell.
                    </p>
                    <p>It’s with that in mind that Detention was a very welcome inclusion on this list. Its Taiwanese backdrop is a setting that I’ve never personally seen before both the real world historical events its based off of and the supernatural lore of the enemies in the game. Again while it doesn’t do anything exceptional mechanically, each of the game’s set pieces are beautifully animated and very interesting remixes of fairly standard horror game affair. Perhaps most chilling is the story of the game which uses the classical technique of hiding the real world horror behind metaphorical horrors: a classroom of screaming puppets, students hanging themselves, the notes of regret/fear/hatred left by characters throughout the school. Detention is a very enjoyable game that never overstays its welcome. I look forward to Red Candle Games' other works.
                    </p>
                <h3>Auto Chess Battlers</h3>
                    <p>
                    2019 was heavily defined by the emergence and refinement of the Auto Chess Battlers. While many popped up it was Dota Auto Chess, Teamfight Tactics, and Hearthstone Battlegrounds that I put the most time into and found the most interesting mechanically.
                    </p>
                    <BlogImage src={AutoChessImage} alt="Dota Auto Chess" />
                    <p>Dota Auto Chess being the first mainstream one was also the one I sunk the most hours consecutively into and retrospectively I’m surprised this subgenre hadn’t emerged sooner. While often clunky at times, the game itself is very easy to pick up and only needs a few lines to explain the core mechanics. The game itself is one of the purest forms of an economy management game which I’ve been comparing to Starcraft and other RTS of the vein. Being greedy or aggressive with your economy mixed with the element of luck is what made me come back to the game over and over. While players tend to go towards a couple of high tier builds, no two games play the same as players have to juggle where in the economy they are vs their peers. Dota Auto Chess’s best feature though has to be how it balances its resources and has them all remain important just with different curves throughout the game. Having a shared pool of units that can be bought amongst all players means the economy is not just the gold you have but the amount of units you can put out, the units remaining in the pool, the gold you own, and the items you are making.
                    </p>
                    <p>However, Auto Chess after a month or two quickly devolved into a solved metagame. One that felt fueled more by what opponents you faced and the random items you were given over raw skill or positioning. Sometimes you’d have instances where both players would win or lose against each other since you only fought copies on the enemy team leading to wins or losses that felt random more so than skillful.
                    </p>
                    <p>Teamfight Tactics or TFT emerged later on and had me and the others I played with quickly switch over. While the game was much more polished visually and mechanically, the single best inclusion had to be the Carousel Rounds. In Auto Battlers there are rounds where you fight against a round of AI enemies in a PvE encounter that grant items and these items were instrumental in defining your build and if you could be greedier in your economy or not. However, the items you received were random and the quality between the items was massive. Oftentimes you’d see a player get a very good item and be able to snowball that single item into a victory. TFT aimed to help alleviate this via the Carousel Rounds. These rounds had players able to get a free unit with a free item already on it to use. The gimmick being the order of choosing the unit and item combo started from last place and ended at first place. So a player could be behind intentionally to get a better unit or item, while someone in first will get the last choice. I’m not a fan of all kinds of rubber-banding mechanics like this however, TFT’s was thoughtfully executed; it never felt like someone stumbled into a victory it felt methodical while alleviating some of the RNG factors behind random item drops. You could also go for more varied compositions since you no longer had to hope for the items you wanted to drop to enable a Mage composition for instance.
                    </p>
                <h3>FGO Arcade and Kancolle Arcade</h3>
                    <BlogImage src={KancolleImage} alt="Kancolle Arcade" />
                    <p>
                    While in Japan this year, the arcade, like it normally is, is a place where we spent a considerable amount of time. However, if last year was defined by the crange game then this year was defined by the collectible card game. A longer form review of the mechanics and my thoughts can be found <a href='./an-admirals-pride'>here.</a></p>
                <h2>
					<strong>Music<br/></strong>
				</h2>
                <h3>REOL</h3>
                    <YoutubeVideo src="https://www.youtube.com/embed/Q5mnjmiRLrk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    <p>
                    I don’t have much to say REOL is someone who’s songs I’ve heard many times before but never remembered the name to associate her with. However, one thing I give a lot of credit to artists for is their live performances. Unlike a studio attempt, a live performance and the routine that comes with it are often when the artist is most natural and is most telling of their strengths. Like Babymetal with their incredible live shows, REOL is incredible in her studio songs like Cyber Thunder Cider or Rettou Joutou, but the fact it translates well in live performances is testament to her skill as an artist.
                    </p>
                <h3>Imperial Circus Dead Decadence</h3>
                    <YoutubeVideo src="https://www.youtube.com/embed/DR_mZ93DzHM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    <p>
                    I’ve listened to ICDD throughout the years, usually through their most popular singles that a lot of people have heard. However, listening to their full albums has been a completely different experience both for the overall concept of the album, its interludes/intros/outros, and for the songs I hadn’t heard before. 狂おしく咲いた凄惨な骸は奏で、愛おしく裂いた少女は聖餐の詞を謳う for instance showcases a lot of what I like about the band. The first song 断章を紡ぐ序曲  being purely a narrated experience introducing our male and female voices. For metal in particular I’m a huge fan of female fronted tracks with male screams I think in general it provides the best sound particularly when the female voice is slightly stronger or more tomboyish sounding in nature as is the case with ICDD. Beyond having great melodic riffs, both singers bounce off of each other well. Normally I don’t care for too many screams but this has more than I usually like but I think it fits so perfectly here. The male vocalist also alternates between screams, lyricism, and almost operatic vocals. Uta is the title song on the track that if people have heard of ICDD have likely heard of that song before and also showcases all of the things I like about the group.
                    </p>
                <h2>
					<strong>Movies<br/></strong>
				</h2>
                <h3>Knives Out</h3>
                    <p>
                    Mystery is one of my favorite genres across all media, though it has fallen out of prominence quite heavily or has become butchered into being just a thriller with mystery elements. However, last year’s Orient Express and this year’s Knives Out have been welcome surprises to me. While I wouldn’t consider Knives Out a great mystery or great film, its ultimate villain and the method of murder being both pretty common mystery tropes, the theatrics of it and lay out of the film were overall very enjoyable to watch. It receiving some sort of mainstream appeal has me hopeful we’ll start to see at least a few different mystery releases going forward.
                    </p>
                <h3>The Raid 2</h3>
                    <YoutubeVideo src="https://www.youtube.com/embed/hwZ1G9fKPI8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    <p>
                    If John Wick features the best gun play I’ve seen in a movie then The Raid 2 is easily the best knife play that I’ve seen. I’ve only seen the second movie and can easily say it was my favorite movie of the year. Each fight is visceral, violent, and choreographed in such a way that the fight itself tells a compelling story. While nearly every scene has great moments the two that stand out to me are the prison fight scene and the final one on one duel. Group fight sequences are always hard to nail since most tend to have the surrounding cast just looking in at our protagonist since there is no way they could reasonably fight 10-20 people at once. However, this movie has the brawl take place in a muddy prison yard as more of a team vs team battle. The massive number of people has everyone unsure of who they are attacking and delivering plenty of friendly fire. The chaos of it is very similar to a war movie yet with the strategy and ingenuity of a well constructed car chase. Traditional weapons aren’t allowed here so you have many makeshift shivs and environmental weapons that don’t deal much damage on their own but disorient the target before delivering a fatal blow. The final 1v1 fight though is very much the opposite. It has the feeling and appeal of an honorable duel with both sides fighting as close to each other as possible and what starts as a martial arts match devolves into a bestial wrestle with both sides severely cut up. Not having access to guns or highly lethal knives both sides have to slash and cut one another while aiming for vitals. A single slash nor even ten slashes is enough to take someone down it just gives the person an opening to kill.
                    </p>
                <h2>
					<strong>Youtube<br/></strong>
				</h2>
                <h3>Sealed Yu Gi Oh Challenge</h3>
                    <YoutubeVideo src="https://www.youtube.com/embed/SOYpYyfCf3k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    <p>
                    Youtube is starting to become one of my most consumed medias more so than Anime or Video Games. I think a major reason for this is that Youtube has now entered a new renaissance where niche creators can create their works and achieve success through many avenues whether thats being patreon sponsored, taking sponsorship deals, etc. all of which enable a creator to expand their content in new unique ways without fear of not making money for the month.
                    </p>
                    <p>
                    The Sealed Only Yu Gi Oh Challenge is one of those series that's so genius in its concept and execution that many others have copied it since its release. Nyhmnim has been a Youtuber for awhile but this was his breakout hit for good reason the guy is just very charismatic. The whole series feels like a sports anime in real life where we have tournaments scoped out, recurring villains, and our protagonist striving to be the victor at the World Championships. I don’t even play Yu-Gi-Oh, and I haven’t opened a pack in 15 years yet, by the end of the series I was cheering at pack openings and understood the scope of the rules and all the cards Nyhm was facing. Even the power curve of the series is on point with starting with a worthless deck and ending the series with a competitive powerhouse. Both the mystique of competitive TCGs and barrier to entry are removed by his series
                    </p>
                <h3>ThinMatrix</h3>
                    <YoutubeVideo src="https://www.youtube.com/embed/Np1oeqHUDIE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    <p>
                    One of the worst things about a lot of game development log channels on Youtube is the fact that many of them don’t end in a finished project. They either just stop abruptly or meander on eternally. ThinMatrix has a full series going through an entire game release in addition to having an amazing presentation style that many of his contemporaries have copied recently focusing not solely on the development of the game but the lifestyle and personality of the individual behind the game. We see the author make meals, go on walks, hang out with friends, while still working towards the completion of his games. Even though his games’ themselves are in genres I’m not appealed by I’m in love with his presentation style and how he crafts each game and the way he goes about showing that as a facet of his life while not being his sole life.
                    </p> 
                <h2>
					<strong>Anime<br/></strong>
				</h2>
                    <h3>Slime Tensei</h3>
                    <BlogImage src={SlimeImage} alt="Slime Tensei" />
                    <p>
                    Slime Tensei or That Time I Got Reincarnated As a Slime was my favorite isekai show of the year. There have been a few shows/manga/webtoons that have used what I’ve been calling the Kirby System of a character powering up via absorbing techniques or stats from enemies similar to a Blue Mage from Final Fantasy as well. Unlike other game inspired systems the act of consumption is what makes the system more interesting instead of a more traditional being able to just copy another’s abilities. In many of these series it means requiring having to defeat the enemy in order to be able to use their powers first which has the character challenging the world in a fundamentally different way. They instead are trying to kill others to acquire a suite of powers and stats to be able to acquire more new powers. Slime Tensei  quickly takes this system and upgrades it to feature the ability to combine acquire abilities together into new ones while also featuring a civilization building element of trying to stand up an empire.
                    </p>
                    <p>
                    Unlike other isekai series that usually focus on a cast of characters going on a grand adventure around the world only really caring about themselves, Slime Tensei uses the civilization element to provide another way for our protagonist to progress beyond power levels while also being able to maintain a larger cast of characters more effectively. We get to see the town grow from nothing to a massive empire and upgrade all of the side characters as well in the town to go from dying to random mobs to being leaders of armies.
                    </p>
                    <h3>Arifureta</h3>
                    <BlogImage src={ArifuretaImage} alt="Arifureta" />
                    <p>
                    If there are two things I’m fully willing to admit, it is that I’m still in love with the current isekai trend and I love watching trashy power fantasies. Arifureta is not a good looking show, it isn’t well written, and it's very predictable. However, it's one of the funnest shows I’ve watched this year. An alchemist type character is one of my favorite niche RPG classes that doesn’t really get used much as the protagonist and while Arifureta only barely makes usage of it, it does give our protagonist a very unique feel to him.  Arifureta shares a lot in common with Shield Hero and other shows of its ilk of a protagonist starting off weak and becoming strong through acquiring allies and powers. Its pretty basic as far as shonen type series go but the appeal of both shows being the main character’s “ruthless” nature in protecting his party and achieving his goals. Even willing to kill off his former classmates and friends if they get in the way. While not something that will change your life, Arifureta is my favorite 7/10 show of the year.
                    </p>
                    <h3>Kimetsu no Yaiba</h3>
                    <BlogImage src={KimetsuImage} alt="Kimetsu no Yaiba" />
                    <p>
                    Kimetsu no Yaiba is fantastic. Episode 18 has one of the best scenes in all of anime. Watch it. That’s it. Also Zenitsu is the worst character in the show by far.
                    </p>
                    <h3>Violet Evergarden</h3>
                    <BlogImage src={VioletImage} alt="Violet Evergarden" />
                    <p>
                    KyoAni always does beautiful animations. Them and ufotable are my two go tos when talking about well-animated shows. But Violet Evergarden is another deviation above their normal works. People meme on it for its heavy post-processing effects but I found the entire show to be stunning. In game development, a frequent saying I like to use is that every single section of a scene should be a “screenshot moment” that looks visually enticing on its own. If a section doesn’t have that it likely means the area is probably not interesting enough or poorly designed.
                    </p>
                    <p>
                    Violet Evergarden is one of those shows that also embraces the mantra where every scene is something you can use to show off to another person. Besides the art style, both the setting and story concept itself were very interesting. Taking place in a vaguely European country the show weaves in anachronistic elements in its setting placing it in a similar vein as Kino no Tabi for instance and uses the similar structure of that show to have Violet travel to many different regions, meet new people, and grow significantly as a character professionally and emotionally.
                    </p>
                </BlogPost>
            </Page>
        );
    }
}

export default MyFavoriteThings2019;