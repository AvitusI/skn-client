import { getSession } from "@/actions";
import Products from "./page";

export default async function ProductLayout() {

    const session = await getSession()

    return (
        <div>
            <Products jwt={session.jwt!}/>
        </div>
    )
}