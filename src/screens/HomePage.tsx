import { Heading } from "@/components/HomePage/Heading";
import { Paragraph } from "@/components/HomePage/Paragraph";
import Image from "next/image";
import logo from "public/assets/logo-design-good-designer.jpg";

export const HomePage = () => {
    return (
        <div className="w-full py-8 mt-12">
            <div >
                <Heading title={"OUR OBJECTIVE"} className="w-5/6 mx-auto"></Heading>
            </div>
            <div className="flex flex-row mx-auto w-5/6 ">
                <div className="w=1/2 py-20">
                <Paragraph title={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, dignissimos, fuga perspiciatis similique error amet modi eveniet cumque, deserunt at facere et! Ratione libero facilis tempore fugit corporis aut aperiam.Cumque quibusdam nulla eos quam explicabo totam illum in vel, mollitia consequatur possimus, ea necessitatibus reiciendis eveniet impedit earum quo sed eligendi molestiae, beatae aspernatur optio dolorum iste ipsum? Quibusdam.Voluptas aliquam in amet quos illum, nulla iusto earum modi! Voluptates unde facilis tempora impedit odit omnis esse quam debitis natus, temporibus, porro dolor optio! Ad veniam pariatur vel accusamus?"} />
                </div>
                <Image
                src={logo}
                alt="Logo"
                className="w-1/2 aspect-square rounded-md"
                />
            </div>    
        </div>
    )
}
