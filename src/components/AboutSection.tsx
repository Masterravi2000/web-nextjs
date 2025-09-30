import React from 'react'

const AboutSection = () => {
  return (
    <div className='w-full bg-black pt-4'>
      <div className='flex flex-row  w-full'>
      <div className='w-[60%] flex justify-center p-8 py-20 border-[#181818] border-b-1 border-t-1 border-r-1'>
        <a className='text-white text-6xl font-semi-bold'>
          WHY PARTNER WITH ME?
          </a>
      </div>
      <div className='w-[40%] border-[#181818] border'/>
      </div>
      <div className='w-full border border-[#181818] justify-center flex p-8'>
        <div className='w-[80%]'>
        <a className='text-white text-2xl font-bold'>
          With 6+ years Webflow expertise, I combine technical precision, a design-led mindset, and immersive animation to craft high-impact web experiences that help teams move faster, collaborate freely, and scale with fewer technological constransts
          </a>
          </div>
      </div>
    </div>
  )
}

export default AboutSection
