import { getWorkModeDisplayText } from "@/src/library/utils";
import { Stack, Tooltip, Typography } from "@mui/material";
import { STYLES } from "./jobsList.styles";
import CompanyLogo from "../common/CompanyLogo";

export const JobListItem = ({
  id,
  logoUrl,
  designation,
  companyName,
  location,
  workMode,
  onClick,
  selectedJobId,
}) => (
  <Tooltip title={designation || ""} arrow placement="right">
    <Stack
      direction="row"
      sx={{
        ...STYLES.jobListItemContainer,
        bgcolor: id === selectedJobId ? "#E5F0FB" : "none",
        borderLeft: id === selectedJobId ? "2px solid #0A66C2" : "none",
      }}
      onClick={onClick}
    >
      <Stack sx={STYLES.companyLogo}>
        <CompanyLogo imageUrl={logoUrl} size={{ square: 50, rectangle: 70 }} />
      </Stack>
      <Stack sx={{ width: "18rem" }}>
        <Stack direction="row">
          <Typography fontSize="1rem" sx={STYLES.deignationText}>
            {designation ?? "N/A"}
          </Typography>
        </Stack>
        <Typography variant="body1">{companyName ?? "N/A"}</Typography>
        <Typography variant="body2" mt={1}>
          {location ?? "Location not specified"}
        </Typography>
        <Typography variant="caption" mt={1}>
          {getWorkModeDisplayText(workMode)}
        </Typography>
      </Stack>
    </Stack>
  </Tooltip>
);
