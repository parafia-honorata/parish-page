"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, ExternalLink, Sun, Moon } from "lucide-react";
import React from "react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface NavbarItem {
  title: string;
  link: string;
  isExternal?: boolean;
  sublinks?: NavbarItem[];
}

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const itemList: NavbarItem[] = [
    {
      title: "Ogłoszenia",
      link: "/ogloszenia",
    },
    {
      title: "Intencje",
      link: "/intencje",
    },
    {
      title: "O Parafii",
      link: "/o-parafii",
    },
    {
      title: "Grupy parafialne",
      link: "/grupy",
      sublinks: [
        {
          title: "Koło Biblijne",
          link: "/kolo-biblijne",
        },
        {
          title: "Żywy Różaniec",
          link: "/zywy-rozaniec",
        },
        {
          title: "Różaniec mężczyzn",
          link: "/rozaniec-mezczyzn",
        },
        {
          title: "Salka parafialna",
          link: "/salka-parafialna",
        },
      ],
    },
    {
      title: "Przydatne linki",
      link: "/linki",
    },
    {
      title: "Galeria",
      link: "https://drive.google.com/drive/folders/1s6g6oZ2K5BW_3otAI-SUd1wNBGV6xYgc?usp=sharing",
      isExternal: true,
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com/ParafiaHonorata/",
      isExternal: true,
    },
  ];

  const renderDesktopItem = (navbarItem: NavbarItem) => {
    if (navbarItem.sublinks) {
      return (
        <DropdownMenu key={navbarItem.link}>
          <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 rounded-md text-amber-50 hover:bg-amber-700/50 transition-colors duration-200 focus:outline-none">
            {navbarItem.title}
            <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-amber-900 border-amber-700 min-w-[180px]">
            {navbarItem.sublinks.map((sublink) => (
              <DropdownMenuItem key={sublink.link} asChild>
                <Link
                  href={sublink.link}
                  className="text-amber-50 hover:bg-amber-700/50 cursor-pointer px-4 py-2"
                >
                  {sublink.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    if (navbarItem.isExternal) {
      return (
        <a
          key={navbarItem.link}
          href={navbarItem.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-3 py-2 rounded-md text-amber-50 hover:bg-amber-700/50 transition-colors duration-200"
        >
          {navbarItem.title}
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>
      );
    }

    return (
      <Link
        key={navbarItem.link}
        href={navbarItem.link}
        className="px-3 py-2 rounded-md text-amber-50 hover:bg-amber-700/50 transition-colors duration-200"
      >
        {navbarItem.title}
      </Link>
    );
  };

  const renderMobileItem = (navbarItem: NavbarItem) => {
    if (navbarItem.sublinks) {
      return (
        <div key={navbarItem.link} className="w-full">
          <p className="text-amber-300 text-sm font-medium uppercase tracking-wide mb-2 mt-4">
            {navbarItem.title}
          </p>
          <div className="flex flex-col gap-1 pl-2 border-l-2 border-amber-600">
            {navbarItem.sublinks.map((sublink) => (
              <Link
                key={sublink.link}
                href={sublink.link}
                className="py-2 px-3 rounded-md text-amber-50 hover:bg-amber-700/50 transition-colors"
              >
                {sublink.title}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    if (navbarItem.isExternal) {
      return (
        <a
          key={navbarItem.link}
          href={navbarItem.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between py-3 px-3 rounded-md text-amber-50 hover:bg-amber-700/50 transition-colors"
        >
          {navbarItem.title}
          <ExternalLink className="w-4 h-4 opacity-70" />
        </a>
      );
    }

    return (
      <Link
        key={navbarItem.link}
        href={navbarItem.link}
        className="py-3 px-3 rounded-md text-amber-50 hover:bg-amber-700/50 transition-colors"
      >
        {navbarItem.title}
      </Link>
    );
  };

  return (
    <nav className="font-serif fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-amber-800 to-amber-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 hover:opacity-90 transition-opacity">
            <Image
              src="/images/LogoChurchLong.png"
              width={200}
              height={50}
              alt="Parafia bł. Honorata Koźmińskiego"
              priority
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation - hidden on mobile, shown on lg+ */}
          <div className="hidden lg:flex items-center gap-1 text-base">
            {itemList.map((item) => renderDesktopItem(item))}
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 ml-2 rounded-md text-amber-50 hover:bg-amber-700/50 transition-colors duration-200"
              aria-label="Przełącz motyw"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button - shown on mobile, hidden on lg+ */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger className="p-2 rounded-md text-amber-50 hover:bg-amber-700/50 transition-colors">
                <Menu className="w-8 h-8" />
                <span className="sr-only">Otwórz menu</span>
              </SheetTrigger>
              <SheetContent className="bg-gradient-to-b from-amber-800 to-amber-900 border-amber-700 w-[280px]">
                <SheetHeader className="border-b border-amber-700 pb-4 mb-4">
                  <SheetTitle className="text-amber-50 text-left">
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col text-lg">
                  {itemList.map((item) => renderMobileItem(item))}
                  {/* Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="flex items-center justify-between py-3 px-3 mt-4 rounded-md text-amber-50 hover:bg-amber-700/50 transition-colors border-t border-amber-700 pt-6"
                  >
                    <span>{theme === "dark" ? "Tryb jasny" : "Tryb ciemny"}</span>
                    {mounted && (theme === "dark" ? (
                      <Sun className="w-5 h-5" />
                    ) : (
                      <Moon className="w-5 h-5" />
                    ))}
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
