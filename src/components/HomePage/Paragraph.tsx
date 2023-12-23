import { FC } from "react";


interface HeadingProps {
    className?: string;
}

export const Paragraph: FC<HeadingProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <span className="font-normal text-xl text-black">Welcome to our website dedicated to computing seismic damage assessments for buildings. Our platform specializes in analyzing and evaluating the potential structural vulnerabilities of buildings in the face of seismic activity. Using the unique properties of your structure’s inputs we are able to assess the probable damage levels that might occur during an earthquake.
                Our goal is to offer insights and recommendations to enhance structural resilience and mitigate potential risks. Explore our tools and resources to better understand how your building may respond to seismic forces and take proactive measures towards safer, more resilient structures.</span>
        </div>
    )
}