import Button from "./Button";
import Interested from "./Interested";
import FaQ from "./FaQ";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div className="footer" id="links">
            <p>With SparkSF, you'll not only build past your limits, you'll build them with exceptional people. We look for energy, drive, and initiative.</p>
            <div className="footer-link">
                <Button
                    path="https://www.instagram.com/spark.sf/"
                    text={<FontAwesomeIcon icon={faInstagram} />}
                />
                <Button
                    path="https://www.linkedin.com/company/sparksf/about/"
                    text={<FontAwesomeIcon icon={faLinkedin} />}
                />
                <Button
                    path="https://discord.gg/ZZZFpzKsdd"
                    text={<FontAwesomeIcon icon={faDiscord} />}
                />
                <Button
                    path="https://docs.google.com/forms/d/e/1FAIpQLSdSo1bVW4Kcqvkk36caHmjTXeuglHIXB3UdoLKI1aEjCi5nrg/viewform"
                    text={<FontAwesomeIcon icon={faFileAlt} />}
                />
            </div>
            <FaQ />
            <Interested />
        </div>
    );
}

export default Footer;
