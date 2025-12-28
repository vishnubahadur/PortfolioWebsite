import Lottie from 'lottie-react'
import React from 'react'
import AboutUs from "../assets/AboutUs.json"

const About = () => {
  return (
    <div id='about' className='h-screen flex py-26 justify-center items-center gap-10 px-5 m-10 max-sm:m-1 max-sm:flex-col max-sm:gap-5'>
        <div className='bg-neo-primary rounded-2xl w-1/2 max-sm:w-full'>
            <Lottie animationData={AboutUs} loop={true}/>
        </div>
        <div className='w-1/2 max-sm:w-full'>
        <h1 className='text-4xl gradient-text font-extrabold py-3'>About Me</h1>
           <h1 className='text-2xl text-white  max-sm:text-sm '>

            I'm a digital creator passionate about building immersive experiences at the intersection of design and technology. With over 5 years in the industry, I've helped startups and Fortune 500 companies bring their digital visions to life.

My approach combines aesthetic sensibility with technical expertise to create products that are not only beautiful but also intuitive and performant. I believe in pushing boundaries while maintaining usability at the core.
           </h1>
        </div>  
    </div>
    

  )
}

export default About