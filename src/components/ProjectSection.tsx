import React from 'react'
import Image from "next/image";
import ProjectCard from './Cards/ProjectCards';

const ProjectSection = () => {

    const items = [
        "This is a standard project am writing this to test and check what happening here",
        "This is a standard project am writing this to test and check what happening here",
        "This is a standard project am writing this to test and check what happening here",
    ];

    return (
        <div className='w-full bg-black pt-10 py-10 px-20'>
            <a className='text-6xl font-semi-bold text-white p-10'>Projects</a>
            <div className='flex flex-col md:flex-row w-full gap-5 sm:px-10 pt-10'>
                {items.map((text, index) => (
                    <ProjectCard key={index} text={text} />
                ))}
            </div>
        </div>
    )
}

export default ProjectSection
