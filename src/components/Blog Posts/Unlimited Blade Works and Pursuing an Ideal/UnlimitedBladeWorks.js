import React, { Component } from 'react';

import { Page } from './../../Shared/Page.styles';
import BlogPost from '../../Shared/BlogPost/BlogPost';
import { BlogImage } from '../../Shared/BlogPost/BlogPost.styles';
import Header from "../../Shared/Header/Header";
import Footer from '../../Shared/Footer/Footer';

import UnlimitedBladeWorksImage from './images/ubw.gif';

class UnlimitedBladeWorks extends Component {
    render = () => {      
        return (
            <Page>
                <Header currentScroll={1} />
                <BlogPost>                   
                <h2>
					<strong>Unlimited Blade Works and Pursuing an Ideal<br/></strong>
				</h2>
				<p>
				Emiya Shiro in Fate/Stay Night has one of the most satisfying character progressions across any creative medium. Originally a visual novel, the story is separated into three main arcs all of which are retellings of the same main story but with a different approach to Emiya’s ideals.
				</p>
				<BlogImage src={UnlimitedBladeWorksImage} alt="Unlimited Blade Works" />	
				<p>
				Within the first, known as the Fate route, Emiya holds the belief that to be a Hero of Justice is to save everyone. He takes on the values of a traditional Shonen protagonist and approaches the world with unbridled, relentless optimism.
				</p>
				<p>
				In the second arc, Unlimited Blade Works, Emiya by the end of the story adopts a different take on his ideal realizing his own hypocrisies and flaws and still struggling to reach his ideals anyways.
				</p>
				<p>
				Finally within Heaven’s Feel, Emiya forsakes his childish ideal of trying to save everyone and sacrifices everything for a single person instead. In this arc he has to confront the realistic outcome of his ideal and has to abandon it or risk losing what he cares about.
				</p>
				<p>
				One way to look at the three routes is the progression from a childish ideal, to realizing the flaws of the ideal, to finally giving up on that ideal which can be summarized in Emiya’s outlook across the three arcs.
				</p>
				<p>
				<b>Fate:</b> I will save everyone<br />
				<b>Unlimited Blade Works:</b> I will try to save everyone even if I can’t<br />
				<b>Heaven’s Feel:</b> I’ll sacrifice everything even if I can only save one person<br />
				</p>
				<p>
				To me why Unlimited Blade Works is so impactful, is that it takes the idealistic motivation used in Fate and transforms that into chasing after your ideal and dream even if the path towards that ideal is infeasible. That chasing after the dream is the beautiful part even if you can't achieve it. The mentality of trying to be a hero of justice is fine, even if you can never achieve that vision. Those who work hard towards an ideal yet are not currently at that goal can be considered a “fake”. However, the fake can oftentimes have greater value or be more real than the “real” thing because the “fake” is relentlessly pursuing the ideal of the real. This ends up being a bittersweet balance of the idealistic fantasy of Fate and the cold reality of Heaven's Feel. Or more succinctly, Emiya’s viewpoint can be thought of as:
				</p>
				<p>
				"Accepting the ideal for all of its flaws, for everything it really is, and to still keep pursuing it anyway"
				</p>
				<p>
				Often times people either optimistically chase their desires while being oblivious to their faults or will abandon those desires entirely because of their faults. But to take the Unlimited Blade Works ideal and chase those desires and dreams even in spite of their faults. There’s something beautiful in this vision, even outside of the realm of fantasy.
				</p>
                </BlogPost>
                <Footer />
            </Page>
        );
    }
}

export default UnlimitedBladeWorks;