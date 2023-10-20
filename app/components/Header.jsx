import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className="bg-black text-white flex flex-row justify-between p-4 sticky top-0 z-10">
                <div className="p-2">
                    <Image
                        src="/favicon.ico"
                        width={60}
                        height={60}
                        alt="Picture of the author"
                    />
                </div>
                <div className="p-4">
                    <ul className="flex flex-row mx-4">
                        <li className="mx-2">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="mx-2">
                            <Link href="/Task/addtask">Add Tasks</Link>
                        </li>
                        <li className="mx-2">
                            <Link href="/Task/tasktable">Tasks</Link>
                        </li>
                    </ul>
                </div>
                <div className="p-4">
                    <button className="bg-blue-500 px-4 py-2 rounded-lg">
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}
