"use client"
import Link from "next/link";
import Image from "next/image";
import LogoChurch from "../app/LogoChurch.png";
import {List} from "lucide-react"
import useMediaQuery from "@/utils/useMediaQuery";
import React, { useState } from "react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"; 
import {  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./ui/select"


interface NavbarItem {
  title: string;
  link: string;
  isExternal?: boolean;
  sublinks?: NavbarItem[];
}

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [isDrawerOpened, setIsDrawerOpened] = useState<boolean>(false);

  const itemList: NavbarItem[] = [
    {
      title: 'Ogłoszenia',
      link: '/ogloszenia'
    },
    {
      title: 'Intencje',
      link: '/intencje'
    },
    {
      title: 'O Parafii',
      link: '/o-parafii'
    },
    {
      title: 'Grupy parafialne',
      link: '/grupy',
      sublinks: [
        {
          title: "Koło Biblijne",
          link: "/kolo-biblijne"
        },
        {
          title: "Żywy Różaniec",
          link: "/zywy-rozaniec"
        },
        {
          title: "Różaniec mężczyzn",
          link: "/rozaniec-mezczyzn"
        },
        {
          title: "Salka parafialna",
          link: "/salka-parafialna"
        }
      ]
    },
    {
      title: 'Galeria',
      link: 'https://drive.google.com/drive/folders/1s6g6oZ2K5BW_3otAI-SUd1wNBGV6xYgc?usp=sharing',
      isExternal: true
    },
    {
      title: 'Przydatne linki',
      link: '/linki'
    },
    {
      title: 'Facebook',
      link: 'https://www.facebook.com/ParafiaHonorata/',
      isExternal: true
    },
  ]

  const renderItem = (navbarItem: NavbarItem) => {
    if (!!navbarItem.sublinks && !isMobile)
    return (
      <Select key={navbarItem.link}>
        <SelectTrigger>{navbarItem.title}</SelectTrigger>
        <SelectContent  className="bg-amber-800 text-white">
          <div key={"select-desktop"} className="flex flex-col text-lg">
            {navbarItem.sublinks.map((sublink) => (
              <Link key={sublink.link} className="rounded-sm p-4" href={sublink.link}>{sublink.title}</Link>
            ))}
          </div>
        </SelectContent>
      </Select>
    )
    if (!!navbarItem.sublinks && isMobile)
    return (
      <React.Fragment key={navbarItem.link}>
        {navbarItem.sublinks.map((sublink) => (
          <Link key={sublink.link} className="rounded-sm" href={sublink.link}>{sublink.title}</Link>
        ))}
      </React.Fragment>

    );
    return (
      <div  key={navbarItem.link}>
        { navbarItem.isExternal ?
          <a className="hover:bg-amber-500 rounded-sm p-4" href={navbarItem.link} target="_blank" rel="noreferrer" key={navbarItem.link}>{navbarItem.title}</a> 
          :
          <Link className="hover:bg-amber-500 rounded-sm p-4" href={navbarItem.link}>{navbarItem.title}</Link>
        }
      </div>
    )
  }

    return (
      <nav className="font-serif fixed top-0 left-0 w-full p-2 shadow-lg bg-amber-800 text-xl">
        <div className="container flex justify-between">
          <Link href={"/"}>
            <Image
              src={LogoChurch}
              width={100}
              height={50}
              alt="logo"
              priority={true}
            />
          </Link>
          {isMobile ? (
            <Sheet >
              <SheetTrigger><List size={70} color="white"/></SheetTrigger>
              <SheetContent className="bg-amber-800">
                <SheetHeader className="pb-4">
                  <SheetTitle className="text-white">Linki</SheetTitle>
                </SheetHeader>
                <div key={"mobile-list"} className="flex items-center flex-col space-x-4 text-white w-full justify-around text-xl gap-4">
                  {itemList.map((item) => renderItem(item))}
                </div>
              </SheetContent>
            </Sheet>
            
          ) : (
            <div key={"desktop-list"} className="flex items-center space-x-4 text-white w-full justify-around">
              {itemList.map((item) => renderItem(item))}
            </div>
          )}
        </div>
      </nav>
    );

}

export default Navbar;