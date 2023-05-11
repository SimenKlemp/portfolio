import ucsd from './assets/images/UCSD.jpeg'
import ntnu from './assets/images/ntnuLogo.png'
import ullernVgs from './assets/images/ullernVgs.jpeg'

export const education = [
    {
        jobTitle: "Extended Studies",
        company: 'University of California San Diego',
        duration: 'aug 2022 - dec 2022 5 måneder',
        picture: <img src={ucsd} height={50} width={50} />
    },
    {
        jobTitle: "Computer Engineering",
        company: 'Norwegian University of Science and Technology',
        duration: 'aug 2020 - Nå',
        picture: <img src={ntnu} height={50} width={50} />
    },
    {
        jobTitle: "General University Admissions Certification",
        company: 'Ullern Upper Secondary School',
        duration: 'aug 2015 - aug 2018 3 år',
        picture: <img src={ullernVgs} height={50} width={50} />
    },
];
