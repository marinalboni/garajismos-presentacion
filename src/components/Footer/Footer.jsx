import './Footer.css';
import insta from "../../assets/images/insta.png";
import linkedin from "../../assets/images/linkedin.png";
import youtube from "../../assets/images/youtube.png";

function Footer() {
    return (
        <div className="footer">
            <div>
                <h3>Contactos</h3>
                <ul>
                    <li>
                        <img alt="" src={linkedin}/>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/marina-laporte-boni-/">Linkedin</a>
                    </li>
                    <li>
                        <img alt="" src={insta}/>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ninalboni">Instagram</a>
                    </li>
                    <li>
                        <img alt="" src={youtube}/>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC32VUOLBrXjpxKc67ijEgsw">Youtube</a>
                    </li>
                </ul>
            </div>
            <h5>Madrid 2022</h5>
        </div>
    );
}

export default Footer;