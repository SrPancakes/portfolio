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
        <footer className="flex gap-x-4 items-start justify-start mt-4">
          {currentProject?.github && (
            <a
              href={currentProject?.github}
              className="bg-white/5
                border dark:border-white/10 border-gray-300
                rounded-full
                inline-flex justify-center items-center gap-x-2
                py-1 px-2 md:py-2 md:px-4
                text-xs md:text-base
                transition
                hover:scale-110 hover:bg-white/10"
            >
            <svg 
              className='size-7'
              viewBox="0 0 256 250" 
              fill="currentColor" 
              preserveAspectRatio="xMidYMid"
            >
              <path 
                d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 
                  104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 
                  0-3.052-.12-13.135-.174-23.83-35.61 
                  7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 
                  12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 
                  13.911 37.249 10.64 1.149-8.272 4.466-13.92 
                  8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 
                  5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 
                  0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 
                  10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 
                  35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 
                  13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 
                  4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 
                  0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 
                  256 57.307 198.691 0 128.001 0Zm-80.06 
                  182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655
                  1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 
                  1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566
                  1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 
                  7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 
                  2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 
                  3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 
                  3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 
                  1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 
                  3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193
                  1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 
                  1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 
                  2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 
                  1.514-.263 2.868.356 3.061 1.403Z" 
                fill="currentColor"
              />
            </svg>
            Source Code
            </a>
          )
          }
          <a
            href={currentProject?.link}
            className="bg-white/5
              border dark:border-white/10 border-gray-300
              rounded-full
              inline-flex justify-center items-center gap-x-2
              py-1 px-2 md:py-2 md:px-4
              text-xs md:text-base
              transition
              hover:scale-110 hover:bg-white/10"
          >
          <svg
            className="size-7"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <>
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
              <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
              <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
              <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
              <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
              <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
              <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
              <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
              <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
            </>
          </svg>
            Live Demo
          </a>
        </footer>
      </ul>
      <div className="py-10 px-24 [&>p]:py-2 [&>p]:whitespace-pre-line">
      <p>
        {currentProject?.summary}
      </p>
      </div>
    </article>
  )
}
