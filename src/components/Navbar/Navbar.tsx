import Link from "next/link";
import Image from "next/image";
import logo from "public/assets/seismic_wave.svg";

const NavItem = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href}>
      <span className="text-black cursor-pointer">{title}</span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-white py-8 px-8 lg:text-lg mobile:sm tablet:base">
      <div className="flex items-center">
        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          className="lg:w-10 mobile:w-7 tablet:w-8 aspect-square rounded-md"
        />
      </div>
      <div className="flex flex-row items-center lg:gap-x-10 mobile:gap-x-6 tablet:gap-x-8">
        <NavItem href="/" title="HOME" />
        <NavItem href="/compute" title="COMPUTE" />
        <NavItem href="/aboutus" title="ABOUT US" />
        <NavItem href="/contact" title="CONTACT US" />
      </div>
    </nav>
  );
};
export default Navbar;
