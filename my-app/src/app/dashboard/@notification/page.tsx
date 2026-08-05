import Link from "next/link";
import { Card } from "../../component/card";

export default function notification() {
    return (
        <Card type={"info"} >
            <h1>notification page</h1>
            <Link href="/dashboard/archived">Archived</Link>
        </Card>
    )
}   