import { Heading } from "@/components/Contact/Heading";
import { Input } from "@/components/Contact/Input";
import { Button } from "@/components/Atoms/Button";

export const ContactPage = () => {
    return (
        <div className="w-full py-2 mt-5">
            <Heading title={"CONTACT US"} className="w-5/6 mx-auto"></Heading>
            <div className="flex flex-row mx-auto w-5/6 py-10">
                <div className=" w-1/2 pr-2">
                    <Input label = {"Name:"} placeholder="Enter your Name"></Input>
                </div>
                <div className="w-1/2 pl-2">
                    <Input label = {"Email:"} placeholder="Enter your email"></Input>
                </div>
            </div>
            <div className="w-5/6 mx-auto">
                <label className="block text-black">Message:</label>
                <input 
                    type="text"
                    className="w-full h-40 text-lg border border-black rounded-lg py-2 px-3"
                    placeholder="Enter your Message"/>
                {/* <Input label = {"Message"} placeholder="Enter Message"></Input> */}
            </div>
            <div className="w-5/6 mx-auto py-3">
                <Button title="Submit"/>
            </div>
        </div>

    )
};
