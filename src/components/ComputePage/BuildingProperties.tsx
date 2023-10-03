import { InputBox } from "./InputBox"

export const BuildingProperties = () => {
    return (
        <div className="flex flex-col gap-y-3">
            <span className="text-xl">BUILDING PROPERTIES</span>
            <div className="gap-x-8 grid grid-flow-row grid-cols-2 gap-y-3">
                <InputBox heading="Number floors"/>
                <InputBox heading="Story height" />
                <InputBox heading="Building weight" />
                <InputBox heading="Building height" />
                <InputBox heading="Stiffness" />
                <InputBox heading="Yield strength" />
                <InputBox heading="Story stiffness" />
                <InputBox heading="Hardening ratio" />
                <InputBox heading="Damping ratio" />
                <InputBox heading="Floor weight" />
                <InputBox heading="Gravity" />
            </div>
        </div>
    )
}