import { useProjectStore } from './store/projectStore.js'

const { currentArticle } = useProjectStore(state => state)

export const DynamicArticle = require(`${currentArticle.src}`).default
