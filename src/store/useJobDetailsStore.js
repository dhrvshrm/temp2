import { create } from "zustand";

const useJobDetailsStore = create((set) => ({
  selectedJobDetails: null,
  setSelectedJobDetails: (jobDetails) =>
    set({ selectedJobDetails: jobDetails }),
  cachedJobDetails: {},
  setCachedJobDetails: (jobId, jobDetails) =>
    set((state) => ({
      cachedJobDetails: {
        ...state.cachedJobDetails,
        [jobId]: jobDetails,
      },
    })),
}));

export default useJobDetailsStore;
