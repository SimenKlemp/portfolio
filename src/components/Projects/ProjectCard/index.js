
import './index.scss'
import {useContext, useEffect, useState} from "react";
import addIcon from '../../../assets/images/addIcon.png'
import {userContext} from "../../../Contexts";

const ProjectCard = (props) => {

    const { title, previewImg, detailedImg, stack, isNewProject} = props

    const [imgLoading, setImgLoading] = useState(true)

    //const user = useContext(userContext)


    if(isNewProject) {
        return (
            <div className="projectCardContainer">
                <div className="projectCardInformation">
                    <h1> Add Project</h1>
                </div>
                <div className="projectImageContainer">
                    <img
                        className="projectImage"
                        src={addIcon}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className="projectCardContainer" >

            <div className="projectImageContainer">
                <img className="projectImage"
                     src={previewImg}
                     style={imgLoading ? { display: "none" } : { maxWidth: "100%", maxHeight: "100%" }}
                     alt={""}
                     onLoad={() => setImgLoading(false)}
                />
            </div>
            <div className="projectCardInformation">
                <h1>
                    {title}
                </h1>
                <h3>
                    {stack}
                </h3>
            </div>
        </div>
    )
}

export default ProjectCard
