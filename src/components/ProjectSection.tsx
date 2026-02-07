import React from 'react'
import Image from "next/image";
import ProjectCard from './Cards/ProjectCards';

const ProjectSection = () => {

    const projects = [
        {
            _id: 1,
            name: 'Strength',
            logo: "/StrengthLogo.png",
            description: "Strength is a professional sports focused social media platform that connects athletes, teams, and clubs, enabling them to showcase their sports identity, engage with the community, and grow their presence through structured profiles, posts, and team collaboration.",
        },
        {
            _id: 2,
            name: 'Stamin',
            logo: "/StaminLogo.png",
            description: "Stamin is an AI-driven health, fitness, and sports platform that helps users build a personal fitness profile. It integrates smartwatch data and manual inputs to track metrics like time, distance, heart rate, and medical reports, which the AI uses to deliver personalized fitness and health guidance.",
        },
        {
            _id: 3,
            name: 'Qilin',
            logo: "/QilinLogo.png",
            description: "Qilin is a Gen-Z focused second-hand fashion marketplace in India, featuring an AI-powered image-based product listing flow and a scalable, responsive mobile experience built with a strong focus on clean architecture, performance, and reusable UI components.",
        },
        {
            _id: 4,
            name: 'Skyward',
            logo: "/SkywardLogo.PNG",
            description: "A modern airline ticket reservation platform designed for seamless flight search and booking. The system offers secure authentication, real-time seat selection, class-based pricing, and a smooth end-to-end booking experience built with reliability and performance in mind.",
        }
    ]

    return (
        <div className='w-full bg-black pt-18 py-30 px-20'>
            <a className='text-6xl font-semi-bold text-white p-10'>Projects</a>
            <div className='flex flex-col md:flex-row w-full gap-5 sm:px-10 pt-10'>
                {projects.map((item, index) => (
                    <ProjectCard key={index} _id={item._id} name={item.name} text={item.description} image={item.logo} />
                ))}
            </div>
        </div>
    )
}

export default ProjectSection
