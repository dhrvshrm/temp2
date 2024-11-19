import { getDimensionsFromAspectRatio } from "@/src/library/utils";
import useClientStore from "@/src/store/useClientDetailsStore";
import { Box } from "@mui/material";
import Header from "../Header/Header";

const STYLES = {
  appBar: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 99,
    backgroundColor: "primary.main",
    height: "4rem",
  },
  image: (imgUrl) => {
    const { width, height } = getDimensionsFromAspectRatio(imgUrl);
    return {
      logo: {
        width,
        height,
        mt: 2,
        mb: 2,
      },
      toolbar: { boxShadow: "none" },
    };
  },
};

export function HeaderContainer() {
  const { clientDetails } = useClientStore();
  const { logo } = clientDetails;
  return (
    <Box sx={STYLES.appBar}>
      <Header logoImage={logo?.dark} stylesObj={STYLES.image(logo?.dark)} />
    </Box>
  );
}
