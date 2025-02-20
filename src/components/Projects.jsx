import React from "react";
import ToDoList from "../assets/projects/Todo-List.png";
import StudentDatabase from "../assets/projects/Books.jpg";
import Portfolio from "../assets/projects/portfolio.png";
import WeatherApp from "../assets/projects/weather app.png";
import JobPortal from "../assets/projects/job portal.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "To-do List Application",
      description: "A responsive To-Do List app allowing users to manage tasks efficiently.",
      image: ToDoList,
      tags: ["React", "Bootstrap", "Node.js", "MongoDB"],
      github: "https://github.com/JabinJabez/Todo-list-Application",
    },
    {
      id: 2,
      title: "Student Database Management",
      description: "A backend Student Database System handling records and authentication.",
      image: StudentDatabase,
      tags: ["Java", "Spring Boot", "PostgreSQL"],
      github: "https://github.com/JabinJabez/Student-database-management",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern portfolio showcasing skills and projects, built with React & Tailwind.",
      image: Portfolio,
      tags: ["React", "Tailwind CSS"],
      github: "https://github.com/JabinJabez/Portfolio",
    },
    {
      id: 4,
      title: "Weather App",
      description: "A responsive weather app showing real-time weather, temperature, and conditions.",
      image: WeatherApp,
      tags: ["React", "CSS"],
      github: "https://github.com/JabinJabez/Weather-app",
    },
    {
      id: 5,
      title: "Job Portal",
      description: "A responsive job portal app allowing users to browse job listings and apply for positions.",
      image: JobPortal,
      tags: ["React", "Tailwind CSS"],
      github: "https://github.com/JabinJabez/Job-Portal",
    },
  ];

  // Unique background gradients for each card
  const bgColors = [
    "bg-gradient-to-r from-pink-500 to-red-500",
    "bg-gradient-to-r from-purple-500 to-indigo-500",
    "bg-gradient-to-r from-blue-500 to-cyan-500",
    "bg-gradient-to-r from-green-500 to-lime-500",
    "bg-gradient-to-r from-yellow-500 to-orange-500",
  ];

  return (
    <section className="py-20 px-5 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 text-black lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white ${bgColors[index % bgColors.length]}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-white/30 text-sm px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-300 transition-all"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
