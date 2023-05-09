
import './index.scss'
import Experience from "./Experience";
import portret from '../../assets/images/portrett.jpg'

const AboutMe = () => {


    return (
        <div className="container about-page">
            <div className="text-zone">
                <div className="text">
                    <h1>
                        My life in 1-2-3
                    </h1>
                    <h2>
                        I enjoy working with development because it serves me with purpose. Just think about all the possibilities technology opens up!
                    </h2>

                </div>
                <div className="picture">
                    <img className="solid-logo" src={portret} />

                </div>
            </div>
            <div className="experience-container">
                <Experience/>
            </div>
        </div>


    )

}

export default AboutMe