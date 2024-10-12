import React, { useEffect } from 'react'
import AOS from "aos";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

function ExperienceCard() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  const Data = [
    {
      company: "Enblitz Technologies",
      join: "Jan 2024",
      end: "July 2024",
      positionedAt: "DevOps Engineer ",
      link: "https://enblitz.com/",
      internship: "DevOps",
      tags: [
        "Linux",
        "AWS",
        "Git",
        "GitHub",
        "Docker",
        "Jenkins",
        "Terraform",
        "Ansible",
        "Prometheus",
        "Grafana"
      ],
    },
    {
      company: "InfoLabz Technology Pvt Ltd.",
      join: "July 2023",
      end: "Aug 2023",
      positionedAt: "React.js Intern",
      link: "https://infolabz.in/",
      internship: "React.js",
      tags: [
        "HTML",
        "CSS",
        "Javascript",
        "React.js",
        "API"
      ],
    }
  ]

  const baseClass = "text-sm sm:text-md ";

  return (
    <div className="mt-12 lg:w-[80%] flex flex-col gap-4">
      {Data.map((experience) => (
        <Link target='_blank' to={experience.link} rel="noreferrer" data-aos="fade" data-aos-once="true" className="flex flex-col lg:flex-row group border-t border-transparent lg:hover:border-t lg:hover:border-sky-800/15 lg:hover:bg-sky-800/10 lg:hover:shadow-sm lg:hover:shadow-sky-600/10 rounded-md transition-all ease-linear gap-4 py-4 lg:p-4 cursor-pointer" key={experience.company}>
          <div className={`font-medium text-gray-600 flex shrink-0 min-w-52 gap-1 ${baseClass}`}>
            <span>{experience.join} &mdash; </span>
            <span>{experience.end}</span>
          </div>
          <div className="md:leading-none">
            <div className="flex flex-col gap-4">
              <p className={`text-gray-100 font-medium text-md transition-all ease-in lg:group-hover:text-cyan-500  cursor-pointer`}>
                <a href={experience.link} target="_blank" rel="noreferrer" className="flex items-center space-x-2">
                  {experience.positionedAt}
                  <span> </span>
                  <span className='text-xs'> &bull; </span>
                  <span className="">{experience.company}</span>
                  <span className="group-hover:-translate-y-1 group-hover:translate-x-1 -rotate-45 transition-all ease-in">
                    <HiOutlineArrowSmRight className="text-lg" />
                  </span>
                </a>
              </p>
              <p className={`font-medium text-gray-400 flex shrink-0 min-w-52 gap-1 ${baseClass} leading-relaxed`}>
                {experience.responsibility}
              </p>
              <div className="flex gap-2 flex-wrap">
                {experience.tags.map((label) => (
                  <Tag tag={label} key={label} size="text-sm" />
                ))}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function Tag({ tag, size }) {
  return (
    <span className={`flex ${size} bg-cyan-300/10 px-3 py-1 rounded-full text-cyan-500`}>
      {tag}
    </span>
  );
}

export default ExperienceCard;