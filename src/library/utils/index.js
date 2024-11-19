import axios from "axios";
import { toast } from "react-hot-toast";
import { EMPLOYMENT_TYPE, WORK_MODE } from "../constants";

const API_METHODS = {
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  GET: "GET",
};

function handleApiError(error) {
  console.error("API call failed:", error);
  let errorMessage = "An unexpected error occurred. Please try again later.";

  if (error.response) {
    errorMessage = error.response.data.message || errorMessage;
  } else if (error.request) {
    errorMessage =
      "No response received from the server. Please check your network connection.";
  } else {
    errorMessage = error.message;
  }
  toast.error(errorMessage);
}

export async function callApi(url, type, data) {
  let result;

  try {
    switch (type) {
      case API_METHODS.POST:
      case API_METHODS.PUT:
        result = await axios.post(url, data);
        break;
      case API_METHODS.DELETE:
        result = await axios.delete(url, { data });
        break;
      default:
        result = await axios.get(url, { params: data });
    }
    return result;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
}

export function getDimensionsFromAspectRatio(imgUrl) {
  function calculateAspectRatio(imgUrl) {
    let img = { width: 0, height: 0 };
    if (typeof window !== "undefined") {
      const img = new Image();
      img.src = imgUrl;
    }

    const aspectRatio = img.width / img.height;
    const tolerance = 0.1; // adjust this value to define what you consider "close to square"
    const closeToSquare = Math.abs(1 - aspectRatio) < tolerance;
    const between1And2 = aspectRatio >= 1 && aspectRatio <= 2;

    return { closeToSquare, between1And2 };
  }
  const aspectRatioInfo = calculateAspectRatio(imgUrl);

  if (aspectRatioInfo.closeToSquare) {
    return { height: "auto", width: "40%" };
  }
  if (aspectRatioInfo.between1And2) {
    return { height: "auto", width: "55%" };
  }
  return { width: "auto", height: "80%" };
}

export const getWorkModeDisplayText = (mode) => {
  switch (mode) {
    case "on-site":
      return WORK_MODE.ONSITE;
    case "remote":
      return WORK_MODE.REMOTE;
    case "hybrid":
      return WORK_MODE.HYBRID;
    default:
      return "Work mode not specified";
  }
};

export const getEmploymentTypeDisplayText = (employmentType) => {
  switch (employmentType) {
    case "fullTime":
      return EMPLOYMENT_TYPE.FULLTIME;
    case "partTime":
      return EMPLOYMENT_TYPE.PARTTIME;
    default:
      return "Employment type not specified";
  }
};

export const getValue = (key, value) => {
  switch (key) {
    case "experience":
      return value?.join(", ") || "N/A";
    case "noticePeriod":
      return value ? `${value} days` : "N/A";
    case "workMode":
      return getWorkModeDisplayText(value);
    case "employmentType":
      return getEmploymentTypeDisplayText(value);
    default:
      return value;
  }
};

export const currentDate = new Date();

export function getPostTimeString(postDateStr) {
  const postDate = new Date(postDateStr);

  const timeDifference = currentDate - postDate;

  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  const weeksDifference = Math.floor(daysDifference / 7);

  if (weeksDifference === 0) {
    return "Posted this week";
  }
  if (weeksDifference === 1) {
    return "Posted last week";
  }
  if (weeksDifference === 2) {
    return "Posted 2 weeks ago";
  }
  return "Re-posted 1 week ago";
}

export function generateJobDetailsRoute(selectedJobDetails, jobId) {
  if (!selectedJobDetails || !jobId) return null;
  const jobSpec = selectedJobDetails?.jdSpecification;
  let experienceRange = "0-to-1-year";

  const toKebabCase = (text) => text?.replace(/ /g, "-").toLowerCase();
  const designation = toKebabCase(jobSpec?.designation);
  const workMode = toKebabCase(jobSpec?.modeOfWork);
  const companyName = toKebabCase(selectedJobDetails?.companyName);

  const experienceLevels = jobSpec?.experience?.[0]
    ?.split(", ")
    .map((exp) => exp.split(" ")[0]);

  if (experienceLevels && experienceLevels[0] !== "Graduate") {
    const minExp = experienceLevels[0]?.split("-")[0];
    const maxExp = experienceLevels[experienceLevels.length - 1]?.split("-")[1];
    experienceRange = `${minExp}-to-${maxExp}-years`;
  }

  const location = jobSpec?.location
    ?.map((loc) => toKebabCase(loc.name))
    .join("-");

  return `/job-details/${companyName}-${designation}-${location}-${experienceRange}-${workMode}-${jobId}`;
}
