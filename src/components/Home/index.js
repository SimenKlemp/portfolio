import {Link, NavLink} from "react-router-dom";
import './index.scss'
import homeLogo from '../../assets/images/work.png'

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Welcome, <br />
                    I'm Simen
                    <br />
                        Computer Scientist and Developer
                </h1>
                <h2>
                    Computer Science Student
                </h2>
                    <Link to="/contact" className="flat-button"> CONTACT ME </Link>
            </div>
            <div className="picture">
                <img className="solid-logo" src={homeLogo} />
            </div>
        </div>
    )
}

export default Home
