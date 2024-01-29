import NavbarCard from './NavbarCard.tsx'

import PROJECTS from '../data/projects.json'

import { useState } from 'react'

export default function Navbar() {

const activeProject = PROJECTS[0]

  return (
    <nav>
      <ul className="pl-12">
        <h2 
          className="text-md font-bold tracking-widest text-gray-700 dark:text-gray-400"
        >
          NOW VIEWING
        </h2>
        <NavbarCard 
          title={activeProject.title}
          description={activeProject.description}
        />
        <h2 
          className="mt-8 mb-4 text-md font-bold tracking-widest text-gray-700 dark:text-gray-400"
        >
          UP NEXT
        </h2>
        <ul className="scrollbar-hidden max-h-[48.5vh] overflow-y-scroll py-6">
          {
            PROJECTS.map((project) => {
              return (
                <NavbarCard key={project.title} 
                  onclick={() => console.log("clicked")}
                  title={project.title} 
                  description={project.description}
                />
              )
            })
          }
        </ul>
      </ul>
    </nav>
  )
}
