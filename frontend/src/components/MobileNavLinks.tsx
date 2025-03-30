import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {useAuth0} from "@auth0/auth0-react";
import {Separator} from "@radix-ui/react-separator";

const MobileNavLinks = () => {
    const {logout} = useAuth0();
    return (
        <span className= "flex flex-col items-center gap-4 px-3 ">
            <Link to="/user-profile" className="w-full px-3 items-center text-center font-bold hover:text-orange-500">
                Profile
            </Link>
            <Separator color="black" className="w-full"/>
            <Button onClick={()=>logout()} className="flex w-full items-center px-3 font-bold bg-orange-500 hover:bg-orange-600">Logout</Button>
        </span>
    );
};

export default MobileNavLinks;