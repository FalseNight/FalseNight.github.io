import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage, YoutubeVideo } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import VallhallaImage from './images/vallhalla.jpg';
import MahjongImage from './images/mahjong.png';
import ShadowlandsImage from './images/shadowlands.jpg';
import ValorantImage from './images/valorant-headshot.png';
import SoloImage from './images/solo.jpg';
import DarwinImage from './images/darwin.jpg';
import SmileImage from './images/smile.jpg';

class MyFavoriteThings2020 extends Component {
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
                <p>
                Note: This was written midway into 2021 for no other reason than I didn’t feel like writing it until now so some context will bleed from 2020 into the next year too.
                </p>
				<h2>
					<strong>Video Games<br/></strong>
				</h2>
                <h3>Mahjong Soul</h3>
                    <p>
                    Following in the footsteps of the Twitch meta, my friends and I also got into playing chess as a quick way to compete against each other and to participate mainly in the chess puzzles. However, I found myself drawn more into the realm of another type of competitive board game, Mahjong.
                    </p>
                    <p>
                    While anime like Akagi, Saki, and others had me already interested in it to begin with, I never tried to play it until Mahjong Soul came along. While the game itself doesn’t do too much to innovate on other games of this type I don’t necessarily need it to either. The gameplay itself is what I’m drawn to along with the event type elements that are reminiscent of Fate Grand Order styled events.Of all the games I played this year this is the one that I’ve played consistently from start to end of the year.
                    </p>
                    <BlogImage src={MahjongImage} alt="Mahjong Soul" />	
                    <p>
                    In 2021, I still continue to play this game a ton and with the latest Kakegurui crossover I’ve doubled down on my stance that the traditional main game with some optional events and unique game modes is all I want from this game.
                    </p>
                <h3>Shadowlands</h3>
                    <p>
                    I’ve struggled on whether to include this or not. I’ve played World of Warcraft off and on since Vanilla, which is over half my life. When I’m in love with the game I can play days straight with only time for short naps in between gameplay sessions, other times I’ve used it as a mindless activity to take my mind off of things, and other times I’ve used it as a social mechanism to make friends with.
                    </p>
                    <p>
                    The release of Shadowlands for me was a mix of all of these things, a group of friends and I played through the expansion together and over the course of the first couple weeks of launch we had played this game exclusively and had spent more time playing this game than our jobs. On launch night we played until we hit max level before going to bed and then doing all of the max level content, it was an incredibly fun time and something I wouldn’t trade for anything else. However, while I can only leverage positive things for that time and still continue to levy positive accolades for WOW’s encounter and dungeon design, I can only feel that Blizzard has lost the soul of the game completely and I have no desire to play the game unless I’m playing with friends.
                    </p>
                    <BlogImage src={ShadowlandsImage} alt="Shadowlands" />	
                    <p>
                    It’s one of the saddest things I’ve felt in regards to a company but watching Blizzard go from my favorite player-first company and dream job in early years to a company that has lost the interests of the players is heartbreaking. I can’t recommend Shadowlands now but I also know for a fact when the next expansion comes out I'll likely go through the same launch fun again and the same sadness afterwards.
                    </p>
				<h3>Valorant</h3>
                    <p>
                    The company that has taken over Blizzard’s place in my heart has surprisingly become Riot Games. While there are plenty of decisions I dislike and pushback against, and some of their work culture reports in prior years aren’t something that can be erased, I do feel genuine passion in the games they make. Valorant is just another in their recent expansions into new genres and its single-handedly the game I’ve played the most in 2020 (and 2021 as well).
                    </p>
                    <BlogImage src={ValorantImage} alt="Valorant" />	
                    <p>
                    The closest I ever got to playing Counterstrike was Gary’s Mod for playing TTT while I was in college, and the next closest gameplay was Call of Duty’s Search and Destroy mode which is like saying Canned Tuna and Tuna Sashimi are the same. I love both for what they are but the only thing they share is a somewhat common basis. This game has a difficult learning curve to it where everything used in Arena and COD-like Shooters is essentially the opposite of how you want to play here. However, after running face first into the wall over and over this might be one of my favorite designed games ever. I’ve always been more of a macro player than a micro focused player, it's why in games like League of Legends my mechanical skill level could only carry me to Platinum or so but I’ve reached higher ELOs easily. The strategic element involved reminds me of many of the decisions in there: what champion do you pick for your team composition, given your current resources what is the best play, how can you gather information for your team, how is the enemy thinking based off of previous rounds, etc. These to me are the most interesting parts in any game but are the core focus of Valorant. It's a game I think about long after playing it to come up with new strategies and ways to play the game that are outside of the meta. It's easily my game of the year.
                    </p>
                <h3>AI: The Somnium Files</h3>
                    <p>
                    Despite owning the consoles for all of the Zero Escape series of games, I’ve never once played them despite hearing very positive things about them. Visual Novels are one of my favorite genres with some of my favorite games and even my current project being directly inspired by many of these. So when I saw AI: The Somnium Files come up in my recommended VNs I had high expectations for the game and bought it immediately. Whatever I expected though was so far off from what I got it was astounding. The game feels like its going to be a fairly serious sci-fi murder mystery in the vain of a Umineko or a Catherine type game but quickly becomes much closer to a Dangan Ronpa. The game is a bizarre mix of very serious moments and topics and then diving into slapstick humor in the next minute. Its jarring like the gameplay of the game itself switching off between Phoenix Wright styled examine a scene moments followed up with a timed board game like puzzle similar to Shikkoku no Sharnoth -What a Beautiful Tomorrow-. Though the weird eccentricities of the game, once I got use to them, are what kept me thoroughly entertained throughout. Mysteries are my favorite genre and getting to see one come back into the mainstream and be successful and quirky has me excited to play through its sequel.
                    </p>
                <h3>VA-11 Hall-A</h3>
                    <p>
                    I’m honestly shocked I hadn’t played this game sooner since it hits so many of my favorite archetypes: cyberpunk, visual novel, character-driven, and has one of the best soundtracks in games. I’ve been torn on a lot of the visual novels that include mandatory puzzles to further their completion. Nearly all of them have been hamfisted into the story and while trying to serve as a break in between the major scenes they’ve usually felt like roadblocks before I get back to the content I enjoy. This is nowhere near close to the truth for VA-11 Hall-A (Vallhalla). The game truly is cyberpunk bartending action with the bartending minigame serving as a way of player expression and as a way to make choices in the story without traditional text options.
                    </p>
                    <BlogImage src={VallhallaImage} alt="Vallhalla" />
                    <p>
                    I’m a huge fan of having actions of a player reflect choices over the act of simply selecting a dialogue option. This is the entire premise for Rainfall after all and the version of it here is also exciting. Given just a bartender’s manual and your memory (or notes in my case) of what each person likes to be served you are expected to be able to serve drinks according to the person’s mood and desires which really got me loving each of the characters. While not everyone was stand-out, I still remember a year and a half later most of the characters favorite drinks which goes to show how well written the game is given it takes place in a total of two places: Jill’s Apartment and the bar Jill works at.
                    </p>
                <h2>
					<strong>Manga/Manhwa<br/></strong>
				</h2>
                <h3>Firepunch</h3>
                    <p>
                    Fujimoto is becoming one of my favorite mangaka as of late. His latest entry Chainsawman finished in 2021 and many of my favorite features of that can be found in his earlier series I read in 2020 of Firepunch. Like many of the other things on this list, Firepunch is quirky and covers the spectrum of emotions but does it in a way that doesn’t feel dissonant. There are many good qualities of Firepunch but to me the most important has to be the passion I feel from what he has written. It's one of the few stories that I had no idea where it was going next in its story. From start until the end I was completely captivated, rooting for, and repulsed by what I was reading. Fujimoto brings suffering is what I’ve learned from his works but it's a warm, comforting suffering.
                    </p>
                <h3>Solo Levelling</h3>
                    <BlogImage src={SoloImage} alt="Solo Levelling" />	
                    <p>
                    Up until now the only manhwa I’ve read had been Annarasumanara a long time ago. It's only been this year after reading through all of what was available of Solo Levelling did I fall into the manhwa rabbit hole. While the current anime meta is centered around various flavors of demon-slaying shonens and fantasy isekais, the Korean sphere is dominated by what I’ve been calling the Gluttony Progression. These are stories where a character continues to amass skills and stats through the consumption or achievement of a task with the goal of the story to grow stronger and obtain more powerful skills over time similar to Re:Monster, Slime Tensei, etc. Solo Levelling is beautifully illustrated in full color and probably the most inspired setting I’ve seen. So much so in fact that its not unfair to say this is the ancestor of a significant portion of the current popular manhwa.
                    </p>
                <h3>Tomb Raider King</h3>
                    <p>
                    The second genre in the current zeitgeist is a specific type of reincarnation story I’ve been calling the Restart Reincarnation where a character is sent back to the past, usually as a result of dying in a bleak future, where they attempt to make sure they don’t reach the same fate usually through using their knowledge of future events to mess with the past. Tomb Raider King was my first exposure to this in the manhwa space and this has become my favorite subgenre especially when integrated into the Gluttony Progression like this story is. The sheer greediness of the MC combined with his mindset/skillset that allows him to blow up his collected relics has him collecting probably the widest array of abilities in any manga/manhwa I’ve seen with him consistently finding uses for random relics before blowing them up. The ability to trade and steal abilities via taking a relic is also used all the time in the story, usually by the MC himself, and serves as a way to give temporary buffs or debuffs in creative ways. It's used by the author many times in the story to easily write themselves out of holes without it feeling cheap.
                    </p>
                <h2>
					<strong>Movies<br/></strong>
				</h2>
                <h3>The Entire Barbie Series</h3>
                    <p>
                    Quarantine has been an interesting time to say the least with it treating me overall incredibly well. Being inside all day and being able to focus more on my hobbies and interests as well as changing the way I socialize has been incredibly fun to live through. Perhaps though the weirdest thing I did all year and one of my favorite activities was Biweekly Barbie Movie Night. A close friend of mine has always loved the Barbie Movies and decided to put on a twice a week movie night with friends to watch every barbie movie and to rank them accordingly. What started as a meme to watch bad movies soon had me gazing into the Barbie abyss. By the end, I was converted. I now can actively recommend barbie movies, this isn’t a skill most people want, but now I have it. For the record Barbie: Princess Charm School and Barbie in Rock'n Royals are the top two movies in order there can be no other tier list.
                    </p>
                <h2>
					<strong>Music<br/></strong>
				</h2>
                <h3>Demondice</h3>
                    <p>
                    My surprise of the year has been discovering the music of Demondice. Rap is one of, if not my absolute, favorite genres and while there have been plenty good things recently nothing has been as innovative and lyrically interesting as the last two Kendrick albums. However, Demondice’s wordplay and flow is phenomenal; her internal rhyme schemes and the complexity of lines bring an Eminem like lyricism to the forefront. She continually switches between English and Japanese oftentimes for use in wordplay and to keep up the rhyming structure longer or to make awkward phrases work seamlessly. Some of my favorite songs of hers have her also switching between ambience, rapping, and singing leaning more into the singing side with some songs being nearly fully in this sung rap style. Not every song of her’s is my favorite but every song has grown on me over time. Unlike other albums that have had great initial impacts most don’t last over time and become something I come back to. However, her songs have been something I’ve listened to in some capacity nearly everyday since listening to her.
                    </p>
                    <YoutubeVideo src="https://www.youtube.com/embed/6Iz8qlWk4hY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                    <p>
                        “Out of all the words that I could say to you. Maybe you would understand all the ones that matter” - Demondice
                    </p>
                <h3>K-Pop</h3>
                    <p>
                    I’m someone who has never been into K-Pop despite trying to get into it several times at my own and others’ behest. However, for whatever reason, likely because of K/DA, I’ve been really into Korean Music in general now with Mamamoo, Dreamcatcher, and Everglow being my favorite girl groups and B.A.P and BTS being my favorite male groups. For me it's been a reminder to always try old things again both to see if you still like it or if you’ll like it now instead.
                    </p>
                    <YoutubeVideo src="https://www.youtube.com/embed/jeI992mvlEY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                <h2>
					<strong>Youtube<br/></strong>
				</h2>
                    <h3>Dr. K</h3>
                    <p>
                    Professionally, the most impactful thing I’ve done has been to start reading up and applying Sports Psychology and General Psychology for dealing with people and teams. As a logically minded person it's incredibly easy to neglect using the emotional side of your brain for making decisions or communicating with others. In my mind communication is the most important trait in software engineering if not most fields and simultaneously most people are terrible communicators. Dr. K is incredibly talented at being able to hold conversations and being able to create safe spaces for people to voice dissent or to allow for others to be emotionally vulnerable. While what he does is explicitly not therapy I also think there’s plenty, if not more, to learn from the way he conducts these interviews. I’ve found that being able to hold conversations in the same way has not only made me a better communicator but it's also served as a way for me to gain better insights into others too while also having others learn more about me. I now actively recommend engineers to take a look into Dr. K not only for his insight into many of the struggles others go through like imposter syndrome, confidence, and dealing with stress/failure but also for the way he can communicate with anyone and reach a positive resolution.
                    </p>
                    <YoutubeVideo src="https://www.youtube.com/embed/5qNEAgcCT7w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                <h2>
					<strong>Anime<br/></strong>
				</h2>
                    <h3>Darwin's Game</h3>
                    <p>
                    Darwin’s Game is a show that on paper I shouldn’t like or at least just consider meh, I even asserted this claim at the start of its season intentionally passing over it. But this has been my biggest surprise of the year and my guiltiest pleasure.  When you think of supernatural battle royale in the modern day setting many things can come to mind: Mirai Nikki, Accel World, Fate/Stay night, Juuni Taisen, etc. There isn't a shortage of shows in this genre with many people rating these as their favorites. Nearly everything can be found in other shows but in many ways this show is much greater than the sum of its parts. Darwin’s Game doesn’t offer anything particularly unique to it, with the exception of its main character Kaname. He carried this show for me progressing from a scared high school student into a cocky, intelligent, and at times manipulative person that still maintains the traditional shonen optimism and desire to protect his friends that I miss a lot in the current zeitgeist. Most characters of this type go fully into the edgy side like Guilty Crown’s Shu and lose what makes me root for them as a heroic protagonist.
                    </p>
                    <BlogImage src={DarwinImage} alt="Darwin's Game" />
                    <p>
                    I call this show the best Light 7/10 because although it doesn’t do too much different from other contemporaries I binged and loved the whole show. It's an incredibly fun romp with a good main character and a bunch of interestingly flat characters for him to bounce off of. I think if you go into it with low expectations you can’t help but leave happy watching this.
                    </p>
                    <h3>Runway de Waratte</h3>
                    <p>
                    The Shonen Battle genre is one of the oldest in manga/anime with shows like Dragon Ball, Yu Yu Hakusho, Naruto, etc all defining the path forward for many others over time. One of the key tenets of this genre has been that the fights in the series are almost never about the actual fight themselves but what the fight represents and as a way to pave the path for character progression. Over time this has become the definitive factor in whether a series lives or dies and has been what shows like Kimetsu no Yaiba have done so well in the modern day. The most recent variation of this has been the Shonen Non-Battle Battle Manga. Lying squarely in the middle between traditional sports shows like Haikyuu and the more traditional shonens like One Piece, these shows are ones that take the concept of a battle and apply it to other more mundane mediums.
                    </p>
                    <BlogImage src={SmileImage} alt="Runway de Waratte" />
                    <p>
                    Kaguya-sama Love Is War is a great example of a show where characters engage in “combat” despite the fighting not being physical and uses these battles as a way to characterize, progress, and break down characters. Using this lens, you can classify other shows like Dr. Stone in this way along with Runway de Waratte. Runway is a battle shonen taking place in the realm of modelling and clothing design simultaneously and features many of the traditional shonen archetypes like tournament arcs, rival characters, and the power of friendship. Its dual narrative structure focusing on two protagonists working in separate jobs in the same field is what captured me the most in addition to the infectious personalities of the characters. These are flawed humans that I’ve loved and hated over the runtime of the show and the non-battles they compete in had me on the edge of my seat to see how they resolved.
                    </p>
                    <h3>Seishun Buta Yarou wa Yumemiru Shoujo no Yume wo Minai</h3>
                    <p>
                    In My Favorite Things 2018, I spoke about “Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai” depicting it as a decent show with many, many shortcomings that don’t put it anywhere close to my top anime. If the main series was trying to mimic Monogatari in its style and structure then the movie is clearly mimicking The Disappearance of Haruhi Suzumiya, which is rated as and is one of my favorite anime movies if not my favorite. Again I have to applaud the courage to so clearly copy and attempt to take on some of the titans of the industry, and while the main series failed to do so...this has come much, much closer. While not my favorite anime movie of all time it is easily in my top five for sure.
                    </p>
                    <p>
                    One of my issues with the main series was that each arc felt rushed and could have used an extra episode or two of breathing room to better develop the cast. The movie clearly learned from the main series with its pacing being near perfect for me. It ends with me being satisfied but still yearning for more content. When the main series ended I didn’t really have a desire to see more material while the movie made me interested in future arcs. The movie’s plot is incredibly predictable but the minor twists it adds in as part of its loosely science-based Monogatari-esque possessions had me completely engaged. While I can’t recommend the main series I actually think it's worth it just to watch this movie.
                    </p>
                </BlogPost>
            </Page>
        );
    }
}

export default MyFavoriteThings2020;