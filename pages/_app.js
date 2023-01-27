// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
// custom css
import "../styles/globals.css";
// import type { AppProps } from "next/app";
// Internal Import
import { StudentsProvider } from "../context/StudentsApp";
import Script from "next/script";
import Navbar from "../components/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <StudentsProvider>
      <>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" />
        <Navbar />
        <Component {...pageProps} />
      </>
    </StudentsProvider>
  );
}
