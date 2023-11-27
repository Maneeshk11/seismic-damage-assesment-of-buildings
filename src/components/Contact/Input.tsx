import { FC } from "react";

interface InputBoxProps {
    heading: string;
    className?: string;
    placeholder?: string;
}

export const InputBox:FC<InputBoxProps> = ({heading, className, placeholder}) => {
    return (
        <div className="flex flex-row items-center">
            <span className="w-24 lg:text-xl mobile:text-base tablet:text-lg">{heading}</span>
            <input type="text" placeholder={placeholder} className="lg:w-96 mobile:w-70 tablet:w-85 border-2 border-brown border-opacity-50 px-4 py-1 outline-none" />
        </div>
    )
}