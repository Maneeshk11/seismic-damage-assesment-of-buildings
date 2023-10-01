import type { AppProps } from "next/app";
import "../styles/global.css";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className="relative">
            <div className="absolute backgroundColor w-full h-[50vh] -z-10"></div>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
};

export default MyApp;