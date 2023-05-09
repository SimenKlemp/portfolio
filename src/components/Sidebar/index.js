import './index.scss'
import {NavLink} from "react-router-dom";
import {faHome, faSuitcase, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
    <div className='nav-bar'>
        <div className="contact-elements">
            <ul>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/simen-klemp-petersen-b684411ba/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />

                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/SimenKlemp'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />

                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/simen-klemp-petersen-b684411ba/'>
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />

                    </a>
                </li>
            </ul>

        </div>

        <div className="nav-elements">
            <nav>
                <NavLink exact="true" activeClassname="activate" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeClassname="activate" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" activeClassname="activate" className="contact-link" to="/projects">
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
                </NavLink>
            </nav>

        </div>
    </div>


)

export default Sidebar


