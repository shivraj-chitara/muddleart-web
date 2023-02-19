import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer hideProgressBar={true} />
    </>
  );
}

// MyApp.getInitialProps = ({ ctx }) => {
//   const basePath = "https://newtral.io";
//   const { asPath } = ctx;
//   const canonical = basePath + asPath;

//   return { canonical };
// };

export default MyApp;
