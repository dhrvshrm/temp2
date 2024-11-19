import { create } from "zustand";

const useClientStore = create((set) => ({
  clientDetails: {
    logo: {
      dark: "",
      light: "",
      favIcon: "",
    },
    appTitle: "",
    auth_client_id: null,
  },
  setClientDetails: (details) =>
    set({
      clientDetails: {
        logo: details?.logo,
        appTitle: details?.appTitle,
        auth_client_id: details?.auth_client_id,
      },
    }),
}));

export default useClientStore;
