import { FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import brightMatterImg from '../assets/Brigthmatter.png'
import brightImg from '../assets/bright.png'
import profileImg from '../assets/profile.avif';
import project1Img from '../assets/project1.avif';
import project2Img from '../assets/project2.avif';
import project3Img from '../assets/project3.avif';
import project4Img from '../assets/project4.avif';
import project5Img from '../assets/project5.avif';
import project6Img from '../assets/project6.avif';
import project7Img from '../assets/project7.avif';
import {FaReact} from 'react-icons/fa';







export const assets = {
    brightMatterImg,
    brightImg,
    profileImg,
    project1Img,
    project2Img,
    project3Img,
    project4Img,
    project5Img,
    project6Img,
    project7Img,
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
        title: "NeoCommerce Platform",
        description: "Next-gen e-commerce with AR product visualization",
        category: "WEB APP",
        color: "primary",
        image: project1Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 2,
        title: "Fitness AR Companion",
        description: "AI-powered workout tracking with motion capture",
        category: "MOBILE APP",
        color: "accent",
        image:project2Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 3,
        title: "Data Visualization Suite",
        description: "Real-time 3D data representation and analytics",
        category: "DASHBOARD",
        color: "secondary",
        image:project3Img,
        link: '#',
        youtube: '#'
    },
    {
        id: 4,
        title: "NFT Marketplace",
        description: "Decentralized platform for digital collectibles",
        category: "WEB3",
        color: "primary",
        image:project4Img,
        link: '#',
        youtube: '#'
    },
    
];

export const skills = [
    {
      id: 1,
      category:"front-end",
      title:"Javascript",
      icon:FaReact,
      progress:60,
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
      progress:60,
    },
     {
      id: 4,
      category:"front-end",
      title:"CSS",
      icon:FaReact,
      progress:60,
    },
     
    

    {
        id: 5,
        category:"backend",
        title:"NodeJS",
        icon:FaReact,
        progress:60,
      },
      {
        id: 6,
        category:"backend",
        title:"Express",
        icon:FaReact,
        progress:60,
      },    
      {
        id: 7,
        category:"backend",
        title:"MongoDB",
        icon:FaReact,
        progress:60,
      },
      {
        id: 8,
        category:"backend",
        title:"MySQL",
        icon:FaReact,
        progress:60,
      },
      {
        id: 11,
        category:"backend", 
        title:"REST API",
        icon:FaReact,
        progress:60,
      },
     
    
  ];