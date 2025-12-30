import Lottie from 'lottie-react'
import React from 'react'
import AboutUs from "../assets/AboutUs.json"

const About = () => {
  return (
    <div id='about' className='h-screen  flex py-26 justify-center items-center gap-10 px-5 m-10 max-sm:m-1 max-sm:flex-col max-sm:gap-5'>
        <div className='bg-neo-primary/70 rounded-2xl w-1/2 max-sm:w-full'>
            <Lottie animationData={AboutUs} loop={true}/>
        </div>
        <div className='w-1/2 max-sm:w-full'>
        <h1 className='text-4xl gradient-text font-extrabold py-3'>About Me</h1>
           <h1 className='text-2xl text-white  max-sm:text-sm '>
          Hello! 👋
I’m Vishnu Bahadur, a passionate software developer who loves building things on the web and creating innovative digital solutions.
<br />
<br />
I specialize in building web-based applications using modern JavaScript,ReactJS and enjoy creating interactive, practical, and scalable solutions. With experience in both technical and client-facing roles, I bring a balanced approach to development—combining clean code with real-world usability.
Always learning. Always building.
           </h1>
        </div>  
    </div>
    

  )
}

export default About