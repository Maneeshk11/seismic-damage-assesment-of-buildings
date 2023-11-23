import { FC } from "react";

interface InputBoxProps {
    heading: string;
    className?: string;
    placeholder?: string;
}

export const InputBox:FC<InputBoxProps> = ({heading, className, placeholder}) => {
    return (
        <div className="flex flex-row items-center">
            <span className="w-24 text-xl">{heading}</span>
            <input type="text" placeholder={placeholder} className="w-96 border-2 border-brown border-opacity-50 px-4 py-1 outline-none" />
        </div>
    )
}