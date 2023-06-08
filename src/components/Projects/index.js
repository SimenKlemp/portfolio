
import './index.scss'
import ProjectCard from "./ProjectCard";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDocs, collection} from "firebase/firestore";
import db from "../../utils/firebase"

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getDocs(collection(db, "projects"))
            .then((snapshot) => {
                setProjects(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            })
            .catch((err) => {
                console.log(err.message);
            });

    }, []);


    return (
            <div className="container-projects">
                <div className="site-information">
                    <h1 className="project-page-title">
                        Apps I've Built
                    </h1>
                    <h2 className="project-page-description">
                        Projects that I have developed and been apart of! Take a look.
                    </h2>
                </div>
                <div className="project-container">
                    {projects.map((project, index) => (

                        <Link className="projectLink" to={"/projectDetails/" + project.id} key={project.id}>
                            <ProjectCard subtitle={project.subtitle} title={project.title} image={project.imageUrl} />
                        </Link>
                    ))}
                </div>

            </div>
    );
}

export default Projects
