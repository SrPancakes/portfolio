import { useProjectStore } from './store/projectStore.js'

export default function FullProject() {
  const { currentProject } = useProjectStore(state => state)

  return (
    <article className="flex flex-col justify-start items-center">
      <img
        className="h-96"
        src={currentProject.image} 
        alt={currentProject.name}
      />
      <ul className="w-[42.7rem] py-6 flex flex-col gap-3 
        [&>li>span]:text-sm [&>li>span]:font-bold [&>li>span]:text-gray-700 [&>li>span]:dark:text-gray-400
        [&>li>span]:mr-3 [&>li]:ml-24 [&>li>span]:-ml-24">
        <h2 className="text-xl mb-2 text-gray-800 dark:text-gray-300 tracking-widest font-bold">
          {currentProject?.title}
        </h2>
        {currentProject?.client &&
          <li><span className="absolute">CLIENT: </span>{currentProject.client}</li>
        }
        {currentProject?.time &&
          <li><span className="absolute">TIME: </span>{currentProject.time}</li>
        }
        {currentProject?.role &&
        <li><span className="absolute">ROLE: </span>{currentProject.role}</li>
        }
        <li><span className="absolute">OUTCOME: </span>
          {currentProject?.outcome}
        </li>
      </ul>
      <div className="py-10 px-24 [&>p]:py-2 [&>p]:whitespace-pre-line">
      <p>
        {currentProject?.summary}
      </p>
      </div>
    </article>
  )
}
