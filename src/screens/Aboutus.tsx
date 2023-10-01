import { ProfileCard } from "@/components/Cards/ProfileCard";

const Aboutus = () => {
    return (
        <div className="w-4/5 py-8 mt-10 mx-auto">
            <span className="font-bold text-5xl px-8">OUR TEAM</span>
            <div className="flex flex-row items-center w-full justify-around my-10">
                <ProfileCard name={"MANEESH KOLLI"} role={"FRONTEND DEVELOPER"} ></ProfileCard>
                <ProfileCard name={"MEDHA PRODDUTURI"} role={"FRONTEND DEVELOPER"} ></ProfileCard>
                <ProfileCard name={"VIVEK REDDY"} role={"FRONTEND DEVELOPER"} ></ProfileCard>
                <ProfileCard name={"NAVYA RAVURI"} role={"BACKEND DEVELOPER"} ></ProfileCard>
            </div>
        </div>
    )
}

export default Aboutus;