import { Box, CircularProgress, Pagination, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { lazy, Suspense, useEffect, useState, useTransition } from "react";

import { getJobsService } from "@/src/api/services";
import { CUSTOM_HEAD_TITLE } from "@/src/library/constants";
import useClientStore from "@/src/store/useClientDetailsStore";
import useJobDetailsStore from "@/src/store/useJobDetailsStore";
import CustomHead from "../common/CustomHead";
import { JobListItem } from "./JobListItem";
import JobFilters from "./JobsFilters";
import { STYLES } from "./jobsList.styles";
import useRouteSkillLocationStore from "@/src/store/useRouteSkillLocationStore";

const JobDetail = lazy(() => import("../JobDetails/JobDetails"));

const PAGE_SIZE = 10;

function JobsList({ isFilteredPage = false }) {
  const { clientDetails } = useClientStore();
  const { logo } = clientDetails;
  const [loading, setLoading] = useState(false);
  const [jobsList, setJobsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const [filters, setFilters] = useState({});
  const [applyFilters, setApplyFilters] = useState(false);
  const router = useRouter();
  const { jobId } = router.query;
  const { skill: routeSkill, location: routeLocation } =
    useRouteSkillLocationStore();

  const { selectedJobDetails } = useJobDetailsStore();

  const [_, startTransition] = useTransition();

  const handleJobSelect = (id) => {
    router.push(`/jobs/${id}`);
  };

  const handlePageChange = (_, value) => {
    startTransition(() => {
      setCurrentPage(value);
    });
  };

  useEffect(() => {
    const getJobs = async () => {
      if (!applyFilters && !currentPage) return;

      setLoading(true);
      try {
        const data = await getJobsService(currentPage, filters);
        const { jobDescriptions, totalCount } = data?.data || [];
        startTransition(() => {
          setJobsList(jobDescriptions);
          setTotalJobs(totalCount);
        });

        if (!jobId && jobDescriptions.length > 0 && !isFilteredPage) {
          router.push(`/jobs/${jobDescriptions[0].id}`);
        }
      } catch (error) {
        setLoading(false);
      }
      setLoading(false);
    };

    getJobs();
  }, [currentPage, applyFilters]);

  useEffect(() => {
    if (
      !selectedJobDetails &&
      jobsList?.length > 0 &&
      !routeSkill &&
      !routeLocation
    ) {
      router.push(`/jobs/${jobsList[0].id}`);
    }
  }, [jobsList]);

  if (!routeLocation && !routeSkill) {
    return (
      <Box sx={STYLES.mainContainerStyle}>
        <CustomHead title={CUSTOM_HEAD_TITLE.JOBS} logo={logo} />
        <Box sx={STYLES.loader}>Please select a skill or location.</Box>
      </Box>
    );
  }

  if (jobsList?.length === 0 && currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }

  return (
    <Box sx={STYLES.mainContainerStyle}>
      <CustomHead title={CUSTOM_HEAD_TITLE.JOBS} logo={logo} />

      <JobFilters
        filters={filters}
        setFilters={setFilters}
        applyFilters={applyFilters}
        setApplyFilters={setApplyFilters}
      />
      <Stack direction="row" sx={STYLES.containerStyles}>
        <Stack direction="row" width="85%" height="100%">
          <Stack spacing={2} sx={STYLES.jobListBox}>
            <Stack
              sx={{
                ...STYLES.jobList,
                height: "93%",
                width: "100%",
              }}
            >
              {loading && (
                <Box sx={STYLES.loader}>
                  <CircularProgress size={40} />
                </Box>
              )}

              {!loading && jobsList?.length === 0 && (
                <Box sx={STYLES.loader}>No jobs available at the moment.</Box>
              )}

              {!loading && jobsList?.length > 0 && (
                <>
                  {jobsList?.map((job) => {
                    const {
                      id,
                      logoUrl,
                      companyName = "N/A",
                      designation = "N/A",
                      location = [],
                      modeOfWork = "N/A",
                    } = job;
                    const cityNames = location?.map((loc) => loc.name);
                    const locations =
                      cityNames?.join(", ") || "Location not specified";

                    return (
                      <JobListItem
                        key={id}
                        id={id}
                        logoUrl={logoUrl}
                        designation={designation}
                        companyName={companyName}
                        location={locations}
                        workMode={modeOfWork}
                        onClick={() => handleJobSelect(id)}
                        selectedJobId={jobId}
                      />
                    );
                  })}
                </>
              )}
            </Stack>

            <Stack sx={STYLES.pagination}>
              <Pagination
                count={Math.ceil(totalJobs / PAGE_SIZE)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                sx={STYLES.paginationOutline}
              />
            </Stack>
          </Stack>
          <Box
            sx={{
              ...STYLES.jobList,
              width: "67%",
              height: "100%",
              px: 5,
            }}
          >
            <Suspense fallback={<CircularProgress size={40} />}>
              <JobDetail />
            </Suspense>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default JobsList;
