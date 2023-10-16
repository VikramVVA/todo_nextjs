"Use Client";
import React, { useState, useEffect } from "react";
import { listTasks, completeTask, deleteTask } from "@/api/tasks";
import { toast } from "react-toastify";

export default function Tasktable() {
    const [taskList, setTaskList] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [deleteId, setDeleteId] = useState();
    const completeTaskHandler = async (e, id) => {
        e.preventDefault();
        const completeTaskResponse = await completeTask(id);
        if (completeTaskResponse) {
            toast.success(completeTaskResponse.data.message);
            getTasks();
        } else {
            toast.error(completeTaskResponse.data.message);
        }
    };
    const deleteTaskHandler = (e, id) => {
        e.preventDefault();
        setDeleteId(id);
        setIsOpen(true);
    };
    const confirmDeleteTask = async (e) => {
        e.preventDefault();
        const deleteTaskResponse = await deleteTask(deleteId);
        if (deleteTaskResponse) {
            toast.success(deleteTaskResponse.message);
            getTasks();
        } else {
            toast.error(deleteTaskResponse.message);
        }
        setIsOpen(false);
    };

    const getTasks = async () => {
        const taskslist = await listTasks();
        setTaskList(taskslist.data);
    };
    useEffect(() => {
        getTasks();
    }, []);
    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">
                                            #
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Task Name
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Created Date
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Completion date
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {taskList &&
                                        taskList.map((val, index) => (
                                            <tr
                                                key={val.id}
                                                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                                            >
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    {index + 1}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    {val.taskCompleteDate ? (
                                                        <span className="line-through">
                                                            {val.taskName}
                                                        </span>
                                                    ) : (
                                                        <span>
                                                            {val.taskName}
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {val.taskCreateDate}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {val.taskCompleteDate}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {val.taskCompleteDate ? (
                                                        <button className="pointer-events-none bg-green-300 text-white font-bold py-2 px-4 rounded disabled:opacity-70 mr-2">
                                                            Completed
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="bg-black hover:bg-green-400 text-white font-bold py-2 px-4 rounded mr-2"
                                                            onClick={(e) =>
                                                                completeTaskHandler(
                                                                    e,
                                                                    val.id
                                                                )
                                                            }
                                                        >
                                                            Complete
                                                        </button>
                                                    )}

                                                    <button
                                                        className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
                                                        onClick={(e) =>
                                                            deleteTaskHandler(
                                                                e,
                                                                val.id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                    {isOpen === true ? (
                                                        <div className="fixed inset-0 flex items-center justify-center z-50 p-8">
                                                            <div className="modal-container">
                                                                <div className="bg-white rounded-lg shadow-xl p-4">
                                                                    <h2 className="text-xl font-semibold mb-4">
                                                                        Delete
                                                                        Task
                                                                    </h2>
                                                                    <p>
                                                                        Are You
                                                                        sure you
                                                                        want to
                                                                        delete
                                                                        this
                                                                        task ?
                                                                    </p>
                                                                    <div className="flex justify-end mx-2">
                                                                        <button
                                                                            onClick={() =>
                                                                                setIsOpen(
                                                                                    false
                                                                                )
                                                                            }
                                                                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
                                                                        >
                                                                            Close
                                                                        </button>
                                                                        <button
                                                                            onClick={(
                                                                                e
                                                                            ) =>
                                                                                confirmDeleteTask(
                                                                                    e,
                                                                                    val.id
                                                                                )
                                                                            }
                                                                            className="bg-black hover:bg-white-200 text-white font-bold py-2 px-4 rounded mt-4"
                                                                        >
                                                                            Confirm
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        ""
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
