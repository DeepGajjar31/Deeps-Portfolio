import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMotionValue, motion, animate } from "framer-motion";
import { FiCode, FiDownload } from 'react-icons/fi';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import Aos from "aos";
import Kubernetes from '../Images/Kubernetes.svg'

import AnimatedTag from '../Components/AnimatedTag';
import ContentContainer from '../Components/ContentContainer';
import SectionHeader from '../Components/SectionHeader'

import Header from '../Components/Header'
import Resume from "../Data/Resume.pdf"
import ExperienceCard from '../Components/ExperienceCard';
import Projects from '../Components/ProjectShowcase';
import Skills from '../Components/Skills';

const Home = () => {

  const COLORS_TOP = ["rgba(229, 229, 229, 0.4)"];

  const color = useMotionValue(COLORS_TOP[0]);
  const borderDark = useMotionValue("1px solid rgba(0, 0, 0, 0.1)");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });

    animate(borderDark, "1px solid rgba(0, 0, 0, 0.8)", {
      ease: "easeInOut",
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
    });

    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className='flex flex-col h-screen'>
        <Header />

        <motion.section
          className="relative grid flex-1 place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
          data-aos="fade"
          data-aos-once="true"
        >
          <div className="relative  flex flex-col items-center">
            <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm h-8">
              <AnimatedTag />
            </span>
            <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-6xl font-bold leading-tight text-transparent sm:text-7xl sm:leading-tight md:text-9xl md:leading-tight">
              Deep Gajjar
            </h1>

            <p className="my-6 max-w-xl text-center leading-relaxed md:text-lg md:leading-relaxed text-md">
              I&apos;m a dynamic web developer, DevOps Engineer and UI/UX designer. I have completed my Computer Science Engineering, helping brands to bring their products to life.
            </p>
          </div>
          <div className="absolute inset-0 z-0">
            <Canvas>
              <Stars radius={50} count={2500} factor={4} fade speed={2} />
            </Canvas>
          </div>
          <div className="flex justify-center z-0 md:text-md md:leading-relaxed text-sm">
            <div className="justify-center flex my-4 gap-2 items-center backdrop-blur-lg w-fit py-1 px-4 rounded-full bg-gray-50/5 border-t border-gray-50/10 hover:scale-105 transition-all ease-linear">
              <img className="w-5 h-5 rounded-full" src={Kubernetes} alt="Kubernetes" />
              <a href="https://kubernetes.io/" target=" _blank">
                Currently working on Kubernetes
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-3 pt-7 z-0">
            <a target=" _blank" href={Resume} >
              <button type="primary" className='flex items-center py-2 px-4 gap-2 hover:text-gray-100 text-md sm:text-lg rounded-lg z-10 text-gray-100  bg-gradient-to-tr from-cyan-800 to-sky-800 hover:bg-gradient-to-tr hover:from-cyan-900 hover:to-sky-900 border-t border-cyan-700  hover:border-cyan-600 hover:shadow-md hover:shadow-gray-900/60 transistion-all ease-in'>
                <FiDownload />
                Resume
              </button>
            </a>
            <button type="primary" onClick={() => scrollToSection("projects")} className='flex items-center py-2 px-4 gap-2 hover:text-gray-100 text-md sm:text-lg rounded-lg z-10 text-gray-100  text-sm md:text-md bg-gradient-to-tr from-cyan-800 to-sky-800 hover:bg-gradient-to-tr hover:from-cyan-900 hover:to-sky-900 border-t border-cyan-700  hover:border-cyan-600 hover:shadow-md hover:shadow-gray-900/60 font-medium transistion-all ease-in'>
              <FiCode />
              Project
            </button>
          </div>
        </motion.section>
      </div>

      <ContentContainer name="about">
        <SectionHeader id={1}>About Me</SectionHeader>
        <div className="mt-12 flex flex-col gap-4 text-gray-400 leading-relaxed sm:leading-relaxed text-md">
          <p className="">
            Hey there, I&apos;m Deep Gajjar. My journey into web development began
            three years ago when I joined a startup. As a frontend developer,
            I crafted user-accessible interfaces and delved into web development intricacies.
            I&apos;ve also explored DevOps practices, integrating tools like Docker, Jenkins, and
            Prometheus to enhance our development pipeline and ensure seamless deployments.
          </p>
          <p>
            Fast forward to today, I&apos;ve become a passionate Full Stack Web Developer and DevOps Enginner.
            Specializing in scalable, secure web applications, I solve real-world problems through
            innovative solutions. My focus on intuitive UI/UX design bridges functionality and aesthetics.
            Additionally, my experience with DevOps practices, including Docker, Jenkins, and
            Prometheus, streamlines development and deployment processes. This ensures that every project
            I undertake is robust, efficient, and leaves a lasting impression.
          </p>
          <p>
            When I&apos;m not immersed in lines of code, you&apos;ll often find
            me buried in the pages of a good book or catching up with friends
            over a cup of coffee. And on those rare occasions when I&apos;m not
            at my desk, you might spot me out for a quick run, embracing the
            freedom of the open road.
          </p>
        </div>
      </ContentContainer>

      <ContentContainer name="experience">
        <SectionHeader id={2}>Where I’ve Worked</SectionHeader>
        <ExperienceCard />
      </ContentContainer>

      <ContentContainer name="projects">
        <SectionHeader id={3}>Some Things I’ve Built</SectionHeader>
        <Projects />
        <Link
          to="/projects"
          className="mt-4 text-cyan-500 inline-flex font-medium items-center gap-1 group hover:underline hover:underline-offset-4 text-sm md:text-base transition-all ease-in"
        >
          View All Projects{" "}
          <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 -rotate-45 transition-all ease-in">
            <HiOutlineArrowSmRight className="text-xl" />
          </span>
        </Link>
      </ContentContainer>
      
      <ContentContainer name="skills">
        <SectionHeader id={4}>Skills</SectionHeader>
        <Skills />
      </ContentContainer>

      <ContentContainer name="contact">
        <SectionHeader id={5}>Let&apos;s Connect</SectionHeader>
        <p className="mt-12  gap-4 text-gray-400 leading-relaxed sm:leading-relaxed text-md">
          Thank you for exploring my portfolio! If you&apos;re interested in
          collaborating, have any questions, or just want to say hello, feel
          free to reach out. I&apos;m always open to new opportunities and
          conversations.
        </p>
        <a href="mailto:deepgajjar1238@gmail.com" className="flex mt-4 mb-36">
          <button type="secondary" className='flex items-center py-2 px-4 gap-2 hover:text-gray-100 text-md sm:text-lg rounded-lg z-10 text-gray-100  text-sm md:text-md bg-gradient-to-tr from-cyan-800 to-sky-800 hover:bg-gradient-to-tr hover:from-cyan-900 hover:to-sky-900 border-t border-cyan-700  hover:border-cyan-600 hover:shadow-md hover:shadow-gray-900/60 font-medium transistion-all ease-in'>Send a Message</button>
        </a>
      </ContentContainer>
      <footer className="flex flex-col justify-center items-center py-8  border-t border-gray-600 bg-gray-950">
        <p className="text-center text-xs leading-5 w-[70%] sm:text-sm text-gray-600 pb-2">
          Thank you for visiting my portfolio website! Your interest and time
          are greatly appreciated.{" "}
        </p>
        <p className="font-semibold text-sm text-gray-600 flex items-center gap-1">
          {" "}
          Made from{" "}
          <span className="inline-flex items-start text-red-500">
            <FaHeart />
          </span>{" "}
          by Deep
        </p>
      </footer>
    </>
  )
}

export default Home