
import './index.scss'
import portret from '../../assets/images/portrett.jpg'
import ExperienceCard from "./ExperienceCard";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import db from "../../utils/firebase";

const AboutMe = () => {
    const navigate = useNavigate();

    const [experiences, setExperiences] = useState([])

    useEffect(() => {
        getDocs(collection(db, "experiences"))
            .then((snapshot) => {
                setExperiences(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

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
                    <img className="profileImg" src={portret} />
                </div>
            </div>
            <div>
                <Button className="addExperience-button" onClick={() => navigate("/admin/addExperience")}> Add experience </Button>
            </div>

            <div className="experience-container">
                <div className={"experience-title-container"}>
                    <h1 className="experience-title">Experience</h1>
                </div>
                <div>
                    {experiences.filter((experience) => experience.type === "experience" ).map((data, key) => {
                        return (
                            <div key={key}>
                                <ExperienceCard jobTitle={data.title} company={data.employer} start_date={data.start_date} end_date={data.end_date} picture={data.employerImgUrl} position={data.position}/>
                            </div>
                        );
                    })}
                </div>
                <div>
                    <div className={"experience-title-container"}>
                        <h1 className="experience-title">Education</h1>
                    </div>
                    {experiences.filter((experience) => experience.type === "education").map((data, key) => {
                        return (
                            <div key={key}>
                                <ExperienceCard jobTitle={data.title} company={data.employer} start_date={data.start_date} end_date={data.end_date} picture={data.employerImgUrl}/>
                            </div>
                        );
                    })}

                </div>

            </div>
        </div>
    )
}

export default AboutMe
