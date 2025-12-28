import React from 'react'
import {motion} from "framer-motion"
import instagram from "../assets/instagram.jpeg";
import whatsapp from '../assets/whatsapp.jpeg'
import Lottie from 'lottie-react';
import QR from "../assets/QR.png"
import contactUs from "../assets/contactUS.json"
const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className=" mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-center  max-sm:mb-16"
        >
          <span className="inline-block px-4 glass text-neo-secondary font-medium  rounded-full">
            Contact
          </span>
          <h1 className="text-3xl font-bold text-white mt-6 mb-4">Get in touch with me</h1>

          <div className='flex gap-5 max-sm:flex-col'>

          <Lottie animationData={contactUs} loop={true} className='bg-neo-primary rounded-4xl w-1/2 max-sm:w-full'/>

         <div></div>
          <div className="flex flex-col items-center justify-center gap-6 mt-6">
            <div className="flex flex-row gap-10 mb-4">
              <div className="flex flex-col items-center ">
                <img
                  src={instagram}
                  alt="Instagram QR"
                  className="w-32 h-32  rounded-lg mb-2 glass object-cover"
                />
                <span className="text-white">Instagram</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={whatsapp}
                  alt="WhatsApp QR"
                  className="w-32 h-32 object-cover rounded-lg mb-2 glass"
                />
                <span className="text-white">WhatsApp</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={whatsapp}
                  alt="WhatsApp QR"
                  className="w-32 h-32 object-cover rounded-lg mb-2 glass"
                />
                <span className="text-white">LinkedIn</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={QR}
                  alt="WhatsApp QR"
                  className="w-32 h-32 object-cover rounded-lg mb-2 glass"
                />
                <span className="text-white"><a href="https://github.com/vishnubahadur" target='_blank'>GitHub</a></span>
              </div>
            </div>
            <a
              href="mailto:vishnubahadur788@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-neo-secondary hover:bg-neo-primary text-white font-semibold shadow-lg transition duration-200"
            >
              Email Me
            </a>
            <div>
            <h1 className="text-xl font-bold text-white mb-2">email me at: vishnubahadur788@gmail.com</h1>
            </div>
          
          </div>
          </div>
        </motion.div>

      </div>
      
    </section>
  )
}

export default Contact