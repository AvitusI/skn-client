import { getSession } from "@/actions";
import AddProduct from "./page";

export default async function ProductLayout() {

    const session = await getSession()

    return (
        <div>
            <AddProduct jwt={session.jwt!}/>
        </div>
    )
}