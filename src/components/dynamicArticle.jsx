import { useProjectStore } from './store/projectStore.js'

export default function DynamicArticle() {
  const { currentArticle } = useProjectStore(state => state)

  return (
    <section class="min-h-[70vh] px-16">
      <article className="flex flex-col gap-12 justify-start items-center">
        <h1 className="text-center px-12 text-2xl font-bold">{currentArticle.title}</h1>
        <p className="text-md px-2 min-h-[60vh]">{currentArticle.summary}</p>
      </article>
      <a
        href={currentArticle.link}
        className="bg-white/5
          border dark:border-white/10 border-gray-300
          rounded-full
          inline-flex justify-center items-center gap-x-2
          py-1 px-2 md:py-2 md:px-4
          text-xs md:text-base
          transition
          hover:scale-110 hover:bg-white/10"
      >
        Read Article
      </a>
    </section>
  )
}
