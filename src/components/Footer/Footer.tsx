
import { SocialCard } from "../Cards/SocialCard"
import { FooterMenu } from "./FooterMenu"

export const Footer = () => {
    return (
        <div className="w-full flex flex-row tablet:flex-col tabletOnly:items-start tablet:gap-y-2 items-center p-6 border-t bg-white border-black gap-x-8 fixed mobile:static bottom-0 left-0 z-50">
            <span className="flex-grow mobile:text-sm">Seismic Activity Assessment of Buildings</span>
            <div className="flex flex-row gap-x-8 tablet:w-full tabletOnly:justify-end mobile:flex-col mobile:items-center mobile:gap-y-2">
                <FooterMenu />
                <SocialCard facebookUrl="" githubUrl="" linkedinUrl="" twitterUrl="" className="gap-x-6 tablet:gap-x-4" />
            </div>
        </div>
    )
}