import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";

import CityImage from './images/city.png';
import ClinicImage from './images/clinic.png';
import GekkouImage from './images/gekkou.png';
import HoleImage from './images/hole.png';
import HorizonImage from './images/horizon.png';
import SchoolImage from './images/school.png';

class RainfallDevBlog8 extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>Rainfall Dev Blog #8: June - October 2019<br/></strong>
				</h2>
				<h2>
					<strong>Overview<br/></strong>
				</h2>
				<p>
                We’ve been pretty heads down the last few months working on writing out the scripts for each of the scenes in Arc 3 and 4 as well as backfilling events in Arcs 1 and 2. We’ve nearly doubled our scene count so far and are around halfway done with the scenes we want implemented for these two arcs. 
                </p>	
                <p>
                The other major focus has been on adding in a new group of areas in the Underground and working on its integration into the City. While still unfinished, the Underground has been fleshed out enough to start adding in the Arc 3 and 4 scenes
                </p>
				<h2>
					<strong>Implementing The Underground<br/></strong>
				</h2>
                <h3>
                    Clinic<br/>
				</h3>
                <BlogImage src={ClinicImage} alt="Rainfall Clinic" />	
				<p>
                In the later stages of Mari’s Arc we introduced a Hospital Room used as a small side area for a couple of main story line scenes with no real intention of reusing the area. However, with the introduction of Isshin, our Underground doctor, we wanted to make an area to support his scenes as well as put earlier hospital scenes in context. So we added in a shady medical clinic into the Underground. It's designed to reflect the office buildings that have many different and varying businesses inside of them each with minimal signage with the exception of Isshin’s single neon cross sign.
				</p>
				<h3>
                    Horizon<br/>
				</h3>
				<p>
                Horizon is the split host and hostess bar that is center point of the Underground. Early on in the third arc Jin gets roped into helping out at Horizon as a substitute Host serving only the most eccentric and unruly of patrons.
                </p>
                <BlogImage src={HorizonImage} alt="Rainfall Horizon" />	
                <h3>
                Gekkou Ltd.<br/>
				</h3>
                <BlogImage src={GekkouImage} alt="Rainfall Gekkou" />	
				<p>
                Jin’s publishing company for his light novels has finally been given an identity and location as Gekkou Ltd., a massive publishing company for all sort of media projects. Reiji and Mutsuki are both employed by the company directly as Editors with Jin being contracted to Reiji. The building is so large that it pierces both the topside of the City and the underside of the Underground.
				</p>
				<h2>
					<strong>Iteration on the City<br/></strong>
				</h2>	
				<p>
One of our major strengths as developers is our obsession with iteration. We are fully aware we are not the best artists, level designers, writers, etc. but what we’re really good at it our willingness to create something, evaluate it, throw away what doesn’t work, and recreate it again. The best example of this so far has been the City’s level design where we’ve gone through dozens of complete revamps and will continue to create dozens of other revamps over the course of the game’s development. While inefficient in terms of time spent, this workflow allows us to overcome our own deficiencies in other important areas by putting in more work into a single element of the game then other people.
				</p>
				<p>
                With that in mind, we've recently done another major revision of the city adding in some new areas, removing others, as well as revamping the older areas of our game. The largest addition has been cleaning up the southern part of the map where the park was located. This was one of the first areas added to the game and needed a slight update to give it a unique flavor as well as serving as a surface to expose the Underground to the City. We’re calling it the Hole for now and the Hole serves as one of the main ways to show that the Underground is actually beneath the City and that the City has been built on top of the failed Underground district. Without this area the Underground may as well be just a dark area with no relation to the City, without the context it loses its flavor and importance.
				</p>
				<BlogImage src={HoleImage} alt="Rainfall Hole" />		
				<p>
                We’ve also restructured the eastern train station plaza to have the gym, karaoke, ramen shop, arcade, and the topside of Gekkou located next to each other both for convenience of access as well as aesthetic. This does cause the eastern part of the school to be a little bare for now which we’ll address in a future update.
				</p>
				<BlogImage src={CityImage} alt="Rainfall City" />	
				<h2>
					<strong>What's Next?<br/></strong>
				</h2>
				<p>
                There are still more assets needed to produce the first completed version of the underground. We’ll be focusing on the sub-areas of the Clinic Lobby, Gekkou Interior, Internet Cafe, etc. as well as working on the integration of the Underground into the City. While we have the first version of the hole we want to clean it up more and make it feel like a natural part of the city.
                </p>
                <BlogImage src={SchoolImage} alt="Rainfall School" />
                <p>
There are plans for a few more iterations on the City as well. Mari’s Apartment area is one of the next major places to be overhauled to provide the area with its own unique feeling. We also want to clean up the School and some of the older areas now that we have progressed in our art and level design since the beginning of the project.
                </p>
                <p>
                We’d also like to finish off the design and art for the last major characters in our game that haven’t been created yet. This work will carry us through the end of the game so that we can spend the new year on finishing the scenes through the end of Arc 3.
                </p>
                </BlogPost>
            </Page>
        );
    }
}

export default RainfallDevBlog8;