import { FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/project3.png';
import project4img from '../assets/project4.jpg';
import {FaReact} from 'react-icons/fa';







export const assets = {
    project1Img,
    project2Img,
    project3Img,
    project4img
  

}

export const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export const socialPlatforms = [
    { icon: FaTwitter, href: '#' },
    { icon: FaGithub, href: '#' },
    { icon: FaLinkedinIn, href: '#' },
    { icon: FaDribbble, href: '#' },
];

export const projects = [ 
    {
        id: 1,
        title: "Lion's Share",
        description: "A crypto exchange platform with attractive UI/UX built with vanilla JS",
        color: "primary",
        image: project1Img,
        link: 'https://vishnubahadur.github.io/Lion-s-Share/',
      
    },
    {
        id: 2,
        title: "ShootBall",
        description: "An aim training game to improve your reflexes and hand-eye coordination. Purely built using HTML, CSS, and JavaScript.",
        color: "accent",
        image:project2Img,
        link: 'https://vishnubahadur.github.io/ShootingGame/',
    },
    {
        id: 3,
        title: "GTA-V6 Landing",
        description: "Showing craze for games with cool animation and design, built using React, Tailwind CSS and Gsap",
        color: "secondary",
        image:project3Img,
        link: 'https://gtavi-lading-page.vercel.app/',
       
    },
    {
        id: 4,
        title: "Socially",
        description: "A chat application built using PHP and MySQL with real-time messaging and user authentication.",
        image:project4img,
        category: "WEB3",
        color: "primary",
      
        link: 'https://github.com/vishnubahadur/Socially',
        
    },
    
];

export const skills = [
    {
      id: 1,
      category:"front-end",
      title:"Javascript",
      icon:FaReact,
      progress:80,
    },
     {
      id: 2,
      category:"front-end",
      title:"React",
      icon:FaReact,
      progress:60,
    },
     {
      id: 3,
      category:"front-end",
      title:"Tailwind",
      icon:FaReact,
      progress:70,
    },
     {
      id: 4,
      category:"front-end",
      title:"CSS",
      icon:FaReact,
      progress:75,
    },
     
    

    {
        id: 5,
        category:"backend",
        title:"NodeJS",
        icon:FaReact,
        progress:65,
      },
      {
        id: 6,
        category:"backend",
        title:"Express",
        icon:FaReact,
        progress:50,
      },    
  
      {
        id: 8,
        category:"backend",
        title:"MySQL",
        icon:FaReact,
        progress:80,
      },
      {
        id: 11,
        category:"backend", 
        title:"REST API",
        icon:FaReact,
        progress:75,
      },
     
    
  ];