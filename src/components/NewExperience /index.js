import {useState} from "react";
import './index.scss'
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {storage} from "../../utils/firebase";
import {handleNew} from "../../utils/utils";
import {useNavigate} from "react-router-dom";

const NewExperience = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({title: "", employer: "", duration: "",  type: "", position: ""})
    const [selectedCompanyLogo, setSelectedCompanyLogo] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const companyLogoRef = ref(storage, "experiences/" + formData.company.toLowerCase().replaceAll(" ", "_"))

        uploadBytes(companyLogoRef, selectedCompanyLogo).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadUrl) => {
                const completeFormData = {
                    ...formData,
                    employerImgUrl: downloadUrl
                }
                handleNew("experiences", completeFormData).then(() => navigate("/about"))
            })
        })
    }

    const formDataList = ["position", "company", "type", "start_date", "end_date"]

    return (
        <div className="container new-experience">
            <h1> Add new experience </h1>
            <div>
                <form className="form-data" onSubmit={handleSubmit}>
                    {formDataList.map((name) => (
                        <div key={name} className="form-group">
                            <label htmlFor={name}> {name}: </label>
                            <input type="text" id={name} name={name} value={formData[name]} onChange={handleChange}/>
                        </div>

                    ))}
                    <div className="form-group">
                        <label htmlFor="companyLogo"> Preview image: </label>
                        <input type="file" id="companyLogo" name="companyLogo" onChange={(e) => setSelectedCompanyLogo(e.target.files[0])}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )

}

export default NewExperience
