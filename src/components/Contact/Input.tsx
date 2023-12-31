import { FC } from "react";

interface InputBoxProps {
    heading: string;
    className?: string;
    placeholder?: string;
}

export const InputBox:FC<InputBoxProps> = ({heading, className, placeholder}) => {
    return (
        <div className="flex flex-row mobile:flex-col mobile:items-start items-center mobile:w-full">
            <span className="w-24 text-xl">{heading}</span>
            <input type="text" placeholder={placeholder} className="w-96 mobile:w-full border-2 border-brown border-opacity-50 px-4 py-1 outline-none" />
        </div>
    )
}