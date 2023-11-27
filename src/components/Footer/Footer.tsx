
import { SocialCard } from "../Cards/SocialCard"
import { FooterMenu } from "./FooterMenu"

export const Footer = () => {
    return (
        <div className="w-full flex flex-row items-center p-6 border-t bg-white border-black lg:gap-x-8 tablet:gap-x-4 fixed bottom-0 left-0 z-50">
            <span className="flex-grow lg:text-lg tablet:text-base flex-wrap">Seismic Activity Assessment of Buildings</span>
            <FooterMenu />
            <SocialCard facebookUrl="" githubUrl="" linkedinUrl="" twitterUrl="" className="lg:gap-x-6 mobile:gap-x-2 tablet:gap-x-4"/>
        </div>
    )
}