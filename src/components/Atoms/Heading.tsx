import { FC } from "react";


interface HeadingProps {
    title: string;
    className?: string;
}

export const Heading:FC<HeadingProps>= ({title, className}) => {
    return (
        <div className={`${className}`}>
            <span className="font-extrabold lg:text-4xl px-8 text-brown mobile:text-2xl tablet:text-3xl">{title}</span>
        </div>
    )
}