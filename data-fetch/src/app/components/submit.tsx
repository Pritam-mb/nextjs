"use client";
import {useFormStatus} from "react-dom";
export default function Submit() {
    const {pending} = useFormStatus();
    return (
        <button
            type="submit"
            className="w-full px-4 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-blue-400 cursor-pointer disabled:cursor-not-allowed transition"
            disabled={pending}
        >
            {pending ? "Submitting..." : "Submit"}
        </button>
    );
}