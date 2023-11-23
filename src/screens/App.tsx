import { Heading } from "@/components/Atoms/Heading";
import { Paragraph } from "@/components/HomePage/Paragraph";
import Image from "next/image";
import logo from "public/assets/seismic_wave.svg";
import { ReactNode } from "react";

const App = ({meta}: {meta:ReactNode}) => {
    return (
        <div className="w-full py-8 mt-12">
            {meta}
            <div >
                <Heading title={"OUR OBJECTIVE"} className="w-5/6 mx-auto"></Heading>
            </div>
            <div className="flex flex-row mx-auto w-4/5 my-8 justify-between ">
                <Paragraph className="w-3/4" />
                <Image
                    src={logo}
                    alt="Logo"
                    className="w-1/5 rounded-md"
                />
            </div>
        </div>
    )
}

export default App