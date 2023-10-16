import axios from "axios";
const UI_URL = "http://localhost:8088/";

export const listTasks = async () => {
    try {
        // var token = localStorage.getItem("token");
        const config = {
            method: "post",
            url: `${UI_URL}tasks/list`,
            // headers: {
            //     "x-gtw-auth-token": token,
            // },
        };
        const { data } = await axios(config);
        return data;
    } catch (error) {
        console.error("Something went wrong!!", error);
    }
};

export const createTask = async (values) => {
    try {
        // var token = localStorage.getItem("token");
        const config = {
            method: "post",
            url: `${UI_URL}tasks/createTask`,
            // headers: {
            //     "x-gtw-auth-token": token,
            // },
            data: {
                taskName: values.taskName,
                description: values.description,
            },
        };
        const response = await axios(config);
        if (response.data) {
            return response;
        }
    } catch (error) {
        console.error("Something went wrong", error);
    }
};

export const completeTask = async (id) => {
    try {
        // var token = localStorage.getItem("token");
        const config = {
            method: "post",
            url: `${UI_URL}tasks/completeTask`,
            // headers: {
            //     "x-gtw-auth-token": token,
            // },
            data: {
                id:id
            },
        };
        const response = await axios(config);
        if (response.data) {
            return response;
        }
    } catch (error) {
        console.error("Something went wrong", error);
    }
};


export const deleteTask = async (id) => {
    try {
        // var token = localStorage.getItem("token");
        const config = {
            method: "post",
            url: `${UI_URL}tasks/deleteTask`,
            // headers: {
            //     "x-gtw-auth-token": token,
            // },
            data: {
                id: id,
            },
        };
        const deleteTaskResponse = await axios(config);
        return deleteTaskResponse.data;
    } catch (error) {
        console.error("Something went wrong", error.response);
        return error.response.data.message;
    }
};
