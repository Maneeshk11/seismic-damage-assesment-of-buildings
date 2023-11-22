import { FC } from "react";


interface HeadingProps {
    title: string;
    className?: string;
}

export const Paragraph:FC<HeadingProps>= ({title, className}) => {
    return (
        <div className={`${className}`}>
            <span className="font-normal text-normal text-black">{title}</span>
        </div>
    )
}