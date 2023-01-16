import "../styles/globals.css";
import type { AppProps } from "next/app";
// Internal Import
import { ToDoListProvider } from "../context/ToDoListApp";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToDoListProvider>
      <div>
        <Component {...pageProps} />
      </div>
    </ToDoListProvider>
  );
}
