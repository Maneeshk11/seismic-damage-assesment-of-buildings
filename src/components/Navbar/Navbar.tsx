import Link from "next/link";
import Image from "next/image";
import logo from "public/assets/seismic_wave.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx"
import { useState } from "react";

const NavItem = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href}>
      <span className="text-black cursor-pointer">{title}</span>
    </Link>
  );
};

const NavItemSidebar = ({ href, title, onClick }: { href: string; title: string; onClick:()=>void }) => {
  return (
    <Link href={href} className="w-full cursor-pointer hover:bg-[#fed2a9] ">
      <div className="w-full py-2 cursor-pointer hover:bg-[#fed2a9]" onClick={onClick}>
        <span className="text-black">{title}</span>
      </div>
    </Link>
  );
};

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)
  return (
    <nav className="flex items-center justify-between text-white py-8 px-8 text-lg relative">
      <div className="flex items-center">
        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          className="w-10 aspect-square rounded-md"
        />
      </div>
      <div className="flex flex-row items-center gap-x-10 mobile:hidden">
        <NavItem href="/" title="HOME" />
        <NavItem href="/compute" title="COMPUTE" />
        <NavItem href="/aboutus" title="ABOUT US" />
        <NavItem href="/contact" title="CONTACT US" />
      </div>
      <div className="hidden mobile:block">
        <GiHamburgerMenu size={35} className="cursor-pointer" color={"black"} onClick={() => setOpenSidebar(true)} />
      </div>
      <div className={`w-screen h-screen absolute top-0 transform duration-200 ${openSidebar ? "left-0" : "left-full"} bg-[#FFB067] p-6`}>
        <div className="w-full flex flex-col gap-y-14">
          <RxCross2 size={35} className="cursor-pointer" color={"black"} onClick={() => setOpenSidebar(false)} />
          <div className="flex w-full flex-col items-center gap-x-10 text-center z-50">
            <NavItemSidebar href="/" title="HOME" onClick={() => setOpenSidebar(false)} />
            <NavItemSidebar href="/compute" title="COMPUTE" onClick={() => setOpenSidebar(false)}/>
            <NavItemSidebar href="/aboutus" title="ABOUT US" onClick={() => setOpenSidebar(false)}/>
            <NavItemSidebar href="/contact" title="CONTACT US" onClick={() => setOpenSidebar(false)}/>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
