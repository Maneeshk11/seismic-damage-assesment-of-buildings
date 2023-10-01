import { FC } from "react";
import { SocialCard } from "./SocialCard";

interface ProfileCardProps {
    name: string;
    role: string;
    linkedinUrl?: string;
    twitterUrl?: string;
    githubUrl?: string;
    facebookUrl?: string;

}

export const ProfileCard:FC<ProfileCardProps> = ({name, role}) => { 
    return (
        <div className="flex flex-col w-1/5 items-center gap-y-1">
            <div className="w-full aspect-square bg-[#D9D9D9]"></div>
            <span className="font-medium text-lg">{name}</span>
            <span className="font-normal mb-1">{role}</span>
            <SocialCard className="gap-x-4"/>
        </div>
    )
}