import './index.scss'
import {NavLink} from "react-router-dom";
import {faHome, faSuitcase, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {signInWithGoogle, signOutFromApp} from '../../utils/firebase'
import {Button} from "@mui/material";
import {useContext, useEffect} from "react";
import {userContext} from '../../Contexts'


const Sidebar = () => {
    const { authUser } = useContext(userContext);

    useEffect(() => {
        console.log(authUser)
    }, [])

    return (
        <div className='nav-bar'>
            <div className="contact-elements">
                <ul>
                    <li>
                        <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/simen-klemp-b684411ba/'>
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
                        <h2> HOME </h2>
                    </NavLink>
                    <NavLink exact="true" activeClassname="activate" className="about-link" to="/about">
                        <h2> ABOUT </h2>
                    </NavLink>
                    <NavLink exact="true" activeClassname="activate" className="contact-link" to="/projects">
                        <h2> PROJECTS </h2>
                    </NavLink>
                    {authUser ? (
                        <div className="googleImgContainer">
                            <img className="googleImg"
                                 src={authUser.photoURL}
                                 onClick={signOutFromApp}
                            />
                        </div>
                    ): <NavLink exact="true" activeClassname="activate" onClick={signInWithGoogle}>
                        <h2> LOGIN </h2>
                    </NavLink>
                    }
                </nav>

            </div>
        </div>

    )



}


export default Sidebar


