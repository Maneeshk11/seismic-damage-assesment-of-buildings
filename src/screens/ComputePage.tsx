import { Heading } from "@/components/Atoms/Heading"
import { InputMotion } from "@/components/ComputePage/InputMotion"
import { BuildingProperties } from "@/components/ComputePage/BuildingProperties"
import { Button } from "@/components/Atoms/Button"
import { ReactNode } from "react"

const ExecuteCard = () => {
    return (
        <div className="w-full border-t-[1px] border-black flex flex-row items-center justify-between py-6">
            <Button title="RUN" />
            <Button title="STOP" />
            <Button title="EXIT" />
        </div>
    )
}

export const ComputePage = ({meta}: {meta:ReactNode}) => {
    return (
        <div className="w-full py-8 mt-12 overflow-y-scroll mb-14">
            {meta}
            <Heading title={"SEISMIC DAMAGE ASSESSMENT OF BUILDINGS"} className="w-5/6 mx-auto"></Heading>
            <div className="flex flex-col mx-auto items-start mt-16 gap-y-8 w-fit">
                <InputMotion />
                <BuildingProperties />
                <ExecuteCard />
            </div>
        </div>
    )
}