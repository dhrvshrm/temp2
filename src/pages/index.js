import { CircularProgress, Stack } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ROUTES } from "../library/constants";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   router.push(ROUTES.JOBS);
  // }, []);

  return (
    <>
      <Head>
        <title>Evaluation</title>
        <meta name="description" content="This is the Evaluation page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"100vh"}
      >
        <CircularProgress sx={{ color: "#434ce6" }} />
      </Stack>
    </>
  );
}
