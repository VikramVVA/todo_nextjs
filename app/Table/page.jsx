"Use Client";
import React, { useState } from "react";

export default function Tasktable({ data, setTask }) {
    const [isOpen, setIsOpen] = useState(false);
    const [deleteId, setDeleteId] = useState();
    const completeTask = (e, id) => {
        e.preventDefault();
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
        const updatedData = data.map((task) => {
            if (task.id === id) {
                return { ...task, completionDate: dateTime };
            }
            return task;
        });
        setTask(updatedData);
    };
    const deleteTask = (e, id) => {
        e.preventDefault();
        setDeleteId(id);
        setIsOpen(true);
    };
    const confirmDeleteTask = (e) => {
        e.preventDefault();
        const updatedData = data.filter((task) => {
            return task.id !== deleteId;
        });
        setTask(updatedData);
        setIsOpen(false);
    };

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
                                    {data &&
                                        data.map((val, index) => (
                                            <tr
                                                key={val.id}
                                                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                                            >
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    {index + 1}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">
                                                    {val.completionDate ? (
                                                        <span className="line-through">
                                                            {val.name}
                                                        </span>
                                                    ) : (
                                                        <span>{val.name}</span>
                                                    )}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {val.createdDate}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {val.completionDate}
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-4">
                                                    {val.completionDate ? (
                                                        <button className="pointer-events-none bg-green-300 text-white font-bold py-2 px-4 rounded disabled:opacity-70 mr-2">
                                                            Completed
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className="bg-black hover:bg-green-400 text-white font-bold py-2 px-4 rounded mr-2"
                                                            onClick={(e) =>
                                                                completeTask(
                                                                    e,
                                                                    val.id
                                                                )
                                                            }
                                                        >
                                                            Completed
                                                        </button>
                                                    )}

                                                    <button
                                                        className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
                                                        onClick={(e) =>
                                                            deleteTask(
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
