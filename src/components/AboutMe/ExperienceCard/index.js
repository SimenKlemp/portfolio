import './index.scss'

const ExperienceCard = (props) => {

    return (
        <div className="experienceCard-container">
            <div className="experienceCard-img">
                {props.picture}
            </div>
            <div>
                <h4 className="jobTitle-title"> {props.jobTitle}</h4>
                <p className="company-title"> {props.company}</p>
                <p className="duration-title"> {props.duration}</p>
            </div>
        </div>
    )

}

export default ExperienceCard
