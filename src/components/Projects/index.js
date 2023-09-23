
import './index.scss'
import ProjectCard from "./ProjectCard";
import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getDocs, collection} from "firebase/firestore";
import db from "../../utils/firebase"
import {userContext} from '../../Contexts'

const Projects = () => {

    const [projects, setProjects] = useState([]);

    //const { isAdmin } = useContext(userContext);



    console.log(projects)

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
                    <div>
                        <Link className="projectLink" to={"/admin/addProject/"} >
                            <ProjectCard isNewProject={true}/>
                        </Link>
                    </div>
                    {projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map((project, index) => (
                        <Link className="projectLink" to={"/projectDetails/" + project.id} key={project.id}>
                            <ProjectCard stack={project.stack} title={project.title} previewImg={project.previewImg} detailedImg={project.detailedImg} />
                        </Link>
                    ))}
                </div>
            </div>
    );
}

export default Projects
