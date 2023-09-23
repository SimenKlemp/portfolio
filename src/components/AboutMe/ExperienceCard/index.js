import './index.scss'
import moment from "moment";

const ExperienceCard = (props) => {

    const getFromToDateString = () => {
        return (
            moment(props.start_date).format("MMM YYYY") +
            " - " +
            (props.end_date? moment(props.end_date).format("MMM YYYY") : "Nå")
        );
    };


    const getDuration = () => {
        const months = moment(props.end_date).diff(moment(props.start_date), "months");

        if (Math.floor(months / 12) > 0) {
            const years = Math.floor(months / 12);
            const yearString = years > 1 ? years + " years" : years + " year";

            if (months % 12 > 0) {
                return yearString + ", " + (months % 12) + " mnd";
            } else {
                return yearString;
            }
        } else if (months > 0) {
            return months + " mnd";
        }
        else{
            return "1 mnd";
        }
    };

    return (
        <div className="experienceCard-container">
            <div className="experienceCard-img">
                <img src={props.picture} height={50} width={50}/>
            </div>
            <div>
                <h4 className="jobTitle-title"> {props.jobTitle}</h4>
                <p className="company-title"> {props.company}</p>
                <p className="position-title"> {props.position}</p>
                <p className="duration-title"> {getFromToDateString()}  &#x2E31; {getDuration()}</p>
            </div>
        </div>
    )

}

export default ExperienceCard
