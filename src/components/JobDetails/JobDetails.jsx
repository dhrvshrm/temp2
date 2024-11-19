import { getJobDetailedViewService } from "@/src/api/services";
import imageLoader from "@/src/assets/image-loader.png";
import SkillIcon from "@/src/assets/skillIcon.png";
import { AUTH_DOMAIN, fieldLabels, SUB_DOMAIN } from "@/src/library/constants";
import {
  generateJobDetailsRoute,
  getEmploymentTypeDisplayText,
  getPostTimeString,
  getValue,
  getWorkModeDisplayText,
} from "@/src/library/utils";
import useJobDetailsStore from "@/src/store/useJobDetailsStore";
import useRouteSkillLocationStore from "@/src/store/useRouteSkillLocationStore";
import { KeyboardArrowLeft } from "@mui/icons-material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import WorkIcon from "@mui/icons-material/Work";
import {
  Box,
  Button,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { ROUTES } from "../../library/constants";
import CompanyLogo from "../common/CompanyLogo";
import JobDescriptionSection from "./JobDescSection";
import { STYLES } from "./jobDetails.styles";

const JobDetailItem = React.memo(
  ({ icon: Icon, text, iconStyle, textStyle }) => {
    if (!text) return null;
    return (
      <Stack direction="row" sx={{ alignItems: "center", textAlign: "center" }}>
        {Icon && <Icon sx={iconStyle} />}
        <Typography style={textStyle}>{text}</Typography>
      </Stack>
    );
  },
);
JobDetailItem.displayName = "JobDetailItem";

const AboutJobItem = ({ label, children }) => (
  <Stack direction="row">
    <Typography fontWeight="540">{label}: </Typography>
    <Typography lineHeight="1.4rem" ml={2}>
      {children}
    </Typography>
  </Stack>
);

const JobDetail = () => {
  const { selectedJobDetails, setSelectedJobDetails } = useJobDetailsStore();
  const [imageSrc, setImageSrc] = useState(imageLoader);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { slug, jobId: id } = router.query;
  const isListView = router.pathname === ROUTES.JOBS_jobId;
  const isExpandedView = router.pathname === ROUTES.JOB_DETAILS_SLUG;

  let jobId = slug?.split("-").pop() ?? id;

  const jobRoute = generateJobDetailsRoute(selectedJobDetails, jobId);

  useEffect(() => {
    if (jobId) {
      const fetchJobDetails = async () => {
        setLoading(true);
        const jobDetails = await getJobDetailedViewService(jobId);
        setSelectedJobDetails(jobDetails);
        setImageSrc(jobDetails?.logoUrl || imageLoader);
        setLoading(false);
      };
      fetchJobDetails();
    }
  }, [jobId]);

  const jobDescriptionSections = [
    {
      title: "About Company",
      id: "about-company",
      content: selectedJobDetails?.about,
    },
    {
      title: "Job Description",
      id: "job-description",
      content: selectedJobDetails?.jdSpecification?.description,
    },
  ];

  const buttonProps = isListView
    ? {
        onClick: () => router.push(jobRoute, undefined, { shallow: true }),
        startIcon: <FullscreenIcon fontSize="large" />,
        text: "Expanded View",
      }
    : {
        onClick: () => router.push(ROUTES.JOBS, undefined, { shallow: true }),
        startIcon: <KeyboardArrowLeft fontSize="large" />,
        text: "Back",
      };

  const jobDetails = [
    {
      icon: null,
      text: `${selectedJobDetails?.companyName} - ${selectedJobDetails?.jdSpecification?.designation}`,
      iconStyle: {},
      textStyle: { fontWeight: 600, fontSize: "1.3rem" },
      key: "designation",
    },
    {
      icon: null,
      text:
        selectedJobDetails?.totalApplicationCount > 10 &&
        `${selectedJobDetails?.totalApplicationCount}+ applicants`,
      iconStyle: {},
      textStyle: { fontSize: "1rem", marginTop: "0px" },
      key: "applicationCount",
    },

    {
      icon: null,
      text: `${selectedJobDetails?.jdSpecification?.location
        ?.map((loc) => loc.name)
        .join(
          ", ",
        )} \u2022 ${getPostTimeString(selectedJobDetails?.createdAt)}`,
      iconStyle: {},
      textStyle: { marginLeft: "0.2rem", fontSize: "14px" },
      key: "location",
    },
    {
      icon: WorkIcon,
      text: `${
        getWorkModeDisplayText(
          selectedJobDetails?.jdSpecification?.modeOfWork,
        ) ?? "N/A"
      } \u2022 
        ${
          getEmploymentTypeDisplayText(
            selectedJobDetails?.jdSpecification?.employmentType,
          ) ?? "N/A"
        }
       \u2022 ${selectedJobDetails?.jdSpecification?.experience?.join(", ") ?? "N/A"}`,
      iconStyle: {},
      textStyle: { marginLeft: "0.7rem" },
      key: "workInfo",
    },
    {
      icon: () => (
        <Image
          src={SkillIcon}
          alt="Skills"
          width={18}
          height={18}
          style={{ ml: 3 }}
          loading="lazy"
        />
      ),
      text:
        selectedJobDetails?.jdSpecification?.skills || "Skills not specified",
      iconStyle: {},
      textStyle: { marginLeft: "0.9rem" },
      key: "skills",
    },
  ];

  const filteredFields = Object.entries(
    selectedJobDetails?.jdSpecification || {},
  )
    .filter(([key, value]) => fieldLabels[key] && value)
    .map(([key, value]) => ({
      key,
      label: fieldLabels[key],
      value: getValue(key, value),
    }));

  const handleApply = () => {
    if (selectedJobDetails) {
      const fromEvalJobLanding = "true";
      window.open(
        `https://${SUB_DOMAIN}.${AUTH_DOMAIN}/jobs/details/${jobId}?fromEvalJobLanding=${fromEvalJobLanding}`,
        "_blank",
      );
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" mt={10} height="60vh">
        <Skeleton variant="rectangular" height="100%" width="100%" />
      </Box>
    );
  }

  if (!selectedJobDetails) {
    return (
      <Box textAlign="center" mt={10} height="60vh">
        <Typography textAlign="center" mt={50}>
          Oops! Job details not found, please try again later.
        </Typography>
      </Box>
    );
  }

  return (
    <Box id="job-detail" width={isExpandedView ? "80%" : "100%"}>
      <>
        <Stack
          direction="row"
          justifyContent="space-between"
          height="60px"
          alignItems="center"
          my={1}
        >
          <CompanyLogo
            imageUrl={imageSrc}
            size={{ square: 50, rectangle: 100 }}
          />

          <Button
            variant="text"
            sx={STYLES.iconButton}
            onClick={buttonProps.onClick}
            startIcon={buttonProps.startIcon}
          >
            {buttonProps.text}
          </Button>
        </Stack>
        <Stack gap={2} textAlign="center">
          <Stack gap={2} textAlign="center">
            {jobDetails?.map(({ icon, text, iconStyle, textStyle, key }) => (
              <JobDetailItem
                key={key}
                icon={icon}
                text={text}
                iconStyle={iconStyle}
                textStyle={textStyle}
              />
            ))}
          </Stack>
        </Stack>

        <Stack mt="1.5rem" width="fit-content">
          <Button variant="contained" sx={STYLES.btn} onClick={handleApply}>
            Apply Now
          </Button>
        </Stack>

        <Divider sx={{ mt: 5 }} />
        <Box key="about-job" mt="1.5rem">
          <Typography fontWeight="650" mb="1rem">
            What do you need for this opportunity?
          </Typography>

          <Stack spacing={3}>
            {filteredFields.map(({ key, label, value }) => (
              <AboutJobItem key={key} label={label}>
                {value}
              </AboutJobItem>
            ))}
          </Stack>
        </Box>
        <Divider sx={{ my: 5 }} />
        <JobDescriptionSection sections={jobDescriptionSections} />

        {/* Display company website if available */}
        {selectedJobDetails?.companyWebsite && (
          <Box>
            <Divider sx={{ my: 5 }} />
            <Typography fontWeight="650" mb="24px">
              For more information, visit:{" "}
              <a
                href={selectedJobDetails.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedJobDetails.companyWebsite}
              </a>
            </Typography>
          </Box>
        )}
      </>
    </Box>
  );
};

export default JobDetail;
