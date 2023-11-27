import FacebookImg from "public/assets/icons/facebook.svg"
import GithubImg from "public/assets/icons/github.svg"
import TwitterImg from "public/assets/icons/twitter.svg"
import LinkedinImg from "public/assets/icons/linkedin.svg"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const SocialImage = ({ imgSrc, src, className }: { imgSrc: string, src: string, className?: string }) => {
    return (
        <Link href={src} target="_blank">
            <Image src={imgSrc} alt="icon" className={`lg:w-8 mobile:w-4 tablet:w-6 hover:transform hover:-translate-y-1 hover:-translate-x-1 duration-100 ${className}`}></Image>
        </Link>
    )
}

interface SocialCardProps {
    className?: string;
    linkedinUrl: string;
    twitterUrl: string;
    githubUrl: string;
    facebookUrl: string;
}


export const SocialCard: FC<SocialCardProps> = ({ className, linkedinUrl, twitterUrl, githubUrl, facebookUrl }) => {
    return (
        <div className={`flex flex-row items-center ${className}`}>
            <SocialImage imgSrc={LinkedinImg} src={linkedinUrl} />
            <SocialImage imgSrc={TwitterImg} src={twitterUrl} className="mt-1" />
            <SocialImage imgSrc={GithubImg} src={githubUrl} />
            <SocialImage imgSrc={FacebookImg} src={facebookUrl} />
        </div>
    )
}

