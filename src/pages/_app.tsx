import type { AppProps } from "next/app";
import "../styles/global.css";
import Navbar from "@/components/Navbar/Navbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Navbar></Navbar>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;