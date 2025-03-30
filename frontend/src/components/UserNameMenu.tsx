import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem} from "@radix-ui/react-dropdown-menu";
import {CircleUserRound} from "lucide-react";
import {useAuth0} from "@auth0/auth0-react";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";

const UserNameMenu = () => {
    const {user, logout} = useAuth0();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold text-white rounded-t-2xl hover:bg-orange-600 gap-2 data-[state=open]:bg-orange-600">
                <CircleUserRound className="text-white"/>
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white text-white text-center rounded-b-2xl shadow-lg">
                <DropdownMenuItem className="text-orange-500 hover:bg-orange-600 hover:text-black">
                    <Link to="/user-profile" className="font-bold">Profile</Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem className="hover:bg-orange-600 hover:rounded-b-lg">
                    <Button onClick={() => logout()} className="font-bold text-orange-500 bg-white hover:bg-orange-600 hover:text-black">Logout</Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    );
};

export default UserNameMenu;