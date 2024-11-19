import JobsList from "@/src/components/JobsList/JobsList";
import { acceptedLocations, acceptedSkills } from "@/src/library/constants";
import useRouteSkillLocationStore from "@/src/store/useRouteSkillLocationStore";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Jobs() {
  const router = useRouter();
  const { "skill-location": skillLocation } = router.query;
  const [routeSkill, routeLocation] = skillLocation?.split("-") ?? ["", ""];
  const { skill, setSkill, location, setLocation } =
    useRouteSkillLocationStore();

  useEffect(() => {
    if (skill !== routeSkill) setSkill(routeSkill);
    if (location !== routeLocation) setLocation(routeLocation);
  }, [routeSkill, routeLocation, skill, location, setSkill, setLocation]);

  return (
    <Stack height="100vh">
      <JobsList isFilteredPage="false" />
    </Stack>
  );
}

export default Jobs;
