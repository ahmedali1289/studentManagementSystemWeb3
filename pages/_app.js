import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import "react-tooltip/dist/react-tooltip.css";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "../context/AppContext";
import Script from "next/script";
import Navbar from "../components/Navbar";
import { ToastContainer, Flip } from "react-toastify";
export default function App({ Component, pageProps }) {
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
