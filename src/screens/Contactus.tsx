import { Heading } from "@/components/Atoms/Heading";
import { InputBox } from "@/components/Contact/Input";
import { Button } from "@/components/Atoms/Button";
import { ReactNode } from "react";

export const ContactPage = ({meta}: {meta:ReactNode}) => {
    return (
        <div className="w-full py-8 mt-12 mobile:mt-0 mobile:py-0 mobile:overflow-y-scroll tabletOnly:mt-0 tabletOnly:py-6 mobile:mb-24">
            {meta}
            <Heading title={"CONTACT US"} className="w-4/5 mx-auto"></Heading>
            <div className="flex flex-row mx-auto w-4/5 pt-10 pb-8 gap-x-10 px-8 mobile:px-1 gap-y-8 flex-wrap">
                <InputBox heading="Name:" placeholder="Enter your Name" />
                <InputBox heading="Email:" placeholder="Enter your email" />
            </div>
            <div className="w-4/5 mx-auto px-8 mobile:px-1 flex flex-col gap-y-3">
                <span className="w-24 text-xl">Message:</span>
                <textarea name="" id="" className="w-full h-40 border-2 border-brown border-opacity-50 px-4 py-1 outline-none"
                    placeholder="Enter your Message"></textarea>
            </div>
            <div className="w-4/5 mx-auto py-8 mobile:px-1 px-8">
                <Button title="Submit" />
            </div>
        </div>

    )
};
