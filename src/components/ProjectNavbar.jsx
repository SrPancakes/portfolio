import NavbarCard from "./NavbarCard.jsx";
import PROJECTS from "../data/projects.json";

import { useProjectStore } from "./store/projectStore";

export default function Navbar() {
  const { currentProject, setCurrentProject } = useProjectStore(state => state)

  const handleClick = (project) => {
    setCurrentProject(project);
    console.log(currentProject);
  };

  return (
    <nav>
      <ul className="pl-12">
        <h2 className="text-md font-bold tracking-widest text-gray-700 dark:text-gray-400">
          NOW VIEWING
        </h2>
        <NavbarCard
          title={currentProject.title}
          description={currentProject.description}
        />
        <h2 className="mt-8 mb-4 text-md font-bold tracking-widest text-gray-700 dark:text-gray-400">
          UP NEXT
        </h2>
        <ul className="scrollbar-hide max-h-[48.5vh] overflow-y-scroll py-6">
          {PROJECTS.map((project) => {
            if (project.title === currentProject.title) return null;
            return (
              <NavbarCard
                key={project.title}
                onclick={() => handleClick(project)}
                title={project.title}
                description={project.description}
              />
            );
          })}
        </ul>
      </ul>
    </nav>
  );
}
