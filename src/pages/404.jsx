import { Box, Button, Stack, Typography } from "@mui/material";
import CustomHead from "../components/common/CustomHead";
import { NOT_FOUND_STRINGS } from "../library/constants";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();

  return (
    <Box>
      <CustomHead title="Page Not Found" />
      <Stack
        sx={{ justifyContent: "center", height: "100vh", alignItems: "center" }}
        gap={5}
      >
        <Typography
          variant="h2"
          color="text.dark"
          align="center"
          fontWeight={500}
        >
          {NOT_FOUND_STRINGS.title}
        </Typography>
        <Typography
          variant="h4"
          color="text.dark"
          align="center"
          fontWeight={500}
        >
          {NOT_FOUND_STRINGS.subTitle}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/")}
          sx={{
            width: "fit-content",
            textTransform: "capitalize",
          }}
        >
          Go to Home
        </Button>
      </Stack>
    </Box>
  );
}

export default NotFound;
