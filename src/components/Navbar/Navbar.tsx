import Link from "next/link";
import Image from "next/image";
import logo from "public/assets/logo-design-good-designer.jpg";

const NavItem = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link href={href}>
      <span className="text-black cursor-pointer">{title}</span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between text-white py-8 px-8 text-lg">
      <div className="flex items-center">
        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          className="w-10 aspect-square rounded-md"
        />
      </div>
      <div className="flex flex-row items-center gap-x-10">
        <NavItem href="/" title="HOME" />
        <NavItem href="compute" title="COMPUTE" />
        <NavItem href="aboutus" title="ABOUT US" />
        <NavItem href="#" title="CONTACT US" />
      </div>
    </nav>
  );
};
export default Navbar;
