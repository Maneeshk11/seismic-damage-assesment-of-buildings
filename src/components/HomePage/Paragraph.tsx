import { FC } from "react";


interface HeadingProps {
    className?: string;
}

export const Paragraph: FC<HeadingProps> = ({ className }) => {
    return (
        <div className={`${className}`}>
            <span className="font-normal lg:text-xl mobile:text-base tablet:text-lg text-black justify-between">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Distinctio, dignissimos, fuga perspiciatis similique error amet modi eveniet cumque,
                deserunt at facere et! Ratione libero facilis tempore fugit corporis aut aperiam.Cumque quibusdam nulla eos
                quam explicabo totam illum in vel, mollitia consequatur possimus, ea necessitatibus reiciendis eveniet impedit
                earum quo sed eligendi molestiae, beatae aspernatur optio dolorum iste ipsum? Quibusdam.Voluptas aliquam in amet
                quos illum, nulla iusto earum modi! Voluptates unde facilis tempora impedit
                odit omnis esse quam debitis natus, temporibus, porro dolor optio! Ad veniam pariatur vel
                accusamus?</span>
        </div>
    )
}