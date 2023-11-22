import { FC } from "react";


interface HeadingProps {
    title: string;
    className?: string;
}

export const Heading:FC<HeadingProps>= ({title, className}) => {
    return (
        <div className={`${className}`}>
            <span className="font-bold text-4xl text-black">{title}</span>
        </div>
    )
}