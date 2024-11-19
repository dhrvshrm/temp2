/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import CompanyLogo from "../common/CompanyLogo";

const STYLES = {
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 95,
    height: 95,
    cursor: "pointer",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  box: {
    marginLeft: "1.875rem",
    width: "8rem",
  },
  toolbar: {
    p: 0,
    boxShadow: "0px 8px 6px -8px rgb(116 114 114 / 85%)",
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

function Header({
  logoImage,
  onLogoClick,
  stylesObj,
  iconsData,
  iconsContainerSx,
}) {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={[stylesObj.appBar]}
    >
      <Toolbar sx={[STYLES.toolbar, stylesObj.toolbar]}>
        <Box sx={[STYLES.box, stylesObj.box]}>
          <Box onClick={onLogoClick} sx={[STYLES.logo, stylesObj.logo]}>
            <CompanyLogo
              imageUrl={logoImage}
              size={{ square: 50, rectangle: 120 }}
            />
          </Box>
        </Box>

        {iconsData?.length ? (
          <Stack
            direction="row"
            ml="auto"
            columnGap="1rem"
            sx={[STYLES.iconsContainer, iconsContainerSx]}
          >
            {iconsData.map(
              ({ props = {}, startIcon, id, sx, text, onClick }) => (
                <Button
                  key={id}
                  sx={[STYLES.iconButton, sx]}
                  startIcon={startIcon}
                  color="inherit"
                  onClick={onClick}
                  disableRipple
                  {...props}
                >
                  {text}
                </Button>
              ),
            )}
          </Stack>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
