import React from 'react'
import Image from "next/image";
import ProjectCard from './Cards/ProjectCards';

const ProjectSection = () => {

    const items = [
        "Led the end-to-end development of a sports-centric social platform, architected to handle 10,000+ concurrent users and a total capacity of 200,000 users, ensuring scalability, high availability, and fault tolerance.",
        "Stamin is an AI-driven health, fitness, and sports platform that enables users to build and maintain a comprehensive personal wellness profile. By integrating with smartwatches and allowing manual data entry, Stamin records essential metrics such as time, distance, heart rate, and medical reports.",
        "Led the end-to-end development of Qilin, a Gen-Z second-hand fashion marketplace in India, engineered for scalability, security, and responsiveness while ensuring seamless UI/UX, reusability, and a sustainable user-centric shopping experience.",
    ];

    const project = [
        {
            text: "This is the first project, testing dynamic images.",
            image: "/StrengthLogo.png",
        },
        {
            text: "This is the second project, showing a different logo.",
            image: "/StaminLogo.png",
        },
        {
            text: "This is the third project, with yet another image.",
            image: "/QilinLogo.png",
        },
    ];

    return (
        <div className='w-full bg-black pt-18 py-30 px-20'>
            <a className='text-6xl font-semi-bold text-white p-10'>Projects</a>
            <div className='flex flex-col md:flex-row w-full gap-5 sm:px-10 pt-10'>
                {items.map((text, index) => (
                    <ProjectCard key={index} text={text} image={project[index].image} />
                ))}
            </div>
        </div>
    )
}

export default ProjectSection
