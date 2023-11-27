import { ProfileCard } from "@/components/Cards/ProfileCard";
import { Heading } from "@/components/Atoms/Heading";
import { ReactNode } from "react";
import Man1Img from "public/assets/man1.jpg"
import M1Img from "public/assets/m1.jpeg"
import N1Img from "public/assets/n1.jpeg"
import V1Img from "public/assets/v1.jpg"

const Aboutus = ({meta}: {meta: ReactNode}) => {
    return (
        <div className="w-full lg:py-8 mobile:py-0 tablet:py-5 lg:mt-12 mobile:mt-6 tablet:mt-9">
            {meta}
            <Heading title={"OUR TEAM"} className="w-4/5 mx-auto"></Heading>
            <div className="flex lg:flex-row mobile:flex-col tablet:flex-wrap items-center w-4/5 justify-around my-10 mx-auto">
                <ProfileCard profileImage={Man1Img} name={"MANEESH KOLLI"} role={"FULL STACK DEVELOPER"} twitterUrl="https://twitter.com/ManeeshKolli" githubUrl="https://github.com/Maneeshk11" linkedinUrl="https://www.linkedin.com/in/maneeshkolli/" facebookUrl="" />
                <ProfileCard profileImage={V1Img} name={"P VIVEK REDDY"} role={"FRONT END DEVELOPER"} githubUrl="https://github.com/twist-hub" linkedinUrl="https://www.linkedin.com/in/p-vivek-reddy-7400a524a/" facebookUrl=""  twitterUrl=""/>
                <ProfileCard profileImage={M1Img} name={"MEDHA PRODDUTURI"} role={"FRONT END DEVELOPER"} twitterUrl="https://twitter.com/meds888" githubUrl="https://github.com/medprod" linkedinUrl="https://www.linkedin.com/in/medha-prodduturi/" facebookUrl="" />
                <ProfileCard profileImage={N1Img} name={"NAVYA RAVURI"} role={"BACK END DEVELOPER"} twitterUrl="https://twitter.com/lukescoffee0" githubUrl="https://github.com/navyaravuri" linkedinUrl="https://www.linkedin.com/in/navya-ravuri/" facebookUrl="" />
            </div>
        </div>
    )
}

export default Aboutus;