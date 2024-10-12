import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiOutlineExternalLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { Tag } from '../Components/ExperienceCard';
import { project } from '../Data/project-data';

function Projects() {

  const iconClass =
    "text-gray-400 hover:text-cyan-500 cursor-pointer text-sm md:text-base hover:scale-110 transition-all ease-in ";

  return (
    <div className="py-2 rounded-lg overflow-hidden px-6 md:px-12">
      <Link
        to="/"
        className="mt-12 text-cyan-500 inline-flex items-center gap-1 group hover:underline hover:underline-offset-4 md:text-md font-semibold transition-all ease-in text-md"
      >
        <span className="group-hover:-translate-x-0.5 transition-all ease-in">
          <HiArrowLeft />
        </span>
        <span className="transition-all ease-in">Back to Home</span>
      </Link>
      <h2 className='text-gray-100 font-bold md:text-4xl text-2xl mb-12 mt-4'>All Projects</h2>
      <div className="overflow-x-auto rounded-lg mb-24">
        <table className="text-gray-100 table-auto w-full ">
          <thead className="text-sm bg-gray-300/10 divide-y divide-gray-800">
            <tr className="">
              <th className="p-3 tracking-wide text-left w-1/6 md:w-1/12">
                Year
              </th>
              <th className="p-3 tracking-wide text-left md:w-1/6">Project</th>
              <th className="p-3 tracking-wide text-left md:w-1/6 hidden md:table-cell">
                Made at
              </th>
              <th className="p-3 tracking-wide text-left md:w-1.5/6 hidden md:table-cell">
                Built with
              </th>
              <th className="p-3 tracking-wide text-left w-2/12">Links</th>
            </tr>
          </thead>
          <tbody>
            {project.map((data) => (
              <tr
                className="text-left border-b border-gray-800 hover:bg-gray-600/10"
                key={data.projectName}
              >
                <td className="p-3 text-gray-400 text-sm py-4">{data.year}</td>
                <td className="p-3 text-gray-100  font-semibold text-sm md:text-base ">
                  <a
                    href={data.githubLink}
                    target=" _blank"
                    className="hover:text-cyan-500 transition-all ease-in hover:underline-offset-4 hover:underline cursor-pointer"
                  >
                    {" "}
                    {data.projectName}{" "}
                  </a>
                </td>
                <td className="p-3 py-8 text-gray-400 hidden md:table-cell text-sm">
                  {data.madeAt}
                </td>
                <td className="p-3 text-gray-300 hidden md:table-cell max-w-24 text-sm">
                  <span className="inline-flex flex-wrap gap-2">
                    {data.builtWith.map((tag) => (
                      <Tag
                        key={tag} // Assuming 'tag' is unique
                        tag={tag}
                        size="text-xs font-medium"
                      />
                    ))}
                  </span>
                </td>
                <td className="p-3 text-gray-300 ">
                  {" "}
                  <span className="inline-flex items-center gap-4 sm:gap-4 flex-row ">
                    {data.webLink && (
                      <span className={`${iconClass}`}>
                        <a href={data.webLink} target=" _blank">
                          <HiOutlineExternalLink />
                        </a>
                      </span>
                    )}
                    {data.githubLink && (
                      <span className={`${iconClass}`}>
                        <a href={data.githubLink} target=" _blank">
                          <FiGithub />
                        </a>
                      </span>
                    )}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Projects;