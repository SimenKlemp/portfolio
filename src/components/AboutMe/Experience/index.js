import cgiLogo from "../../../assets/images/cgi-logo.jpeg";
import relokatorLogo from "../../../assets/images/Relokator.webp";
import forsvaretLogo from "../../../assets/images/picture.jpeg";

import './index.scss'


const Experience = () => {

    return (
        <div className="aboutMe-container">
            <section>
                <div className="experience-container">
                    <div>
                        <h1 className="experience-content-title"> Experience </h1>
                        <hr className="Experience-divider"/>
                    </div>
                    <div className="employment">
                        <div className="experience-content-container">
                            <div className="experience-content-logo">
                                <img src={cgiLogo} className="firmLogo"/>
                            </div>
                            <div className="experience-content">
                                <h4> Summer Intern </h4>
                                <p> CGI </p>
                                <p> Full Time</p>
                                <p> Jun 2022 - Aug 2022 ⸱ 3 mnd</p>
                            </div>
                        </div>
                        <hr className="MuiDivider-root MuiDivider-fullWidth css-1ingp1f"/>
                    </div>

                    <div className="employment">
                        <div className="experience-content-container">
                            <div className="experience-content-logo">
                                <img src={relokatorLogo} className="firmLogo"/>
                            </div>
                            <div className="experience-content">
                                <h4> Servicemedarbeider </h4>
                                <p> First Mover Group AS </p>
                                <p> Sep 2019 - Aug 2021 ⸱ 2 år</p>
                            </div>
                        </div>
                        <hr className="MuiDivider-root MuiDivider-fullWidth css-1ingp1f"/>
                    </div>

                    <div className="employment">
                        <div className="experience-content-container">
                            <div className="experience-content-logo">
                                <img src={forsvaretLogo} className="firmLogo"/>
                            </div>
                            <div className="experience-content">
                                <h4> Grensejeger </h4>
                                <p> Forsvaret - Garnisonen i Sør-Varanger </p>
                                <p> Aug 2018 - Aug 2019 ⸱ 1 år</p>
                            </div>
                        </div>
                        <hr className="MuiDivider-root MuiDivider-fullWidth css-1ingp1f"/>
                    </div>


                </div>
            </section>



        </div>

    )
}

export default Experience