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
      <div className='w-[60%] border-[#181818] border'/>
      </div>
      <div className='w-full border border-[#181818] justify-center flex p-8 py-20'>
        <div className='w-[80%]'>
        <a className='text-white text-2xl font-bold'>
          Software Engineer skilled in React Native (Expo & Bare), React.js, TypeScript, Node.js, JavaScript, Redux Toolkit, and MERN stack. Experienced in building scalable, high-performance applications with AWS and Docker, reusable architectures, CI/CD workflows, and optimized systems for speed, reliability, and seamless user experiences.
          </a>
          </div>
      </div>
    </div>
  )
}

export default AboutSection
