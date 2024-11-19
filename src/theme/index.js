import { createTheme } from "@mui/material";

const spacingFactor = (factor) => `${0.25 * factor}rem`;
const sizingFactor = (factor) => `${0.0625 * factor}rem`;

const COLORS = {
  disabledBtnColor: "#fff",
  disabledBtnBg: "rgb(0 0 0 / 12%)",
};

export const muiTheme = createTheme({
  palette: {
    common: {
      white: "#ffffff",
      black: "#000000",
      darkGrey: "#3c3c3c",
      green: "#6ac921",
      lightGreen: "#bee4a7",
      lightBlue: "#f3f7f7",
      editorBackground: "#9da7a785",
      editorLightBg: "#4A547C",
      blue: "#003459",
      questionContainerBg: "#F6F6F6",
      modalContainerBg: "rgba(255, 255, 255, 0.5)",
      barBgColor: "#36A2EB",
      enableCamera: "red",
      noCheating: "orange",
      recording: "green",
      cheating: "orange",
      disabledGrey: "#878787",
      customBorder: "#5C6388",
      whiteShade: "#ffffffeb",
      whiteShade2: "#ffffffa6",
      imageCardBG: "#00A8E8",
      purple: "#7F45F0",
      footerBg: "#3E435D",
      bgLight: "#f2f5ff",
    },
    primary: {
      main: "#467DEC",
      light: "#6296FF",
      extraDark: "#1D2328",
      tertiary: "#83CDCA",
    },
    error: {
      main: "#E11640",
      outputText: "#FF6767",
    },
    warning: {
      main: "#FFC92B",
      light: "#FFDE80",
    },
    info: {
      main: "#3C40CE",
    },
    success: {
      main: "#24D559",
    },
    secondary: {
      main: "#24D559",
      light: "#B6E4F5",
    },
    tertiary: {
      main: "#83CDCA",
      light: "#A6EAE7",
      dark: "#1BA781",
    },
    contrast: {
      main: "#FFFFFF",
    },
    disruptive: {
      main: "#F1A087",
    },
    background: {
      paper: "#ffffff",
      default: "#ffffff",
      dark: "#F7F7F7",
      extraDark: "#1D2328",
      gray: "#f2f2f2",
      light: "#ECF0F9",
      lighterGray: "#DCDCDC",
      darkGray: "#c6c6c6",
      lightGray: "#D9D9D9",
      lightBlack: "#717171",
      yellow: "#ffdd55",
      editorBlack: "#1e1e1e",
      highlight: "#4a8be0",
      gradient: "linear-gradient(236.93deg, #3C40CE 42.25%, #5C5FD8 63.11%)",
      gradient2: "linear-gradient(227deg, #EEE 33.85%, #FFF 100%)",
      lightGrey: "#f5f6fb",
      linkedinClr: "#0A66C2",
      transparent1: "rgba(0 ,0, 0 ,0.6)",
      ideBlue: "#383F5C",
      ideLightBlue: "#414868",
      ideGray: "#bfbfbf",
      gray2: "#F3F3F3",
      editorBlack2: "#404040",
      whiteSmoke: "#f8f8f8",
    },
    text: {
      primary: "#3E435D",
      secondary: "#383F5C",
      light: "#8D96AD",
      extraDark: "#3E435D",
      emphasize: "#000000",
      highlight: "#4a8be0",
      negative: "#ffffff",
      ideHighlight: "#fcd34d",
    },
  },

  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontSize: sizingFactor(48),
      fontWeight: 400,
    },
    h2: {
      fontSize: sizingFactor(36),
      fontWeight: 400,
    },
    h3: {
      fontSize: sizingFactor(24),
      fontWeight: 700,
    },
    h4: {
      fontSize: sizingFactor(20),
      fontWeight: 400,
      lineHeight: "1.775rem",
    },
    h5: {
      fontSize: sizingFactor(31),
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: sizingFactor(18),
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: sizingFactor(17),
      fontWeight: 400,
    },
    body1: {
      fontSize: sizingFactor(16),
      fontWeight: 400,
      lineHeight: "1.2em",
    },
    body2: {
      fontSize: sizingFactor(14),
      fontWeight: 400,
      lineHeight: "1.2em",
    },
  },
  spacing: (factor) => spacingFactor(factor),
  sizing: (factor) => sizingFactor(factor),
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: `${theme.sizing(10)} !important`,
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: theme.sizing(1.55),
          },
        }),
        input: ({ theme }) => ({
          fontSize: theme.typography.subtitle2.fontSize,
          color: "#000000",
        }),
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "viewAll" },
          style: {
            paddingInline: "0px !important",
            borderRadius: "0.625rem !important",
            textTransform: "none",
          },
        },
        {
          props: { variant: "boxOutlined" },
          style: {
            color: "background.highlight",
            px: "0.5rem",
            textTransform: "none",
            border: "1px solid",
            borderColor: "primary.light !important",
            borderRadius: "0.625rem !important",
            fontSize: "0.875rem",
            "&:hover": {
              backgroundColor: "background.transparent1",
            },
            "&.Mui-disabled": {
              color: "background.lightBlack !important",
              borderColor: "background.lightBlack",
              opacity: 0.5,
            },
          },
        },
      ],
      styleOverrides: {
        root: ({ theme }) => ({
          "&.MuiButton-root": {
            minHeight: "3.8vh",
            minWidth: "5vw",
            padding: "1vh 2vw",
            borderRadius: "1.5625rem",
            fontSize: sizingFactor(17),
            outline: "none",
            "&:disabled": {
              color: "white",
              opacity: 0.5,
            },
          },
          "&.primary-btn.Mui-disabled, &.secondary-btn.Mui-disabled": {
            color: COLORS.disabledBtnColor,
            background: COLORS.disabledBtnBg,
            letterSpacing: 0.5,
            fontWeight: 500,
            cursor: "not-allowed",
            pointerEvents: "auto",
            border: "none",
            "&:hover": {
              color: COLORS.disabledBtnColor,
              background: COLORS.disabledBtnBg,
              boxShadow: "none",
            },
          },
          "&.primary-btn": {
            color: "#ffffff",
            background: theme.palette.primary.main,
            letterSpacing: 0.5,
            fontWeight: 500,
            boxShadow: "none",
            "&:hover": {
              opacity: 0.9,
            },
          },
          "&.secondary-btn": {
            color: "#000000",
            background: "#ffffff",
            border: "1px solid black",
            borderColor: "#000000",
            "&:hover": {
              color: "#3c3c3c",
              borderColor: "#3c3c3c",
            },
          },
          "&.secondary-btn2": {
            color: "white",
            backgroundColor: "transparent",
            minWidth: "8rem",
            borderRadius: "10px",
            border: "1px solid",
            borderColor: "white",
            "&:hover": {
              // add hover styles when needed
              color: "white",
              backgroundColor: "transparent",
              border: "1px solid",
            },
          },
          "&.custom-btn": {
            borderRadius: 0,
            boxShadow: "none",
            padding: "0.75rem 2rem",
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            fontSize: "inherit",
          },
        }),
      },
    },
  },
});
