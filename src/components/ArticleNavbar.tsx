import NavbarCard from "./NavbarCard.tsx";
import ARTICLES from "../data/articles.json";

import { useProjectStore } from "./store/projectStore";

export default function Navbar() {
  const { currentArticle, setCurrentArticle } = useProjectStore(state => state)

  const handleClick = (project: (typeof ARTICLES[0])) => {
    setCurrentArticle(project);
    console.log(currentArticle);
  };

  return (
    <nav>
      <ul className="pl-12">
        <h2 className="text-md font-bold tracking-widest text-gray-700 dark:text-gray-400">
          NOW VIEWING
        </h2>
        <NavbarCard
          title={currentArticle.title}
          description={currentArticle.description}
        />
        <h2 className="mt-8 mb-4 text-md font-bold tracking-widest text-gray-700 dark:text-gray-400">
          UP NEXT
        </h2>
        <ul className="scrollbar-hide max-h-[48.5vh] overflow-y-scroll py-6">
          {ARTICLES.map((project: any) => {
            if (project.title === currentArticle.title) return null;
            return (
              <div key={project.title}>
                <NavbarCard
                  onclick={() => handleClick(project)}
                  title={project.title}
                  description={project.description}
                />
              </div>
            );
          })}
        </ul>
      </ul>
    </nav>
  );
}