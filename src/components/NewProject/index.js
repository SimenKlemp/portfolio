import './index.scss'
import {useState} from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {handleNew} from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import {storage} from "../../utils/firebase";


const NewProject = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({title: "", stack: "", description: "", gitHubLink: "", createdAt: ""})
    const [inputError, setInputError] = useState(null);
    const [selectedPreviewImg, setSelectedPreviewImg] = useState(null);
    const [selectedDetailedImg, setSelectedDetailedImg] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        if (value === "") {
            setInputError('Input is required!');
        } else {
            setInputError(null);
        }
    }



    const handleSubmit = (event) => {
        event.preventDefault();

        const previewImgRef = ref(storage, "/images/" + selectedPreviewImg.name.toLowerCase().replaceAll(" ", "_"))
        const detailedImgRef = ref(storage, "/images/" + selectedDetailedImg.name.toLowerCase().replaceAll(" ", "_"))

        const uploadPreviewImg = selectedPreviewImg ? uploadBytes(previewImgRef, selectedPreviewImg) : null
        const uploadDetailedImg = selectedDetailedImg ? uploadBytes(detailedImgRef, selectedDetailedImg) : null

        Promise.all([uploadPreviewImg, uploadDetailedImg]).then((values) => {
            const previewImgDownloadUrl = values[0] ? getDownloadURL(values[0].ref) : null
            const detailedImgDownloadUrl = values[1] ? getDownloadURL(values[1].ref) : null

            Promise.all([previewImgDownloadUrl, detailedImgDownloadUrl]).then((downloadUrls) => {
                const completeFormData = {
                    ...formData,
                    previewImg: downloadUrls[0],
                    detailedImg: downloadUrls[1]
                }
                handleNew("projects", completeFormData).then((projectId) => navigate("/projectDetails/" + projectId))
            })
        })
    }


    const formDataList = ["title", "stack", "description", "gitHubLink", "createdAt"]


    return (
        <div className="container new-project">
            <h1> Add new Project </h1>
            <div>
                <form className="form-data" onSubmit={handleSubmit}>
                    {formDataList.map((formName) => (
                        <div key={formName} className="form-group">
                            <label htmlFor={formName}> {formName}: </label>
                            <input type="text" id={formName} name={formName} value={formData[formName]} onChange={handleChange}/>
                        </div>
                    ))}

                    <div className="form-group">
                        <label htmlFor="previewImg"> Preview image: </label>
                        <input type="file" id="previewImg" name="previewImg" onChange={(e) => setSelectedPreviewImg(e.target.files[0])}/>
                        {selectedPreviewImg && <img src={selectedPreviewImg}/>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="detailedImg"> Detailed image: </label>
                        <input type="file" id="detailedImg" name="detailedImg" onChange={(e) => setSelectedDetailedImg(e.target.files[0])}/>
                    </div>

                    {inputError && <div className="error">{inputError}</div>}

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

    )
}
export default NewProject
