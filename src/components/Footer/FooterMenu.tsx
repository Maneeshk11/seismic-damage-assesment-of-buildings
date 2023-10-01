import Link from "next/link"

const FooterLink = ({ title, src, className }: { title: string, src: string, className?: string }) => {
    return (
        <Link href={src}>
            <span className={`px-2 font-normal ${className} text-base`}>{title}</span>
        </Link>
    )
}

export const FooterMenu = () => {
    return (
        <div className="flex flex-row items-center">
            <FooterLink title={"ABOUT"} src={"aboutus"}/>
            <FooterLink title={"CONTACT US"} src={"#"} className="border-x border-black" />
            <FooterLink title={"CONNECT"} src={"#"} />
        </div>
    )
}