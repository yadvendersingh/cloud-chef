import {Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger} from "@/components/ui/sheet.tsx";
import {CircleUserRound, Menu} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {useAuth0} from "@auth0/auth0-react";
import {Separator} from "@/components/ui/separator.tsx";
import MobileNavLinks from "@/components/MobileNavLinks.tsx";

const MobileNav = () => {
    const {loginWithRedirect, isAuthenticated, user} = useAuth0();
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white "/>
            </SheetTrigger>
            <SheetContent className="flex space-y-3 bg-white">
                <SheetTitle>
                    {isAuthenticated? (
                        <span className="flex items-center font-bold gap-2 px-3 py-3">
                            <CircleUserRound className="text-orange-500" />
                            {user?.email}
                        </span>
                    ):
                        (<span>Welcome to CloudChef!</span>)
                    }
                </SheetTitle>
                <Separator/>
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated? <MobileNavLinks/>: <Button onClick={()=>loginWithRedirect()} className="flex-1 font-bold bg-orange-500">Log In</Button>}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;