import { logout } from "@/actions";
import { LogOut } from "lucide-react";

export const LogoutForm = () => {
    return (
        <form action={logout} className="w-full text-red-500">
            <button
                className="w-full"
                type="submit"
            >
                <div className="w-full flex justify-start gap-4 my-4 items-center">
                    <LogOut className="w-6 h-6 shrink-0" />
                    <span className="font-medium">Logout</span>
                </div>
            </button>
        </form>
    )
}