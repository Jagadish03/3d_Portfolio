import {school, puc, be, vercons, jsp } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    bootstrap,
    java,
    postman,
    mysql
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "JAVA",
        type: "Programming",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Kendriya Vidyalaya Dharwad",
        company_name: "High School",
        icon: school,
        iconBg: "#fbc3bc",
        date: "March 2007 - April 2017",
        points: [
            "Central Board of Secondary Education",
            "CGPA : 7.8",
        ],
    },
    {
        title: "KLE Prerana PU College, BVB Campus, Hubballi",
        company_name: "Pre University College",
        icon: puc,
        iconBg: "#a2d2ff",
        date: "June 2017 - April 2019",
        points: [
            "Karnataka Board",
            "(PCMCS) Physics, Chemistry, Mathematics, and Computer Science",
            "CGPA : 6.8"
        ],
    },
    {
        title: "KLS Vishwanathrao Deshpande Institute of Technology",
        company_name: "Bachelor of Engineering",
        icon: be,
        iconBg: "#b7e4c7",
        date: "August 2019 - July 2023",
        points: [
            "Visvesvaraya Technological University(VTU)",
            "Computer science and engineering",
            "CGPA : 7.9"
        ],
    },
    {
        title: "Internship",
        company_name: "Varcons Technologies Pvt Ltd ",
        icon: vercons,
        iconBg: "#F7F749",
        date: "August 2022 - September 2022",
        points: [
            "Project aimed at creating fully-fledged functional web templates for a client.",
            "Designed functional web pages, utilized databases for data collection, storage, and sorting.",
            "Interpreted design briefs and client specifications from the project proposal",
        ],
    },
    {
        title: "Training",
        company_name: "Jspiders",
        icon: jsp,
        iconBg: "#FF850F",
        date: "May 2023 - December 2023",
        points: [
            "Completed an intensive MERN (MongoDB, Express.js, React, Node.js) stack course, gaining comprehensive knowledge and hands-on experience in full-stack web development",   
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Jagadish03',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jagadish-s-munavalli-278aba219/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];