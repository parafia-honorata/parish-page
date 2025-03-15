import Link from "next/link";
import Image from "next/image";
import LogoChurch from "../app/LogoChurch.png";

interface NavbarItem {
  title: string;
  link: string;
  isExternal?: boolean;
}

const Navbar = () => {
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
      link: '/grupy'
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
    return (
      <li className="hover:bg-amber-500 p-4 rounded-sm" key={navbarItem.link}>
        { navbarItem.isExternal ?
            <a href={navbarItem.link} target="_blank" rel="noreferrer" key={navbarItem.link}>{navbarItem.title}</a> 
            :
            <Link href={navbarItem.link}>{navbarItem.title}</Link>
        }
      </li>
    )
  }

    return (
      <nav className="fixed top-0 left-0 w-full p-2 shadow-lg bg-amber-800 text-xl">
        <div className="container flex ">
          <Link href={"/"}>
            <Image src={LogoChurch} width={100} height={100} alt="logo" />
          </Link>
          <ul className="flex items-center space-x-4 text-white w-full justify-around">
            {itemList.map((item) => renderItem(item))}
          </ul>
        </div>
      </nav>
  )

}

export default Navbar;