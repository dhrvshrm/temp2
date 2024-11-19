import { employmentType, workMode } from "@/src/library/constants";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import LocationInput from "../LocationInput/LocationInput";
import CheckboxDropdown from "./CheckboxDropdown";
import { STYLES } from "./jobsList.styles";
import useJobFiltersStore from "@/src/store/useJobsFiltersStore";
import useRouteSkillLocationStore from "@/src/store/useRouteSkillLocationStore";
import { useRouter } from "next/router";

function JobFilters({ filters, setFilters, applyFilters, setApplyFilters }) {
  console.log("Filters: ", filters);
  const { expertiseList, skillList, fetchFiltersData, isDataFetched } =
    useJobFiltersStore();
  const [clearLocation, setClearLocation] = useState(false);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [currentFilters, setCurrentFilters] = useState({});
  const { skill: routeSkill, location: routeLocation } =
    useRouteSkillLocationStore();
  const router = useRouter();

  const onCurrentLocSelection = (locationObj) =>
    setFilters((prevFilters) => ({
      ...prevFilters,
      location: locationObj?.id || "",
    }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyFilters = () => {
    setCurrentFilters(filters);
    setApplyFilters(!applyFilters);
    setIsFilterApplied(true);
  };

  useEffect(() => {
    if (!isDataFetched) {
      fetchFiltersData();
    }
  }, [isDataFetched, fetchFiltersData]);

  useEffect(() => {
    if (routeSkill && skillList.length > 0) {
      const matchingSkill = skillList.find(
        (skill) => skill.skillName.toLowerCase() === routeSkill.toLowerCase(),
      );
      if (matchingSkill) {
        console.log("Matching Skill: ", matchingSkill);

        setFilters((prevFilters) => ({
          ...prevFilters,
          skills: [matchingSkill.id],
        }));
        handleApplyFilters();
      }
    }
  }, [routeSkill, skillList]);

  const handleResetFilters = () => {
    setFilters({});
    setCurrentFilters({});
    setIsFilterApplied(false);
    setClearLocation(true);
    setApplyFilters(!applyFilters);
    setTimeout(() => {
      router.push("/jobs");
      setCurrentFilters({});
    }, 500);
  };

  const handleApplyDisabled =
    JSON.stringify(currentFilters) === JSON.stringify(filters);

  const handleResetDisabled = !isFilterApplied;

  const checkboxDropdownConfigs = [
    {
      placeholder: "Skills",
      options: skillList,
      value: filters?.skills,
      filter: "skills",
      multiple: true,
    },
    {
      placeholder: "Job Type",
      options: employmentType,
      value: filters?.employmentType,
      filter: "employmentType",
    },
    {
      placeholder: "Work Mode",
      options: workMode,
      value: filters?.modeOfWork,
      filter: "modeOfWork",
    },
    {
      placeholder: "Experience",
      options: expertiseList,
      value: filters?.experience,
      filter: "experience",
      multiple: true,
    },
  ];

  return (
    <Stack direction="row" bgcolor="common.white" sx={STYLES.filterCont}>
      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
        <TextField
          autoComplete="off"
          fullWidth
          variant="outlined"
          id="designation"
          placeholder="Job Title"
          name="designation"
          value={filters?.designation || ""}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: <SearchIcon sx={STYLES.filters.searchIcon} />,
          }}
          size="small"
          sx={STYLES.filters.searchField}
        />
        {checkboxDropdownConfigs.map((config) => (
          <CheckboxDropdown
            key={config.placeholder}
            label={config.label}
            options={config.options}
            value={config.value}
            setFilters={setFilters}
            filter={config.filter}
            placeholder={config.placeholder}
            multiple={config.multiple}
          />
        ))}
        <LocationInput
          onSelect={onCurrentLocSelection}
          label="Location"
          sxProps={STYLES.filters.locationInput}
          showPlaceholder
          clearLocation={clearLocation}
        />
      </Stack>
      <Stack direction="row" spacing={1.5}>
        <Button
          variant="contained"
          sx={STYLES.filters.btn}
          disabled={handleApplyDisabled}
          onClick={handleApplyFilters}
        >
          Apply Filters
        </Button>
        <Button
          variant="text"
          onClick={handleResetFilters}
          disabled={handleResetDisabled}
          sx={STYLES.filters.btn}
        >
          Reset Filters
        </Button>
      </Stack>
    </Stack>
  );
}

export default JobFilters;
