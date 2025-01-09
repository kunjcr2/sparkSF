import Card from './Card.jsx';
import Slideshow from './Slideshow.jsx';
import Latestupdates from './Latestupdates.jsx';

// Photos
import Mixer from '../assets/Mixer.png';
import Panels from '../assets/Panels.png';
import Pitch from '../assets/Pitch.png';
import Workshop from '../assets/Workshop.png';

function Body(){
    return (
        <div className="main_body">
            <Slideshow />
            <h2 id="event">What We Do?</h2>
            <div className="event-cards" id='event'>
                <Card img={Mixer} 
                title="Mixers" 
                text="Meet fellow entrepreneurs, developers, and investors in the San Francisco area. We'll do our best to bring in outside guests and speakers, don't miss out!"/>

                <Card img={Panels} 
                title="Panels" 
                text="Join us for a panel discussion with other entrepreneurs, investors, and businessmen in the San Francisco area discussing trends, challenges, and opportunities."/>

                <Card img={Pitch} 
                title="Pitch Competitions" 
                text="We plan to work with ACM and the LFCoB to host pitch competitions for students to present their startup ideas and win grants to help fund their projects!"/>

                <Card img={Workshop} 
                title="Workshops" 
                text="We plan to host workshops on various topics like fundraising, customer acquisition, and product development to help students succeed their next startup!"/>
            </div>
            <Latestupdates />
        </div>
    )
}

export default Body;