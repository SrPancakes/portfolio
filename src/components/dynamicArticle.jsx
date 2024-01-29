import { useProjectStore } from './store/projectStore.js'

export default function DynamicArticle() {
  const { currentArticle } = useProjectStore(state => state)

  return (
    <article className="flex flex-col gap-12 justify-start items-center">
      <h1 className="text-center px-12 text-2xl font-bold">{currentArticle.title}</h1>
      <p className="text-md px-2 min-h-[60vh]">{currentArticle.summary}</p>
    </article>
  )
}
