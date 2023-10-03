import { Button } from "../Atoms/Button"
import { SelectDropdown } from "../Atoms/SelectDropdown"

export const InputMotion = () => {
    return (
        <div className="flex flex-col gap-y-2">
            <span className="text-xl">INPUT MOTION</span>
            <div className="flex flex-row gap-x-3 items-center">
                <SelectDropdown />
                <Button title="ADD" />
            </div>
        </div>
    )
}