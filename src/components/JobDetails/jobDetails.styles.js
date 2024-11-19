export const STYLES = {
  logoContainer: (isCloseToSquare) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    objectFit: "contain",
    py: "1rem",
    borderRadius: "1rem",
    height: 80,
    ...(isCloseToSquare ? {} : { width: 100 }),
  }),
  iconButton: {
    color: "text.extraDark",
    "&.MuiButton-root": {
      padding: 0,
      textTransform: "none",
      "&:hover": {
        background: "none",
      },
    },
  },
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
  },
  btn: {
    textTransform: "none",
    width: "fit-content",
    boxShadow: "none",
    "&.MuiButton-root": {
      fontSize: "1rem",
      textTransform: "none",
    },
    "&:hover": {
      backgroundColor: "primary.main",
      boxShadow: "none",
    },
  },
  uploadBtn: {
    borderColor: "#467DEC",
    color: "#467DEC",
    backgroundColor: "#FFFFFF",
  },
  applyBtn: (evaluationExists) => ({
    backgroundColor: "primary.light",
    textTransform: "none",
    "&:hover": {
      backgroundColor: evaluationExists ? "primary.main" : "primary.light",
      boxShadow: "none",
    },
    width: "fit-content",
    boxShadow: "none",
  }),
  closeBtn: {
    position: "absolute",
    top: 12,
    right: 15,
    padding: 0,
    height: "2rem",
    width: "2rem",
  },
  dialogPaper: {
    "& .MuiDialog-paper": {
      borderRadius: "1rem",
      width: "31rem",
      p: "1rem",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
      height: "22rem",
    },
    backdropFilter: "blur(2px)",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
};
