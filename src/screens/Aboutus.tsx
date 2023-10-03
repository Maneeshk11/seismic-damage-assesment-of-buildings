import { ProfileCard } from "@/components/Cards/ProfileCard";
import { Heading } from "@/components/Atoms/Heading";

const Aboutus = () => {
    return (
        <div className="w-full py-8 mt-12">
            <Heading title={"OUR TEAM"} className="w-4/5 mx-auto"></Heading>
            <div className="flex flex-row items-center w-4/5 justify-around my-10 mx-auto">
                <ProfileCard name={"MANEESH KOLLI"} role={"FULL STACK DEVELOPER"} ></ProfileCard>
                <ProfileCard name={"VIVEK REDDY"} role={"FRONT END DEVELOPER"} ></ProfileCard>
                <ProfileCard name={"MEDHA PRODDUTURI"} role={"FRONT END DEVELOPER"} ></ProfileCard>
                <ProfileCard name={"NAVYA RAVURI"} role={"BACK END DEVELOPER"} ></ProfileCard>
            </div>
        </div>
    )
}

export default Aboutus;