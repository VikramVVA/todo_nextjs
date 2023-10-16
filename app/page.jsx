"use client";
import React, { useState } from "react";
import Tasktable from "./Table/page";
import Header from "./Header/page";
import Addtask from "./Task/addtask/page";
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import { ToastContainer } from 'react-toastify';

export default function Mainpage() {

    return (
        <>
            <div className="">
                <Header />
            </div>
            <div>
                <Addtask/>
            </div>
            {/* <div>
                <Tasktable />
            </div> */}
            <ToastContainer position="top-right" autoClose={4000} />
        </>
    );
}
