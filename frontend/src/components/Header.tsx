import {Link} from "react-router-dom";
import MobileNav from "@/components/MobileNav.tsx";
import MainNav from "@/components/MainNav.tsx";

const Header = () => {
    return (
        <div className="border-b-2 bg-orange-500 border-b-orange-500 py-6">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-3xl px-3 font-bold tracking-tight text-white">CloudChef</Link>
                <div className="md:hidden px-3">
                    <MobileNav />
                </div>
                <div className="hidden md:block px-3">
                    <MainNav/>
                </div>
            </div>
        </div>
    )
}
export default Header;