import { FC } from "react";

interface InputBoxProps {
    heading: string;
    className?: string;
}

export const InputBox:FC<InputBoxProps> = ({heading, className}) => {
    return (
        <div className="flex flex-row items-center w-full ">
            <span className="w-44 tablet:w-36 text-xl tablet:text-base">{heading}</span>
            <input type="text" className=" border-2 border-brown border-opacity-50 px-4 py-1 outline-none mobile:w-36" />
        </div>
    )
}