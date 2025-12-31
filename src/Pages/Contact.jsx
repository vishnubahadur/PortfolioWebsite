import React from "react";
import { motion } from "framer-motion";
import instagram from "../assets/instagram.jpeg";
import whatsapp from "../assets/whatsapp.jpeg";
import Lottie from "lottie-react";
import QR from "../assets/QR.png";
import contactUs from "../assets/contactUS.json";
import LinkedIn from "../assets/Linkedin.png";
const Contact = () => {
  return (
    <section id="contact" className="py-24 h-screen max-sm:py-0">
      <div className="px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}   
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-center max-sm:mb-16"
        >
          <span className="inline-block text-4xl px-4 glass gradient-text font-medium  rounded-full max-sm:text-xl">
            Contact
          </span>
          <h1 className="text-3xl font-bold text-white mt-6">
            Get in touch with me
          </h1>

          <div className="flex flex-row-reverse gap-5 mt-10 max-sm:flex-col">
            <Lottie
              animationData={contactUs}
              loop={true}
              className="bg-neo-primary/60 rounded-2xl w-1/2 max-sm:w-full"
            />
            <div className="flex flex-col gap-5 max-sm:gap-2">
              <div className="flex justify-center gap-15 max-sm:w-full max-sm:flex-wrap max-sm:gap-5">
                <a href="https://github.com/vishnubahadur" target="_blank" rel="noopener noreferrer">
                <img
                  src={QR}
                  alt="GitHub"
                  className="w-30 h-30 mx-auto mb-5 rounded-2xl"
                />
                </a>
                <a href="http://www.instagram.com/vishnu_0820" target="_blank" rel="noopener noreferrer">
                <img
                  src={instagram}
                  alt="QR Code"
                  className="w-30 h-30 mx-auto mb-5 rounded-2xl"
                />
                </a>
                <a href="https://wa.me/qr/KFNGGVMIXTOQN1" target="_blank" rel="noopener noreferrer">
                <img
                  src={whatsapp}
                  alt="QR Code"
                  className="w-30 h-30 mx-auto mb-5 rounded-2xl"
                />
                </a>
                <a href="https://www.linkedin.com/in/vishnu-bahadur-b25687184/" target="_blank" rel="noopener noreferrer">
                <img
                  src={LinkedIn}
                  alt="QR Code"
                  className="w-30 h-30 mx-auto mb-5 rounded-2xl bg-white"
                />
                </a>
              </div>
              <h1 className="text-xl font-bold">Scan to Connect</h1>
              <p className="text-2xl italic font-bold">OR</p>
              <span className="mb-5">
                <a
                  href="mailto:vishnubahadur788@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-2 text-xl rounded-full bg-neo-primary hover:bg-neo-primary text-white font-semibold transition duration-200"
                >
                  Email Me
                </a>
              </span>

              <div>
                <h1 className="text-xl font-bold text-white mb-4 ">
                  email me at: vishnubahadur788@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;