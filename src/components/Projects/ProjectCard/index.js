
import './index.scss'
import {useState} from "react";

const ProjectCard = (props) => {


    const [imgLoading, setImgLoading] = useState(true)

    return (
        <div className="projectCardContainer" >
            <div className="projectImageContainer">
                <img className="projectImage"
                     src={props.image}
                     style={imgLoading ? { display: "none" } : { maxWidth: "100%", maxHeight: "100%" }}
                     alt={""}
                     onLoad={() => setImgLoading(false)}
                />
            </div>
            <div className="projectCardInformation">
                <h1>
                    {props.title}
                </h1>
                <h3>
                    {props.subtitle}
                </h3>
            </div>
        </div>
    )
}

export default ProjectCard
