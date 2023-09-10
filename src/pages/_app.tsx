import AppLayout from "@/layout/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "@/shad-components/ui/toaster";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="174261263509-hqulbbjmnmd90o1ru3g7kso24dep2phk.apps.googleusercontent.com">
      <Provider store={store}>
        <AppLayout>
          <Component {...pageProps} />
          <Toaster />
        </AppLayout>
      </Provider>
    </GoogleOAuthProvider>
  );
}
