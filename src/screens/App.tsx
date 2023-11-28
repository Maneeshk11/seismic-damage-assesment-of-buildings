import { Heading } from "@/components/Atoms/Heading";
import { Paragraph } from "@/components/HomePage/Paragraph";
import Image from "next/image";
import logo from "public/assets/seismic_wave.svg";
import { ReactNode } from "react";

const App = ({meta}: {meta:ReactNode}) => {
    return (
        <div className="w-full py-8 mt-12 mobile:mt-0 mobile:py-0 tabletOnly:mt-0 tabletOnly:py-6">
            {meta}
            <div >
                <Heading title={"OUR OBJECTIVE"} className="w-5/6 mx-auto"></Heading>
            </div>
            <div className="flex flex-row mx-auto w-4/5 my-8 justify-between tablet:flex-col ">
                <Paragraph className="w-3/4 tablet:w-full" />
                <Image
                    src={logo}
                    alt="Logo"
                    className="w-1/5 rounded-md mobile:w-48 tabletOnly:w-2/5 mobile:mx-auto"
                />
            </div>
        </div>
    )
}

export default App