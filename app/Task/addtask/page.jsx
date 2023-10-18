"use client";
import React, { useState } from "react";
import { createTask } from "@/app/api/tasks";
import { toast } from "react-toastify";

export default function Addtask() {
    const [name, setTaskname] = useState("");
    const [description, setTaskDescription] = useState("");

    const [error, setError] = useState("");
    const addTask = async () => {
        if (!name) {
            setError("Please enter task name");
        } else {
            setError("");
            let data = {
                taskName: name,
                description: description,
            };
            const createTaskResponse = await createTask(data);
            if (createTaskResponse) {
                toast.success(createTaskResponse.data.message);
            } else {
                toast.error(createTaskResponse.data.message);
            }
            setTaskname("");
            setTaskDescription("");
        }
    };
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="w-1/2 px-8 py-8 mt-12 border border-gray-200 rounded-lg">
                    <div className="flex justify-center">
                        <h1 className="uppercase text-gray-700 font-bold text-xl mb-8">
                            Add Task
                        </h1>
                    </div>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Enter Task Name
                    </label>
                    <div>
                        <input
                            className="appearance-none block w-full text-gray-700 border shadow-sm border-slate-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-sky-500 focus:ring-1 transition duration-300 ease-in-out transform hover:scale-105"
                            type="text"
                            placeholder=""
                            value={name}
                            onChange={(e) => setTaskname(e.target.value)}
                        />
                        {error && <span className="text-red-500">{error}</span>}
                    </div>

                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Enter Task Description
                    </label>
                    <div>
                        <input
                            className="appearance-none block w-full text-gray-700 border shadow-sm border-slate-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-sky-500 focus:ring-1 transition duration-300 ease-in-out transform hover:scale-105"
                            type="text"
                            placeholder=""
                            value={description}
                            onChange={(e) => setTaskDescription(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end mt-8">
                        <button
                            className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={addTask}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
