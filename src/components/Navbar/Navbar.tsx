import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <span className="text-5xl">Navbar</span>
            <Link href="aboutus">
                <button>About us</button>
            </Link>

        </div>
    )
}
export default Navbar;