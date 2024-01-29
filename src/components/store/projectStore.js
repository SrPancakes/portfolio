import { create } from "zustand";
import PROJECTS from "../../data/projects.json";
import ARTICLES from "../../data/articles.json";

export const useProjectStore = create((set) => ({
  currentProject: PROJECTS[0],
  setCurrentProject: (currentProject) => set({ currentProject }),
  currentArticle: ARTICLES[0],
  setCurrentArticle: (currentArticle) => set({ currentArticle }),
}))
