'use client'

import React from "react";

import { MenuIcon, ShipIcon, User2 } from "lucide-react";
import { CgClose } from "react-icons/cg";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { GiNinjaMask } from "react-icons/gi";

export default function Menu() {
    const [isMenu, setMenu] = React.useState<boolean>(false);
    const menuData = [
        {icon: User2, label: "Profile", href: "/"},
        {icon: GiNinjaMask, label: "Jikan", href: "/jikan"},
        {icon: ShipIcon, label: "One Piece", href: "/onepiece"},
    ]
    return (
        <div className="z-50 fixed right-12 bottom-12">
            <div className="h-screen flex justify-center items-end w-full">
                {/* Mobile */}
                {/* Atur Menu saat muncul */}
                <div className="fixed md:w-[calc(30vw-150px)] w-[calc(90vw-50px)] right-11 bottom-30 bg-red-900/90 backdrop-blur-[1px] text-white rounded-lg">
                    <div className="flex flex-col items-end transition-all duration-300">
                        {!isMenu || menuData.map((item, index) => (
                            <MenuItem key={index} href={item.href} icon={item.icon} label={item.label} />
                        ))}
                    </div>
                </div>
                {/* Button Menu */}
                <div className={cn("bg-red-900 rounded-full p-2 cursor-pointer hover:opacity-100 transition-all duration-300",
                    isMenu ? "rotate-180" : "rotate-0 opacity-60"
                )} onClick={() => setMenu(!isMenu)}>
                    {!isMenu ? <MenuIcon size={36} className="text-white"/> : <CgClose size={36} className="text-white"/>}
                </div>
            </div>
        </div>
    )
}

function MenuItem({icon: Icon, label, href}: {icon: React.ElementType, label: string, href: string}) {
    return (
        <div className="p-4 border-b w-full text-right">
            <Link href={href} className="flex justify-end items-center gap-2">
                {Icon && <Icon size={20} />}
                {label}
            </Link>
        </div>
    )
}