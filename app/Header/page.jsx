import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <>
            <div className="bg-black text-white flex flex-row justify-between p-8">
                <div></div>
                <div>
                    <ul className="flex flex-row mx-4">
                        <li className="mx-2">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="mx-2">
                            <Link href="/Task/addtask">Add Tasks</Link>
                        </li>
                        <li className="mx-2">
                            <Link href="/Table">Tasks</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="bg-blue-500 px-4 py-2 rounded-lg">
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}
