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
        <div className="flex flex-col w-1/5  tablet:w-2/5 tablet:py-5 tablet:justify-between items-center gap-y-2mobile:py-4 mobile:w-2/5">
            <div className="w-full  aspect-square bg-[#D9D9D9] overflow-hidden">
                <Image src={profileImage} alt="image_profile" className="w-full "/>
            </div>
            <span className="font-normal text-lg text-center mobile:text-base">{name}</span>
            <span className="font-normal text-lg text-center mobile:text-sm">{role}</span>
            <SocialCard className="gap-x-4" linkedinUrl={linkedinUrl} facebookUrl={facebookUrl} githubUrl={githubUrl} twitterUrl={twitterUrl}/>
        </div> 
    )
}