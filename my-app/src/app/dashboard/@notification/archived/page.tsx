import Link from "next/link";
import { Card } from "../../../component/card";

export default function Achivednotification() {
    return (
        <Card type={"info"} >
            <h1>default notification page</h1>
            <Link href="/dashboard">default</Link>
        </Card>
    )
}   