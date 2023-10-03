
import { SocialCard } from "../Cards/SocialCard"
import { FooterMenu } from "./FooterMenu"

export const Footer = () => {
    return (
        <div className="w-full flex flex-row items-center p-6 border-t bg-white border-black gap-x-8 fixed bottom-0 left-0 z-50">
            <span className="flex-grow">[ WEBSITE NAME ]</span>
            <FooterMenu />
            <SocialCard className="gap-x-6"/>
        </div>
    )
}