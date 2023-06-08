
import './index.scss'
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "@mui/material";
import {handleGet} from "../../utils/utils";

import gitHubLogo from '../../assets/images/githubLogo.png'

const ProjectDetails = () => {

    const [project, setProject] = useState();
    const [imgLoading, setImgLoading] = useState(true)
    const navigate = useNavigate();
    const params = useParams()


    useEffect(() => {
        handleGet("projects", params.id).then((project) => {
            setProject(project);
        });
    }, []);


    return (
        <div className="container project-details-card" >
            <div className="backButtonContainer">
                <Button onClick={() => navigate("/projects")}>
                    Go Back
                </Button>
            </div>
            {project ? (
                <div className="projectBar">

                    <div>
                        <h1 className="projectTitle"> {project.title} </h1>
                        <div className="subtitleAndLinkContainer">
                            <h2> {project.subtitle}</h2>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <img
                                    className="githubLogo"
                                    src={gitHubLogo}
                                    style={{ width: 30, height: 30, color: "white" }}
                                    alt="githubLogo"/>
                            </a>
                        </div>
                    </div>
                    <div className="projectDetailsImgContainer">
                        <img className="projectDetailsImage"
                            src={project.imgDetail}
                            style={imgLoading ? { display: "none" } : { maxWidth: "100%", maxHeight: "100%" }}
                            alt={""}
                            onLoad={() => setImgLoading(false)}
                        />
                    </div>
                    <div className="projectDescriptionContainer">
                        <h2>What´s the purpose? </h2>
                        <h3>
                            {project.description}
                        </h3>
                    </div>
                </div>
            ): <p> Fetching projects...</p>}
        </div>
    )
}

export default ProjectDetails
