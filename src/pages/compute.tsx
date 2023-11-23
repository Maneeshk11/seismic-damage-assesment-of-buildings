import { Meta } from "@/layouts/Meta";
import { ComputePage } from "@/screens/ComputePage"

const Compute = () => {
    return (
        <div>
            <ComputePage meta={
                <Meta
                    title="Compute | Seismic Assessment"
                    description="Compute | Seismic Assessment" />
            } />
        </div>
    )
}

export default Compute;