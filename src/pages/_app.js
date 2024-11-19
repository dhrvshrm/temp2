import "@/src/styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import { getClientDetailsService } from "../api/services";
import { HeaderContainer } from "../components/common/HeaderContainer";
import { ROUTES } from "../library/constants";
import useClientStore from "../store/useClientDetailsStore";
import { muiTheme } from "../theme";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { clientDetails, setClientDetails } = useClientStore();
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    const fetchClientDetails = async () => {
      const response = await getClientDetailsService();
      setClientDetails(response);
    };

    if (!clientDetails?.appTitle) fetchClientDetails();
  }, []);

  useEffect(() => {
    if (router.pathname === ROUTES.HOME) router.push(ROUTES.JOBS);
  }, [router.pathname]);

  return (
    <ThemeProvider theme={muiTheme}>
      <HeaderContainer />
      {getLayout(<Component {...pageProps} />)}
      <CssBaseline />
      <Toaster position="top-center" reverseOrder={false} />
    </ThemeProvider>
  );
}
