
import { serverSideFunction } from "@/src/utils/server-utils";
export default function ServerRoutePage() {
    const result = serverSideFunction();
    console.log(result);
    return (
        <>
            <h1>Server Route Page {result} time {new Date().toLocaleTimeString()}</h1>
        </>
    )
}