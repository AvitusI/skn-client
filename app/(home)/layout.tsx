import { redirect } from "next/navigation"

import { getSession } from "@/actions"
import BottomNav from "../_components/BottomNav";

export default async function HomeLayout({ children }: { children: React.ReactNode }) {

  const session = await getSession();

    if (!session.jwt) {
        return redirect("/auth")
    }

  return (
    <div>
      {children}
      <BottomNav />
    </div>
  )
}