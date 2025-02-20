import React from "react";
import HTML from "../assets/skills/html.png";
import CSS from "../assets/skills/css-3.png";
import Javascript from "../assets/skills/js.png";
import ReactLogo from "../assets/skills/atom.png";
import Angular from "../assets/skills/programing.png";
import Bootstrap from "../assets/skills/bootstrap.png";
import TailwindCSS from "../assets/skills/tailwind-css.png";
import Java from "../assets/skills/java.png";
import Python from "../assets/skills/python.png";
import NodeJS from "../assets/skills/node-js.png";
import ExpressJS from "../assets/skills/express-js.png";
import SpringBoot from "../assets/skills/spring-boot.png";
import Git from "../assets/skills/git.png";
import GitHub from "../assets/skills/github-brands-solid.svg";
import MongoDB from "../assets/skills/mongo-db.png";
import MySQL from "../assets/skills/mysql.png";
import PostgreSQL from "../assets/skills/postgresql.png";
import VsCode from "../assets/skills/visual-studio-code.png";
import Intellij from "../assets/skills/intellij.png";
import netlify from "../assets/skills/netlify.webp";

const skillCategories = {
  Frontend: [
    { img: HTML, name: "HTML" },
    { img: CSS, name: "CSS" },
    { img: Javascript, name: "JavaScript" },
    { img: ReactLogo, name: "React" },
    { img: Angular, name: "Angular" },
    { img: Bootstrap, name: "Bootstrap" },
    { img: TailwindCSS, name: "Tailwind CSS" },
  ],
  Backend: [
    { img: Java, name: "Java" },
    { img: Python, name: "Python" },
    { img: NodeJS, name: "Node.js" },
    { img: ExpressJS, name: "Express.js" },
    { img: SpringBoot, name: "Spring Boot" },
  ],
  Others: [
    { img: Git, name: "Git" },
    { img: GitHub, name: "GitHub" },
    { img: MongoDB, name: "MongoDB" },
    { img: MySQL, name: "MySQL" },
    { img: PostgreSQL, name: "PostgreSQL" },
    { img: Intellij, name: "IntelliJ" },
    { img: VsCode, name: "VS Code" },
    { img: netlify, name: "Netlify" },
  ],
};

const About = () => {
  return (
    <section className="about px-6 sm:px-12 md:px-20 lg:px-52 py-10 pt-24 flex flex-col">
      {/* About Me Section */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white pb-5">About Me</h2>
        <p className="text-sm sm:text-base md:text-lg text-justify text-white font-semibold leading-relaxed px-2 sm:px-6">
          I am a passionate Frontend Developer with a strong foundation in building
          responsive, user-friendly web applications. With expertise in HTML, CSS, JavaScript,
          and frameworks like Angular and React, I specialize in creating interactive and dynamic
          interfaces that offer exceptional user experiences. I am skilled in using Tailwind CSS
          and Bootstrap to design beautiful, mobile-friendly layouts, and I have experience
          working with version control systems like Git to manage projects effectively.
        </p>
      </div>

      {/* Skill Categories in Glass Cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div 
            key={category} 
            className="glass-card p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg w-full sm:w-64 md:w-80 lg:w-96"
          >
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 text-center">{category}</h3>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center">
                  <img src={skill.img} alt={skill.name} className="w-10 h-10 md:w-12 md:h-12" />
                  <p className="text-white text-xs md:text-sm mt-2">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
