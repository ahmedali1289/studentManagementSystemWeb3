// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
// custom css
import "../styles/globals.css";
// tooltip css
import "react-tooltip/dist/react-tooltip.css";
// toaster
import "react-toastify/dist/ReactToastify.css";
// import type { AppProps } from "next/app";
// Internal Import
import { AppContext, AppProvider } from "../context/AppContext";
import Script from "next/script";
import Navbar from "../components/Navbar";
import { ToastContainer, Flip } from "react-toastify";
import { useContext } from "react";
export default function App({ Component, pageProps }) {
  const token = useContext(AppContext);
  return (
    <AppProvider>
      <>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
        <Navbar />
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="dark"
          transition={Flip}
        />
      </>
    </AppProvider>
  );
}
