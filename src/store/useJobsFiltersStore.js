import { create } from "zustand";
import { getExpertiseSkillListService } from "../api/services";

const useJobFiltersStore = create((set) => ({
  expertiseList: [],
  skillList: [],
  isDataFetched: false,

  fetchFiltersData: async () => {
    const { expertiseList, skillList } = await getExpertiseSkillListService();
    set({
      expertiseList,
      skillList,
      isDataFetched: true,
    });
  },
}));

export default useJobFiltersStore;
