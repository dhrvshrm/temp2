/* SERVER API CONSTANTS */

const API_ENDPOINTS = {
  JOBS: "/jobs",
  GET_CLIENT_DETAILS: "/get-client-details",
};

const apiGatewayUrls = {
  tgsProductApi: process.env.NEXT_PUBLIC_TGS_PRODUCT_API,
  hqBackendApi: process.env.NEXT_PUBLIC_HQ_BACKEND_API,
  clientDashboardApi: process.env.NEXT_PUBLIC_CLIENT_DASHBOARD_API,
};

const apiUrlFormatter = (domainUrl, resourcePath) =>
  `${domainUrl}${resourcePath}`;

export const API_URL = {
  GET_CLIENT_DETAILS: apiUrlFormatter(
    apiGatewayUrls.hqBackendApi,
    API_ENDPOINTS.GET_CLIENT_DETAILS,
  ),
  LOCATIONS: apiUrlFormatter(apiGatewayUrls.hqBackendApi, "/locations"),
  SEARCH_FILTERS: apiUrlFormatter(
    apiGatewayUrls.clientDashboardApi,
    "/search-filters",
  ),
  JOBS: apiUrlFormatter(apiGatewayUrls.hqBackendApi, "/job-descriptions"),
};

export const API_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

/* ROUTES CONSTANTS */

export const ROUTES = {
  JOBS_jobId: "/jobs/[jobId]",
  JOB_DETAILS: "/job-details",
  JOB_DETAILS_SLUG: "/job-details/[slug]",
  HOME: "/",
  JOBS: "/jobs/",
};

/* JOBS CONSTANTS */

export const workMode = [
  { label: "Remote", value: "remote" },
  { label: "Hybrid", value: "hybrid" },
  { label: "On-Site", value: "on-site" },
];
export const employmentType = [
  { label: "Full Time", value: "fullTime" },
  { label: "Part Time", value: "partTime" },
];

export const WORK_MODE = {
  REMOTE: "Remote",
  ONSITE: "On-Site",
  HYBRID: "Hybrid",
};

export const EMPLOYMENT_TYPE = {
  FULLTIME: "Full Time",
  PARTTIME: "Part Time",
};

export const fieldLabels = {
  experience: "Experience",
  offeredSalary: "Offered Salary",
  noticePeriod: "Expected Notice Period",
  workMode: "Work Mode",
  employmentType: "Employment Type",
  skills: "Required Skills",
};

export const JOB_SOURCE = "evaluate";

export const SUB_DOMAIN =
  process.env.NEXT_PUBLIC_ENV_NAME === "dev" ? "evaluation-dev" : "evaluation";

export const AUTH_DOMAIN = "evaltech.ai";

export const CUSTOM_HEAD_TITLE = {
  JOBS: "Job Listings",
  JOB_DETAILS: "Job Details",
};

export const NOT_FOUND_STRINGS = {
  title: "Oops! Page Not Found",
  subTitle:
    "Page you are looking for might have been removed or is temporarily unavailable.",
};

export const acceptedSkills = [
  "aws",
  "react",
  "javascript",
  "python",
  "java",
  "nodejs",
  "angular",
  "dot net",
  "quality assurance",
  "spring boot",
  "ml",
  "type script",
  "django",
  "groovy",
  "bash",
  "oracle",
  "mysql",
  "salesforce",
  "go",
  "sql",
  "mongodb",
  "azure",
  "servicenow",
  "react native",
  "translation management system",
  "kafka",
  "engineering design",
  "gd&t",
  "aptitude",
  "user experience",
  "business analyst",
  "personal question handling",
  "algorithms and data structures",
  "html",
  "customer support",
  "canva",
  "content writing",
  "tosca",
  "ai/ml",
  "bpo",
  "technical support",
  "finance",
  "accounting",
  "sales",
  "human resource management",
  "trainer",
  "data engineering",
  "guidewire",
  "planning analyst",
  "data analyst",
  "netsuite",
  "auditor",
  "unqork",
  "origami",
  "murex",
  "cobol",
  "network engineering",
  "dev studio",
  "wellness officer",
  "digital marketing",
  "c",
  "rtl",
  "verilog",
  "wealth management",
  "it infrastructure management",
  "virtualization",
  "cybersecurity",
  "networking and system administration",
  "brand management",
  "market research",
  "project management",
  "research analyst",
  "c#",
  "jira",
  "nosql",
  "microsoft project",
  "asana",
  "flask",
  "docker",
  "kubernetes",
  "c++",
  "veeam",
  "business development and relationship management",
  "microservices",
  "business operations management",
  "iot",
  "teamcenter",
  "mendix",
  "php",
  "laravel",
  "information technology",
  "android",
];

export const acceptedLocations = [
  "mumbai",
  "delhi",
  "bangalore",
  "hyderabad",
  "chennai",
  "kolkata",
  "pune",
  "ahmedabad",
  "jaipur",
  "surat",
  "lucknow",
  "kanpur",
  "nagpur",
  "patna",
  "indore",
  "bhopal",
  "visakhapatnam",
  "vadodara",
  "nashik",
  "faridabad",
  "meerut",
  "noida",
  "ajmer",
  "gurgaon",
  "bhilai",
  "raipur",
  "bhubaneswar",
  "ranchi",
  "dhanbad",
  "jamshedpur",
  "cuttack",
  "kochi",
  "thiruvananthapuram",
  "kannur",
];
