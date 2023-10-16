"Use Client";
import React, { useState } from "react";
import { createTask } from "@/api/tasks";
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

                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Enter Task Description
                        </label>
                        <div>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                type="text"
                                placeholder=""
                                value={description}
                                onChange={(e) =>
                                    setTaskDescription(e.target.value)
                                }
                            />
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
        </>
    );
}
