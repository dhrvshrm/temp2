import { create } from "zustand";

const useRouteSkillLocationStore = create((set) => ({
  skill: null,
  setSkill: (skill) => set({ skill }),
  location: null,
  setLocation: (location) => set({ location }),
}));

export default useRouteSkillLocationStore;
