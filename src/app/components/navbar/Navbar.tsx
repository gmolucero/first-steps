import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
    { path: "/about", label: "About" },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
];


export const Navbar = async () => { 
    return <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <Link className="flex items-center" href="/">
                <HomeIcon className="mr-2"/> 
                <span>Home</span>
            </Link>
            <div className="flex flex-1"></div>
            {
                navItems.map( navItem => (
                    <ActiveLink key={navItem.path} {...navItem} />
                ))
            }

    </nav>;
};
