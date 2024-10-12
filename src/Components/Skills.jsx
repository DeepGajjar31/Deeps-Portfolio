import React from 'react';
import { Link } from 'react-router-dom';

import ReactJS from '../Images/React.svg';
import NodeJS from '../Images/NodeJS.svg';
import JS from '../Images/JS.svg';
import HTML from '../Images/HTML.svg';
import CSS from '../Images/CSS.svg';
import Firebase from '../Images/Firebase.svg';
import MongoDB from '../Images/MongoDB.svg';
import MySQL from '../Images/MySQL.svg';

import RedHat from '../Images/RedHat.svg';
import AWS from '../Images/AWS.svg';
import Docker from '../Images/Docker.svg';
import Kubernetes from '../Images/Kubernetes.svg';
import Git from '../Images/Git.svg';
import GitHub from '../Images/GitHub.svg';
import Jenkins from '../Images/Jenkins.svg';
import Terraform from '../Images/Terraform.svg';
import Ansible from '../Images/Ansible.svg';

import SonarQube from '../Images/Sonarqube.svg';
import Prometheus from '../Images/Prometheus.svg';
import Grafana from '../Images/Grafana.svg';

const images1 = [
  { id: 1, img: ReactJS, url: 'https://react.dev/' },
  { id: 2, img: NodeJS, url: 'https://nodejs.org/' },
  { id: 3, img: HTML },
  { id: 4, img: CSS },
  { id: 5, img: JS },
  { id: 6, img: Firebase },
  { id: 7, img: MongoDB },
  { id: 8, img: MySQL },

  { id: 9, img: RedHat },
  { id: 10, img: AWS },
  { id: 11, img: Docker },
  { id: 12, img: Kubernetes },
  { id: 13, img: Git },
  { id: 14, img: GitHub },
  { id: 15, img: Jenkins },
  { id: 16, img: Terraform },
  { id: 17, img: Ansible },
  { id: 18, img: SonarQube },
  { id: 19, img: Prometheus },
  { id: 20, img: Grafana },
];

function Skills() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-10 overflow-hidden z-20">
      <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
        {images1.map((image) => (
          <Link
            key={image.id}
            to={image.url}
            target="_blank"
            className="relative group flex justify-center items-center border border-cyan-950 p-3  lg:p-4 select-none w-14 h-14 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-xl bg-cyan-300/10 opacity-100 transform scale-100 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            <div className="absolute inset-0 bg-cyan-500 filter blur-[18px] opacity-0 group-hover:opacity-50 transition-opacity duration-500 ease-in-out will-change-opacity -z-10"></div>
            <img
              src={image.img}
              alt={`Image ${image.id}`}
              className="w-full h-full object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Skills;
