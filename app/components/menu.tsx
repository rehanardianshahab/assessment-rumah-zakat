"use client";

import React from "react";
import { MenuIcon, ShipIcon, User2 } from "lucide-react";
import { CgClose } from "react-icons/cg";
import { GiNinjaMask } from "react-icons/gi";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const [isMenu, setMenu] = React.useState(false);
  const pathname = usePathname();

  const menuData = [
    { icon: User2, label: "Profile", href: "/" },
    { icon: GiNinjaMask, label: "Jikan", href: "/jikan" },
    { icon: ShipIcon, label: "OMDb", href: "/omdb" },
  ];

  return (
    <div className="z-40">
      {/* Mobile Navbar */}
      <div className="md:hidden bg-red-900 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          <h1 className="text-xl font-bold">Animanga</h1>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className="fixed right-6 bottom-6 md:hidden">
        <div className="flex flex-col items-end gap-3">
          {isMenu &&
            menuData.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "bg-red-900 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition",
                  pathname === item.href && "ring-2 ring-white"
                )}
              >
                <item.icon size={22} />
              </Link>
            ))}

          {/* Button Trigger */}
          <button
            onClick={() => setMenu(!isMenu)}
            className={cn(
              "bg-red-900 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition",
              isMenu && "rotate-180"
            )}
          >
            {!isMenu ? <MenuIcon size={24} /> : <CgClose size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:block bg-red-900 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          <h1 className="text-xl font-bold">Animanga</h1>
          <nav className="flex gap-6">
            {menuData.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 transition relative",
                    isActive
                      ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-white"
                      : "hover:text-gray-200"
                  )}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
