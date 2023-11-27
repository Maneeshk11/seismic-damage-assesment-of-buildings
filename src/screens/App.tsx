import { Heading } from "@/components/Atoms/Heading";
import { Paragraph } from "@/components/HomePage/Paragraph";
import Image from "next/image";
import logo from "public/assets/seismic_wave.svg";
import { ReactNode } from "react";

const App = ({meta}: {meta:ReactNode}) => {
    return (
        <div className="w-full lg:py-8 mobile:py-0 tablet:py-5 lg:mt-12 mobile:mt-6 tablet:mt-9">
            {meta}
            <div >
                <Heading title={"OUR OBJECTIVE"} className="w-5/6 mx-auto"></Heading>
            </div>
            <div className="flex lg:flex-row mobile:flex-col tablet:flex-col mx-auto w-4/5 my-8 justify-between ">
                <Paragraph className="lg:w-3/5 tablet:w-full mobile:w-full" />
                <Image
                    src={logo}
                    alt="Logo"
                    className="flex lg:w-2/5 tablet: w-1/2  mobile:w-full rounded-md px-5"
                />
            </div>
        </div>
    )
}

export default App