import React, { useEffect, useState } from "react";
import {
  Stack,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from "@mui/material";
import { STYLES } from "./jobsList.styles";

function CheckboxDropdown({
  options,
  value,
  setFilters,
  filter,
  multiple = false,
  placeholder = "",
}) {
  const [selectedValues, setSelectedValues] = useState(value || []);

  useEffect(() => {
    setSelectedValues(value || []);
  }, [value]);

  const handleToggle = (optionValue) => {
    if (multiple) {
      setSelectedValues((prev) => {
        const currentIndex = prev.indexOf(optionValue);
        const newValues = [...prev];

        if (currentIndex === -1) {
          newValues.push(optionValue);
        } else {
          newValues.splice(currentIndex, 1);
        }

        setFilters((prevFilters) => ({
          ...prevFilters,
          [filter]: newValues.length > 0 ? newValues : null,
        }));

        return newValues;
      });
    } else {
      setSelectedValues(optionValue);
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filter]: optionValue,
      }));
    }
  };

  const handleChange = (event) => {
    event.stopPropagation();
  };

  const getSelectedLabels = () =>
    selectedValues
      .map((val) => {
        const option = options.find((opt) => opt.value === val);
        return option ? option.label : "";
      })
      .filter(Boolean)
      .join(", ");

  const getDisplayText = () => {
    if (multiple) {
      return selectedValues.length > 0 ? getSelectedLabels() : placeholder;
    }

    const selectedOption = options.find((opt) => opt.value === selectedValues);
    return selectedOption ? selectedOption.label : placeholder;
  };
  const renderDisplayValue = () => {
    const displayText = getDisplayText();
    const style =
      displayText === placeholder ? STYLES.checkBoxDropDown.placeholder : {};

    return <span style={style}>{displayText}</span>;
  };

  return (
    <Stack sx={{ width: "150px" }}>
      <FormControl fullWidth>
        <Select
          displayEmpty
          labelId="checkbox-dropdown"
          multiple={multiple}
          value={selectedValues}
          onChange={handleChange}
          renderValue={renderDisplayValue}
          MenuProps={{
            PaperProps: {
              style: { maxHeight: 300, minWidth: 200, maxWidth: 300 },
            },
          }}
          input={<OutlinedInput />}
          sx={STYLES.checkBoxDropDown.selectBox}
        >
          {options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={STYLES.checkBoxDropDown.menuItem}
              onClick={() => handleToggle(option.value)}
            >
              {multiple && (
                <Checkbox checked={selectedValues.indexOf(option.value) > -1} />
              )}
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}

export default CheckboxDropdown;
