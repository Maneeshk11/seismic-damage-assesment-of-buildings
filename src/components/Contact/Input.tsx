import { FC } from "react";

interface InputBoxProps {
    label: string;
    placeholder?: string;
}

export const Input:FC<InputBoxProps> = ({label, placeholder}) => {
    return (
        <div className="mb-4">
            <label className="block text-black">{label}</label>
            <input
                type="text"
                className="w-full h-10 text-lg border border-black rounded-lg py-2 px-3"
                placeholder={`${placeholder}`}
            />
        </div>
    )
}