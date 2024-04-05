import Link from "@/node_modules/next/link";
import { FC } from "react";

interface Props {

}

const links = [
    {
        name: "RESEARCH",
        href: "/reserarch"
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
            <div className="flex justify-between w-full bg-slate-900 pr-5">
                <Link
                href="/">
                    <p
                    className="text-white font-bold bg-black p-4">
                        FORTE SHAMPOO
                    </p>
                </Link>
                <div className="grid grid-flow-col gap-5">
                    {
                        links.map((link, i) => (
                            <div key={i}>
                                <Link href={link.href}>
                                    <p
                                    className="text-white h-full grid place-items-center font-bold">
                                        {link.name}
                                    </p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Nav