import cgi from './assets/images/cgi-logo.jpeg'
import relokator from './assets/images/Relokator.webp'
import forsvaret from './assets/images/picture.jpeg'

export const experience = [
  {
    jobTitle: "Summer Intern",
    company: 'CGI',
    duration: 'jun 2022 - aug 2022 3 måneder',
    picture: <img src={cgi} height={50} width={50} />
  },
  {
    jobTitle: "Servicemedarbeider",
    company: 'Relokator',
    duration: 'jun 2019 - jul 2021 2 år og 2 måneder',
    picture: <img src={relokator} height={50} width={50} />
  },
  {
    jobTitle: "Grensejeger",
    company: 'Forsvaret',
    duration: 'aug 2018 - aug 2019 1 år og 1 måned',
    picture: <img src={forsvaret} height={50} width={50} />
  },
];
