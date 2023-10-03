import { FC } from "react";

interface ButtonProps  {
    title: string;
}

export const Button:FC<ButtonProps> = ({title}) => {
    return (
        <div className="bg-yellow py-1 text-brown text-lg px-10 rounded-xl w-fit cursor-pointer">
            <span>{title}</span>
        </div>
    )
}