import React, { useEffect, useState } from "react";
import { Tooltip, Typography, Autocomplete, TextField } from "@mui/material";
import { useDynamicDebouncedSearch } from "@/src/hooks/useDebounceSearch";
import useRouteSkillLocationStore from "@/src/store/useRouteSkillLocationStore";

function LocationInput({
  onSelect,
  error = false,
  label = "Current Location (City)*",
  sxProps = {},
  showPlaceholder = false,
  clearLocation = false,
}) {
  const [searchTerm, setSearchTerm] = useState();
  const [selectedOption, setSelectedOption] = useState(null);
  const { location: routeLocation } = useRouteSkillLocationStore();

  const { searchResults, loading, setSearchResults } =
    useDynamicDebouncedSearch(searchTerm, true);

  const handleSearchTermChange = (_, newValue) => {
    setSearchTerm(newValue);
  };

  useEffect(() => {
    if (clearLocation) {
      setSelectedOption(null);
      setSearchTerm("");
      setSearchResults([]);
    }
  }, [clearLocation]);

  useEffect(() => {
    if (routeLocation && !selectedOption) {
      setSearchTerm(routeLocation); // Set search term to routeLocation
    }
  }, [routeLocation]);

  useEffect(() => {
    if (searchResults.length > 0 && routeLocation && !selectedOption) {
      setSelectedOption(searchResults[0]);
      onSelect(searchResults[0]);
    }
  }, [searchResults, searchTerm, selectedOption]);

  return (
    <Tooltip
      title={
        <Typography variant="subtitle2">Please select a location</Typography>
      }
      placement="left"
      arrow
      open={error}
    >
      <Autocomplete
        fullWidth
        loading={loading}
        noOptionsText={
          searchTerm === "" ? "Start typing . . ." : "No location found"
        }
        disablePortal
        value={selectedOption}
        options={searchResults}
        getOptionLabel={(option) => option.city}
        renderInput={(params) => (
          <TextField
            {...params}
            label={showPlaceholder ? undefined : label}
            placeholder={showPlaceholder ? label : undefined}
            onChange={(e) => {
              handleSearchTermChange(e, e.target.value);
            }}
            error={error}
            sx={sxProps.textField}
            InputLabelProps={{
              sx: sxProps.label,
            }}
          />
        )}
        onChange={(_, option) => {
          setSelectedOption(option);
          onSelect(option);
        }}
      />
    </Tooltip>
  );
}

export default LocationInput;
