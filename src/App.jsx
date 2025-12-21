import { useState } from 'react'
import './App.css'
import profile from './assets/headshot.jpg'
import linkedlnLogo from './assets/linkedln-logo.png'
import githubLogo from './assets/github-logo.png'
import instaLogo from './assets/insta-logo.png'
import spotifybackground from './assets/spotiMe.png'
import snake from './assets/snakeGame.jpg'
import pythonlogo from './assets/python.png'
import cprogramminglogo from './assets/letter-c.png'
import javalogo from './assets/java.png'
import javascriptlogo from './assets/javascript.png'
import htmlcsslogo from './assets/html-5.png'
import gitlogo from './assets/git.png'
import fastapilogo from './assets/fastapi.png'
import tailwindlogo from './assets/tailwind.png'
import reactlogo from './assets/react.png'
import pandaslogo from './assets/pandas.png'
import numpylogo from './assets/numpy.png'
import sqlLogo from './assets/sql.png'

function App() {

  return (
    <>
      <div className="fixed top-0 left-0 bg-black/70 backdrop-blur-md text-white z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-m px-3 py-1 rounded-md bg-purple-600 hover:bg-purple-700 transition"
          >
            Back to Top
          </button>
        </div>
      </div>

      <div className="fixed top-0 right-0 bg-black/70 backdrop-blur-md text-white z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

          <a
            href="mailto:ductranphan@cmail.carleton.ca"
            className="text-m px-3 py-1 rounded-md bg-purple-600 hover:bg-purple-700 transition inline-block"
          >
            Contact Me
          </a>

        </div>
      </div>


      <div className=" justify-center bg-black p-6 mt-8">
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className='profile-column flex flex-col items-center gap-2'>
            <img src={profile} className="profile" alt="Duc Tran Phan" />

            <span className="text-left text-purple-500">Ottawa, Ontario, CA</span>

            <div className="flex gap-2 items-center">
              <a href="https://www.linkedin.com/in/ductranphan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center p-1 rounded transition duration-150 hover:scale-105">
                <img className="w-10 h-10 bg-transparent object-contain transition duration-150 dark:md:hover:bg-fuchsia-600" alt="LinkedIn" src={linkedlnLogo} />
              </a>
              <a href="https://github.com/ductranphan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center p-1 rounded transition duration-150 hover:scale-105">
                <img className="w-10 h-10 bg-transparent object-contain transition duration-150 dark:md:hover:bg-fuchsia-600" alt="GitHub" src={githubLogo} />
              </a>
              <a href="https://instagram.com/ductranphan06" target="_blank" rel="noopener noreferrer" className="inline-flex items-center p-1 rounded transition duration-150 hover:scale-105">
                <img className="w-10 h-10 bg-transparent object-contain transition duration-150 dark:md:hover:bg-fuchsia-600" alt="Instagram" src={instaLogo} />
              </a>
            </div>
          </div>
          <div className='App_text flex-1 text-left'>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-2">
              Duc Tran Phan
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 mt-2">
              Aspiring Software Engineer | Data Scientist
            </h2>

            <p className="text-md text-white mt-4 max-w-xl">
              <span className="text-purple-500">3.78/4.00 GPA</span> - Dean's Honour List
            </p>

            <p className="text-md text-gray-300 mt-4 max-w-xl">
              Second year Computer Science, specialized in AI/Machine Learning stream, student at <span className="text-purple-500">Carleton University</span>. Passionate about leveraging technology to solve real-world problems and eager to contribute to innovative projects in software engineering and data science.
              In my free time, I enjoy working out, training martial arts, reading books, and exploring new technologies.
            </p>

          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mx-auto p-6">
        <Experience />
        <Projects />
        <Skills />
      </div>
    </>
  );
}

function Experience() {
  return (
    <>
      <div className="text-left mt-8">
        <h2 className="bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent text-4xl font-semibold">Experience</h2>
        <hr className="my-4 border-gray-700"></hr>
        <ul className=" mt-4 space-y-4 text-gray-300">
          <li>
            <div className="flex items-start justify-between gap-6">

              <div className="flex-1">
                <h3 className="text-lg font-medium text-purple-500">Software Developer at FPT Corporation</h3>
                <span className="font-medium text-white mb-5">Internship | Remote</span>
              </div>

              <div className="w-36 flex flex-col items-center text-sm text-gray-400">
                <span className="font-medium text-white">May 2025 — Sep 2025</span>
                <span className="font-medium text-white mb-5">Ho Chi Minh, Vietnam</span>
              </div>

            </div>
            <p className="experience-list text-gray-300 mb-3">- Collaborated on a development team to implement and customize modules within the Odoo ERP system, enhancing automation and efficiency across business workflows by 30%.</p>
            <p className="experience-list text-gray-300 mb-3">- Applied existing knowledge to practical tasks and actively contributed to a small-scale ERP project in the footwear and fashion industries, resulting in improved inventory tracking and order management</p>
            <p className="experience-list text-gray-300 mb-3">- Gained hands-on experience with the full software development lifecycle by completing project deliverables, fixing bugs, and optimizing code, which reduced system errors and improved processing speed</p>
          </li>
        </ul>
      </div>
    </>
  );
}

function Projects() {

  //COPY THIS PART WHEN MAKE A NEW PROJECT
  const project1 = [
    {
      title: "SpotiMe",
      tags: ["Python", "Pandas", "REST API", "Streamlit", "JSON"],
      date: "Sep 2025 — Oct 2025",
      image: spotifybackground,
      codeUrl: "https://spotime.streamlit.app/",
      details: [
        "- Personalized Spotify analytics dashboard that visualizes your listening habits, top tracks, and favorite artists over various time frames",
        "- Connects to the Spotify API and features a local JSON rating system to help you revisit and rate past albums and songs"
      ]
    }
  ]
  //END OF COPY PRETTY EASY

  const project2 = [
    {
      title: "Snake Game",
      tags: ["Java", "Swing"],
      date: "Jan 2024 — Feb 2024",
      image: snake,
      codeUrl: "https://github.com/ductranphan/snakegame",
      details: [
        "- Classic Snake Game built using Java and Swing, featuring smooth controls and responsive design for an engaging user experience",
        "- Implemented game mechanics such as score tracking and collision detection to enhance gameplay"
      ]
    }
  ]

  const projects = [...project1, ...project2];

  return (
    <div className="text-left mt-16">
      <h2 className="bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent text-4xl font-semibold">Projects</h2>
      <hr className="my-4 border-gray-700" />

      {/* GRID 1*/}
      <div className="first-row">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
}


function ProjectCard({ data }) {
  return (
    <div
      className="rounded-2xl overflow-hidden bg-gradient-to-br 
      from-gray-900 to-black shadow-xl border border-white/10 
      hover:scale-[1.02] hover:shadow-2xl hover:border-white/20 
      transition duration-300"
    >
      {/* Top Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-purple-500 mb-1">{data.title}</h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4 mb-3">
          {data.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full bg-gray-800/70 
            border border-gray-600 text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Details */}
        {data.details.map((detail, idx) => (
          <p key={idx} className="text-gray-300 mb-3">{detail}</p>
        ))}

        {data.codeUrl && (
          <a href={data.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center p-1 rounded transition duration-150 hover:scale-105">
            <img className="w-8 h-8 bg-transparent object-contain transition duration-150 dark:md:hover:bg-fuchsia-600" alt="GitHub" src={githubLogo} />
          </a>
        )}

      </div>
    </div>
  );
}

function Skills() {
  const skills = [
    { name: "Python", image: pythonlogo },
    { name: "Java", image: javalogo },
    { name: "C", image: cprogramminglogo },
    { name: "JavaScript", image: javascriptlogo },
    { name: "HTML/CSS", image: htmlcsslogo },
    { name: "SQL (PostgreSQL)", image: sqlLogo },
    { name: "Git/GitHub", image: gitlogo },
    { name: "Fast API", image: fastapilogo },
    { name: "Tailwind", image: tailwindlogo },
    { name: "React", image: reactlogo },
    { name: "Pandas", image: pandaslogo },
    { name: "NumPy", image: numpylogo },
  ];

  return (
    <>
      <div className="text-left mt-16">
        <h2 className="text-4xl font-semibold text-white">Technical Skills</h2>
        <hr className="my-4 border-gray-700" />
      </div>

      <div className="first-row">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-8">
          {skills.map((skill, index) => (
            <SkillsCard key={index} data={skill} />
          ))}
        </div>
      </div>

      <br>
      </br>
      <br>
      </br>

      <div className="flex justify-center items-center">
        <span className="text-s px-3 py-1 rounded-full text-gray-300">
          Made using <span className='text-purple-500'>React.js</span> and <span className='text-purple-500'>Tailwind CSS</span>, depolyed on <span className='text-purple-500' >Vercel</span>
        </span>

        <a href="https://github.com/ductranphan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center p-1 rounded transition duration-150 hover:scale-105">
          <img className="w-8 h-8 bg-transparent object-contain transition duration-150 dark:md:hover:bg-fuchsia-600" alt="GitHub" src={githubLogo} />
        </a>
      </div>

    </>
  );
}

function SkillsCard({ data }) {
  return (
    <>
      <div className="rounded-2xl overflow-hidden bg-gradient-to-br 
      from-gray-900 to-black shadow-xl border border-white/10 
      hover:scale-[1.02] hover:shadow-2xl hover:border-white/20 
      transition duration-300 p-4 flex flex-col items-center text-center h-full">

        {/* image on top, name below */}
        {data.image ? (
          <img
            src={data.image}
            alt={data.name}
            className="w-14 h-14 object-cover rounded-md mb-3"
          />
        ) : (
          <div className="w-14 h-14 rounded-md bg-transparent mb-3" />
        )}

        <div className="font-medium text-sm mt-1 text-white">{data.name}</div>
      </div>
    </>
  )
}

export default App
export { Experience }
export { Projects }


