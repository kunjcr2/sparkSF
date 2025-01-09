import Button from './Button';
import sparkSFbanner from '../assets/sparkSFbanner.png';

function Header(){
    return (
        <div className="header">
            <div className="left">
                <img src={sparkSFbanner} alt="sparkSF logo" />
                <h3>Igniting Ideas, Fueling Futures.</h3>
            </div>
            <div className="right">
                <nav>        
                    <a href="#about">
                        <Button text="About"/>
                    </a>
                    <a href="#event">
                        <Button text="Events"/>
                    </a>
                    <a href="#links">
                        <Button text="Link"/>
                    </a>
                    <a href="#FaQs">
                        <Button text="FaQs"/>
                    </a>
                    <a href="#ContactUs">
                        <Button text="Contact Us"/>
                    </a>                    
                </nav>
            </div>
        </div>
    )
}

export default Header;