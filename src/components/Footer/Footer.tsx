
import { FooterSocial } from "./FooterSocial"
import { FooterMenu } from "./FooterMenu"

export const Footer = () => {
    return (
        <div className="w-full flex flex-row items-center p-6 border-t border-black gap-x-8 fixed bottom-0 left-0">
            <span className="flex-grow">[ WEBSITE NAME ]</span>
            <FooterMenu />
            <FooterSocial />
        </div>
    )
}