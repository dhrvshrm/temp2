export const STYLES = {
  filterCont: {
    borderBottom: "1px solid #E0E0E0",
    py: 4,
    px: 4,
    justifyContent: "space-between",
  },
  mainContainerStyle: {
    mt: "4rem",
    justifyContent: "center",
    backgroundColor: "#F4F2EE",
    overflow: "hidden",
    height: "100%",
  },
  containerStyles: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F2EE",
    height: "85%",
  },
  companyLogo: { width: "7.125rem", padding: "10px" },
  jobListItemContainer: {
    padding: "10px",
    width: "100%",
    height: "7.8125rem",
    cursor: "pointer",
    borderBottom: "1px solid rgba(27, 31, 35, 0.15)",
  },
  deignationText: {
    color: "primary.main",
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    mr: "0.625rem",
    whiteSpace: "nowrap",
    width: "100%",
  },
  jobListBox: {
    width: "37%",
    height: "100%",
    backgroundColor: "common.white",
    borderRight: "1px solid rgba(27, 31, 35, 0.15)",
  },
  jobList: {
    overflowY: "auto",
    boxSizing: "border-box",
    scrollbarWidth: "thin",
    backgroundColor: "common.white",

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
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
    width: "100%",
  },
  pagination: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "common.white",
  },
  paginationOutline: {
    margin: "1rem auto",
    outline: "none",
    "& .Mui-selected": {
      backgroundColor: "#467DEC !important",
      color: "common.white",
    },
    "& .MuiPaginationItem-root": {
      outline: "none",
    },
  },
  checkBoxDropDown: {
    selectBox: {
      height: "35px",
      border: "none",
      outline: "none",
      backgroundColor: "#F4F2EE",

      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
    placeholder: {
      color: "#8E8C8A",
    },
    menuItem: {
      whiteSpace: "normal",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  filters: {
    searchIcon: {
      color: "primary.main",
      cursor: "pointer",
      mr: 1,
      width: "20px",
      height: "20px",
    },
    searchField: {
      backgroundColor: "#F4F2EE",
      minWidth: "150px",
      py: "2.5px",
      borderRadius: "10px",
      "& .MuiInputBase-root": {
        borderRadius: 999,
        height: "30px",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: "none",
        },
        "&:hover fieldset": {
          border: "none",
        },
        "&.Mui-focused fieldset": {
          border: "none",
        },
      },
    },
    locationInput: {
      textField: {
        height: "35px",
        border: "none",
        outline: "none",
        backgroundColor: "#F4F2EE",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        justifyContent: "center",
        borderRadius: "10px",
      },
    },
    btn: {
      textTransform: "none",
      height: "2.2rem",
      width: "fit-content",
      boxShadow: "none",
      alignSelf: "center",
      "&.MuiButton-root": {
        fontSize: "1rem",
        textTransform: "none",
        padding: "none",
      },
      "&:hover": {
        boxShadow: "none",
      },
      "&.MuiButton-root:disabled": {
        color: "common.darkGrey",
        borderColor: "common.darkGrey",
      },
      "&.MuiButtonBase-root": {
        p: "10px",
      },
    },
  },
};
