import { Heading } from "@/components/Atoms/Heading";
import { InputBox } from "@/components/Contact/Input";
import { Button } from "@/components/Atoms/Button";
import { ReactNode } from "react";

export const ContactPage = ({meta}: {meta:ReactNode}) => {
    return (
        <div className="w-full lg:py-8 mobile:py-0 tablet:py-5 lg:mt-12 mobile:mt-6 tablet:mt-9">
            {meta}
            <Heading title={"CONTACT US"} className="w-4/5 mx-auto"></Heading>
            <div className="flex flex-row  mx-auto w-4/5 lg:pt-10 mobile:pt-5 tablet:pt-7 lg:pb-8 mobile:pb-3 tablet:pb-5 gap-x-10 px-8  lg:gap-y-8 mobile:gap-y-3 tablet:gap-y-5 flex-wrap">
                <InputBox heading="Name:" placeholder="Enter your Name" />
                <InputBox heading="Email:" placeholder="Enter your email" />
            </div>
            <div className="w-4/5 mx-auto px-8 flex flex-col gap-y-3">
                <span className="w-24 lg:text-xl mobile:text-base tablet:text-lg">Message:</span>
                <textarea name="" id="" className="w-full h-40 border-2 border-brown border-opacity-50 px-4 py-1 outline-none"
                    placeholder="Enter your Message"></textarea>
            </div>
            <div className="w-4/5 mx-auto lg:py-8 mobile:py-4 tablet:py-6 px-8">
                <Button title="Submit" />
            </div>
        </div>

    )
};
