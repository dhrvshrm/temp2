import { API_METHODS, API_URL, JOB_SOURCE } from "@/src/library/constants";
import { callApi } from "@/src/library/utils";

export async function getJobDetailedViewService(jobId) {
  if (!jobId) return null;

  const requestData = {
    source: JOB_SOURCE,
  };

  try {
    const response = await callApi(
      `${API_URL.JOBS}/${jobId}`,
      API_METHODS.GET,
      requestData,
    );
    const { jobDescriptions } = response?.data;
    return jobDescriptions?.[0] || null;
  } catch (error) {
    console.error("Error fetching job details:", error);
    return null;
  }
}

export const getExpertiseSkillListService = async () => {
  const searchFilters = await callApi(API_URL.SEARCH_FILTERS, API_METHODS.GET, {
    filterTypes: "expertise,skill",
  });

  const { filters } = searchFilters?.data || {};

  const updatedExpertiseList = filters?.expertise?.map((item) => ({
    ...item,
    label: item.term,
    value: item.id,
  }));

  const updatedSkillsList = filters?.skills?.map((item) => ({
    ...item,
    label: item.skillName,
    value: item.id,
  }));

  return {
    expertiseList: updatedExpertiseList,
    skillList: updatedSkillsList,
  };
};

export async function getJobsService(currentPage, filters) {
  let queryParams = {
    source: JOB_SOURCE,
    page: currentPage,
    pageSize: 10,
  };

  const cleanedFilters = Object.fromEntries(
    Object.keys(filters)
      .filter((key) => filters[key] != null && filters[key] !== "")
      .map((key) => [key, filters[key]]),
  );

  if (Object.keys(cleanedFilters).length > 0) {
    if (cleanedFilters.skills) {
      cleanedFilters.skills = cleanedFilters.skills.join(",");
    }
    if (cleanedFilters.experience) {
      cleanedFilters.experience = cleanedFilters.experience.join(",");
    }
    queryParams = { ...queryParams, ...cleanedFilters };
  }

  const data = await callApi(API_URL.JOBS, API_METHODS.GET, queryParams);
  return data;
}

export async function getClientDetailsService() {
  try {
    const response = await callApi(API_URL.GET_CLIENT_DETAILS);
    return response.data;
  } catch (error) {
    console.error("Error fetching client details:", error);
    return null;
  }
}
