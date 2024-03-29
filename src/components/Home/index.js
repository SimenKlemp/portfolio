import {Link} from "react-router-dom";
import './index.scss'
import homeLogo from '../../assets/images/work.png'


const Home = () => {

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Welcome, <br />
                    I'm Simen Klemp
                    <br />
                    <h2>Computer Scientist and Developer</h2>
                </h1>
                <Link to="/about" className="flat-button"> GET TO KNOW ME BETTER </Link>
            </div>
            <div className="picture">
                <img className="solid-logo" src={homeLogo} />
            </div>
        </div>
    )
}

export default Home
