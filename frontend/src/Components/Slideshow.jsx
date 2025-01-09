import Button from './Button';

function Slideshow(){
        return(
            <section id="about" className='slideshow-container'>
                <div className='slideshow'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="slideshow-content">
                    <h2>Welcome to SparkSF</h2><br />
                    <p>
                        SparkSF is the first entrepreneurship club at SFSU, offering students a 
                        platform to explore innovative business ideas, connect with like-minded 
                        peers, and gain valuable knowledge about the startup ecosystem.
                    </p>
                    <Button text="Join Us" path="https://docs.google.com/forms/d/e/1FAIpQLSdzacWtilf8H72fR3basRF1uc_m6nv4lrSRhl45kfFgoCawgw/viewform"/>
                </div>
            </section>
        )
}

export default Slideshow;