import FacebookImg from "public/assets/icons/facebook.svg"
import GithubImg from "public/assets/icons/github.svg"
import TwitterImg from "public/assets/icons/twitter.svg"
import LinkedinImg from "public/assets/icons/linkedin.svg"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const SocialImage = ({ imgSrc, src }: { imgSrc: string, src: string }) => {
    return (
        <Link href={src}>
            <Image src={imgSrc} alt="icon" className="w-8 hover:transform hover:-translate-y-1 hover:-translate-x-1 duration-100"></Image>
        </Link>
    )
}

interface SocialCardProps {
    className?: string;
}


export const SocialCard:FC<SocialCardProps> = ({className}) => {
    return (
        <div className={`flex flex-row items-center ${className}`}>
            <SocialImage imgSrc={LinkedinImg} src={"#"} />
            <SocialImage imgSrc={TwitterImg} src={"#"} />
            <SocialImage imgSrc={GithubImg} src={"#"} />
            <SocialImage imgSrc={FacebookImg} src={"#"} />
        </div>
    )
}

