const STYLES = {
  box: {
    marginLeft: "1.875rem",
    width: "8rem",
  },
  iconButton: {
    fontSize: "18px",
    textTransform: "none",
    color: "#003459",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  iconsContainer: {
    "& .MuiButton-root": {
      "&:not(:last-child):after": {
        content: '""',
        position: "absolute",
        height: "1rem",
        right: "-9px",
        border: "solid 1px #A0A0A0",
      },
    },
  },
};

export default STYLES;
