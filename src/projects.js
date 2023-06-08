import cgi from './assets/images/cgi-logo.jpeg'
import relokator from './assets/images/Relokator.webp'
import forsvaret from './assets/images/picture.jpeg'


export const projects = [
    {
        id: 1,
        title: "BOCO",
        subtitle: "Vue and Spring Boot",
        description: "BOCO is a service that lets you rent objects easy and cheap",
        image: <img src={cgi} height={50} width={50}/>,
        link: "https://reactbootcamp.com",
    },
    {
        id: 2,
        title: "QS3",
        subtitle: "Vue and Spring Boot",
        description:  "Have you ever needed a assignment portal to keep track of done and undone assignments? Then QS3 is for you. The app lets ou easily get help from teaching assistants, and ..",
        image: <img src={forsvaret} height={50} width={50} />,
        link: "https://github.com/IoT-Students/Qs3",
    },
    {
        id: 3,
        title: "Unit Converter",
        subtitle: "Vue and Spring Boot",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: <img src={forsvaret} height={50} width={50} />,
        link: "https://pythonbootcamp.com",
    },
    {
        id: 4,
        title: "toDoList",
        subtitle: "React Native (Expo)",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: <img src={forsvaret} height={50} width={50} />,
        link: "https://pythonbootcamp.com",
    },

    {
        id: 5,
        title: "Properate App",
        subtitle: "React Native (Expo) and Cognite API",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
        image: <img src={forsvaret} height={50} width={50} />,
        link: "https://pythonbootcamp.com",
    },
];
