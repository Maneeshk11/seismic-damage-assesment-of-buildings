import { FC } from "react";

interface ButtonProps  {
    title: string;
}

export const Button:FC<ButtonProps> = ({title}) => {
    return (
        <div className="bg-yellow py-1 text-brown lg:text-lg mobile:text-base tablet:text-lg lg:px-10 mobile:px-5 tablet:px-7 rounded-xl w-fit cursor-pointer">
            <span>{title}</span>
        </div>
    )
}