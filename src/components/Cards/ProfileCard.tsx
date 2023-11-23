import { FC } from "react";
import { SocialCard } from "./SocialCard";
import Image, { StaticImageData } from "next/image";

interface ProfileCardProps {
    name: string;
    role: string;
    linkedinUrl: string;
    twitterUrl: string;
    githubUrl: string;
    facebookUrl: string;
    profileImage: StaticImageData;

}

export const ProfileCard:FC<ProfileCardProps> = ({name, role, linkedinUrl, githubUrl, twitterUrl, facebookUrl, profileImage}) => { 
    return (
        <div className="flex flex-col w-1/5 items-center gap-y-2">
            <div className="w-full aspect-square bg-[#D9D9D9] overflow-hidden">
                <Image src={profileImage} alt="image_profile" className="w-full"/>
            </div>
            <span className="font-normal text-lg">{name}</span>
            <span className="font-normal">{role}</span>
            <SocialCard className="gap-x-4" linkedinUrl={linkedinUrl} facebookUrl={facebookUrl} githubUrl={githubUrl} twitterUrl={twitterUrl}/>
        </div> 
    )
}