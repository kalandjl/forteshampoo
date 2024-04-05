import Link from "@/node_modules/next/link";
import { FC } from "react";

interface Props {

}

const links = [
    {
        name: "RESEARCH",
        href: "/research"
    },
    {
        name: "PRODUCT",
        href: "/product"
    },
    {
        name: "EXPERIMENT",
        href: "/experiment"
    }
]

const Nav: FC<Props> = (props: Props) => {

    return (
        <>
            <div className="flex justify-between w-full pr-5">
                <Link
                href="/">
                    <p
                    className="text-gray-800 font-bold p-4">
                        FORTE SHAMPOO
                    </p>
                </Link>
                <div className="grid grid-flow-col gap-5 mt-3">
                    {
                        links.map((link, i) => (
                            <>
                                <div key={i}>
                                    <Link href={link.href}>
                                        <p
                                        className="border-gray-500 font-bold h-full grid place-items-center hover:underline">
                                            {link.name}
                                        </p>
                                    </Link>
                                </div>
                                <div className="border-2 border-gray-400">

                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Nav