
import './index.scss'
import {experience} from "../../experience";
import {education} from "../../education";
import portret from '../../assets/images/portrett.jpg'
import ExperienceCard from "./ExperienceCard";

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
                <div className={"experience-title-container"}>
                    <h1 className="experience-title">Experience</h1>
                </div>
                <div>
                    {experience.map((data, key) => {
                        return (
                            <div key={key}>
                                <ExperienceCard jobTitle={data.jobTitle} company={data.company} duration={data.duration} picture={data.picture}/>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <div className={"experience-title-container"}>
                        <h1 className="experience-title">Education</h1>
                    </div>
                    {education.map((data, key) => {
                        return (
                            <div key={key}>
                                <ExperienceCard jobTitle={data.jobTitle} company={data.company} duration={data.duration} picture={data.picture}/>
                            </div>
                        );
                    })}

                </div>

            </div>
        </div>
    )
}

export default AboutMe
