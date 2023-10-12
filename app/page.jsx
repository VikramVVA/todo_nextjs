"use client";
import React, { useState } from "react";
import Tasktable from "./Table/page";
import Header from "./Header/page";

export default function Mainpage() {
    const [task, setTask] = useState([]);
    const [name, setTaskname] = useState("");
    const [error, setError] = useState("");
    const addTask = () => {
        if (!name) {
            setError("Please enter task name");
        } else {
            setError("");
            const ISTOptions = {
                timeZone: "Asia/Kolkata",
                hour12: true, // Use 12-hour format
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            const dateTime = new Date().toLocaleString("en-IN", ISTOptions);
            const timestamp = new Date().getTime().toString(36);
            const randomId = Math.random().toString(36).substring(2, 12);

            let data = {
                id: randomId + timestamp,
                name: name,
                createdDate: dateTime,
                completionDate: "",
            };
            setTask([...task, data]);
            setTaskname("");
        }
    };

    return (
        <>
            <div className="">
                <Header />
            </div>
            <div className="flex flex-col items-center px-24 py-12">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Enter Task Name
                        </label>
                        <div>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder=""
                                value={name}
                                onChange={(e) => setTaskname(e.target.value)}
                            />
                            {error && (
                                <span className="text-red-500">{error}</span>
                            )}
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={addTask}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <Tasktable data={task} setTask={setTask} />
            </div>
        </>
    );
}
