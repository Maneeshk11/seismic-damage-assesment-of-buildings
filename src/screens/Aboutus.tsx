import { ProfileCard } from "@/components/Cards/ProfileCard";

const Aboutus = () => {
    return (
        <div className="w-4/5 py-8 mt-12 mx-auto">
            <span className="font-extrabold text-4xl px-8 text-brown">OUR TEAM</span>
            <div className="flex flex-row items-center w-full justify-around my-10">
                <ProfileCard name={"MANEESH KOLLI"} role={"FULL STACK DEVELOPER"} ></ProfileCard>
                <ProfileCard name={"VIVEK REDDY"} role={"FRONT END DEVELOPER"} ></ProfileCard>
                <ProfileCard name={"MEDHA PRODDUTURI"} role={"FRONT END DEVELOPER"} ></ProfileCard>
                <ProfileCard name={"NAVYA RAVURI"} role={"BACK END DEVELOPER"} ></ProfileCard>
            </div>
        </div>
    )
}

export default Aboutus;