import {Button} from "@/components/ui/button.tsx";
import {useAuth0} from "@auth0/auth0-react";
import UserNameMenu from "@/components/UserNameMenu.tsx";

const MainNav = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();

    return (
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? (<UserNameMenu/>) : (<Button
                variant="ghost"
                className="font-bold text-white hover:text-black"
                onClick={async () => loginWithRedirect()}
            >
                Log In
            </Button>)}
        </span>

    )
}
export default MainNav;