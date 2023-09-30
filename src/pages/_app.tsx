import type { AppProps } from "next/app";
import "../styles/global.css";
import Navbar from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <div className="relative">
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
};

export default MyApp;