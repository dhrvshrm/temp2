import { CUSTOM_HEAD_TITLE } from "@/src/library/constants";
import { Box } from "@mui/material";

import JobDetail from "../../components/JobDetails/JobDetails";
import CustomHead from "../../components/common/CustomHead";
import useClientStore from "../../store/useClientDetailsStore";

const STYLES = {
  jobDetailContainer: {
    display: "flex",
    height: "calc(100vh - 4rem)",
    overflowY: "auto",
    marginTop: "4rem",
    paddingBottom: "2rem",
    justifyContent: "center",
    boxSizing: "border-box",
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      display: "block",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(214, 212, 212, 0.85)",
    },
    "&::-webkit-scrollbar-corner": {
      backgroundColor: "transparent",
    },
  },
};

function JobDetails() {
  const { clientDetails } = useClientStore();
  const { logo } = clientDetails;

  return (
    <>
      <CustomHead title={CUSTOM_HEAD_TITLE.JOB_DETAILS} logo={logo} />
      <Box sx={STYLES.jobDetailContainer}>
        <JobDetail />
      </Box>
    </>
  );
}

export default JobDetails;
