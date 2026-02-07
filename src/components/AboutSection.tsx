import React from 'react'

const AboutSection = () => {
  return (
    <div className='w-full bg-black'>
      <div className='flex flex-row w-full'>
        <div className='w-[40%] flex justify-center p-8 py-20 border-[#181818] border-b-1 border-t-1 border-r-1'>
          <a className='text-white text-6xl font-semi-bold'>
            About Me?
          </a>
        </div>
        <div className='w-[60%] border-[#181818] border' />
      </div>
      <div className='w-full border border-[#181818] justify-center flex p-8 py-20'>
        <div className='w-[80%]'>
          <a className='text-white text-2xl font-bold'>
            Software Engineer with experience in Java and JavaScript, specializing in building scalable, high-performance web and mobile applications using React Native, React.js, TypeScript, Redux Toolkit, and Spring Boot. Skilled in designing secure RESTful APIs, monolithic MVC systems, and data-driven platforms, with hands-on experience in authentication, caching, and backend optimization. Strong focus on clean architecture, code reusability, system reliability, and delivering polished, production-ready user experiences.
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
