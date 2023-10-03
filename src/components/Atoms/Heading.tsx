import { FC } from "react";


interface HeadingProps {
    title: string;
    className?: string;
}

export const Heading:FC<HeadingProps>= ({title, className}) => {
    return (
        <div className={`${className}`}>
            <span className="font-extrabold text-4xl px-8 text-brown">{title}</span>
        </div>
    )
}